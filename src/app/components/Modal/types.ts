export interface ModalPropsI {
  open: string[];
  children: React.ReactNode | React.ReactNode[]
}

export interface WindowPropsI {
  name: string;
  onRequestToClose: (name: string) => void;
  children: React.ReactNode | React.ReactNode[]
}