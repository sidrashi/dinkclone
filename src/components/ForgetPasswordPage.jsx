import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { ForgetPasswordAPI } from "../api/Api";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";
import FormInput from "./FormInput";

function ForgetPasswordPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const { showToast } = useToaster();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullMobile = `+91${mobile.trim()}`;
    if (!/^\d{10}$/.test(mobile)) {
      setValidationError("Mobile number must be exactly 10 digits");
      return;
    }
    setValidationError("");
    try {
      setLoading(true);
      const res = await ForgetPasswordAPI(fullMobile);
      setData(res.data);
      showToast(res.data);
      if (res.data.error === 0) {
        const queryParams = new URLSearchParams({
          phone: mobile,
          userId: res.data.user,
          forgot: true,
        }).toString();
        navigate(`/verification?${queryParams}`);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
      setValidationError("")
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[425px] py-12 mx-auto px-5">
          <div className="flex justify-start items-center w-full font-custom mb-6">
            <RoundedButton
              onClick={() => navigate(-1)}
              className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
              icon={
                <IoMdArrowRoundBack className="ml-2 w-9 h-5 md:w-12 md:h-7" />
              }
            />
            <h4 className="w-[74%] text-center text-4xl font-bold text-darkbrown">
              Forget password
            </h4>
          </div>
          <div className="text-center font-ptag text-darkbrown text-lg leading-5 font-normal mb-4">
            <p>Enter phone number to recover your password</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-6"
          >
            <FormInput
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              icon={FiPhone}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your phone number"
              error={validationError}
              autoComplete="off"
              maxLength={10}
              minLength={1}
            />
            {data.error === 1 && (
              <div className="text-red-500 font-ptag text-lg text-center leading-5">
                <p>{data.message}</p>
              </div>
            )}
            <RoundedButton
              type="submit"
              className="w-full h-[3rem] text-md md:text-xl p-2"
            >
              Recover
            </RoundedButton>
          </form>
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

export default ForgetPasswordPage;
