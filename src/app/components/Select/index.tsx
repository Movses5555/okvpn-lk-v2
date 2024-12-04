import React, { useState } from "react";
import {
  Container,
  SelectContainer,
  SelectHeader,
  SelectList,
  SelectListItem,
} from "./styled";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { useClickAway } from "@uidotdev/usehooks";

type Option = {
  label: string | JSX.Element;
  value: string;
};

type CustomSelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Select: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  placeholder = "Выбрать...",
  label,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const selectedOption = options.find((c) => c.value === value);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <Container>
      <label>{label}</label>
      <SelectContainer ref={ref}>
        <SelectHeader onClick={handleToggle}>
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <span>
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span>
        </SelectHeader>
        {isOpen && (
          <SelectList>
            {options.map((option) => (
              <SelectListItem
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </SelectListItem>
            ))}
          </SelectList>
        )}
      </SelectContainer>
    </Container>
  );
};
