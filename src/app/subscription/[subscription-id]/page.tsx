"use client";

import { useParams } from "next/navigation";
import { Subscription as SubcriptionView } from "@/app/views/Subscription";
import { useIsAuthUser } from "@/app/hooks/useIsAuthUser";
export default function Subscription() {
  const isAuth = useIsAuthUser();
  const params = useParams();
  const subscriptionId = params["subscription-id"];

  return isAuth ? <SubcriptionView subId={subscriptionId as string} /> : "";
}
