"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  const programLinks = [
    { label: "Women's in Digital", href: "/#programme" },
    { label: "Méthodologie", href: "/#methode" },
    { label: "Modules de formation", href: "/#modules" },
    { label: "Témoignages", href: "/#temoignages" },
  ];

  const participantLinks = [
    { label: "S'inscrire au programme", href: "/inscription" },
    { label: "Devenir partenaire", href: "/devenir-partenaire" },
    { label: "FAQ & Aide", href: "/#faq" },
    { label: "Contact", href: "https://microgells.com/fr/contact" },
  ];

  const legalLinks = [
    { label: "Confidentialité", href: "#" },
    { label: "Conditions d'utilisation", href: "#" },
    { label: "Mentions légales", href: "#" },
  ];

  return (
    <footer className="pt-8 bg-midnight_text relative after:content-[''] after:absolute after:bg-[url('/images/footer/bgline.png')] after:bg-no-repeat after:w-52 after:h-24 after:right-0 after:top-28 xl:after:block after:hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        
        {/* BARRE DE CONTACT HAUTE */}
        <div className="flex lg:items-center justify-between lg:flex-row flex-col border-b border-dark_border pb-8 mb-12 gap-6">
          <div className="flex sm:flex-nowrap flex-wrap gap-8">
            <div className="flex items-center text-foottext text-15">
              <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 text-primary flex-shrink-0" />
              <div className="flex flex-col">
                <span>Microgels · Siège social</span>
                <span>Bujumbura, Burundi</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-foottext text-15">
              <Icon icon="majesticons:phone-retro-line" className="w-6 h-6 text-primary flex-shrink-0" />
              <a href="tel:+25762870455" className="hover:text-primary transition-colors">
                +257 62 87 04 55
              </a>
            </div>

            <div className="flex items-center text-foottext text-15 gap-2">
              <Icon icon="clarity:email-line" className="w-6 h-6 text-primary flex-shrink-0" />
              <a href="mailto:info@microgells.com" className="hover:text-primary transition-colors">
                info@microgells.com
              </a>
            </div>
          </div>

          {/* RESEAUX SOCIAUX */}
          <div className="flex gap-4">
            <Link href="https://microgells.com" target="_blank" className="text-foottext hover:text-primary transition-colors">
              <Icon icon="fe:globe" width="28" height="28" />
            </Link>
            <Link href="#" className="text-foottext hover:text-primary transition-colors">
              <Icon icon="fe:facebook" width="28" height="28" />
            </Link>
            <Link href="#" className="text-foottext hover:text-primary transition-colors">
              <Icon icon="fa6-brands:linkedin" width="28" height="28" />
            </Link>
            <Link href="#" className="text-foottext hover:text-primary transition-colors">
              <Icon icon="fa6-brands:square-twitter" width="28" height="28" />
            </Link>
          </div>
        </div>

        {/* CONTENU PRINCIPAL DU FOOTER */}
        <div className="grid grid-cols-12 sm:mb-12 mb-8 pt-4 gap-8 relative before:content-[''] before:absolute before:w-20 before:h-20 before:bg-[url('/images/footer/bgcir.png')] before:bg-no-repeat before:-left-36 before:bottom-9 lg:before:block before:hidden">
          
          {/* COLONNE 1 : À propos */}
          <div className="md:col-span-4 col-span-12 mb-4 md:mb-0">
            <h4 className="text-20 font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">Microgels</span> · Women’s in Digital
            </h4>
            <p className="text-foottext text-15 leading-relaxed mb-6">
              Une initiative visant à autonomiser les femmes grâce à des formations pratiques en marketing digital et compétences technologiques à fort impact.
            </p>
            <div className="text-14 text-foottext">
              <span className="font-semibold text-white">Partenaires du programme :</span>
              <p className="text-white/70 mt-1">AYLF · Patriote · RENB</p>
            </div>
          </div>

          {/* COLONNE 2 : Programme */}
          <div className="md:col-span-3 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 font-semibold text-white mb-4">
              Programme
            </h4>
            <ul className="space-y-3">
              {programLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-foottext text-15 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : Liens Rapides */}
          <div className="md:col-span-2 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 font-semibold text-white mb-4">
              Accès rapide
            </h4>
            <ul className="space-y-3">
              {participantLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-foottext text-15 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 4 : Newsletter / Restez informé */}
          <div className="md:col-span-3 col-span-12">
            <h4 className="text-18 font-semibold text-white mb-2">
              Restez informée
            </h4>
            <p className="text-foottext text-14 mb-4">
              Abonnez-vous pour recevoir les actualités et les ouvertures de prochaines sessions.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  className="w-full bg-search text-white placeholder:text-foottext py-3 pl-4 pr-12 rounded-xl border border-search focus:border-primary focus:outline-none text-14"
                />
                <button type="submit" className="absolute right-3 text-primary hover:text-white transition-colors">
                  <Icon icon="solar:plain-2-linear" className="text-22" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BAS DE PAGE / COPYRIGHT */}
        <div className="flex items-center sm:flex-row flex-col justify-between py-8 border-t border-dark_border mt-4 text-14 text-foottext">
          <p className="sm:mb-0 mb-4 text-center sm:text-left">
            © 2026 <Link href="https://microgells.com" target="_blank" className="text-white hover:text-primary font-medium">Microgels</Link>. Tous droits réservés.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {legalLinks.map((item, index) => (
              <Link key={index} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;