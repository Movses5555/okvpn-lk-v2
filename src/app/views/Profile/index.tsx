"use client";
import { MainLayout } from "@/app/components/MainLayout";
import { Container } from "./styled";
import { Input } from "@/app/components/Input";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
import { ProfileDataI } from "@/app/api/types";
import { useIsAuthUser } from "@/app/hooks/useIsAuthUser";
import Loader from "@/app/components/Loader";
import TelegramButton from "@/app/components/TelegramButton";
import { loadTelegramWidget } from "../../utils";

export const Profile = () => {
  const isAuth = useIsAuthUser();
  const [profileData, setProfileData] = useState<ProfileDataI | null>(null);
  const [telegramError, setTelegramError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadTelegramWidget();
    setLoading(true);
    api.profileData().then((res) => {
      setProfileData(res.data);
      setLoading(false);
    });
  }, []);

  const botName = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || '';

  const handleBot = async (user) => {
    setTelegramError(() => "");
    if(profileData && user) {
      api
        .updateProfileTelegramId(user)
        .then((response: { data: ProfileDataI | null }) => {
          const { data } = response;          
          if (data) {
            setProfileData(data);
          }
        })
        .catch((e) => {
          const message = e?.response?.data?.msg || 'Something went wrong.';
          setTelegramError(() => message);
        });
    }
  };

  return isAuth ? (
    <MainLayout mode="light">
      <Container>
        <h1>Профиль</h1>
        <div className="box">
          {
            loading || !profileData ? (
              <Loader />
            ) : (
              <>
                <Input
                  label="Email"
                  onChange={() => {}}
                  value={profileData.email ? profileData.email : ""}
                />
                {
                  profileData.telegramId ? (
                    <Input
                      label="Телеграм"
                      onChange={() => {}}
                      value={ profileData.username ? '@' + profileData.username : ""}
                      disabled
                    />
                  ) : (
                    <div className="button-wrapper">
                      <label>Телеграм</label>
                      <TelegramButton
                        botName={botName}
                        buttonSize="large"
                        cornerRadius={3}
                        usePic={false}
                        dataOnauth={handleBot}
                      />
                      { telegramError ? <div className="error-message">{telegramError}</div> : null}
                    </div>
                  )
                }
              </>
            )
          }
        </div>
      </Container>
    </MainLayout>
  ) : (
    ""
  );
};
