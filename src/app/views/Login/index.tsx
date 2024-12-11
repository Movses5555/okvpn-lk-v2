"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./styled";

import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import TelegramButton from "@/app/components/TelegramButton";

import { useRouter } from "next/navigation";
import { api } from "@/app/api";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [telegramError, setTelegramError] = useState<string>("");
  const [onLoad, setOnLoad] = useState<boolean>(false);

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
                <TelegramButton
                  botName={botName}
                  buttonSize="large"
                  cornerRadius={3}
                  usePic={false}
                  dataOnauth={handleBot}
                  isLoginButton
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
