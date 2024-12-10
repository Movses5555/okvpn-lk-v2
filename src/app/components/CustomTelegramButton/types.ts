export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export interface CustomTelegramButtonProps {
  botName: string; // Your bot username (e.g., @YourBotName)
  onAuth: (user: TelegramUser) => void; // Callback for when the user logs in
}