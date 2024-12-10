"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./styled";

import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import TelegramLoginButton from "@/app/components/TelegramLoginButton";

import { useRouter } from "next/navigation";
import { api } from "@/app/api";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telegramError, setTelegramError] = useState("");
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


  const botName = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || '';

  const handleBot = async (user) => {
    setTelegramError(() => "");
    api
      .telegramLogin(user)
      .then((response) => {
        localStorage.setItem("token", response?.data?.accessToken);
        localStorage.removeItem("email-login");
        router.replace("/");
      })
      .catch((e) => {
        const message = e?.response?.data?.msg || 'Something went wrong.';
        setTelegramError(() => message);
      });
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
      <div className="login-form-wrapper">
        <div className="login-form">
          <p className="title">Войти</p>
          <div className="box">
            <div className="form-wrapper">
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
              <div className="telegram-button">
                <TelegramLoginButton
                  botName={botName}
                  buttonSize="large"
                  cornerRadius={3}
                  usePic={false}
                  dataOnauth={handleBot}
                  buttonText='Привязать'
                  // wrapperStyles={{ 
                  //   width: "100%", 
                  //   height: "50px",
                  //   borderRadius: "10px",
                  //   position: "relative",
                  // }}
                  // buttonStyles={{
                  //   position: 'absolute',
                  //   top: 0,
                  //   left: 0,
                  //   zIndex: 1,
                  //   width: "135px",
                  //   height: "50px",
                  //   borderRadius: "10px",
                  //   border: "1px solid #47A98E",
                  //   backgroundColor: "#3DABE5",
                  //   color: "#28272F",
                  //   fontSize: "14px",
                  //   lineHeight: "16.94px",
                  //   cursor: "pointer",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  // }}
                />
                { telegramError ? <div className="error-message">{telegramError}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
