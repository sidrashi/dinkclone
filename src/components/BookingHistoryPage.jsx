import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCancellation, getBookingHistoryAPI } from "../api/Api";
import { useToaster } from "../context/ToasterContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoTodayOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Loader from "./Loader";
import RoundedButton from "./RoundedButton";
import { ImCross } from "react-icons/im";

function BookingHistoryPage() {
  const navigate = useNavigate();
  const { showToast } = useToaster();

  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHistory, setShowHistory] = useState();
  const [cancelData, setCancelData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = ["All", "Courts", "Event", "League", "Store"];

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    const getBookingHistory = async () => {
      try {
        setLoading(true);
        const res = await getBookingHistoryAPI(token);
        if (res.data.error === 1) {
          showToast(res.data);
        } else {
          setShowHistory(res.data);
        }
      } catch (error) {
        console.error("Error fetching customer booking history:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };
    getBookingHistory();
  }, []);

  const categoryTypeMap = {
    Courts: "court_booking",
    Event: "event_booking",
    League: "league_booking",
    Store: "store_booking",
  };

  const filteredOrders =
    activeIndex === 0
      ? showHistory?.order || []
      : (showHistory?.order || []).filter(
          (order) => order.type === categoryTypeMap[categories[activeIndex]]
        );

  const handleCancelOrder = async (date, time, orderId) => {
    setCancelData({ date, time, orderId });
    setShowModal(true);
  };

  const confirmCancel = async () => {
    setLoading(true);
    const { date, time, orderId } = cancelData;
    const token = localStorage.getItem("userToken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      const res = await addCancellation(date, time, orderId, token);
      showToast(res.data);
    } catch (error) {
      console.error("Error cancelling order:", error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCancelData(null);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[425px] w-full py-12 mx-auto">
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
                History
              </h4>
            </div>
            <div className="flex flex-col gap-6">
              <div className="max-w-full">
                <div className="border-b-2 border-[#ddd] flex justify-between mb-[20px] gap-2">
                  {categories.map((label, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`bg-[#0000] border-b-3 cursor-pointer flex text-md font-medium px-1 py-1.5 font-custom transition-all duration-300 ease-in-out
            ${
              activeIndex === index
                ? "text-darkbrown border-darkbrown"
                : "text-[#000] border-[#0000] hover:text-darkbrown hover:border-darkbrown active:text-darkbrown active:border-darkbrown"
            }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {filteredOrders.length > 0 ? (
                  <div>
                    {filteredOrders.map((order, index) => (
                      <div
                        className={`w-full border border-x-2 border-t-2 border-b-4 flex flex-col justify-start items-start mb-5 bg-white border-darkbrown rounded-4xl text-darkbrown p-2 font-custom ${
                          order.status === "cancelled" &&
                          "opacity-40 pointer-events-none"
                        }`}
                        key={index}
                      >
                        <p className="flex justify-start items-start text-sm font-normal ml-2">
                          {order.order_id}
                        </p>
                        <div className="w-full flex justify-between items-center text-md font-medium">
                          <p className="pl-2 font-bold text-lg">
                            {order.venue}
                          </p>
                          <p className="pr-2">{order.court}</p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                          <div className="flex flex-col">
                            <div className="pl-2 flex justify-start items-center gap-2 font-semibold text-lg">
                              <IoTodayOutline />
                              {order.infodate}
                            </div>
                            <div className="pl-2 flex justify-start items-center gap-2 font-semibold text-lg">
                              <IoMdTime />
                              {order.time}
                            </div>
                          </div>
                          <RoundedButton
                            onClick={() =>
                              handleCancelOrder(
                                order.infodate,
                                order.time,
                                order.order_id
                              )
                            }
                            className="w-[3rem] h-[2.5rem] md:w-[3.8rem] md:h-[3rem] text-xl p-2 mr-3.5 !bg-red"
                            icon={
                              <ImCross className="w-[15px] h-[15px] ml-2" />
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col">
                    <p className="text-center text-[#999] text-sm font-custom">
                      No {categories[activeIndex]} History Found.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 overflow-hidden">
              <div className="flex flex-col justify-start items-start py-10 px-6 lg:px-20 md:px-10 w-[95vw] h-[40vh] md:w-[90vw] lg:w-[50vw] lg:h-[40vh] md:h-[40vh] bg-background shadow-2xl rounded-2xl text-darkbrown font-custom overflow-hidden">
                <h2 className="text-xl font-bold mb-4">Confirm Cancellation</h2>
                <p>Are you sure you want to cancel this booking?</p>
                <div className="mt-6 flex justify-center gap-4">
                  <RoundedButton
                        onClick={confirmCancel}
                        className="w-[7rem] md:w-[8rem] h-[3rem] md:text-xl !bg-red"
                      >
                        Yes, cancel
                      </RoundedButton>
                  <RoundedButton
                        onClick={closeModal}
                        className="w-[4rem] nd:w-[6.5rem] h-[3rem] md:text-xl !bg-gray-300"
                      >
                        No
                      </RoundedButton>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default BookingHistoryPage;
