/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
      TelegramLoginWidget?: {
        dataOnauth: (user: any) => void;
      };
    }
  }
  
  export {};
  