import { Select } from "@/app/components/Select";
import { Modal, Window } from "../../components/Modal";
import { ModalContainer, CountryLabel } from "./styled";
import { Button } from "@/app/components/Button";
import { InputClipboard } from "@/app/components/InputClipboard";
import { FaInfoCircle } from "react-icons/fa";
import { PropsI } from "./types";
import { useEffect, useState } from "react";
import { AccessKeyI, CountryI, SubscirptionConfigI } from "@/app/api/types";
import { api } from "@/app/api";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const GetKeyModal = (props: PropsI) => {
  const { modals, onOpenModals, subId } = props;
  const router = useRouter();

  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [subscriptionConfig, setSubscriptionConfig] =
    useState<SubscirptionConfigI | null>(null);

  const [accessKey, setAccessKey] = useState<AccessKeyI>({
    key: "",
    instruction: "",
  });

  useEffect(() => {
    api
      .subscriptionConfig(subId)
      .then((res) => {
        setSubscriptionConfig(res.data);
      })
      .catch(() => {
        router.replace("/");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subId]);

  const protocols = subscriptionConfig?.protocols.map((c) => c.name);
  let countries: CountryI[] = [];

  if (selectedProtocol) {
    countries = subscriptionConfig?.protocols.find(
      (c) => c.name === selectedProtocol
    )?.countries as CountryI[];
  }

  const getAccessKey = () => {
    if (selectedCountry && selectedProtocol && subId) {
      api
        .getKey({
          country: selectedCountry,
          protocol: selectedProtocol,
          subscriptionId: subId,
        })
        .then((res) => {
          setAccessKey(res.data);
          onOpenModals(["your-key-of-access"]);
        });
    }
  };

  if (protocols) {
    return (
      <Modal open={modals}>
        <Window
          name="get-key-access"
          onRequestToClose={() =>
            onOpenModals(modals.filter((c) => c !== "get-key-access"))
          }
        >
          <ModalContainer>
            <h1>Получить ключ доступа</h1>
            <div className="boxes">
              <Select
                label="Протокол подписки"
                options={protocols.map((pro) => ({ label: pro, value: pro }))}
                onChange={(newValue) => {
                  setSelectedCountry("");
                  setSelectedProtocol(newValue);
                }}
                value={selectedProtocol || ""}
              />
              <Select
                label="Страна"
                options={countries.map((country) => ({
                  label: (
                    <CountryLabel>
                      <Image
                        src={`/flags/${country.id}.png`}
                        width={20}
                        height={20}
                        alt=""
                      />{" "}
                      {country.name}
                    </CountryLabel>
                  ),
                  value: country.id,
                }))}
                onChange={(value) => setSelectedCountry(value)}
                value={selectedCountry}
              />
            </div>
            <div className="action">
              <Button $chevron onClick={() => getAccessKey()}>
                Ваш ключ доступа
              </Button>
            </div>
          </ModalContainer>
        </Window>
        <Window
          name="your-key-of-access"
          onRequestToClose={() =>
            onOpenModals(modals.filter((c) => c !== "your-key-of-access"))
          }
        >
          <ModalContainer>
            <h1>Ваш ключ доступа</h1>
            <InputClipboard value={accessKey.key} onChange={() => {}} />
            <div className="action">
              <Button
                $icon={<FaInfoCircle />}
                onClick={() => {
                  window.open(accessKey.instruction)
                }}
              >
                <span>Смотреть инструкцию</span>
              </Button>
            </div>
          </ModalContainer>
        </Window>
      </Modal>
    );
  }

  return null;
};
