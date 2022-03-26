import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string | number;
  error?: string;
}

export default function FormField({
  name,
  label,
  value,
  error,
  ...props
}: Props) {
  return (
    <div className="form-field">
      <label>
        {label}: <br />
        <input id={name} name={name} value={value} {...props} />
      </label>
      <br />
      {error && <span className="form-field-error">{error}</span>}
    </div>
  );
}
