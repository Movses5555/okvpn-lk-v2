/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";
import { TelegramLoginButtonProps } from "./types";
import { WrapperLoginButton, WrapperJoinButton, JoinButton } from "./styled";

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
  isLoginButton = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || ref.current === null) return;

    if (
      typeof dataOnauth === "undefined" &&
      typeof dataAuthUrl === "undefined"
    ) {
      throw new Error(
        "One of these props should be defined: dataAuthUrl (redirect URL), dataOnauth (callback fn)."
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

  if(isLoginButton) {
    return (
      <WrapperLoginButton
        ref={ref}
        className={className}
        {...wrapperProps}
      >
      </WrapperLoginButton>
    )
  }

  return (
    <WrapperJoinButton
      ref={ref}
      className={className}
      {...wrapperProps}
    >
      <JoinButton>
        <p>Привязать</p>
      </JoinButton>
    </WrapperJoinButton>
  );
};

export default TelegramLoginButton;
