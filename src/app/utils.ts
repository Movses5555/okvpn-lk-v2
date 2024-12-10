export const loadTelegramWidget = () => {
  if (!document.getElementById("telegram-login-script")) {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22"; // Latest Telegram widget version
    script.id = "telegram-login-script";
    script.async = true;
    document.body.appendChild(script);
  }
};

  