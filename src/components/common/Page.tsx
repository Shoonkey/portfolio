import Head from "next/head";
import { ReactNode, useMemo } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  const computedTitle = useMemo(() => `${title} | Shoonkey's portfolio`, []);

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
