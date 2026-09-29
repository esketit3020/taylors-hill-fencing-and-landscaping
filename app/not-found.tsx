import Link from 'next/link';

export default function NotFound() {
  return <main className="section"><p className="eyebrow">TAYLORS HILL FENCING & LANDSCAPING</p><h1>Page not found.</h1><p style={{ margin: '24px 0' }}>Let’s get you back to the right place.</p><Link className="button button-dark" href="/">Back to home</Link></main>;
}
