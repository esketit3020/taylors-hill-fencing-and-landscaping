'use client';

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="Taylors Hill Fencing and Landscaping home">
        <span className="brand__mark" aria-hidden="true">TH</span>
        <span className="brand__text">TAYLORS HILL<small>FENCING & LANDSCAPING</small></span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        ref={buttonRef}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Menu</span><span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      <nav
        id="main-navigation"
        className={open ? 'nav nav--open' : 'nav'}
        aria-label="Main navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#about">About</a>
        <a className="button button--dark" href="#contact">Get a quote</a>
      </nav>
    </header>
  );
}
