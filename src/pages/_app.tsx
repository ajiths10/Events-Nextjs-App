import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtestedRoutes from "@/components/auth";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="Events" content="Events NextJs app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <>
          <SnackbarProvider>
            <ProtestedRoutes>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ProtestedRoutes>
            {process.env.SERVER_ENVIRONMENT === "staging" ? (
              <ReactQueryDevtools />
            ) : null}
          </SnackbarProvider>
        </>
      </QueryClientProvider>
    </>
  );
}
