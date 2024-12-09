// File Location: app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "ImmersiLearn - The Future of Learning",
  description: "Experience the future of education with AR-powered immersive visuals and interactive learning tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
