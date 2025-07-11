import React, { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const FormInput = ({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  value,
  onChange,
  placeholder = "",
  error = "",
  autoComplete = "off",
  maxLength,
  minLength,
  disabled,
  inputClassName,
  toggleVisibility = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    toggleVisibility && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="flex flex-col w-full">
      <div
        className={`w-full border ${
          error ? "border-red-500" : "border-darkbrown"
        } bg-white rounded-2xl flex justify-start items-center gap-2 py-2 px-4`}
      >
        {Icon && <Icon size={20} className="max-w-full opacity-60" />}
        <div className="flex flex-col justify-start items-start w-full">
          <label
            htmlFor={id}
            className="text-[10px] font-light tracking-widest leading-3 opacity-80 font-custom"
          >
            {label}
          </label>
          <input
            type={inputType}
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            minLength={minLength}
            disabled={disabled}
            className={`w-full font-ptag text-lg font-normal opacity-60 outline-none ${
              type === "date" ? "no-calendar" : ""
            } ${inputClassName || ""}`}
          />
        </div>

        {toggleVisibility && type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {showPassword ? (
              <PiEyeSlash size={25} className="opacity-60" />
            ) : (
              <PiEye size={25} className="opacity-60" />
            )}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    </div>
  );
};

export default FormInput;
