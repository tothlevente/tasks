import { useTranslation } from "react-i18next";

export const NoContent = () => {
  const { t } = useTranslation();

  return (
    <div className="todo-list-no-content">
      <b>{t("noContentTitle")}</b>
      <p>{t("noContentDescription")}</p>
      <p className="check-red">{t("browserSavedContentWarn")}</p>
    </div>
  );
};
