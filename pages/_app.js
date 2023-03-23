import '@/styles/globals.css';
import { UserContextProvider } from '@/contexts/UserContext';
import { PageContextProvider } from '@/contexts/PageContext';
import Layout from '@/components/Layout';
import { ReloadContextProvider } from '@/contexts/ReloadContext';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function App({ Component, pageProps }) {
  return <PageContextProvider>
          <UserContextProvider>
            <ReloadContextProvider>
              <Layout/>
              <Component {...pageProps} />
              <ScrollToTopButton />
            </ReloadContextProvider>
          </UserContextProvider>
        </PageContextProvider>
}
