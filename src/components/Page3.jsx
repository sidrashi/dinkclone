import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addTimesAPI,
  checkPromoAPI,
  confirmCashPaymentAPI,
  getCourts,
  resetCurrentPaymentAPI,
} from "../api/Api";
import Loader from "./Loader";
import { FaCalendarAlt } from "react-icons/fa";
import {
  court1,
  court2,
  court3,
  court4,
  court5,
  court6,
  court7,
  court8,
} from "../assets/index.js";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { LuFlagTriangleRight } from "react-icons/lu";
import { FiUsers, FiUser } from "react-icons/fi";
import { useToaster } from "../context/ToasterContext.jsx";
import money from "../assets/money.png";
import { usePrice } from "../context/PriceContext.jsx";
import RoundedButton from "./RoundedButton.jsx";

function Page3() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToaster();
  const { bookingDetails } = usePrice();

  const [courts, setCourts] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedCourt, setSelectedCourt] = useState();
  const [userName, setUserName] = useState();
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [orderId, setOrderId] = useState();
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [bookingDone, setBookingDone] = useState(false);
  const [orderDetails, setOrderDetails] = useState();

  const date = queryParams.get("date");
  const time = queryParams.get("time");
  const venueId = queryParams.get("venue");
  const sportId = queryParams.get("sport");
  const courtId = selectedCourt;

  const courtImages = [
    court1,
    court2,
    court3,
    court4,
    court5,
    court6,
    court7,
    court8,
  ];

  useEffect(() => {
    if (showBookingDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showBookingDetails]);

  useEffect(() => {
    if (date && time && venueId) {
      const getCourtsData = async () => {
        try {
          setLoading(true);
          const res = await getCourts(date, time, venueId);
          setCourts(res.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
          window.scrollTo(0, 0);
        }
      };
      getCourtsData();
    }
  }, [date, time, venueId]);

  const handleCourtSelectionClick = () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      showToast({
        error: 1,
        message:
          "Just a quick login and your're all set to complete your booking",
        customTitle: "Almost there!",
      });
      const fullPath = location.pathname + location.search;
      navigate("/login", { state: { from: fullPath } });
      window.scrollTo(0, 0);
      return null;
    } else {
      setShowBookingDetails(true);
      setUserName(JSON.parse(localStorage.getItem("userData")).full_name);
    }
  };

  const handleAddTime = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      const body = {
        sportId,
        venueId,
        courtId,
        date,
        time,
      };
      const res = await addTimesAPI(body, token);
      setOrderId(res.data.orderid);
    } catch (error) {
      console.error("Error add time info:", error);
    }
  };

  const handleConfirmClick = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      const res = await confirmCashPaymentAPI(orderId, promoCode, token);
      setOrderDetails(res.data);
      if (res.data.error === 0) {
        setBookingDone(true);
      }
    } catch (error) {
      console.error("Error confirm cash payment:", error);
    }
  };

  const handleApplyPromo = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    const amount = bookingDetails.price;
    try {
      const res = await checkPromoAPI(orderId, promoCode, amount, token);
      setPromoMessage(res.data.message);
    } catch (error) {
      console.error("Error applying promocode:", error);
    }
  };

  const handleCancelCurrentPayment = async () => {
    setPromoCode("");
    setPromoMessage("");
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      await resetCurrentPaymentAPI(token);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setShowBookingDetails(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="py-15 w-full overflow-x-hidden">
          <div className="flex justify-between items-baseline-last mb-15 text-darkbrown font-custom m-2 p-2 md:px-20">
            <div className="flex flex-col justify-between items-start gap-5 ">
              <p className="flex justify-start items-center gap-2 text-md lg:text-xl xl:text-2xl font-medium">
                <FaCalendarAlt className="size-6" />
                Court Selection
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Any Court you <br /> prefer?
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                03<span className="font-light">/03</span>
              </h3>
            </div>
          </div>
          <div className="mx-2 md:mx-20 p-8 border-1 border-darkbrown/35 rounded-2xl flex flex-col justify-center items-center gap-5 bg-white">
            <div className="font-medium text-md md:text-lg lg:text-xl font-custom text-darkbrown">
              <p>Outdoor courts</p>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-3 md:gap-9 p-1">
              {courts.courts.map((court, index) => {
                return (
                  <div key={court.court_id}>
                    <div
                      onClick={() => setSelectedCourt(court.court_id)}
                      className={`w-full h-full relative ${
                        court.available === "yes"
                          ? "pointer-events-auto cursor-pointer"
                          : "pointer-events-none cursor-not-allowed"
                      }`}
                    >
                      <img
                        src={courtImages[index]}
                        alt={court.court_name}
                        className={`${court.available === "no" && "grayscale"}`}
                      />
                      {selectedCourt === court.court_id && (
                        <div className="absolute inset-0 -mx-1 bg-green-300 opacity-60"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center pb-10 bg-gradient-to-b from-white/0 to-white w-full h-28 fixed bottom-0 z-50">
            <div
              onClick={() => {
                handleCourtSelectionClick();
              }}
              className={`w-[17rem] md:w-[20rem] lg:w-[25rem] h-[3rem] lg:h-[3.5rem] bg-white border border-x-2 border-t-2 border-b-4 border-darkbrown rounded-4xl text-darkbrown text-md md:text-xl font-bold py-2 lg:py-3 px-4 font-custom ${
                selectedCourt
                  ? "pointer-events-auto"
                  : "cursor-not-allowed pointer-events-none"
              }`}
            >
              <Link
                to={`/court-selection${location.search}`}
                onClick={() => {
                  handleAddTime();
                }}
                className="flex justify-between items-center gap-20 md:gap-5 font-custom"
              >
                Continue <IoMdArrowRoundForward className="w-[25px] h-[25px]" />
              </Link>
            </div>
          </div>
          {showBookingDetails && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
              {bookingDone ? (
                <div className="flex flex-col justify-center items-center py-10 px-6 lg:px-20 md:px-10 w-[95vw] h-[95vh] md:w-[90vw] md:h-[70vh] lg:w-[85vw] lg:h-[60vh] overflow-y-scroll bg-background shadow-2xl rounded-2xl text-darkbrown font-custom">
                  <h1 className="text-3xl font-bold mb-2">Thank you!</h1>
                  <p className="font-ptag text-sm text-center">
                    Your booking has been confirmed with order id:{" "}
                    {orderDetails.orderid} & transaction id:{" "}
                    {orderDetails.transaction_id}{" "}
                  </p>
                  <a
                    href={orderDetails.invoice_url}
                    className="text-lg font-bold underline mt-2"
                    target="_blank"
                  >
                    View invoice
                  </a>
                  <Link
                    to="/"
                    className="border border-x-2 border-t-2 border-b-4 flex justify-center items-center bg-white border-darkbrown rounded-4xl text-darkbrown text-xl font-bold p-2 mt-5"
                  >
                    {" "}
                    Go to HomePage{" "}
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 place-items-center py-10 px-6 lg:px-20 md:px-10 w-[95vw] h-[95vh] md:w-[90vw] md:h-[70vh] lg:w-[85vw] lg:h-[60vh] overflow-y-scroll bg-background shadow-2xl rounded-2xl text-darkbrown font-custom">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center gap-2">
                      <RoundedButton
                        onClick={() => handleCancelCurrentPayment()}
                        className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2"
                        icon={
                          <IoMdArrowRoundBack className="ml-2 w-9 h-5 md:w-12 md:h-7" />
                        }
                      />
                      <h5 className="font-custom text-lg font-bold leading-5 text-darkbrown w-[50%] md:w-full">
                        confirm your details
                      </h5>
                    </div>
                    <div className="flex flex-col items-start justify-center mr-5 leading-4">
                      <p className="font-ptag text-md font-normal">
                        Total <br /> amount
                      </p>
                      <h5 className="font-custom font-bold text-darkbrown">
                        ₹{bookingDetails.price}
                      </h5>
                    </div>
                  </div>
                  <div className="mt-12 w-full">
                    <div className="border-2 border-darkbrown rounded-4xl flex flex-col justify-center items-center">
                      <div className="relative bottom-6 border border-x-2 border-t-2 border-b-4 flex justify-center items-center bg-white border-darkbrown rounded-4xl text-darkbrown text-md font-bold px-10 py-1 font-custom">
                        Booking Details
                      </div>
                      <div className="p-6 pt-1 flex flex-col w-full font-custom text-darkbrown">
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] pb-3">
                          <div className="flex justify-start items-center gap-3 font-medium">
                            <IoLocationOutline />
                            <span>Location</span>
                          </div>
                          <div className="font-custom font-bold">
                            <h6>{bookingDetails.location}</h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] py-3">
                          <div className="flex justify-start items-center gap-3 font-medium">
                            <SlCalender />
                            <span>Date</span>
                          </div>
                          <div className="font-custom font-bold">
                            <h6>{bookingDetails.date}</h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] py-3">
                          <div className="flex justify-start items-center gap-3 font-medium">
                            <IoMdTime />
                            <span>Time</span>
                          </div>
                          <div className="font-custom font-bold">
                            <h6>{time}</h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] py-3">
                          <div className="flex justify-start items-center gap-3 font-medium">
                            <LuFlagTriangleRight />
                            <span>Court</span>
                          </div>
                          <div className="font-custom font-bold">
                            <h6>Outdoor | {selectedCourt}</h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] py-3">
                          <div className="flex justify-start items-center gap-3 font-medium w-[63%] leading-4">
                            <FiUsers />
                            <span>No. of players</span>
                          </div>
                          <div className="font-custom font-bold">
                            <h6>4</h6>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-[#00000054] py-3">
                          <div className="flex justify-start items-center gap-3 font-medium w-[80%] leading-4">
                            <FiUser />
                            <span>Booking by</span>
                          </div>
                          <div className="font-custom font-bold text-right leading-5">
                            <h6>{userName}</h6>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center py-3 mt-3">
                          <div className="flex justify-center items-center gap-3 font-medium leading-4 border border-x-2 border-t-2 border-b-4 border-darkbrow rounded-4xl pl-3 text-md font-custom">
                            <input
                              type="text"
                              placeholder="Your coupon code"
                              onChange={(e) => setPromoCode(e.target.value)}
                              value={promoCode}
                              className="font-ptag font-medium w-full border-none outline-none"
                            />
                            <button
                              onClick={() => handleApplyPromo()}
                              className="border border-x-2 border-t-2 border-b-4 border-darkbrow rounded-4xl px-3 -mx-0.5 -my-0.5 py-1.5 cursor-pointer"
                            >
                              Apply{" "}
                            </button>
                          </div>
                          {promoMessage && (
                            <p className="text-red-500 text-sm mt-2 ml-1">
                              {promoMessage}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <RoundedButton
                    onClick={() => {
                      handleConfirmClick();
                    }}
                    className="w-3xs h-[3rem] text-md md:text-xl p-2 mt-2"
                  >
                    Pay at court <img src={money} className="w-8 h-6" />
                  </RoundedButton>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Page3;
