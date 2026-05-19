"use client"

import Link from "next/link"
import Image from "next/image"

import { Menu, House, Briefcase, MapPinned } from "lucide-react"

// Import Component
import {
  NavigationMenu, NavigationMenuList, 
  NavigationMenuItem, NavigationMenuLink,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const isiNavbar = [
  { title:"Homepage", href:"/", icon: House, },
  { title:"Service", href:"/service", icon: Briefcase, },
  { title:"Tracking", href:"/tracking", icon: MapPinned, },
]

export function Navbar(){

  return (
    <header className="sticky top-0 w-full flex items-center justify-between px-gap-24 md:px-gap-80 py-gap-16 bg-brand-background/95">

      {/* LOGO */}
      <div className="relative w-66 md:w-60 h-15">
        <Image src="/images/logo/Logo_Horizontal_Black.svg"
        alt="Logo" fill priority className="h-auto"
        />
      </div>
      
      {/* NAVIGATION DESKTOP*/}
      <div className="hidden md:flex items-center gap-gap-24 md:gap-gap-48 ">
        <NavigationMenu>
          <NavigationMenuList>
            {isiNavbar.map((isi) => (
              <NavigationMenuItem key={isi.href}>
                <NavigationMenuLink asChild>
                  <Link className="w-[12vw] h-10 flex items-center justify-center text-[16px] font-medium" href={isi.href}>
                    {isi.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <Button asChild className="rounded-brand bg-brand-primary text-text-white w-32 h-6.75 text-[16px] font-medium hover:bg-brand-primary/90">
          <Link href="/booking">Booking</Link>
        </Button>
      </div>

      {/* NAVIGATION MOBILE */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="w-auto h-auto p-2">
              <Menu size={40} />
            </Button>
          </SheetTrigger>

          <SheetContent className="bg-brand-background px-gap-24 py-gap-36" aria-describedby="">
            <SheetTitle className="mb-gap-24 text-[24px] font-bold">MENU</SheetTitle>

            {/* MENU LIST */}
            <div className="flex flex-col gap-gap-8">
              {isiNavbar.map((isi) => {
                const Icon = isi.icon

                return (
                  <nav key={isi.href}>
                    <Link
                      href={isi.href}
                      className="w-full h-12 flex items-center gap-3 px-4 rounded-brand
                        text-[18px] font-medium transition-all duration-200 hover:bg-brand-primary/10"
                    >
                      <Icon size={20} />
                      {isi.title}
                    </Link>
                  </nav>
                )
              })}
            </div>

            {/* DIVIDER */}
            <div className="my-gap-24 border-t border-black/10" />

            {/* CTA */}
            <Button asChild className="rounded-brand bg-brand-primary text-text-white w-full h-12 text-[18px] font-semibold hover:bg-brand-primary/90">
              <Link href="/booking">Booking</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
  </header>
  );
}




//         {/* 2. DESKTOP NAVIGATION (Muncul hanya di layar besar / md up) */}
//         <nav className="hidden md:flex items-center gap-2">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-1">
//               <NavListItem href="/" title="Home" />
//               <NavListItem href="/services" title="Service" />
//               <NavListItem href="/track" title="Tracking" />
//             </NavigationMenuList>
//           </NavigationMenu>

//           {/* Tombol CTA (Call to Action) */}
//           {/* Menggunakan warna 'brand-primary' yang sudah kamu definisikan di globals.css */}
//           <Button asChild className="ml-4 rounded-full bg-brand-primary px-8 hover:bg-brand-other-blue transition-all">
//             <Link href="/booking">Booking</Link>
//           </Button>
//         </nav>

//         {/* 3. MOBILE NAVIGATION (Hanya muncul di layar kecil) */}
//         <div className="flex md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               {/* 'variant="ghost"': Tombol tanpa background agar terlihat bersih */}
//               <Button variant="ghost" size="icon" className="text-brand-primary">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Toggle Menu</span> 
//                 {/* 'sr-only': Teks tersembunyi khusus untuk pembaca layar (Screen Reader) */}
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-300 border-l-brand-divider">
//               <div className="flex flex-col gap-6 mt-10">
//                 <Link href="/" className="text-lg font-semibold">Home</Link>
//                 <Link href="/services" className="text-lg font-semibold">Service</Link>
//                 <Link href="/track" className="text-lg font-semibold">Tracking</Link>
//                 <Button asChild className="bg-brand-primary w-full mt-4">
//                   <Link href="/booking">Booking</Link>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }

// // Sub-komponen agar kode tidak berulang (Reusability)
// function NavListItem({ href, title }: { href: string; title: string }) {
//   return (
//     <NavigationMenuItem>
//       <Link href={href} legacyBehavior passHref>
//         <NavigationMenuLink 
//           className={cn(
//             navigationMenuTriggerStyle(), 
//             "bg-transparent font-medium text-brand-primary hover:text-brand-accent transition-colors"
//           )}
//         >
//           {title}
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuItem>
//   )
// }