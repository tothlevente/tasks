import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const NoContent = () => {
  const { t } = useTranslation();

  return (
    <div className="task-list-no-content">
      <b>{t("noContentTitle")}</b>
      <p>{t("noContentDescription")}</p>
      <div className="mt-4 w-[450px]">
        <Alert variant="destructive">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>{t("browserSavedContentAlertTitle")}</AlertTitle>
          <AlertDescription>{t("browserSavedContentAlertDescription")}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
