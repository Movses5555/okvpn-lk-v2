/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";
import { TelegramLoginButtonProps } from "./types";
import { Wrapper } from "./styled";

const TelegramLoginButton: React.FC<TelegramLoginButtonProps> = ({
  wrapperProps,
  dataAuthUrl,
  usePic = false,
  botName,
  className,
  buttonSize = "large",
  dataOnauth,
  cornerRadius,
  requestAccess = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || ref.current === null) return;

    if (
      typeof dataOnauth === "undefined" &&
      typeof dataAuthUrl === "undefined"
    ) {
      throw new Error(
        "One of these props should be defined: dataAuthUrl (redirect URL), dataOnauth (callback fn) should be defined."
      );
    }

    if (typeof dataOnauth === "function") {
      window.TelegramLoginWidget = {
        dataOnauth: (user: any) => dataOnauth(user),
      };
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", buttonSize);

    if (cornerRadius !== undefined) {
      script.setAttribute("data-radius", cornerRadius.toString());
    }

    if (requestAccess) {
      script.setAttribute("data-request-access", "write");
    }

    script.setAttribute("data-userpic", usePic.toString());

    if (typeof dataAuthUrl === "string") {
      script.setAttribute("data-auth-url", dataAuthUrl);
    } else {
      script.setAttribute(
        "data-onauth",
        "TelegramLoginWidget.dataOnauth(user)"
      );
    }

    script.async = true;

    ref.current.appendChild(script);

    script.onload = () => {
      const telegramButton = ref.current?.querySelector('button');
      if (telegramButton) {
        telegramButton.textContent = "Войти через телеграм";
      }
    };
  }, [
    botName,
    buttonSize,
    cornerRadius,
    dataOnauth,
    requestAccess,
    className,
    usePic,
    ref,
    dataAuthUrl,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const iframe = window.document.getElementById(
      `telegram-login-${process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME}`
    ) as HTMLIFrameElement;

    if (iframe) {
      iframe.onload = () => {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDocument) {
          const button = iframeDocument.querySelector("button");
          if (button) {
            button.style.backgroundColor = "red";
            button.style.color = "white";
          }
        }
      };
    }
  }, []);

  return <Wrapper ref={ref} className={className} {...wrapperProps} />;
};

export default TelegramLoginButton;
