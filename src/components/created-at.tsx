import { useTranslation } from "react-i18next";

export default function CreatedAt({ value }: { value: Date }) {
  const { t } = useTranslation();

  return (
    <p className="at">
      <b>{t("createdAt")}</b> {value.toLocaleString("en-GB", { timeZone: "UTC" })}
    </p>
  );
}
