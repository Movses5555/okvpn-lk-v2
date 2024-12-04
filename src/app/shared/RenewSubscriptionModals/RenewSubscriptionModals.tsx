import { Modal, Window } from "@/app/components/Modal";
import { ModalContainer } from "./styled";
import { Button } from "@/app/components/Button";
import { PropsI } from "./types";
import { useState } from "react";
import { api } from "@/app/api";

export const RenewSubscriptionModals = (props: PropsI) => {
  const { modals, onOpenModals, subscription } = props;
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);

  const currentPlanId = `ok_vpn_${selectedPeriod}_month`;

  const handleRenewSubscription = async () => {
    const { data } = await api.paymentGenerate({
      metadata: {
        planId: currentPlanId,
        userId: subscription.userId,
      },
      paymentMethod: "yookassa",
      returnUrl: `${window.location.origin}/subscription/${subscription.id}`,
    });

    window.location.href = data.link;
  };

  return (
    <Modal open={modals}>
      <Window
        name="renew-subscription"
        onRequestToClose={() =>
          onOpenModals(modals.filter((c) => c !== "renew-subscription"))
        }
      >
        <ModalContainer>
          <h1>Продлить подписку</h1>
          <div className="boxes">
            <label>Выберите срок</label>
            <ul className="subscription-variants">
              <li
                className={`${selectedPeriod === 1 ? "active" : ""}`}
                onClick={() => setSelectedPeriod(1)}
              >
                <h1>1</h1>
                <p>месяц</p>
              </li>
              <li
                className={`${selectedPeriod === 3 ? "active" : ""}`}
                onClick={() => setSelectedPeriod(3)}
              >
                <h1>3</h1>
                <p>месяца</p>
              </li>
              <li
                className={`${selectedPeriod === 12 ? "active" : ""}`}
                onClick={() => setSelectedPeriod(12)}
              >
                <h1>12</h1>
                <p>месяцев</p>
              </li>
            </ul>
          </div>
          <div className="action">
            <Button $chevron onClick={() => handleRenewSubscription()}>
              Продлить
            </Button>
          </div>
        </ModalContainer>
      </Window>
    </Modal>
  );
};
