import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ForgetPasswordAPI, ForgetVerificationAPI } from "../api/Api";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";

function Verification() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const { showToast } = useToaster();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // allow only one digit
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus(); // moves cursor to next input field
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const userId = queryParams.get("userId");
  const mobile = queryParams.get("phone");

  const handleResendOtp = async (e) => {
    e.preventDefault();
    const fullMobile = `+91${mobile.trim()}`;
    try {
      const res = await ForgetPasswordAPI(fullMobile);
      showToast(res.data);
      setResendTimer(30);
      setCanResend(false);
    } catch (error) {
      console.error("Resend failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      showToast({ error: 1, message: "Please enter a valid 6-digit OTP." });
      return;
    }

    try {
      setLoading(true);
      const res = await ForgetVerificationAPI(userId, finalOtp);
      setData(res.data);
      showToast(res.data);
      if (res.data.error === 0) {
        const queryParams = new URLSearchParams({
          userId: userId,
        }).toString();
        navigate(`/reset-password?${queryParams}`);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[425px] py-12 mx-3 px-4">
          <div className="flex justify-start items-center w-full font-custom mb-6">
            <RoundedButton
              onClick={() => navigate(-1)}
              className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
              icon={
                <IoMdArrowRoundBack className="ml-2 w-9 h-5 md:w-12 md:h-7" />
              }
            />
            <h4 className="w-[74%] text-center text-4xl font-bold text-darkbrown">
              Verification
            </h4>
          </div>
          <div className="text-center font-ptag text-darkbrown text-lg leading-5 font-normal mb-4">
            <p>
              Please enter your 6 digit OTP number here to verify your account.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-6"
          >
            <div className="w-full flex justify-between items-center">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="size-12 text-center text-lg bg-white border rounded-xl focus:outline-none font-custom"
                />
              ))}
            </div>
            <div className="text-lg text-black">
              {canResend ? (
                <button
                  onClick={handleResendOtp}
                  className="text-orange text-lg font-custom font-medium underline opacity-90 cursor-pointer"
                >
                  Resend OTP
                </button>
              ) : (
                <span>Resend OTP in {resendTimer}s</span>
              )}
            </div>
            <RoundedButton
              onClick={handleSubmit}
              className="w-full h-[3rem] text-md md:text-xl p-2"
            >
              Verify
            </RoundedButton>
          </div>
          <div className="flex justify-center items-center gap-1 mt-5 font-custom">
            <p className="font-custom font-medium text-md text-darkbrown">
              Remember password?
            </p>
            <Link
              to="/login"
              className="text-orange text-md font-custom font-medium underline opacity-90"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Verification;
