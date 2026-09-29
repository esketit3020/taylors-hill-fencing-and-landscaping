"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus(); }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return (<header className="header"><a className="brand" href="#" aria-label="Taylors Hill Fencing and Landscaping home"><span className="brand-mark" aria-hidden="true">TH<span>///</span></span><span>TAYLORS HILL<small>FENCING & LANDSCAPING</small></span></a><button className="menu-toggle" aria-expanded={open} ref={toggleRef} onClick={() => setOpen(!open)} aria-controls="navigation">Menu <span aria-hidden="true">☰</span></button><nav className={open ? "open" : undefined} onClick={event => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }} id="navigation" aria-label="Main navigation"><a href="#services">What we do</a><a href="#work">Our work</a><a href="#about">About us</a><a className="button button-dark" href="#contact">Get a quote</a></nav></header>);
}
