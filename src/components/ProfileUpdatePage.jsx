import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineEditOff } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdArrowRoundForward } from "react-icons/io";
import { UserContext } from "../context/UserContext";
import { getCustomerInfoAPI, profileAPI } from "../api/Api";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";
import ActionLinkButton from "./ActionLinkButton";
import FormInput from "./FormInput";

function ProfileUpdatePage() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { showToast } = useToaster();

  const [formData, setFormData] = useState({
    fullName: userInfo?.full_name,
    email: userInfo?.email,
    phone: userInfo?.phone_no,
    gender: userInfo?.gender,
    dob: userInfo?.dob,
  });
  const [validationError, setValidationError] = useState({});
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Select your gender.";
    return newErrors;
  };

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    const fetchCustomerInfo = async () => {
      try {
        setLoading(true);
        const res = await getCustomerInfoAPI(token);
        setUserInfo(res.data);
      } catch (error) {
        console.error("Error fetching customer info:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };
    fetchCustomerInfo();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setValidationError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const token = localStorage.getItem("userToken");
      if (!token) {
        console.error("Token not found");
        return;
      }
      try {
        setLoading(true);
        const payload = {
          fullName: formData.fullName,
          email: formData.email,
          gender: formData.gender,
          dob: formData.dob,
        };
        const res = await profileAPI(payload, token);
        setUserInfo(payload);
        showToast(res.data);
        setEnabled(false);
      } catch (error) {
        console.error("Error updating customer info:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[425px] mx-auto py-12">
          <div className="mx-3 px-4">
            <div className="flex justify-start items-center w-full font-custom mb-6">
              <RoundedButton
                onClick={() => navigate(-1)}
                className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
                icon={
                  <IoMdArrowRoundBack className="ml-2 w-9 h-5 md:w-12 md:h-7" />
                }
              />
              <h4 className="w-[75%] text-center text-4xl font-bold text-darkbrown">
                Profile
              </h4>
              <RoundedButton
                onClick={handleToggle}
                className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
                icon={
                  enabled ? (
                    <MdOutlineEditOff className="w-9 h-5 md:w-12 md:h-7 !ml-1" />
                  ) : (
                    <CiEdit className="w-9 h-5 md:w-12 md:h-7 !ml-1" />
                  )
                }
              />
            </div>
            <form className="flex flex-col gap-6">
              <div className="w-full flex flex-col gap-7">
                <div className="flex flex-col justify-start items-start gap-4">
                  <small className="font-custom text-xs font-normal">
                    Basic Details
                  </small>
                  <FormInput
                    id="fullName"
                    name="fullName"
                    label="Full name"
                    type="text"
                    icon={LuUserRound}
                    placeholder="Your full name"
                    autoComplete="off"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={validationError.fullName}
                    disabled={!enabled}
                    inputClassName={enabled ? "opacity-60" : "!opacity-40"}
                  />
                  <FormInput
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    icon={MdOutlineEmail}
                    placeholder="Your email address"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                    error={validationError.email}
                    disabled={!enabled}
                    inputClassName={enabled ? "opacity-60" : "!opacity-40"}
                  />
                  <div className="w-full ">
                    <p className="text-red-500 !text-center">
                      Phone number cannot be changed
                    </p>
                    <FormInput
                      id="phone"
                      name="phone"
                      label="Phone"
                      type="tel"
                      icon={FiPhone}
                      placeholder="Your phone number"
                      autoComplete="off"
                      disabled={true}
                      value={formData.phone}
                      onChange={handleChange}
                      inputClassName="!opacity-40"
                      error={validationError.phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <small className="font-custom text-xs font-normal">
                    birthdate
                  </small>
                  <FormInput
                    id="dob"
                    name="dob"
                    label="D . O . B ."
                    type="date"
                    icon={SlCalender}
                    value={formData.dob}
                    onChange={handleChange}
                    disabled={!enabled}
                    inputClassName={
                      enabled
                        ? "opacity-60 no-calendar"
                        : "!opacity-40 no-calendar"
                    }
                    error={validationError.dob}
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <small className="font-custom text-xs font-normal">
                    Gender
                  </small>
                  <div className="w-full grid grid-cols-3 gap-5">
                    <button
                      type="button"
                      disabled={!enabled}
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "male" },
                        })
                      }
                      className={`px-4 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "male"
                          ? "bg-white text-black border-black"
                          : "bg-background text-gray-700 border-gray-300"
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      disabled={!enabled}
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "female" },
                        })
                      }
                      className={`px-3 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "female"
                          ? "bg-white text-black border-black"
                          : "bg-background text-gray-700 border-gray-300"
                      }`}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      disabled={!enabled}
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "other" },
                        })
                      }
                      className={`px-4 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "other"
                          ? "bg-white text-black border-black"
                          : "bg-background text-gray-700 border-gray-300"
                      }`}
                    >
                      Other
                    </button>
                  </div>
                  {validationError.gender && (
                    <p className="text-red-500 text-sm ">
                      {validationError.gender}
                    </p>
                  )}
                </div>
              </div>
              {enabled ? (
                <RoundedButton
                  onClick={handleProfileUpdate}
                  className="w-full md:w-[20rem] h-[3rem] text-lg md:text-xl p-2"
                >
                  Save Changes
                </RoundedButton>
              ) : (
                <ActionLinkButton
                  to="/profile/profile-update/change-password"
                  label="Change password"
                  animate={false}
                  className="w-full md:w-[20rem] h-[3rem] flex justify-between items-center px-4 text-lg md:text-xl"
                />
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileUpdatePage;
