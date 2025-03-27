import { ExternalLinkIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import packageJson from "../../../package.json";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <p className="text-sm pb-1">{t("footerLineLicensed")}</p>
          <p className="text-sm pb-1">{t("footerLineNoCookies")}</p>
          <p className="text-sm pb-1">{t("footerLineUseLocalStorage")}</p>
          <p className="text-sm pb-1">{t("footerLineMoreInformation")}</p>
          <p className="text-sm pb-3">{t("footerLineThankYou")}</p>
          <p className="text-sm">
            {t("footerLineCreatedBy")} | v{packageJson.version}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="flex flex-col space-y-2 mb-4">
            <Button
              variant="outline"
              asChild
            >
              <a
                href="https://github.com/tothlevente/to-do-list"
                target="_blank"
                className="flex items-center hover:underline text-sm"
              >
                <ExternalLinkIcon className="mr-2" />
                {t("footerRepositoryLink")}
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <a
                href="https://github.com/tothlevente/to-do-list/blob/main/LICENSE"
                target="_blank"
                className="flex items-center hover:underline text-sm"
              >
                <ExternalLinkIcon className="mr-2" />
                {t("footerLicenseLink")}
              </a>
            </Button>
          </div>
          <a
            href="https://www.netlify.com"
            target="_blank"
            className="mt-2"
          >
            <img
              src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
              alt="Deploys by Netlify"
              className="w-32"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
