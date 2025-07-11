import React, { useState, useEffect, useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { LoginAPI } from "../api/Api";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";
import FormInput from "./FormInput";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation()
  const { showToast } = useToaster();

  const [checked, setChecked] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState("");

  useEffect(() => {
    const rememberedMobile = localStorage.getItem("rememberedMobile");
    if (rememberedMobile) {
      setMobile(rememberedMobile);
      setChecked(true);
    }
    const device_id = localStorage.getItem("device_id");
    if (device_id) {
      setDeviceId(device_id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const fullMobile = `+91${mobile.trim()}`;
    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (checked) {
        localStorage.setItem("rememberedMobile", mobile);
      } else {
        localStorage.removeItem("rememberedMobile");
      }
      try {
        setLoading(true);
        const res = await LoginAPI(fullMobile, password, deviceId);
        setData(res.data);
        const { token, user_info } = res.data;
        if (res.data.error === 0) {
          localStorage.setItem("userToken", token);
          localStorage.setItem("userData", JSON.stringify(user_info));
          const redirectTo = location.state?.from || "/";
          navigate(redirectTo, { replace: true });
        } else if (res.data.error === 3) {
          showToast(res.data);
          navigate("/otp");
        } else {
          showToast(res.data);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        setErrors("");
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
                Login
              </h4>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="w-full flex flex-col gap-5">
                <FormInput
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  icon={FiPhone}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/[^\d]/g, ""))
                  }
                  placeholder="Your phone number"
                  error={errors.mobile}
                  maxLength={10}
                  minLength={1}
                />
                <FormInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  error={errors.password}
                  autoComplete="off"
                  toggleVisibility={true}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    value={checked}
                    id="remember"
                    name="remember"
                    className="sr-only"
                  />
                  <div
                    onClick={() => setChecked(!checked)}
                    className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center"
                  >
                    {checked && (
                      <FaCheckCircle className="w-5 h-5 rounded-full" />
                    )}
                  </div>
                  <label
                    htmlFor="remember"
                    className="font-custom font-medium text-md text-darkbrown cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-orange text-md font-custom font-medium underline opacity-90">
                  <Link to="/forget-password">Forget Password?</Link>
                </div>
              </div>
              {data.error === 1 && (
                <div className="text-red-500 font-ptag text-lg text-center leading-5">
                  <p>Invalid Phone number or Password</p>
                </div>
              )}
              <RoundedButton
                type="submit"
                className="w-full h-[3rem] text-md md:text-xl p-2"
              >
                Login
              </RoundedButton>
            </form>
            <div className="flex justify-center items-center gap-1 mt-5 font-custom">
              <p className="font-custom font-medium text-md text-darkbrown">
                Don't have account?
              </p>
              <Link
                to="/join"
                className="text-orange text-md font-custom font-medium underline opacity-90"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
