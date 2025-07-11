import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import defaultImage from "../assets/profile.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { LuUserRoundPen } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbCalendarSearch } from "react-icons/tb";
import { LuMessageSquareText } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { getCustomerInfoAPI, profileImageAPI } from "../api/Api";
import { UserContext } from "../context/UserContext";
import Loader from "./Loader";
import { useToaster } from "../context/ToasterContext";
import RoundedButton from "./RoundedButton";

function ProfilePage() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [image, setImage] = useState(defaultImage);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToaster();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        showToast({
          error: 1,
          message: "Only JPG, JPEG, PNG or WEBP formats are allowed",
          customTitle: "Invalid Format",
        });
        return;
      }

      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file); // this returns base64 with the prefix
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
      try {
        const base64WithPrefix = await convertToBase64(file);
        const base64 = base64WithPrefix.split(",")[1];
        setImage(base64WithPrefix);
        const token = localStorage.getItem("userToken");
        if (!token) {
          console.error("Token not found");
          return;
        }
        setLoading(true);
        const res = await profileImageAPI(base64, token);
        if (res.data?.image) {
          setImage(res.data.image);
          setUserInfo({ ...userInfo, image: res.data.image });
          showToast({ message: "Image updated successfully" });
        }
      } catch (error) {
        console.error("Upload error:", error);
        showToast({ error: 1, message: "Image upload failed" });
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (userInfo?.image) {
      setImage(userInfo.image); // use new user image
    } else {
      setImage(defaultImage);
    }
  }, [userInfo]);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setUserInfo(null);
      setImage(defaultImage);
      localStorage.removeItem("userData");
      localStorage.removeItem("userToken");
      window.scrollTo(0, 0);
      navigate("/"); // Navigate after cleanup
    }, 1000);
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

  const handleClick = () => {
    showToast({
      error: 0,
      message: "This feature will be available soon",
      customTitle: "Available Soon",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full py-12">
          <div className="mx-auto px-4 w-full max-w-[425px]">
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
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center items-center mt-8 relative">
                <div className="bg-lightblue border-b-2 border-[#181818] h-28 -mt-24 absolute w-full"></div>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer inline-block"
                >
                  <div className="flex justify-center items-center bg-[#181818] border-3 border-[#181818] rounded-full h-36 w-36 relative overflow-hidden">
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <div className="flex flex-col justify-center items-center font-custom">
                <h4 className="font-bold text-3xl">
                  {userInfo?.full_name || "Your Name"}
                </h4>
                <p className="font-light text-sm">
                  {userInfo?.phone_no || "Your No."}
                </p>
              </div>
              <div className="flex flex-col justify-start items-center px-6 py-4 gap-4">
                <Link
                  to="/profile/profile-update"
                  className="flex justify-between items-center bg-white rounded-4xl border border-[#321d1d80] w-full px-4 py-5"
                >
                  <div className="flex justify-start items-center gap-4">
                    <LuUserRoundPen size={20} />
                    <p className="font-custom text-md font-medium">
                      Edit your profile
                    </p>
                  </div>
                  <IoArrowForwardOutline size={20} />
                </Link>
                <Link
                  to="/profile/booking-history"
                  className="flex justify-between items-center bg-white rounded-4xl border border-[#321d1d80] w-full px-4 py-5"
                >
                  <div className="flex justify-start items-center gap-4">
                    <FaRegCircleQuestion size={20} />
                    <p className="font-custom text-md font-medium">
                      account history
                    </p>
                  </div>
                  <IoArrowForwardOutline size={20} />
                </Link>
                <Link
                  onClick={handleClick}
                  className="flex justify-between items-center bg-white rounded-4xl border border-[#321d1d80] w-full px-4 py-5"
                >
                  <div className="flex justify-start items-center gap-4">
                    <TbCalendarSearch size={20} />
                    <p className="font-custom text-md leading-4 font-medium">
                      Membership details
                    </p>
                  </div>
                  <IoArrowForwardOutline size={20} />
                </Link>
                <Link
                  onClick={handleClick}
                  className="flex justify-between items-center bg-white rounded-4xl border border-[#321d1d80] w-full px-4 py-5"
                >
                  <div className="flex justify-start items-center gap-4">
                    <LuMessageSquareText size={20} />
                    <p className="font-custom text-md font-medium">
                      Share Feedback
                    </p>
                  </div>
                  <IoArrowForwardOutline size={20} />
                </Link>
                <Link
                  className="flex justify-between items-center bg-white rounded-4xl border border-[#321d1d80] w-full px-4 py-5"
                  onClick={handleLogout}
                >
                  <div className="flex justify-start items-center gap-4">
                    <MdOutlineLogout size={20} className="text-red" />
                    <p className="font-custom text-md font-medium text-red">
                      Log out
                    </p>
                  </div>
                  <IoArrowForwardOutline size={20} className="text-red" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
