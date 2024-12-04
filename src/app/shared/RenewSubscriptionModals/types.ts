import { SubscriptionI } from "@/app/api/types";

export interface PropsI {
  onOpenModals: (name: string[]) => void;
  modals: string[];
  subscription: SubscriptionI;
}