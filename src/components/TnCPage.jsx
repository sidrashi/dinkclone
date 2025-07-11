import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

function TnCPage() {
  return (
    <div className="pt-8 pb-4 max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] mx-auto">
      <div className="px-2 py-5 text-center w-full">
        <h1 className="text-4xl xl:text-5xl uppercase font-bold mb-5 font-custom text-darkbrown">
          Terms and conditions
        </h1>
        <p className="font-ptag font-light text-xl xl:text-3xl text-left leading-7 px-4 w-full mx-auto mt-10">
          Terms and Conditions for Court Use
        </p>
        <div className="ml-8 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[15%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">Availability:</span>{" "}
                We have{" "}
                <span className="text-green-600 font-semibold">8 courts</span>{" "}
                available for reservation.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[27%] md:w-[5%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Booking Duration:
                </span>{" "}
                Courts can be reserved for a minimum of 55 minutes and 5 minutes
                for hand over.
                <div className="flex justify-start items-start gap-3 w-full mt-4">
                  <IoMdTime className="text-green-600 size-6 w-[12%] md:w-[4%] lg:w-[4%] xl:w-[4%]" />
                  <div className="text-left">
                    <span className="text-black font-semibold">Time Slot:</span>{" "}
                    <span className="text-green-600 font-semibold">
                      6:00 Am
                    </span>{" "}
                    to{" "}
                    <span className="text-green-600 font-semibold">
                      10:59 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[23%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  No Cancellations:
                </span>{" "}
                Cancellations are not allowed within{" "}
                <span className="text-green-600 font-semibold">6 hours</span> of
                the reserved time slot.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[11%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Morning Rental:
                </span>{" "}
                <span className="text-green-600 font-semibold">₹800</span> per
                hour (per court)
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[11%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Afternoon Rental:
                </span>{" "}
                <span className="text-green-600 font-semibold">₹800</span> per
                hour (per court)
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[26%] md:w-[5%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Evening Rental:
                </span>{" "}
                <span className="text-green-600 font-semibold">₹800</span> per
                hour (per court, includes up to 4 people)
                <div className="flex justify-start items-start gap-3 w-full mt-4">
                  <SlCalender className="text-green-600 size-6 md:size-5 w-[28%] md:w-[5%] lg:w-[4.5%] xl:w-[3%]" />
                  <div className="text-left">
                    <span className="text-black font-semibold">
                      Reservations: Book your court by texting or WhatsApp at{" "}
                      <span className="text-green-600 font-semibold">
                        83200 90671
                      </span>{" "}
                      up to 1 month in advance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[10%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                Courts cannot be{" "}
                <span className="text-green-600 font-semibold">resold</span> or{" "}
                <span className="text-green-600 font-semibold">
                  transferred.
                </span>
              </div>
            </div>
          </p>
        </div>
        <p className="font-ptag font-light text-xl xl:text-3xl text-left leading-7 px-4 w-full mx-auto mt-10">
          Rules & Regulations
        </p>
        <div className="ml-8 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[25%] md:w-[5%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Proper Footwear Required:
                </span>{" "}
                Please wear sports shoes. (Sandals, Crocs, or bare feet are not
                allowed).
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[25%] md:w-[5%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Equipment Provided:
                </span>{" "}
                We provide rental paddles and balls (maximum 4 paddles and 1
                ball per court).
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[19%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Damaged Paddle Fee:
                </span>{" "}
                A fee of{" "}
                <span className="text-green-600 font-semibold">₹2500</span> will
                apply if you damage a paddle.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[23%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Minimum Play TIme:
                </span>{" "}
                The minimum booking time is 55 minutes{" "}
                <span className="text-green-600 font-semibold">
                  (e.g., 6:00 PM to 6:55 PM)
                </span>
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[25%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">Late Arrivals:</span>{" "}
                Late arrivals may forfeit their reserved time, subject to court
                availability and reason.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[25%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">Punctuality:</span>{" "}
                Please arrive on time for your booking to ensure a smooth
                experience for all guests.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[25%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Payment Confirmation:
                </span>{" "}
                Your reservation is confirmed only after we receive full
                payment.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[15%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                NO professional content capture without prior permission.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[22%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                All rights reserved by{" "}
                <span className="text-green-600 font-semibold">
                  Dink Pickleball
                </span>
                , India and{" "}
                <span className="text-green-600 font-semibold">
                  DINK SPORTS VENTURE PVT LTD.
                </span>
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[22%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                It is requested that individuals{" "}
                <span className="text-green-600 font-semibold">
                  under 18 year old
                </span>{" "}
                be accompanied by{" "}
                <span className="text-green-600 font-semibold">guardians.</span>
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[15%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">No Smoking:</span>{" "}
                Our premises are a no-smoking zone.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[18%] md:w-[4%] lg:w-[10%] xl:w-[5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Legal Jurisdiction:
                </span>{" "}
                Any legal disputes will be handled in Surat.
              </div>
            </div>
          </p>
        </div>
        <p className="font-ptag font-light text-xl xl:text-3xl text-left leading-7 px-4 w-full mx-auto mt-10">
          Cancellation & Refund Policy
        </p>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-semibold leading-7 mb-2 text-left xl:text-lg flex justify-start items-start">
            Refund Policy for Dink Pickleball Individual Bookings
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[30%] md:w-[5%] lg:w-[11%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">Full Refund:</span>{" "}
                Cancel more than{" "}
                <span className="text-green-600 font-semibold">6 hours</span>{" "}
                before the start time for a{" "}
                <span className="text-green-600 font-semibold">100%</span>{" "}
                refund.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[30%] md:w-[5%] lg:w-[11%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">No Refund:</span>{" "}
                Cancellation within less than{" "}
                <span className="text-green-600 font-semibold">6 hours</span> of
                booking time get no refunds{" "}
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[49%] md:w-[7.5%] lg:w-[14%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">Bank Charges:</span>{" "}
                A fee of{" "}
                <span className="text-green-600 font-semibold">₹30</span> will
                be charged for cancellations and applicable cancellation fees.
                Refunds will be processed every Friday.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[130%] md:w-[21%] lg:w-[39%] xl:w-[14%]" />
              <div className="text-left">
                In the event that our pickleball courts are closed due to{" "}
                <span className="text-green-600 font-semibold">
                  government orders, public health directives, or extreme
                  weather conditions,
                </span>{" "}
                we will issue a full refund for all affected bookings. Your
                safety and satisfaction are our top priorities, and we aim to
                provide a fair and transparent process in such situations.
                Refunds will be processed automatically, and you will be
                notified.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[38%] md:w-[6%] lg:w-[11%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Policy Changes:
                </span>{" "}
                <span className="text-green-600 font-semibold">
                  Dink Pickleball
                </span>{" "}
                reserves the right to change the cancellation policy without
                prior notice.
              </div>
            </div>
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-semibold leading-7 mb-2 text-left xl:text-lg flex justify-start items-start">
            Refund Policy for Dink Pickleball Membership Program
          </p>
          <p className="font-ptag font-semibold leading-7 mb-2 text-left flex justify-start items-start">
            1. Membership Fees:
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[45%] md:w-[8%] lg:w-[14%] xl:w-[5.5%]" />
              <div className="text-left">
                All membership fees are non-refundable once the membership term
                has begun. This includes both initial payments and any renewal
                fees.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[27%] md:w-[5%] lg:w-[11%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Non-Transferability:
                </span>{" "}
                Membership is not transferable to another individual or entity.
              </div>
            </div>
          </p>
          <p className="font-ptag font-semibold leading-7 mb-2 text-left flex justify-start items-start">
            2. Court Hours:
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[30%] md:w-[5%] lg:w-[11%] xl:w-[5.5%]" />
              <div className="text-left">
                Members are allocated a certain number of court hours as part of
                their membership.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[85%] md:w-[14%] lg:w-[24%] xl:w-[9%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Unused Court Hours:
                </span>{" "}
                Any unused court hours must be utilized within the prescribed
                time period specified in the membership agreement. Unused hours
                will not carry over to the next period and will lapse at the end
                of the membership term.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[52%] md:w-[8%] lg:w-[15%] xl:w-[5.5%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Refunds for Unused Court Hours:
                </span>{" "}
                There will be no refunds or credits issued for unused court
                hours that lapse at the end of the membership term.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[68%] md:w-[10%] lg:w-[19%] xl:w-[7%]" />
              <div className="text-left">
                <span className="text-black font-semibold">
                  Court Bookings:
                </span>{" "}
                Members can book courts using our venue booking system on the
                <span className="text-green-600 font-semibold">
                  [https://dinkpickleball.in] (https://dinkpickleball.in)
                </span>{" "}
                website. A maximum of{" "}
                <span className="text-green-600 font-semibold">4 players</span>{" "}
                is allowed per court.
              </div>
            </div>
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-semibold leading-7 mb-2 text-left flex justify-start items-start">
            3. Cancellation and Termination:
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[50%] md:w-[8%] lg:w-[14%] xl:w-[5.5%]" />
              <div className="text-left">
                Members may cancel their membership at any time. However,
                refunds will not be issued for any remaining membership period
                or unused court hours.
              </div>
            </div>
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[60%] md:w-[10%] lg:w-[17%] xl:w-[6.5%]" />
              <div className="text-left">
                In the event that Dink Pickleball terminates a membership due to
                violation of club policies, no refunds will be provided for the
                remaining membership period or unused court hours.
              </div>
            </div>
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-semibold leading-7 mb-2 text-left flex justify-start items-start">
            4. Exceptional Circumstances:
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[90%] md:w-[14%] lg:w-[24%] xl:w-[9%]" />
              <div className="text-left">
                In rare and exceptional cases, such as medical emergencies or
                other unforeseen events, Dink Pickleball at its sole discretion
                may consider partial refunds or credits. Members must submit a
                written request with supporting documentation for consideration.
              </div>
            </div>
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-semibold leading-7 mb-2 text-left flex justify-start items-start">
            5. Changes to Refund Policy:
          </p>
          <p className="font-ptag font-light leading-7 mb-2">
            <div className="flex justify-start items-start gap-3 w-full">
              <RiCheckDoubleFill className="text-green-600 size-6 w-[51%] md:w-[8%] lg:w-[13.5%] xl:w-[5%]" />
              <div className="text-left">
                Dink Pickleball reserves the right to amend or update this
                refund policy at any time. Any changes will be communicated to
                members in advance.
              </div>
            </div>
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2 text-left flex justify-start items-start">
            This policy is designed to ensure fairness and clarity for all
            members while encouraging the timely use of club resources.
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2 text-left flex justify-start items-start">
            For more information, call us at {" "}
            <a href="tel:+918320090671">
              <span className="text-green-600 font-semibold">
                +91 83200 90671
              </span>
            </a>
          </p>
        </div>
        <p className="font-ptag font-semibold text-xl xl:text-2xl text-center leading-7 px-4 w-full mx-auto lg:max-w-[60%] mt-10">
          DINK SPORTS VENTURE PRIVATE LIMITED
        </p>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2 text-left flex justify-start items-start">
            Space is limited, so book your court now on a first-come,
            first-served basis!
          </p>
        </div>
        <div className="ml-6 mt-4 xl:text-lg">
          <p className="font-ptag font-light leading-7 mb-2 text-left flex justify-start items-start">
            To reserve your court, text or WhatsApp at{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918320090671&text&type=phone_number&app_absent=0&wame_ctl=1"
              target="_blank"
            >
              <span className="text-green-600 font-semibold">
                +91 83200 90671
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TnCPage;
