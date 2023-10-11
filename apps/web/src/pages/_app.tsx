import "@/src/styles/globals.css";
import { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
