"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Spend: FC = () => {
  const ref = useRef(null);



  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref}>
          <div className="text-center">
            <h2 className="md:text-35 sm:text-28 text-24 text-midnight_text font-semibold mb-5 dark:text-white">
              Libérez votre potentiel
              <span className="text-primary ml-2">
                dans le numérique
              </span>
            </h2>
            <p className="text-17 text-muted dark:text-white/60 mx-1 lg:mx-64 mb-3">
              Avec Women’s in Digital, Microgels offre aux femmes
              l’opportunité de se former gratuitement au marketing digital.
              Apprenez par la pratique, développez vos compétences et préparez
              votre avenir professionnel dans le secteur du numérique.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden mt-14">
              <Image
                src="/images/spend/spend.png"
                alt="Femmes développant leurs compétences numériques"
                width={550}
                height={350}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spend;