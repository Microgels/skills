import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-hero-bg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white">
                Bâtir un avenir
                <span className="text-primary max-w-max ml-2">inclusif & digital</span>
              </h2>
              <p className="mt-6 text-base text-muted dark:text-white/60 lg:max-w-full sm:max-w-75%">
                Initié par Microgels, <strong>Women’s in Digital</strong> forme les femmes aux métiers du numérique pour stimuler l'emploi, l'entrepreneuriat et l'innovation.
              </p>
              <div className="flex flex-wrap gap-4 mt-12">
                <Link
                  href="/inscription"
                  className="lg:text-17 flex gap-3 items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg border border-primary hover:text-primary hover:bg-transparent transition-all"
                >
                  S'inscrire
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
                <Link
                  href="/partners"
                  className="lg:text-17 flex gap-3 items-center bg-transparent text-primary dark:text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg border border-primary dark:border-white/20 hover:bg-primary hover:text-white transition-all"
                >
                  Devenir partenaire
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/solution/solution.png"
                alt="Inclusion numérique"
                width={531}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;