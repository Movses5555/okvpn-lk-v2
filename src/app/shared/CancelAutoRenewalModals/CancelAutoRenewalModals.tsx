import { Modal, Window } from "../../components/Modal";
import { ModalContainer } from "./styled";
import { Button } from "@/app/components/Button";
import { PropsI } from "./types"
import { api } from "@/app/api";

export const CancelAutoRenewalModals = (props: PropsI) => {
  const { modals, onOpenModals, subId, onCancelationSubmited } = props;

  const handleRequestToCancel = async () => {    
    await api.disableRenew(subId)
    onOpenModals(["cancel-info"])
    onCancelationSubmited();
  }

  return (
    <Modal open={modals}>
      <Window
        name="cancel-confirmation"
        onRequestToClose={() =>
          onOpenModals(modals.filter((c) => c !== "cancel-confirmation"))
        }
      >
        <ModalContainer>
          <h1>Вы уверены, что хотите отменить автопродление?</h1>
          <div className="action">
            <Button
              $chevron
              onClick={() => handleRequestToCancel()}
            >
              Подтвердить отмену
            </Button>
          </div>
        </ModalContainer>
      </Window>
      <Window
        name="cancel-info"
        onRequestToClose={() =>
          onOpenModals(modals.filter((c) => c !== "cancel-info"))
        }
      >
        <ModalContainer>
          <h1>Автопродление успешно отменено</h1>
          <p>Способ оплаты удален из системы</p>
          <div className="action">
            <Button onClick={() => onOpenModals([])} $chevron>
              Хорошо
            </Button>
          </div>
        </ModalContainer>
      </Window>
    </Modal>
  );
};
