"use client";

import Link from "next/link";
import { categories, CategoryItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          Onur PAZAROĞLU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((category: CategoryItem) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
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
          {categories.map((category: CategoryItem) => (
            <Link
              key={category.name}
              href={category.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}