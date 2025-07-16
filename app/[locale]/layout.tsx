import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Easy Quesadilla Recipes - Quesadilla Corner',
    template: '%s | Quesadilla Corner',
  },
  description: 'Find easy, delicious quesadilla recipes for any occasion. From classic chicken to vegetarian options, start cooking with us!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://quesadillacorner.site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-5797254464105941" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5797254464105941" crossOrigin="anonymous"></script>  
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}