'use client';

import type { ReactNode } from 'react';

export default function ServiceLink({ service, children }: { service: string; children: ReactNode }) {
  return <a href="#contact" onClick={() => window.dispatchEvent(new CustomEvent('quote-service', { detail: service }))}>{children}</a>;
}
