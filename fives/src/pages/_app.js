import '../styles/main.scss';
import Layout from '../components/Layout';
import { AppContextProvider } from '../store/App';
import Head from 'next/head';

export default function TheFiveHotels({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
