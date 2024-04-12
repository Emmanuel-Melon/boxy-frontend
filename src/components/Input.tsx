import React from "react";

export const Input = ({ label, placeholder, type, name }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-gray-500">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
