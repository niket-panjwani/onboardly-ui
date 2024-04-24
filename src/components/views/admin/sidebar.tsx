import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { HomeIcon, UserPlusIcon, FolderIcon, SettingsIcon, TerminalIcon, BellIcon } from "@/components/icons"
import Link from "next/link"

const Sidebar = ({ onSelect }: { onSelect: any }) => {
    const [selected, setSelected] = useState('Home');

    const links = [
      { name: 'Home', icon: HomeIcon },
      { name: 'Onboarding', icon: UserPlusIcon },
      { name: 'Projects', icon: FolderIcon },
      { name: 'Settings', icon: SettingsIcon },
    ];

    const handleButtonClick = (name: any) => {
      setSelected(name);
      onSelect(name);
    };

    return (    
    <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <TerminalIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Onboardly</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
            {links.map((link) => {
                const isSelected = selected === link.name;
                const Icon = link.icon;

                return (
                  <button
                    key={link.name}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                      isSelected
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                    onClick={() => handleButtonClick(link.name)}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
    </div>
    )
}

export default Sidebar;