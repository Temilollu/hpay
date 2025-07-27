import { ChevronDown, ChevronRight } from "lucide-react";

export const SidebarAccordionItem = ({
  item,
  isOpen,
  onToggle,
  ButtonIcon,
}) => {
  const Icon = isOpen ? ChevronDown : ChevronRight;
  const children = item.children;
  return (
    <>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-neutral-100 transition`}
      >
        <span className="flex items-center gap-2">
          {ButtonIcon && <ButtonIcon className="w-4 h-4" />}

          {item.label}
        </span>
        <Icon className="w-4 h-4" />
      </button>
      {isOpen && children && (
        <ul className="ml-8 mt-1 mb-2 space-y-1">
          {children.map((child) => (
            <li key={child.label}>
              <button className="w-full text-left text-sm text-neutral-700 hover:text-black hover:bg-neutral-100 rounded px-2 py-1">
                {child.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
