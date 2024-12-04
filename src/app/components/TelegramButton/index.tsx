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
    if (ref.current === null) return;

    if (
      typeof dataOnauth === "undefined" &&
      typeof dataAuthUrl === "undefined"
    ) {
      throw new Error(
        "One of this props should be defined: dataAuthUrl (redirect URL), dataOnauth (callback fn) should be defined."
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

  return (
    <Wrapper ref={ref} className={className} {...wrapperProps} />
  );
};

export default TelegramLoginButton;
