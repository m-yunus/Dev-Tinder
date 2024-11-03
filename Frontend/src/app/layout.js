import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/layout/Header';
import Footer from '@/Components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dating App',
  description: 'Start something epic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  min-h-screen`}>
        <div className='coverhome bg-blend-overlay'>
        <Header />
        <main className=" min-h-screen">
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
