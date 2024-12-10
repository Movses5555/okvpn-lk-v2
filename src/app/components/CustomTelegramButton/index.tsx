import React, { useEffect, useRef } from "react";
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
    
const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the Telegram widget script is loaded
    loadTelegramWidget();

    // Attach the onAuth callback to the global window object
    window.TelegramLoginWidget = {
      dataOnauth: (user) => {
        console.log('UUUUU', user);
        
        onAuth(user);
      },
    };
  }, [onAuth]);

//   const handleLoginClick2 = () => {
//     if (!window.TelegramLoginWidget) {
//       console.error("Telegram widget not loaded");
//       return;
//     }

//     // Trigger Telegram login process if necessary logic is required
//     console.log("Telegram login button clicked!");
//   };

  const handleLoginClick = () => {
    if (!widgetContainerRef.current) return;

    // Remove any previously created widget
    widgetContainerRef.current.innerHTML = "";

    // Create the Telegram login button dynamically
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22"; // Telegram login widget script
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", "large"); // Button size: small, medium, or large
    script.setAttribute("data-radius", "12"); // Corner radius
    script.setAttribute("data-userpic", "false"); // Show user picture (optional)
    script.setAttribute("data-auth-url", ""); // Leave blank if using `data-onauth`
    script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)"); // Callback for user data
    script.async = true;

    script.onload = () => {
        console.log("Telegram login widget script loaded.");
    
        // Try to initialize the widget manually if necessary
        if (window.TelegramLoginWidget) {
          console.log("Initializing Telegram login widget...");
        //   window.TelegramLoginWidget.init(); // Initialize the widget (optional, may not be necessary)
        } else {
          console.error("TelegramLoginWidget not available.");
        }
      };
    
      script.onerror = (error) => {
        console.error("Error loading Telegram widget script:", error);
      };

    // Append the script to the widget container
    widgetContainerRef.current.appendChild(script);
  };
  console.log('botName', botName);
  

  return (
    <>
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
    <div
        ref={widgetContainerRef}
        style={{
            marginTop: "20px",
            minHeight: "50px", // Ensure the container has enough height
            display: "inline-block",
            width: "200px", // Ensure the container has a width
            backgroundColor: "red",
            cursor: "pointer",
        }}
    ></div>
    </>
  );
};

export default CustomTelegramButton;
