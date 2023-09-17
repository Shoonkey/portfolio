import Head from "next/head";
import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  const { t } = useTranslation();
  const computedTitle = useMemo(() => `${title} | ${t("globalAppTitle")}`, [title, t]);

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </>
  );
}

export default Page;
