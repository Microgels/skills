"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Mobile = () => {
  const ref = useRef(null);

  const perks = [
    { text: "Apprenez à utiliser les réseaux sociaux pour votre activité." },
    { text: "Bénéficiez d'ateliers pratiques et d'un accompagnement personnalisé." },
    { text: "Accédez à un réseau professionnel et à des opportunités concrètes." },
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref} className="grid md:grid-cols-12 items-center lg:gap-12 gap-6">
          <div className="lg:col-span-6 col-span-12">
            <h2 className="lg:text-35 text-24 text-midnight_text font-semibold dark:text-white">
              Développez vos compétences
              <br />
              <span className="lg:text-35 text-24 text-primary font-semibold lg:max-w-max">
                en marketing digital
              </span>
            </h2>
            <p className="mt-6 text-muted dark:text-white/60 lg:text-17 lg:max-w-full sm:max-w-75%">
              Rejoignez le programme « Marketing Digital Women » de Microgels. Une formation 100% gratuite dispensée par des experts pour booster votre carrière et vos projets.
            </p>
            
            <div className="flex flex-col gap-6 mt-10">
              {perks.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Icon
                      icon="solar:check-read-linear"
                      width="18"
                      height="18"
                      className="text-white"
                    />
                  </div>
                  <p className="text-base text-muted dark:text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-start">
              <Link
                href="/inscription"
                className="lg:text-17 flex gap-4 items-center bg-primary text-white py-3 px-8 rounded-lg mt-10 border border-primary hover:text-primary hover:bg-transparent transition-colors font-medium"
              >
                Rejoindre le programme
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12">
            <div className="lg:max-w-full max-w-75% mx-auto">
              <Image
                src="/images/mobile/Digital lifestyle-pana.png"
                alt="Marketing Digital Women"
                width={555}
                height={634}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;