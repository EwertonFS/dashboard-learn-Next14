import '@/app/ui/global.css';
import { inter } from './ui/fonts';
 

//antialiased classe que suaviza a fonte do tailwind
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}