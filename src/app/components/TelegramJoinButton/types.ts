/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { CSSProperties } from "react";

export interface TelegramLoginButtonProps {
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  dataAuthUrl?: string;
  usePic?: boolean;
  botName: string;
  className?: string;
  buttonSize?: "small" | "medium" | "large";
  dataOnauth?: (user: any) => void;
  cornerRadius?: number;
  requestAccess?: boolean;
  wrapperStyles: CSSProperties
  buttonStyles: CSSProperties
  buttonText: string
}
