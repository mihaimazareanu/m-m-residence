import '@/styles/globals.css';
import { UserContextProvider } from '@/contexts/UserContext';
import { PageContextProvider } from '@/contexts/PageContext';
import Layout from '@/components/Layout';
import { ReloadContextProvider } from '@/contexts/ReloadContext';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return <PageContextProvider>
          <UserContextProvider>
            <ReloadContextProvider>
              <Layout/>
              <Component {...pageProps} />
              <ScrollToTopButton />
              <Analytics />
            </ReloadContextProvider>
          </UserContextProvider>
        </PageContextProvider>
}
