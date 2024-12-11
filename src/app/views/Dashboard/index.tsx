"use client";
import { format, differenceInDays } from "date-fns";
import { MainLayout } from "@/app/components/MainLayout";
import { Container } from "./styled";
import { Button } from "@/app/components/Button";
import { useIsAuthUser } from "@/app/hooks/useIsAuthUser";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
import { SubscriptionI } from "@/app/api/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Dashboard = () => {
  const isAuth = useIsAuthUser();

  const [subscriptions, setSubscriptions] = useState<SubscriptionI[]>([]);
  const [onLoad, setOnLoad] = useState(false);
  useEffect(() => {
    setOnLoad(true);
    api.subscriptions().then(({ data }) => {
      setOnLoad(false);
      setSubscriptions(data);
    });
  }, []);

  return !!isAuth && (
    <MainLayout mode="light">
      <Container>
        <h1>Мои подписки</h1>
        <ul>
          {onLoad ? (
            <li>Загрузка...</li>
          ) : (
            subscriptions.map((sub) => {
              const startAt = new Date(sub.startAt);
              const endAt = new Date(sub.endAt);
              const days = differenceInDays(endAt, new Date());
              return (
                <SubscriptionCard
                  key={sub.id}
                  sub={sub}
                  startAt={startAt}
                  endAt={endAt}
                  days={days}
                />
              )
            })
          )}
        </ul>
      </Container>
    </MainLayout>
  )
};


const SubscriptionCard = ({
  sub,
  startAt,
  endAt,
  days,
}) => {
  const router = useRouter();
  return (
    <li key={sub.id}>
      <div className="name">
        <Image
          className="icon"
          src={"/ellipse.png"}
          alt=""
          width={10}
          height={10}
        />
        <span>{sub.plan.name}</span>
      </div>
      <div className="type data">
        <label className="title">Тип:</label>
        <div className="value">
          {sub.plan.type}
        </div>
      </div>
      <div className="period data">
        <label className="title">Период:</label>
        <div className="value">
          {format(startAt, "dd.MM.yyyy")}&nbsp;-&nbsp;
          {format(endAt, "dd.MM.yyyy")}
        </div>
      </div>
      <div className="estimate data">
        <label className="title">Осталось:</label>
        <div className="value">{days} дней</div>
      </div>
      <div className="action data">
        <Button
          onClick={() => router.push(`/subscription/${sub.id}`)}
          $chevron
        >
          Перейти
        </Button>
      </div>
    </li>
  )
}