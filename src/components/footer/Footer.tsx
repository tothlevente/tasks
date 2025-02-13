import packageJson from "../../../package.json";

import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p>{t("footerLineLicensed")}</p>
      <p>{t("footerLineNoCookies")}</p>
      <p>{t("footerLineUseLocalStorage")}</p>
      <p>{t("footerLineMoreInformation")}</p>
      <p>{t("footerLineThankYou")}</p>
      <p>
        {t("footerLineCreatedBy")} | v{packageJson.version}
      </p>
      <div className="footer-link">
        <Button asChild>
          <a
            href="https://github.com/tothlevente/to-do-list"
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLinkIcon />
            {t("footerRepositoryLink")}
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://github.com/tothlevente/to-do-list/blob/main/LICENSE"
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLinkIcon />
            {t("footerLicenseLink")}
          </a>
        </Button>
      </div>
      <a
        href="https://www.netlify.com"
        target="_blank"
        style={{ paddingBottom: "10px" }}
      >
        <img
          src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </div>
  );
}
