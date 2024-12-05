export interface SubscriptionsI {
  id: string;
  userId: string;
  plan: {
    id: string;
    name: string;
    price: number;
    duration: string;
    show: true;
    type: string;
    protocols: string[];
  };
  startAt: string;
  endAt: string;
  isTest: boolean;
  identifier: string;
  isActive: true;
  autoRenew: string;
}

export interface SubscriptionI {
  id: string;
  userId: string;
  plan: {
    id: string;
    name: string;
    price: number;
    duration: string;
    show: boolean;
    type: string;
    protocols: string[];
  };
  startAt: string;
  endAt: string;
  isTest: boolean;
  identifier: string;
  isActive: boolean;
  autoRenew: string;
}

export interface CountryI {
  emoji: string;
  id: string;
  isAutoPicked: boolean;
  name: string;
}

interface ProtocolI {
  name: string;
  countries: CountryI[];
}
export interface SubscirptionConfigI {
  protocols: ProtocolI[];
}

export interface AccessKeyI {
  key: string;
  instruction: string;
}

export interface PaymentGenerateRequestI {
  metadata: {
    userId: string;
    planId: string;
  };
  paymentMethod: string;
  returnUrl: string;
}


export interface ProfileDataI {
  email: string | null;
  id: string;
  source: string | null;
  telegramId: string | null;
  username: string | null;
}

export interface TelegramLoginI {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  photo_url: string | null;
  username: string | null;
}
