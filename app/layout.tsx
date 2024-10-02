import './globals.css';
import { Inter } from 'next/font/google';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import '@zkmelabs/widget/dist/style.css';
import OnchainProviders from 'components/OnchainProviders';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Global Basic Income',
  description: 'Get money for being human.',
  openGraph: {
    title: 'Global Basic Income',
    description: 'Get money for being human.'
  }
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} flex items-center justify-center antialiased`}
      >
        <OnchainProviders>
          <ThemeProvider attribute="class">
            <main className="flex w-full flex-col">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </OnchainProviders>
      </body>
    </html>
  );
}
