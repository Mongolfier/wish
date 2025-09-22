"use client";

import { useEffect, useState } from "react";
import {
  type FallbackNs,
  initReactI18next,
  useTranslation as useTranslationOrigin,
  type UseTranslationOptions,
  type UseTranslationResponse,
} from "react-i18next";
import i18next, { type FlatNamespace, type KeyPrefix } from "i18next";
import Backend from "i18next-chained-backend";
import { useParams } from "next/navigation";

import { getI18nConfig, normalizedFallbackLng as fallbackLng } from "./config";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    ...getI18nConfig(),
    detection: {
      order: ["path", "cookie", "navigator"],
    },
    preload: [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns | Ns[],
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const params = useParams();
  const locale = params?.locale || fallbackLng;

  const newOptions = {
    ...options,
    lng: Array.isArray(locale) ? locale[0] : (locale as string),
  };

  const ret = useTranslationOrigin(ns, newOptions);
  const { i18n } = ret;

  if (
    runsOnServerSide &&
    newOptions.lng &&
    String(i18n.resolvedLanguage) !== String(newOptions.lng)
  ) {
    i18n.changeLanguage(newOptions.lng);
  }

  return ret;
}

const useIntlParams = () => {
  const params = useParams();
  const locale = params?.locale || fallbackLng;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

  const lng = Array.isArray(locale) ? locale[0] : (locale as string);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (activeLng === i18next.resolvedLanguage) {
      return;
    }

    setActiveLng(i18next.resolvedLanguage);
  }, [activeLng, i18next.resolvedLanguage]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!lng || String(i18next.resolvedLanguage) === String(lng)) {
      return;
    }

    i18next.changeLanguage(lng);
  }, [lng]);
};

// eslint-disable-next-line sonarjs/function-return-type
export const I18nProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  useIntlParams();

  return children;
};
