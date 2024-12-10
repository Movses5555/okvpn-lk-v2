import React, { useEffect } from "react";
import { loadTelegramWidget } from "../../utils";
import { TelegramUser } from './types';

interface CustomTelegramButtonProps {
  botName: string; // Your bot's username
  onAuth: (user: TelegramUser) => void; // Callback for authenticated user data
}

const CustomTelegramButton: React.FC<CustomTelegramButtonProps> = ({
  botName,
  onAuth,
}) => {
  useEffect(() => {
    // Ensure the Telegram widget script is loaded
    loadTelegramWidget();

    // Attach the onAuth callback to the global window object
    window.TelegramLoginWidget = {
      dataOnauth: (user) => {
        onAuth(user);
      },
    };
  }, [onAuth]);

  const handleLoginClick = () => {
    if (!window.TelegramLoginWidget) {
      console.error("Telegram widget not loaded");
      return;
    }

    // Trigger Telegram login process if necessary logic is required
    console.log("Telegram login button clicked!");
  };
  console.log('botName', botName);
  

  return (
    <button
      onClick={handleLoginClick}
      style={{
        padding: "10px 20px",
        border: "2px solid #54C1A9",
        borderRadius: "12px",
        backgroundColor: "white",
        color: "#212121",
        fontSize: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      Привязать
    </button>
  );
};

export default CustomTelegramButton;
