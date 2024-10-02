'use client';

import Link from 'next/link';
import LogInButton from './LogInButton';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="box-border size-[30px] rounded-full border-[5px] border-foreground"></div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <LogInButton />
      </div>
    </header>
  );
}
