import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaCheckCircle } from "react-icons/fa";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { SignUpAPI } from "../api/Api";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";
import FormInput from "./FormInput";

function SignUp() {
  const navigate = useNavigate();
  const { showToast } = useToaster();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    agree: false,
  });
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "phone"
          ? value.replace(/[^\d]/g, "") // only digits for mobile
          : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a 10-digit phone number.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Select your gender.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setValidationError(validationErrors);
    const payload = {
      ...formData,
      phone: `+91${formData.phone.trim()}`, // Add +91 before sending
    };
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const res = await SignUpAPI(payload);
        setData(res.data);
        showToast(res.data);
        if (res.data.error === 0) {
          const queryParams = new URLSearchParams({
            phone: formData.phone,
            userId: res.data.user,
          }).toString();
          navigate(`/otp?${queryParams}`);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        setValidationError({})
        window.scrollTo(0, 0);
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
                SignUp
              </h4>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    error={validationError.fullName}
                    autoComplete="off"
                  />
                  <FormInput
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    icon={MdOutlineEmail}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    error={validationError.email}
                    autoComplete="off"
                  />
                  <FormInput
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    icon={FiPhone}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    error={validationError.phone}
                    autoComplete="off"
                    maxLength={10}
                    minLength={1}
                  />
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
                    error={validationError.dob}
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <small className="font-custom text-xs font-normal">
                    Gender
                  </small>
                  <div className="w-full flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "Male" },
                        })
                      }
                      className={`px-4 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "Male"
                          ? "bg-white text-black border-black"
                          : "bg-background text-gray-700 border-gray-300"
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "Female" },
                        })
                      }
                      className={`px-4 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "Female"
                          ? "bg-white text-black border-black"
                          : "bg-background text-gray-700 border-gray-300"
                      }`}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleChange({
                          target: { name: "gender", value: "Other" },
                        })
                      }
                      className={`px-4 py-2 rounded-xl border cursor-pointer ${
                        formData.gender === "Other"
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
                <FormInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  error={validationError.password}
                  autoComplete="off"
                  toggleVisibility={true}
                />
                <div className="flex flex-col">
                  <div className="flex justify-start items-start gap-2">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange}
                      id="agree"
                      name="agree"
                      className="sr-only"
                    />
                    <label htmlFor="agree" className="cursor-pointer">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.agree
                            ? "border-orange bg-orange text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.agree && (
                          <FaCheckCircle className="text-xs" />
                        )}
                      </div>
                    </label>
                    <label
                      htmlFor="agree"
                      className="font-custom font-medium text-md text-darkbrown"
                    >
                      I agree to the{" "}
                      <Link
                        to="/terms-conditions"
                        className="text-orange text-md font-custom font-medium underline opacity-90"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        Terms and conditions.
                      </Link>
                    </label>
                  </div>
                  {validationError.agree && (
                    <p className="text-red-500 text-sm ">
                      {validationError.agree}
                    </p>
                  )}
                </div>
              </div>
              {data.error === 1 && (
                <div className="text-red-500 font-ptag text-lg text-center leading-5">
                  <p>{data.message}</p>
                </div>
              )}
              <RoundedButton
                type="submit"
                className="w-full h-[3rem] text-md md:text-xl p-2"
              >
                Signup
              </RoundedButton>
            </form>
            <div className="flex justify-center items-center gap-1 mt-5 font-custom">
              <p className="font-custom font-medium text-md text-darkbrown">
                Already have an account?
              </p>
              <Link
                to="/login"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-orange text-md font-custom font-medium underline opacity-90"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
