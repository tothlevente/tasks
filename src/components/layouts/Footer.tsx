import packageJson from "../../../package.json";

import ExternalLink from "../icons/external-link";

import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

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
            <ExternalLink />
            {t("footerRepositoryLink")}
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://github.com/tothlevente/to-do-list/blob/main/LICENSE"
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLink />
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
