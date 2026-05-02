import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NORDIVA HOME EUROPE - Premium Furniture',
  description: 'Premium furniture for your home. Sofas, tables, chairs, beds and more.',
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
