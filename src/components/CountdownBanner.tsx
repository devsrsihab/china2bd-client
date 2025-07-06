import React from "react";

const CountdownBanner: React.FC = () => {
  return (
    <div
      className="
        mb-3 bg-[#c5dff8] w-auto rounded-lg p-3
        flex flex-col  justify-between gap-2
      "
    >
      {/* Countdown Price Section */}
      <div className="countDownPrice mb-2 md:mb-0 flex-grow">
        <div className="flex justify-between items-center w-full mt-1">
          <h2 className="text-xl font-bold text-gray-800">
            JULY TANDOV OFFER - 5% Off
          </h2>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="flex flex-col gap-3">
        {/* pcFlex equivalent */}
        <div className="countDownTimer text-center md:text-left">
          <p className="font-semibold mb-2 text-base text-[#167389]">
            OFFER ENDS IN
          </p>
          <div className="timer flex justify-center md:justify-start gap-2">
            <div className="flex gap-1  items-center px-[10] py-2 bg-black ">
              <p className="text-xl font-bold text-white">9</p>
              <span className="text-xs text-white ">Days</span>
            </div>
            <div className="flex gap-1  items-center px-[10] py-2 bg-black ">
              <p className="text-xl font-bold text-white">4</p>
              <span className="text-xs text-white ">Hours</span>
            </div>
            <div className="flex gap-1  items-center px-[10] py-2 bg-black ">
              <p className="text-xl font-bold text-white">59</p>
              <span className="text-xs text-white ">Min</span>
            </div>
            <div className="flex gap-1  items-center mr-0 px-[10] py-2 bg-black ">
              {/* margin-right: 0px */}
              <p className="text-xl font-bold text-white">9</p>
              <span className="text-xs text-white ">Sec</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-[#e21818]">
            {" "}
            {/* margin-top: 8px, color: rgb(226, 24, 24), font-size: 14px */}
            অফারটি চলবে ১৫ জুলাই, ২০২৫ পর্যন্ত।
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
