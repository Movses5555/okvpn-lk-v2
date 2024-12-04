"use client";

import { useState } from "react";

import { Container } from "./styles";

import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { Select } from "@/app/components/Select";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const UIKit = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectValue] = useState("option1");

  return (
    <Container>
      <div>
        <Button>Перейти</Button>
        <Button $chevron>Перейти</Button>
      </div>
      <div>
        <Button $icon={<FaCalendarAlt color="white" />}>Продлить</Button>
        <Button $icon={<FaCalendarAlt color="#47A98E" />} $outlined>
          Продлить
        </Button>
      </div>

      <div>
        <Button
          $danger
          $outlined
          $icon={<IoMdCloseCircle color="#EB6467" size={18} />}
        >
          Отменить автопродление
        </Button>
        <Button $icon={<IoMdCloseCircle size={18} />} $danger>
          Отменить автопродление
        </Button>
      </div>

      <div>
        <Input
          label="Ваш Email"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <Input
          error="Некорректный email"
          label="Ваш Email"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
      </div>

      <div>
        <Select
          value={selectedValue}
          label="Протокол подписки"
          placeholder="Выбрать"
          options={options}
          onChange={(value) => setSelectValue(value)}
        />
        <Select
          value={""}
          label="Протокол подписки"
          placeholder="Выбрать"
          options={options}
          onChange={(value) => setSelectValue(value)}
        />
      </div>
    </Container>
  );
};
