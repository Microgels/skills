"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header: React.FC = () => {
  const pathname = usePathname();
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <header
        className={`fixed h-20 top-0 z-50 w-full transition-all duration-300 flex items-center ${
          sticky
            ? "shadow-lg bg-white/95 dark:bg-darkmode/95 backdrop-blur-md"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between items-center w-full px-4">
          <Logo />
          <nav className="hidden lg:flex items-center justify-center space-x-10 text-17 text-midnight_text mx-auto">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white cursor-pointer"
            >
              <svg
                viewBox="0 0 16 16"
                className={`hidden h-6 w-6 dark:block ${
                  !sticky && pathUrl === "/" && "text-white"
                }`}
              >
                <path
                  d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                  fill="#FFFFFF"
                />
              </svg>
              <svg
                viewBox="0 0 23 23"
                className={`h-8 w-8 text-dark dark:hidden ${
                  !sticky && pathUrl === "/" && "text-white"
                }`}
              >
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            </button>

            {user?.user ? (
              <>
                <div className="relative group">
                  <Image
                    src="/images/avatar/avatar_1.jpg"
                    alt="Image"
                    width={40}
                    height={40}
                    quality={100}
                    className="rounded-full cursor-pointer"
                  />
                  <p className="absolute w-fit text-sm text-center z-10 invisible group-hover:visible transition-opacity duration-200 bg-primary text-white p-1 px-3 min-w-28 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                    {user?.user}
                  </p>
                </div>
                <Link
                  onClick={() => handleSignOut()}
                  href="/signin"
                  className="hidden lg:flex items-center bg-primary border border-primary hover:border-primary dark:text-white text-white px-4 py-2 gap-2 rounded-lg text-16 font-semibold hover:bg-transparent hover:text-primary dark:hover:text-primary"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/inscription"
                  className="hidden lg:flex items-center bg-primary border border-primary hover:border-primary dark:text-white text-white px-4 py-2 gap-2 rounded-lg text-16 font-semibold hover:bg-transparent hover:text-primary dark:hover:text-primary"
                >
                  S'inscrire
                  <Icon icon="solar:arrow-right-linear" width="24" height="24" />
                </Link>

                <Link
                  href="/partners"
                  className="hidden lg:flex items-center border border-primary dark:hover:border-primary bg-transparent dark:text-primary text-primary px-4 py-2 gap-2 rounded-lg text-16 font-semibold "
                >
                  Devenir partenaire
                  <Icon icon="solar:arrow-right-linear" width="24" height="24" />
                </Link>
              </>
            )}

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE PLEIN ÉCRAN SORTI DU HEADER (VRAI PLEIN ÉCRAN) */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 w-screen h-screen bg-white dark:bg-darkmode text-midnight_text dark:text-white z-[99999] transition-transform duration-300 flex flex-col justify-between ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
            <h2 className="text-xl font-bold text-midnight_text dark:text-white">
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile menu"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="text-midnight_text dark:text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Liens de navigation */}
          <nav className="flex flex-col items-start p-6 space-y-4 text-18 font-medium">
            {headerData.map((item, index) => (
              <div key={index} onClick={() => setNavbarOpen(false)} className="w-full">
                <MobileHeaderLink item={item} />
              </div>
            ))}
          </nav>
        </div>

        {/* Boutons d'action en bas du menu mobile */}
        <div className="p-6 border-t border-gray-100 dark:border-white/10 flex flex-col space-y-3 w-full bg-white dark:bg-darkmode">
          <Link
            href="/inscription"
            className="bg-primary text-white px-5 py-3.5 rounded-xl font-semibold text-center hover:bg-primary/90 transition-all shadow-md"
            onClick={() => setNavbarOpen(false)}
          >
            S'inscrire au programme
          </Link>
          <Link
            href="/partners"
            className="bg-transparent border border-primary text-primary dark:text-white px-5 py-3.5 rounded-xl font-semibold text-center hover:bg-primary hover:text-white transition-all"
            onClick={() => setNavbarOpen(false)}
          >
            Devenir partenaire
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;