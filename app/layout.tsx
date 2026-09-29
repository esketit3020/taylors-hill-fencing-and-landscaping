import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taylors Hill Fencing & Landscaping | Local Fencing',
  description: 'Timber, steel and aluminium fencing and gates in Taylors Hill and surrounding suburbs. Talk about your next fencing or landscaping project. Call 0402 064 931.',
  openGraph: {
    title: 'Taylors Hill Fencing & Landscaping',
    description: 'Good fences. Better outdoor living. Fencing and landscaping in Taylors Hill and surrounding suburbs.',
    type: 'website',
    locale: 'en_AU',
  },
};

export const viewport: Viewport = { themeColor: '#183f34' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
