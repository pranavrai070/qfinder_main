import Head from 'next/head';
import './globals.css';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Free Temporary Phone Numbers for SMS Verification,| Recieve SMS Online',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
