import axios from "@/app/axios";
import { AccessKeyI, PaymentGenerateRequestI, ProfileDataI, SubscirptionConfigI, SubscriptionI, SubscriptionsI, TelegramLoginI, UpdateProfileDataI } from "./types";

export const api = {
  auth(email: string) {
    return axios.post("/auth/email-request", { email });
  },

  emailLogin(data: { email: string; code: string }) {
    return axios.post<{ accessToken: string }>("/auth/email-login", data);
  },

  telegramLogin(data: TelegramLoginI) {
    return axios.post<{ accessToken: string }>("/auth/telegram", data);
  },

  subscriptions() {
    return axios.get<SubscriptionsI[]>("/profile/subscriptions", {});
  },

  subscription(uuid: string) {
    return axios.get<SubscriptionI>(`/profile/subscription/${uuid}`);
  },

  subscriptionConfig(subId: string) {
    return axios.get<SubscirptionConfigI>(`/subscription-settings/${subId}`);
  },

  getKey(data: {
    subscriptionId: string;
    protocol: string;
    country: string;
  }) {
    return axios.post<AccessKeyI>(`/key/v2`, data);
  },

  disableRenew(subId: string) {
    return axios.post(`/subscription/${subId}/disable-renew`);
  },

  paymentGenerate(data: PaymentGenerateRequestI) {
    return axios.post<{ link: string; }>('/payment/generate', data)
  },
   
  profileData() {
    return axios.get<ProfileDataI>('/profile');
  },

  updateProfileTelegramId(data: TelegramLoginI) {
    return axios.put<ProfileDataI>(`/profile`, data);
  }
};
