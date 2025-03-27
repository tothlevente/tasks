import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const NoContent = () => {
  const { t } = useTranslation();

  return (
    <div className="task-list-no-content">
      <h4 className="scroll-m-20 text-xl font-bold tracking-tight">{t("noContentTitle")}</h4>
      <p>{t("noContentDescription")}</p>
      <div className="mt-4 w-[250px] sm:w-[450px]">
        <Alert
          variant="destructive"
          className="dark:bg-red-400 drak:text-red-900 bg-red-100 text-red-900"
        >
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>{t("browserSavedContentAlertTitle")}</AlertTitle>
          <AlertDescription>{t("browserSavedContentAlertDescription")}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
