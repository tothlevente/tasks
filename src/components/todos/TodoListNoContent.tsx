import { useTranslation } from "react-i18next";

export default function TodoListNoContent() {
  const { t } = useTranslation();

  return (
    <div className="todo-list-no-content">
      <p>
        <b>{t("noContentTitle")}</b>
      </p>
      <p>{t("noContentDescription")}</p>
      <p className="check-red">{t("browserSavedContentWarn")}</p>
    </div>
  );
}
