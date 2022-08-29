import "../styles/globals.css";
import BackgroundContextProvider from "../context/BackgroundContext";

function MyApp({ Component, pageProps }) {
  return (
    <BackgroundContextProvider>
      <Component {...pageProps} />
    </BackgroundContextProvider>
  );
}

export default MyApp;
