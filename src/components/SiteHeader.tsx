"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Dil seçenekleri
const languages = [
  { code: "TR", name: "Türkçe" },
  { code: "EN", name: "English" },
  { code: "FR", name: "Français" },
  { code: "DE", name: "Deutsch" },
  { code: "RU", name: "Русский" },
];

// Navigasyon öğeleri
const navItems = [
  { name: "Anasayfa", href: "/" }, // Yeni eklenen Anasayfa
  { name: "Biografi", href: "#biography" },
  { name: "Portföy", href: "/portfolio" },
  { name: "İletişim", href: "mailto:onur@example.com" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("TR"); // Default dil

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Navigation Dropdown (O.P. Button) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="text-2xl font-extralight tracking-widest text-primary p-0 h-auto hover:bg-transparent"
            >
              O.P.
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link href={item.href} className="cursor-pointer">
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hidden md:flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary">
              <Globe className="h-4 w-4 mr-1" />
              {currentLang}
              <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {languages.map((lang) => (
              <DropdownMenuItem 
                key={lang.code} 
                onClick={() => setCurrentLang(lang.code)}
                className={cn(
                    "cursor-pointer",
                    currentLang === lang.code && "bg-accent text-accent-foreground"
                )}
              >
                <span>{lang.name} ({lang.code})</span>
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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Separator />
        <nav className="flex flex-col p-4 space-y-2">
          {/* Navigasyon Öğeleri (Mobil) */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent flex items-center"
            >
              {item.name}
            </Link>
          ))}
          
          <Separator className="my-2" />

          {/* Dil Seçimi (Mobil) */}
          <div className="px-2 pt-2 text-sm font-semibold text-muted-foreground">Dil Seçimi</div>
          <div className="grid grid-cols-3 gap-2 p-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={currentLang === lang.code ? "default" : "outline"}
                size="sm"
                onClick={() => {
                    setCurrentLang(lang.code);
                    setIsOpen(false);
                }}
              >
                {lang.code}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}