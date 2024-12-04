"use client";
import { MainLayout } from "@/app/components/MainLayout";
import { Container } from "./styled";
import { Input } from "@/app/components/Input";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
import { ProfileDataI } from "@/app/api/types";
import { useIsAuthUser } from "@/app/hooks/useIsAuthUser";
export const Profile = () => {
  const isAuth = useIsAuthUser();

  const [profileData, setProfileData] = useState<ProfileDataI | null>(null);

  useEffect(() => {
    api.profileData().then((res) => {
      setProfileData(res.data);
    });
  }, []);

  return isAuth ? (
    <MainLayout mode="light">
      <Container>
        <h1>Профиль</h1>
        <div className="box">
          {profileData ? (
            <>
              <Input
                label="Email"
                onChange={() => {}}
                value={profileData.email ? profileData.email : ""}
              />
              <Input
                label="Телеграм"
                onChange={() => {}}
                value={profileData.username ? profileData.username : ""}
              />
            </>
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      </Container>
    </MainLayout>
  ) : (
    ""
  );
};
