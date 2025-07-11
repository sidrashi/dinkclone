import React, { useEffect, useState } from "react";

const Toaster = ({ data, errorimg, checkmark, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [data, duration]);

  if (!data || !visible) return null;

  const isError = data.error === 1;
  const title = data.customTitle || (isError ? "Invalid Login Credentials" : "Valid Credentials");
  const icon = isError ? errorimg : checkmark;

  return (
    <div
      className={`fixed top-10 w-full max-w-[325px] max-h-30 p-3 z-50 rounded-2xl shadow-md text-center font-custom bg-white transform transition duration-500 ease-out animate-slideIn
      flex justify-start items-start gap-4
      left-1/2 -translate-x-1/2
      ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <div>
        <img src={icon} alt={isError ? "error" : "success"} />
      </div>
      <div className="flex flex-col justify-start items-start text-md">
        <h6 className="font-bold">{title}</h6>
        <div className="text-sm text-left opacity-50 font-ptag">
          {data.message}
        </div>
      </div>
    </div>
  );
};

export default Toaster;
