import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getTimeSlot } from "../api/Api";
import { IoMdArrowRoundForward } from "react-icons/io";
import Loader from "./Loader";
import morning from "../assets/morning.png";
import afternoon from "../assets/afternoon.png";
import night from "../assets/night.png";
import { usePrice } from "../context/PriceContext";
import RoundedButton from "./RoundedButton";

function Page2() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();
  const { setBookingDetails } = usePrice();

  const venue = queryParams.get("venue");
  const sport = queryParams.get("sport");
  const device_id = queryParams.get("device_id");

  const [timeSlot, setTimeSlot] = useState();
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const types = ["MORNING", "AFTERNOON", "EVENING"];

  useEffect(() => {
    if (venue && sport && device_id) {
      const getTimeSlotData = async () => {
        try {
          setLoading(true);
          const res = await getTimeSlot(venue, sport, device_id);
          setTimeSlot(res.data);
          if (res.data.date.length > 0) {
            setSelectedDate(res.data.date[0].date.date);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
          window.scrollTo(0, 0);
        }
      };
      getTimeSlotData();
    }
  }, [venue, sport, device_id]);

  const handleDateClick = (date, index, date_text) => {
    setActiveIndex(index);
    setSelectedDate(date);
    setSelectedTime();
    setBookingDetails((prev) => ({
      ...prev,
      date: date_text,
    }));
  };

  const handleTimeDateSelectionClick = () => {
    const date = selectedDate;
    const time = selectedTime;

    const queryParams = new URLSearchParams({
      venue,
      sport,
      device_id,
      date,
      time,
    }).toString();
    navigate(`/court-selection?${queryParams}`, { replace: true });
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
                Date & Time
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                When would <br /> you like to play?
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                02<span className="font-light">/03</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="flex justify-start items-start px-4 gap-2 md:gap-4 lg:gap-6 overflow-x-scroll hide-scrollbar md:px-15 lg:px-20">
              {timeSlot.date.map((item, index) => {
                const dateInfo = item.date;
                return (
                  <div
                    key={index}
                    className={`${
                      activeIndex === index
                        ? "bg-darkbrown text-background"
                        : "bg-background text-darkbrown"
                    } border-darkbrown/15 w-fit border-2 rounded-2xl px-5 md:px-8 xl:px-10 py-4 md:py-7 font-custom flex flex-col justify-center items-center lg:gap-20 text-center cursor-pointer hover:bg-darkbrown hover:text-white`}
                    onClick={() =>
                      handleDateClick(dateInfo.date, index, dateInfo.date_text)
                    }
                  >
                    <a>
                      <h6 className="text-md md:text-lg lg:text-2xl font-medium">
                        {item.date.weekday}
                      </h6>
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium md:font-bold">
                        {item.date.day}
                      </h2>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="px-4 md:px-15 lg:px-20">
              {timeSlot.date.map((item, index) => {
                const dateInfo = item.date;
                return (
                  <div key={index}>
                    {activeIndex === index && (
                      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-9">
                        {types.map((type) => {
                          const filteredTimes = dateInfo.times.filter(
                            (t) => t.type === type
                          );
                          if (filteredTimes.length === 0) return null;
                          return (
                            <div
                              key={type}
                              className={`${
                                type === "MORNING"
                                  ? "bg-pricebggreen"
                                  : type === "AFTERNOON"
                                  ? "bg-pricebgyellow"
                                  : "bg-pricebgpink"
                              } rounded-2xl px-5 md:px-8 lg:px-10 py-7`}
                            >
                              <div className="flex justify-between items-center font-custom font-medium text-darkbrown">
                                <div className="flex justify-center items-center gap-3">
                                  <img
                                    src={
                                      type === "MORNING"
                                        ? morning
                                        : type === "AFTERNOON"
                                        ? afternoon
                                        : night
                                    }
                                    alt="morninglogo"
                                  />
                                  <h6>{type}</h6>
                                </div>
                                <div>
                                  <h6>₹{filteredTimes[0].price}</h6>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-3 gap-4 mt-5">
                                {filteredTimes.map((slot, index) => (
                                  <div
                                    key={index}
                                    className={`${
                                      slot.time === selectedTime &&
                                      "bg-darkbrown text-white"
                                    } w-full border-2 border-darkbrown flex justify-center items-center px-5 md:px-2 py-2.5 md:py-2.5 rounded-xl font-custom text-sm font-medium cursor-pointer`}
                                    onClick={() => {
                                      setSelectedTime(slot.time);
                                      setBookingDetails((prev) => ({
                                        ...prev,
                                        price: slot.price,
                                      }));
                                    }}
                                  >
                                    <a>{slot.time}</a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center pb-10 bg-gradient-to-b from-white/0 to-white w-full h-28 fixed bottom-0 z-50">
            <RoundedButton
              onClick={() => {
                handleTimeDateSelectionClick();
              }}
              className={`w-[17rem] md:w-[20rem] lg:w-[25rem] h-[3rem] lg:h-[3.5rem] text-md md:text-xl py-2 lg:py-3 px-4 flex !justify-between items-center gap-20 md:gap-5 ${
                selectedDate && selectedTime
                  ? "pointer-events-auto"
                  : "cursor-not-allowed pointer-events-none"
              }`}
            >
              Continue <IoMdArrowRoundForward className="w-[25px] h-[25px]" />
            </RoundedButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Page2;
