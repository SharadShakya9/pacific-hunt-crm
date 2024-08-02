"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuProps } from "./Filter/CategoryFilter";

export function DropdownMenuRadioGroupDemo1({
  menuProps,
  menuName,
}: {
  menuProps: MenuProps[];
  menuName: string;
}) {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-5 rounded border border-dark-4 px-3">
          {menuName}
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.999787 0C0.802037 4.22243e-05 0.608738 0.0587139 0.444329 0.168598C0.279919 0.278482 0.151779 0.434646 0.0761092 0.617346C0.000439122 0.800046 -0.0193641 1.00108 0.0192034 1.19503C0.057771 1.38898 0.152978 1.56715 0.292787 1.707L5.29279 6.707C5.48031 6.89447 5.73462 6.99979 5.99979 6.99979C6.26495 6.99979 6.51926 6.89447 6.70679 6.707L11.7068 1.707C11.8466 1.56715 11.9418 1.38898 11.9804 1.19503C12.0189 1.00108 11.9991 0.800046 11.9235 0.617346C11.8478 0.434646 11.7197 0.278482 11.5552 0.168598C11.3908 0.0587139 11.1975 4.22243e-05 10.9998 0H0.999787Z"
              fill="#6B6D6F"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {menuProps.map((item) => (
            <DropdownMenuRadioItem value={item.label}>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
