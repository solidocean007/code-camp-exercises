"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Exercise One",
    href: "/Exercises/ExOne",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Exercise Two",
    href: "/Exercises/ExTwo",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative">
      <div
        className="flex items-center p-2 bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        Menu
      </div>
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "block p-3 text-sm text-gray-700 hover:bg-sky-100 hover:text-blue-600",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
