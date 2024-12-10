"use client";
import { MainLayout } from "@/app/components/MainLayout";
import { Container } from "./styled";
import { Input } from "@/app/components/Input";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
import { ProfileDataI } from "@/app/api/types";
import { useIsAuthUser } from "@/app/hooks/useIsAuthUser";

// import Loader from "@/app/components/Loader";
// import { SiTruenas } from "react-icons/si";
// import { Button } from "@/app/components/Button";
import TelegramLoginButton from "@/app/components/TelegramButton";
export const Profile = () => {
  const isAuth = useIsAuthUser();

  const [profileData, setProfileData] = useState<ProfileDataI | null>(null);
  const [telegramError, setTelegramError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true)
    api.profileData().then((res) => {
      setProfileData(res.data);
      setLoading(false)
    });
  }, []);
  console.log('profileData.telegramId', profileData?.telegramId);
  

  const botName = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || '';

  const handleBot = async (user) => {
    console.log('telegram User', user);
    
    setTelegramError(() => "");
    if(profileData && user) {
      api
        .updateProfileTelegramId(user)
        .then((response) => {
          console.log('response', response);
          
        })
        .catch((e) => {
          console.log('error', e);
          console.log('error.response', e.response);
          
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
              <p>Загрузка...</p>
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
                      value={ profileData.username ? profileData.username : ""}
                    />
                  ) : (
                    <div className="button-wrapper">
                      <label>Телеграм</label>
                      {/* <Button
                        $outlined
                        type="button"
                        onClick={() => {}}
                      >
                        Привязать
                      </Button> */}
                      <TelegramLoginButton
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
