import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NORDIVA HOME EUROPE',
  description: 'Premium Furniture for Your Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
