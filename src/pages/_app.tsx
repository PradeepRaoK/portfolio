import { NavBar } from "~/components/layout/Navbar";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  );
   
};

export default MyApp;
