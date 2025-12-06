"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, User, Briefcase, Mail, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Yeni navigasyon öğeleri
const navItems = [
  { name: "Biografi", href: "#biography", icon: User },
  { name: "Portföy", href: "#exterior", icon: Briefcase },
  { name: "İletişim", href: "mailto:onur@example.com", icon: Mail },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="text-2xl font-extralight tracking-widest text-primary"
        >
          O.P.
        </Link>

        {/* Desktop Navigation (Dropdown Menu) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hidden md:flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary">
              Menü
              <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button (Hamburger) */}
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Separator />
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent flex items-center"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}