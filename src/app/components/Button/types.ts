export interface PropsI {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  $danger?: boolean;
  style?: React.CSSProperties;
  $icon?: React.ReactNode;
  ariaLabel?: string;
  $outlined?: boolean;
  $chevron?: boolean;
}
