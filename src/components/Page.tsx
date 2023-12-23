import Head from "next/head";
import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { DEFAULT_PREVIEW_IMAGE } from "@/shared/constants";

export interface PageMetadata {
  title: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
}

interface PageProps {
  metadata: PageMetadata;
  children: ReactNode;
}

function Page({ metadata: metadataProp, children }: PageProps) {
  const { t } = useTranslation();

  const metadata: PageMetadata = useMemo(
    () => ({
      imgSrc: DEFAULT_PREVIEW_IMAGE.src,
      imgAlt: DEFAULT_PREVIEW_IMAGE.alt,
      ...metadataProp,
    }), 
    [metadataProp]
  );

  const computedTitle = useMemo(
    () => `${metadata.title} | ${t("globalAppTitle")}`,
    [t, metadata]
  );

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />

        {/* Metadata for social media previews */}

        <meta property="og:title" content={computedTitle} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://shoonkey.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://shoonkey.com${metadata.imgSrc}`} />
        <meta property="og:image:alt" content={metadata.imgAlt} />

        <meta name="twitter:title" content={computedTitle} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:url" content="https://shoonkey.com" />
        <meta name="twitter:image" content={`https://shoonkey.com${metadata.imgSrc}`} />
        <meta name="twitter:image:alt" content={metadata.imgAlt} />
        <meta name="twitter:creator" content="@shooonkey" />
        <meta name="twitter:site" content="@shooonkey" />

        {/* Favicon */}
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      {children}
    </>
  );
}

export default Page;
