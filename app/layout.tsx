import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taylors-hill-fencing-and-landscapin.vercel.app'),
  title: 'Taylors Hill Fencing & Landscaping | Fencing & Gates Melbourne West',
  description:
    'Domestic timber, steel and aluminium fencing, gates and landscaping in Taylors Hill and surrounding Melbourne western suburbs. Call 0402 064 931.',
  openGraph: {
    title: 'Taylors Hill Fencing & Landscaping',
    description: 'Local fencing, gates and landscaping for Taylors Hill and surrounding suburbs.',
    type: 'website',
    locale: 'en_AU',
  },
};

export const viewport: Viewport = {
  themeColor: '#183c31',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
