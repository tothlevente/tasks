import { useTranslation } from "react-i18next";

import moment from "moment";

export const CreatedAt = ({ value }: { value: Date }) => {
  const { t } = useTranslation();

  return (
    <p className="at">
      <b>{t("createdAt")}</b> {moment(value).format("LLL")}
    </p>
  );
};
