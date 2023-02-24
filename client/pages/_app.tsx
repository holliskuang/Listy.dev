import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return <div> <Component {...pageProps}/>  <ToastContainer position="bottom-right" autoClose={5000} theme="light" /></div> ;
}
