import { UserButton, ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import { HeaderLogo } from '@/components/headerlogo';
import { Navigation } from '@/components/navigation';
import { Loader2 } from 'lucide-react';
import { WelcomeMsg } from '@/components/welcomemsg';
import { Filters } from '@/components/filter';
import { ModeToggle } from '@/components/theme-mode';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-red-700 to-blue-200 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ModeToggle />
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};
