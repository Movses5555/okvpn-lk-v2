"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "./styled";
import { useEffect, useRef, useState } from "react";

import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import { format } from "date-fns";
import { api } from "@/app/api";
// import { useMediaQuery } from "@uidotdev/usehooks";

export const Confirmation = () => {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isSmallDevice = false;

  const router = useRouter();

  const email = useRef<string>("");
  const [confirmation, setConfirmation] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const emailLogin = localStorage.getItem("email-login");

    if (token) {
      router.replace("/");
    } else if (!emailLogin) {
      router.replace("/login");
    } else {
      email.current = emailLogin;
    }
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    return format(date, "mm:ss");
  };

  const sendCodeAgainHandler = () => {
    if (timeLeft) {
      return false;
    }

    api.auth(email.current).catch(() => {
      router.replace("/login");
    });
    setTimeLeft(60);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    api
      .emailLogin({
        email: email.current,
        code: confirmation,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.accessToken);
        localStorage.removeItem("email-login");
        router.replace("/");
      })
      .catch((e) => {
        const message = e.response.data.msg;
        setErrorMessage(message);
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
      <div className="login-form">
        <p className="title">Войти</p>
        <div className="box">
          <form onSubmit={onSubmit}>
            <Input
              label="Введите код"
              value={confirmation}
              onChange={({ target }) => setConfirmation(target.value)}
              error={errorMessage}
            />
            <div className="timer-block">
              <Image
                src="/timer.svg"
                alt=""
                width={isSmallDevice ? 18 : 24}
                height={isSmallDevice ? 18 : 24}
              />
              <div className="timer">{formatTime(timeLeft)}</div>
            </div>
            <div className="actions">
              <Button
                $outlined
                type="button"
                onClick={() => sendCodeAgainHandler()}
              >
                Отправить повторно
              </Button>
              <Button $chevron type="submit">
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
