'use client';

import { Container } from "./styled";
import { PropsI } from "./types";

export const Input = ({
  label,
  onChange,
  value,
  placeholder = "",
  type = "text",
  error = "",
  required = false,
  disabled = false,
}: PropsI) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error ? <div className="error-message">{error}</div> : null}
    </Container>
  );
};
