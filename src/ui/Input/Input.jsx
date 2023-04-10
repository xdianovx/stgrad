import cn from "classnames";
import s from "./input.module.scss";
import { useState } from "react";

export const Input = ({
  placeholder,
  label,
  id,
  name,
  className,
  ...props
}) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={cn(s.item, className)}>
      <label
        className={cn("", {
          [s.filled]: value,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        name=""
        id={id}
        {...props}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
