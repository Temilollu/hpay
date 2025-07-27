import {
  Accessibility,
  BadgeHelp,
  Bell,
  Mail,
  Search,
  Settings,
} from "lucide-react";

export const Topbar = () => {
  return (
    <header className="h-16 border-b border-black flex items-center justify-between px-4">
      <div className="hidden md:flex items-center gap-2 border border-black w-90  rounded px-3 py-2">
        <input
          className="bg-transparent outline-none flex-1"
          placeholder="Search..."
        />
        <Search className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-4">
        <Settings className="w-9 h-9 border border-black p-2 rounded-full bg-white" />
        <BadgeHelp className="w-9 h-9 border border-black p-2 rounded-full bg-white" />

        <div className="relative">
          <Mail className="w-9 h-9 border border-black p-2 rounded-full bg-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            3
          </span>
        </div>
        <div className="relative">
          <Bell className="w-9 h-9 border p-2 border-black rounded-full bg-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            4
          </span>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};
