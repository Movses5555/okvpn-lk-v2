"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./styled";

import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import { useRouter } from "next/navigation";
import { api } from "@/app/api";

// import telegram from '../../../../public/icons/telegram.png';
// import TelegramLoginButton from "react-telegram-login";
import TelegramLoginButton from "@/app/components/TelegramButton";


export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequestCodeHandler = (e) => {
    e.preventDefault();
    setOnLoad(true);
    api
      .auth(email)
      .then(() => {
        setOnLoad(false);
        localStorage.setItem("email-login", email);
        router.push(`/confirmation`);
      })
      .catch((err) => {
        if (err.status === 400) {
          const message = err.response.data.msg;
          setEmailError(message);
        }
        setOnLoad(false);
      });
  };


  const name = "ReactAuth123456789_bot";
  const handleBot = (user) => {
    console.log(user);
  };

  

  return (
    <Container>
      <div className="icon-container">
        <Image
          className="icon"
          src={"/icon.svg"}
          alt=""
          width={116}
          height={36}
        />
      </div>
      <div className="login-form">
        <p className="title">Войти</p>
        <div className="box">
          <form onSubmit={onRequestCodeHandler}>
            <Input
              label="Ваш Email"
              type="email"
              value={email}
              required
              error={emailError}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Button type="submit" $chevron disabled={onLoad}>
              Получить код
            </Button>
          </form>
          {/* <div className="telegram-button">
            <Button
              $icon={
                <Image
                  src={telegram}
                  width={18}
                  height={15}
                  alt="telegram"
                />
              }
              disabled={onLoad}
              onClick={() => {}}
            >
              Войти через телеграм
            </Button>
          </div> */}
          <div className="telegram-button">
            <TelegramLoginButton
              botName={name}
              buttonSize="large"
              cornerRadius={3}
              usePic={false}
              dataOnauth={handleBot}
            />
          </div>
          {/* <div className="telegram-button">
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="OdauBot" language="en" />
          </div>
          <div className="telegram-button">
            <TelegramLoginButton 
              botName="samplebot" 
              dataOnauth={handleTelegramResponse} 
              buttonSize="large" 
              requestAccess="write"
              authUrl="https://telegram.org/js/telegram-widget.js?22"
            />
          </div> */}
        </div>
      </div>
    </Container>
  );
};
