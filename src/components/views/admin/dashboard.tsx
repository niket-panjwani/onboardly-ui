import Onboarding from "./onboarding"
import Dropdown from "./dropdown"
import Sidebar from "./sidebar"
import React, { useState } from "react"
import Home from "./home"
import Projects from "./projects"
import Settings from "./settings"

export function Dashboard() {
  const [selected, setSelected] = useState('');

  const handleSelect = (linkName: any) => {
    setSelected(linkName);
  };

  return (
    <div key="1" className="flex min-h-screen w-full flex-col lg:grid lg:grid-cols-[280px_1fr]">
      <Sidebar onSelect={handleSelect}/>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
          <Dropdown/>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {
            selected == 'Home' ? <Home/> :
            selected == 'Onboarding' ? <Onboarding/> :
            selected == 'Projects' ? <Projects/> :
            selected == 'Settings' ? <Settings/> :
            <Home/>
          }
        </main>
      </div>
    </div>
  )
}