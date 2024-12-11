/* eslint-disable @typescript-eslint/no-explicit-any */


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
  isLoginButton?: boolean,
}
