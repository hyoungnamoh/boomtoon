import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_Thai } from 'next/font/google';

const notosans = Noto_Sans_Thai({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notosans.className}>
      <Component {...pageProps} />
    </main>
  );
}
