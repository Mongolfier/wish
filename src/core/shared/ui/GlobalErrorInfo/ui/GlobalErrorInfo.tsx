"use client";

import { useTranslation } from "@/core/shared/i18n/client";
import { routes } from "@/core/shared/router";

import css from "./GlobalErrorInfo.module.css";

interface GlobalErrorInfoProps {
  path?: string | undefined;
}

export function GlobalErrorInfo(props: Readonly<GlobalErrorInfoProps>) {
  const { path = routes.index } = props;
  const { t } = useTranslation("global-error");

  const handleResetClick = () => {
    window.location.reload();
  };

  const handleToMainPageClick = () => {
    window.location.href = path;
  };

  return (
    <section>
      <h1>{t("global-error:bugReportNotNeeded")}</h1>

      <div className={css.buttonGroup}>
        <Button mode="primary" size="large" onClick={handleResetClick}>
          {t("global-error:refresh")}
        </Button>

        <Button mode="secondary" size="large" onClick={handleToMainPageClick}>
          {t("global-error:toMainPage")}
        </Button>
      </div>
    </section>
  );
}
