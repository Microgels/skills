"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-10%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-10%", opacity: 0 },
    transition: { duration: 0.5 },
  };

  const rightAnimation = {
    initial: { x: "10%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "10%", opacity: 0 },
    transition: { duration: 0.5 },
  };

  // Logos des partenaires
  const Heroimage = [
    {
      lightimage: "/images/hero/aylf.jpeg",
      darkimage: "/images/hero/aylf.jpeg",
    },
    {
      lightimage: "/images/hero/Patriote-01.png",
      darkimage: "/images/hero/Patriote-01.png",
    },
    {
      lightimage: "/images/hero/renb.jpeg",
      darkimage: "/images/hero/renb.jpeg",
    },
  ];

  return (
    <section className="relative pt-44 bg-cover bg-center dark:bg-darkmode">
      <div className="w-full h-full absolute z-0 bg-hero-bg sm:rounded-b-[119px] sm:-left-1/4 2xl:-left-1/3 top-0 dark:bg-midnight_text"></div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-center">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <span className="inline-block bg-primary text-white text-14 font-bold px-4 py-2 rounded-full mb-4">
              Women in digital - Cohorte 1
            </span>
            <h1 className="md:text-50 sm:text-40 text-28 text-midnight_text dark:text-white lg:text-start mb-6 lg:w-full sm:w-3/4">
              Autonomiser les femmes
              <br />
              <span className="bg-border dark:bg-darkHeroBg md:text-50 text-36 rounded-lg lg:text-start text-primary max-w-max">
                par le numérique
              </span>
              <br />
              et façonner l'avenir.
            </h1>
            <p className="sm:text-19 text-16 text-muted dark:text-white/60 text-start lg:max-w-full sm:max-w-75%">
              Initiative signée Microgels,{" "}
              <strong className="font-semibold text-midnight_text dark:text-white">
                Women’s in Digital
              </strong>{" "}
              ouvre les candidatures de sa toute première cohorte. Ce programme d’excellence 100 % gratuit forme les futures leaders aux compétences du marketing digital, de la création de contenu et de l'entrepreneuriat.
            </p>
            <div className="flex md:flex-nowrap flex-wrap items-center mt-12 sm:gap-11 gap-6">
              <div>
                <Link
                  href="/inscription"
                  className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border border-primary hover:text-primary hover:bg-transparent transition-all"
                >
                  Postuler à la Cohorte 1
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="15"
                    height="15"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href="/partners"
                  className="text-17 flex gap-2 items-center border-1 py-3 px-8 border-primary rounded-lg font-bold text-muted dark:text-white/60 hover:text-primary hover:dark:text-primary transition-all"
                >
                  Devenir partenaire / Investir
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="15"
                    height="15"
                  />
                </Link>
              </div>
            </div>

            {/* SECTION PARTENAIRES */}
            <div className="lg:my-16 my-10">
              <p className="text-16 font-semibold tracking-wider text-muted dark:text-white/60 text-start mb-5">
                Nos partenaires 
              </p>
              <div className="flex items-center space-x-6 justify-start w-full">
                {Heroimage.map((item, index) => (
                  <Link key={index} href="/partners" className="opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src={item.lightimage}
                      alt="Partenaire"
                      width={115}
                      height={40}
                      className="block dark:hidden object-contain max-h-12 w-auto"
                    />
                    <Image
                      src={item.darkimage}
                      alt="Partenaire"
                      width={115}
                      height={40}
                      className="hidden dark:block object-contain max-h-12 w-auto"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 pl-20 lg:block hidden"
          >
            <Image
              src="/images/hero/IMG_7984.PNG"
              alt="Women's in Digital - Cohorte 1"
              width={498}
              height={651}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;