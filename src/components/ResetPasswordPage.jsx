import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordAPI } from "../api/Api";
import Loader from "./Loader";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";
import FormInput from "./FormInput";

function LoginPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const { showToast } = useToaster();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const userId = queryParams.get("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const res = await resetPasswordAPI(newPassword, userId);
      setData(res.data);
      showToast(res.data);
      if (res.data.error === 0) {
        navigate("/login");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
      setError("")
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[425px] py-12">
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
                Change Password
              </h4>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="w-full flex flex-col gap-5">
                <FormInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Your password"
                  autoComplete="off"
                  toggleVisibility={true}
                  error={error && true}
                />
                <FormInput
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Your confirm password"
                  autoComplete="off"
                  toggleVisibility={true}
                  error={error}
                />
              </div>
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

export default LoginPage;
