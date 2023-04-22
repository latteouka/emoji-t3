import { type AppType } from "next/app";
import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router);
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>EMOJI</title>
        <meta name="description" content="EMOJIJIJIJIJI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
