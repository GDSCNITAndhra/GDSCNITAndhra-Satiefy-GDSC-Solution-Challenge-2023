import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {}, []);
  return (
    <nav className="fixed z-50 text-slate-100 w-screen h-[10vh] font-thin px-[5vw] flex flex-row justify-between items-center">
      <Link href="/">Satiefy</Link>
      <div className="flex flex-row justify-between gap-6">
        <Link href="#home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/ngo">NGOs</Link>
        <Link href="/donate">Donate</Link>
      </div>
    </nav>
  );
}

export default Navbar;
