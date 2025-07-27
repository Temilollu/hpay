import { useState } from "react";
import { mainNavItems } from "../../utils";
import { SidebarAccordionItem } from "./sidebar-accordion-item";
import { ArrowRightIcon, Menu, X } from "lucide-react";

export const Sidebar = () => {
  const [open, setOpen] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (label) =>
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  const content = (
    <aside className="w-64 border-r bg-gray-100 border-black flex flex-col">
      <div className="h-16 flex items-center px-4 font-bold text-lg">
        <span className="w-6 h-6 bg-lime-200 text-black flex items-center justify-center mr-1">
          B
        </span>{" "}
        rutalism
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-2">
        {mainNavItems.map((item) => {
          const { label, icon: Icon, active, children = [] } = item;
          return children?.length > 0 ? (
            <div key={label}>
              <SidebarAccordionItem
                item={item}
                isOpen={!!open[label]}
                onToggle={() => toggle(label)}
                ButtonIcon={Icon}
              />
            </div>
          ) : (
            <button
              key={label}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded transition ${
                active
                  ? "border-black border bg-white border-1 font-medium"
                  : "hover:bg-neutral-100"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />} {label}
            </button>
          );
        })}

        <div className="mt-6 p-3 border border-black rounded bg-neutral-50">
          <div className="font-medium mb-2">Upgrade to Pro</div>
          <p className="text-sm text-neutral-600 mb-3">
            Are you looking for more features? Check out our Pro version.
          </p>
          <button className="w-full flex items-center gap-2 py-2 px-3 rounded bg-lime-200 text-black font-medium hover:bg-lime-300 transition">
            <ArrowRightIcon className="w-4 h-4" /> Upgrade Now
          </button>
        </div>
      </nav>
    </aside>
  );

  return (
    <>
      {!mobileOpen && (
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setMobileOpen(true)}
            className="bg-black text-white p-2 rounded"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="hidden md:flex h-full">{content}</div>

      {mobileOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-40 z-40">
          <div className="fixed top-0 left-0 z-50 h-full overflow-y-scroll">
            {content}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="fixed top-4 right-4 z-50 bg-white text-black p-2 rounded shadow"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};
