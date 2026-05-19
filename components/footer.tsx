import Image from "next/image";
import Link from "next/link";

const sosmed: {title:string, icon:string, link:string, }[] = [
  {title: 'Instagram', icon: 'instagram.svg', link:'www.instagram.com',},
  {title: 'Email', icon: 'mail.svg', link:'www.gmail.com',},
  {title: 'Whatsapp', icon: 'whatsapp.svg', link:'www.whatsapp.com',},
]

export function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col px-gap-80 py-gap-24 gap-gap-16 items-center justify-center">
        {/* Logo */}
        <div className="relative w-65 h-15">
          <Image src="/images/logo/Logo_Horizontal_Black.svg" alt="REKARYA" fill className="h-auto"/>
        </div>

        {/* Tagline */}
        <p className="text-center">Transparansi Tanpa Batas, Servis Berkualitas</p>

        {/* Sosmed */}
        <div className="flex items-center gap-gap-16">
          {sosmed.map((sosmed)=> (
            <Link key={sosmed.link} href={sosmed.link} className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-brand-primary">
            <Image src={`/images/social-icon/${sosmed.icon}`} alt={sosmed.title} width={18} height={18} className="text-center"/>
          </Link>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-brand-primary px-gap-80 py-gap-24 w-full text-text-white text-center">
        <p className="font-medium text-[12px] md:text-[16px]">&copy; 2026 Rekarya. All rights reserved.</p>
      </div>
    </footer>
  );
}