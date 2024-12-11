"use client";
import { MainLayout } from "@/app/components/MainLayout";
import { Container } from "./styled";
import { PropsI } from "./types";
import { Button } from "@/app/components/Button";
import { FaKey, FaCalendarAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { GetKeyModal } from "@/app/shared/GetKeyModal/GetKeyModal";
import { useEffect, useState } from "react";
import { RenewSubscriptionModals } from "@/app/shared/RenewSubscriptionModals/RenewSubscriptionModals";
import { CancelAutoRenewalModals } from "@/app/shared/CancelAutoRenewalModals/CancelAutoRenewalModals";
import { api } from "@/app/api";
import { SubscriptionI } from "@/app/api/types";
import { differenceInDays, format } from "date-fns";
import Loader from '@/app/components/Loader';

export const Subscription = (props: PropsI) => {
  const { subId } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [subscription, setSubscription] = useState<SubscriptionI | null>(null);
  const [days, setDays] = useState<number>(0);
  const [startAtFormated, setStartAtFormated] = useState<string>("");
  const [endAtFormated, setEndAtFormated] = useState<string>("");

  const getSubscriptionData = () => {
    api.subscription(subId).then((response) => {
      setSubscription(response.data);
      if(response.data) {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getSubscriptionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subId]);

  useEffect(() => {
    if(subscription) {
      const startAt = new Date(subscription.startAt);
      const endAt = new Date(subscription.endAt);
      const days = differenceInDays(endAt, new Date());
      const startAtFormated = format(startAt, "dd.MM.yyyy");
      const endAtFormated = format(endAt, "dd.MM.yyyy");
      setDays(days);
      setStartAtFormated(startAtFormated);
      setEndAtFormated(endAtFormated);
    }
  }, [subscription]);

  const [getKeyModals, setGetKeyModals] = useState<string[]>([]);
  const [renewSubscriptionModals, setRenewSubscriptionModals] = useState<string[]>([]);
  const [cancelAutoRenewalModals, setCancelAutoRenewalModals] = useState<string[]>([]);  

  if (loading || !subscription) {
    return (
      <MainLayout mode="light">
        <Loader />
      </MainLayout>
    );
  }

  return (
    <MainLayout mode="light">
      <Container>
        <h1>{subscription?.plan?.name}</h1>
        <div className="data-content">
          <div className="head">
            <div className="data">
              <div className="title">Тип:</div>
              <div className="value">{subscription?.plan?.type}</div>
            </div>
            <div className="data">
              <div className="title">Период:</div>
              <div className="value">
                {startAtFormated} - {endAtFormated}
              </div>
            </div>
            <div className="data">
              <div className="title">Осталось:</div>
              <div className="value">{days} дней</div>
            </div>
            <div className="data">
              <div className="title">Автопродление:</div>
              <div
                className={`value dot-green ${
                  subscription?.autoRenew === "enabled" ? "dot-green" : "dot-red"
                }`}
              >
                {subscription?.autoRenew === "enabled"
                  ? "включено"
                  : "отключено"}
              </div>
            </div>
          </div>
          <div className="actions">
            <Button
              onClick={() => setGetKeyModals(["get-key-access"])}
              $icon={<FaKey />}
            >
              <span>Получить ключ доступа</span>
            </Button>
            <Button
              onClick={() => setRenewSubscriptionModals(["renew-subscription"])}
              $icon={<FaCalendarAlt color="#47A98E" />}
              $outlined
            >
              <span>Продлить</span>
            </Button>
            <Button
              $icon={<IoMdCloseCircle color="#EB6467" size={18} />}
              $outlined
              $danger
              onClick={() => {
                if (subscription?.autoRenew !== "disabled") {
                  setCancelAutoRenewalModals(["cancel-confirmation"]);
                }
              }}
            >
              <span>Отменить автопродление</span>
            </Button>
          </div>
        </div>
      </Container>
      <GetKeyModal
        modals={getKeyModals}
        subId={subId}
        onOpenModals={(name) => {
          setGetKeyModals(name);
        }}
      />
      <RenewSubscriptionModals
        modals={renewSubscriptionModals}
        subscription={subscription}
        onOpenModals={(name) => {
          setRenewSubscriptionModals(name);
        }}
      />
      <CancelAutoRenewalModals
        modals={cancelAutoRenewalModals}
        subId={subId}
        onCancelationSubmited={() => getSubscriptionData()}
        onOpenModals={(name) => {
          setCancelAutoRenewalModals(name);
        }}
      />
    </MainLayout>
  );
};
