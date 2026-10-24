"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

type ApproachProps = {
  id?: string;
};

const Approach = ({ id }: ApproachProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Former",
      badge: "Mois 1 · Présentiel",
      description:
        "Un mois de formation intensive, en présentiel, axée sur la pratique. Les participantes produisent du contenu réel dès la première semaine, pas des exercices théoriques.",
      icon: "solar:laptop-minimalistic-bold-duotone",
    },
    {
      number: "02",
      title: "Faire produire",
      badge: "Projet Pratique",
      description:
        "Chaque participante mène un projet de fin de formation sur un cas réel : une page à animer, un compte à faire croître, une petite campagne à concevoir. Ce projet devient sa première pièce de portfolio.",
      icon: "solar:document-add-bold-duotone",
    },
    {
      number: "03",
      title: "Certifier",
      badge: "Évaluation & Jury",
      description:
        "Une soutenance devant un jury composé de l’équipe et d’au moins un partenaire externe. Le certificat atteste d’un travail réalisé, pas d’une simple présence.",
      icon: "solar:verified-check-bold-duotone",
    },
    {
      number: "04",
      title: "Insérer",
      badge: "Accompagnement Pro",
      description:
        "Prospection active auprès des partenaires, préparation aux entretiens, création des profils professionnels en ligne, accompagnement sur les plateformes de freelance, et mise en relation avec des clients locaux.",
      icon: "solar:rocket-bold-duotone",
    },
  ];

  return (
    <section id={id} className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-hero-bg rounded-3xl py-16 sm:px-16 px-6 shadow-sm"
        >
          {/* En-tête */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            
            <h2 className="md:text-35 sm:text-28 text-24 text-midnight_text font-semibold mb-5 dark:text-white">
              Un parcours en{" "}
              <span className="text-primary">4 temps opérationnels</span>
            </h2>
            <p className="text-17 text-muted dark:text-white/60 leading-relaxed">
              Le programme repose sur un parcours pensé pour que chaque étape produise une preuve tangible de compétence.
            </p>
          </div>

          {/* Grille des 4 étapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-36 font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon icon={step.icon} width="28" height="28" />
                    </div>
                  </div>

                  <span className="inline-block text-13 font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                    {step.badge}
                  </span>
                  <h3 className="text-22 font-bold text-midnight_text dark:text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-muted dark:text-white/60 text-16 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="py-3.5 px-8 rounded-xl bg-primary text-white font-semibold text-16 hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Rejoindre la prochaine session
              <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
            </Link>
            <Link
              href="/partners"
              className="py-3.5 px-8 rounded-xl bg-transparent border border-primary text-primary font-semibold text-16 hover:bg-primary hover:text-white transition-all"
            >
              Devenir partenaire du programme
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;