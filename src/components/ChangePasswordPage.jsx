import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { changePasswordAPI } from "../api/Api";
import { useToaster } from "../context/ToasterContext";
import Loader from "./Loader";
import RoundedButton from "./RoundedButton";
import FormInput from "./FormInput";

function ChangePasswordPage() {
  const navigate = useNavigate();
  const { showToast } = useToaster();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newErrors = {};
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (!oldPassword) newErrors.oldPassword = "Old password is required";
    if (!newPassword) newErrors.newPassword = "New password is required";
    else if (newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm your new password";
    else if (confirmPassword !== newPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const token = localStorage.getItem("userToken");
      if (!token) {
        console.error("Token not found");
        return;
      }
      try {
        setLoading(true);
        const res = await changePasswordAPI(formData, token);
        setData(res.data);
        showToast(res.data);
        if (res.data.error === 0) {
          navigate("/");
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="py-12 w-full">
          <div className="mx-auto px-8 max-w-[425px]">
            <div className="flex justify-start items-center w-full font-custom mb-6">
              <RoundedButton
                onClick={() => navigate(-1)}
                className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
                icon={
                  <IoMdArrowRoundBack className="ml-2 w-9 h-5 md:w-12 md:h-7" />
                }
              />
              <h4 className="w-[75%] text-center text-4xl font-bold text-darkbrown">
                Change password
              </h4>
            </div>
            <div className="text-center font-ptag text-darkbrown text-md leading-5 font-normal mb-2">
              <p>Enter your new password here.</p>
            </div>
            <form
              onSubmit={handlePasswordChange}
              className="flex flex-col gap-6"
            >
              <div className="w-full flex flex-col gap-5">
                <FormInput
                  id="oldpassword"
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  placeholder="Your old password"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  error={errors.oldPassword}
                  toggleVisibility={true}
                />
                <FormInput
                  id="newpassword"
                  name="newPassword"
                  label="New Password"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Your new password"
                  error={errors.newPassword}
                  toggleVisibility={true}
                />
                <FormInput
                  id="confirmpassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Your new confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  toggleVisibility={true}
                />
              </div>
              {data.error === 1 && (
                <div className="text-red-500 font-ptag text-lg text-center leading-5">
                  <p>{data.message}</p>
                </div>
              )}
              <RoundedButton
                type="submit"
                className="w-full h-[3rem] text-md md:text-xl p-2 flex-row-reverse !justify-between"
                icon={<IoMdArrowRoundForward className="w-[25px] h-[25px]" />}
              >
                Change Password
              </RoundedButton>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ChangePasswordPage;
