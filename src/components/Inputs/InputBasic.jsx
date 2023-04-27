import React from "react";

export const InputBasic = ({
  pHolder,
  data = "",
  labelName,
  onChange,
  name,
  disabled = false,
  required = false,
  type = "text"
}) => {
  return (
    <div className="w-full">
      <label className="flex flex-col gap-y-1">
        <span className="block text-sm font-medium text-gray-400">
            {labelName}
        </span>
        <input
          disabled={disabled}
          required={required}
          value={data}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={pHolder}
          className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
        />
      </label>
    </div>
  );
};
