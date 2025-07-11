import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { getVenue } from "../api/Api";
import Loader from "./Loader";
import { FaInfo } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TbLocationFilled, TbParkingCircleFilled } from "react-icons/tb";
import { PiLockersFill, PiCoffeeFill } from "react-icons/pi";
import { BiMaleFemale } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { usePrice } from "../context/PriceContext";
import RoundedButton from "./RoundedButton";

function Page1() {
  const [venue, setVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedVenueInfo, setSelectedVenueInfo] = useState(null);
  const navigate = useNavigate();
  const { setBookingDetails } = usePrice();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  useEffect(() => {
    const getVenueData = async () => {
      try {
        setLoading(true);
        const res = await getVenue();
        setVenue(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };
    getVenueData();
  }, []);

  const handleLocationClick = (venueId, location) => {
    setBookingDetails((prev) => ({
      ...prev,
      location: location,
    }));
    const deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      alert("No deviceId found in local storage");
      return;
    }
    const venue = venueId;
    const sport = 1;
    const device_id = deviceId;

    const queryParams = new URLSearchParams({
      venue,
      sport,
      device_id,
    }).toString();

    navigate(`/time-date-selection?${queryParams}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="px-5 md:px-20 lg:px-22 py-15">
          <div className="flex justify-between items-baseline-last w-full mb-20 text-darkbrown font-custom">
            <div className="flex flex-col justify-between items-start gap-6 ">
              <p className="flex justify-start items-center gap-2 text-md lg:text-xl xl:text-2xl font-medium">
                <FaCalendarAlt className="size-6" />
                Location
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                When would <br /> you like to play?
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                01<span className="font-light">/03</span>
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 items-center">
            {venue.venue.map((item) => {
              return (
                <div key={item.venue_id} className="relative lg:max-w-sm">
                  <div className="border-1 rounded-2xl p-1">
                    <img
                      className="rounded-2xl w-full h-auto cursor-pointer"
                      src={item.venue_image}
                      alt="image"
                      onClick={() => {
                        handleLocationClick(item.venue_id, item.venue_location);
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-5 text-darkbrown">
                    <div
                      onClick={() => {
                        handleLocationClick(item.venue_id, item.venue_location);
                      }}
                      className="cursor-pointer"
                    >
                      <h3 className="font-custom text-lg md:text-xl xl:text-2xl font-bold">
                        {item.venue_name} <br />
                      </h3>
                      <p className="font-ptag">{item.venue_location} </p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <RoundedButton
                        onClick={() => {
                          setShowModal(true);
                          setSelectedVenueInfo(item);
                        }}
                        icon={<FaInfo className="ml-2" />}
                        className="w-[3rem] h-[3rem] absolute top-3 right-3 sm:hidden"
                      />
                      <RoundedButton
                        onClick={() => {
                          setShowModal(true);
                          setSelectedVenueInfo(item);
                        }}
                        icon={<FaInfo className="ml-2" />}
                        className="w-[3rem] h-[3rem] hidden sm:inline-flex"
                      />
                      <RoundedButton
                        onClick={() => {
                          handleLocationClick(
                            item.venue_id,
                            item.venue_location
                          );
                        }}
                        className="w-[5.5rem] md:w-[6.5rem] h-[3rem] md:text-xl"
                      >
                        Choose
                      </RoundedButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showModal && selectedVenueInfo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
              <div className="flex flex-col justify-start items-start py-10 px-6 lg:px-20 md:px-10 w-[95vw] h-[95vh] md:w-[90vw] lg:w-[85vw] lg:h-[80vh] md:h-[80vh] overflow-y-scroll bg-background shadow-2xl rounded-2xl text-darkbrown font-custom">
                <div className="w-full flex justify-between items-center gap-5 pb-5 border-darkbrown border-b-1">
                  <div>
                    <h5 className="font-bold text-xl lg:text-2xl md:text">
                      {selectedVenueInfo.venue_name}
                    </h5>
                    <p className="font-normal text-md">
                      {selectedVenueInfo.indoor_counts} Indoor •{" "}
                      {selectedVenueInfo.outdoor_counts} Outdoor
                    </p>
                  </div>
                  <RoundedButton
                    onClick={() => {
                      setShowModal(false);
                      setSelectedVenueInfo(null);
                    }}
                    className="w-[3rem] md:w-[4rem] h-[3rem] md:text-xl"
                  >
                    <ImCross />
                  </RoundedButton>
                </div>
                <div className="flex flex-col justify-start items-start mt-4 gap-10 w-full">
                  <div className="w-full flex flex-col xl:flex-row justify-start xl:justify-center items-start xl:items-center gap-7">
                    <div className="bg-locationbg px-4 py-4 rounded-2xl w-full">
                      <h6 className="font-custom font-bold text-xl lg:text-2xl">
                        Location
                      </h6>
                      <div className="flex justify-between items-center">
                        <p className="text-md lg:text-lg font-ptag font-medium">
                          {selectedVenueInfo.venue_location}{" "}
                        </p>
                        <button className="size-10 flex justify-center items-center bg-white border border-x-2 border-t-2 border-b-4 border-darkbrown rounded-4xl">
                          <TbLocationFilled />
                        </button>
                      </div>
                    </div>
                    <div className="px-4 py-4 md:w-full">
                      <h6 className="font-custom font-bold text-xl lg:text-2xl">
                        Facilities
                      </h6>
                      <div className="grid grid-cols-[2fr_1fr] mt-2 gap-2">
                        <div className="flex justify-start items-center gap-2">
                          <PiLockersFill className="flex justify-center items-center border-1 border-darkbrown rounded-xl p-2 w-[40px] h-[40px] md:size-20 md:p-3" />
                          <p className="font-custom text-sm md:text-lg font-normal">
                            {selectedVenueInfo.facilities[0]}
                          </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <TbParkingCircleFilled className="flex justify-center items-center border-1 border-darkbrown rounded-xl p-2 w-[40px] h-[40px] md:size-20 md:p-3" />
                          <p className="font-custom text-sm md:text-lg font-normal">
                            {selectedVenueInfo.facilities[1]}
                          </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <BiMaleFemale className="flex justify-center items-center border-1 border-darkbrown rounded-xl p-2 w-[40px] h-[40px] md:size-20 md:p-3" />
                          <p className="font-custom text-sm md:text-lg font-normal">
                            {selectedVenueInfo.facilities[2]}
                          </p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <PiCoffeeFill className="flex justify-center items-center border-1 border-darkbrown rounded-xl p-2 w-[40px] h-[40px] md:size-20 md:p-3" />
                          <p className="font-custom text-sm md:text-lg font-normal">
                            {selectedVenueInfo.facilities[3]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h5 className="font-custom font-bold text-xl xl:text-2xl">
                      Photo Gallery
                    </h5>
                    <div className="mt-5 xl:mt-10">
                      <img
                        className="rounded-2xl md:w-[50%] lg:w=[50%] xl:w-[40%] 2xl:w-[30%]"
                        src={selectedVenueInfo.gallery_links[0]}
                        alt="photo1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Page1;
