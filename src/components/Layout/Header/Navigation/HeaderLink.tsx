"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  return (
    <div
      className="relative py-2"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className={`text-16 font-medium flex items-center gap-1 transition-colors ${
          path === item.href
            ? "text-primary"
            : "text-midnight_text dark:text-white hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <span className="text-sm">▼</span>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="absolute top-full left-0 py-2 w-56 bg-white dark:bg-darkmode shadow-xl rounded-xl border border-gray-100 dark:border-gray-800">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                path === subItem.href
                  ? "text-white bg-primary"
                  : "text-midnight_text dark:text-white hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;