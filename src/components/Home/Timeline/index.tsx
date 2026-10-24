"use client";
import React from "react";

type TimelineProps = {
  id?: string;
};

const Timeline = ({ id }: TimelineProps) => {
  const steps = [
    {
      date: "26 - 28 oct. 2026",
      title: "Lancement marketing",
      highlight: false,
    },
    {
      date: "29 oct. - 22 nov. 2026",
      title: "Appel à candidatures & partenaires",
      subtext: "Inscriptions · date limite 22 nov.",
      highlight: true,
    },
    {
      date: "23 - 25 nov. 2026",
      title: "Sélection des candidates",
      highlight: false,
    },
    {
      date: "26 nov. 2026",
      title: "Annonce des retenues",
      highlight: false,
    },
    {
      date: "30 nov. - 11 déc. 2026",
      title: "Formation intensive",
      highlight: false,
    },
    {
      date: "14 déc. 2026",
      title: "Soutenance & Certification",
      highlight: true,
    },
  ];

  return (
    <section id={id} className="dark:bg-darkmode py-20 overflow-x-auto">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 min-w-[800px] lg:min-w-0">
        
        {/* En-tête minimaliste */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-20 gap-4">
          <h2 className="text-40 sm:text-48 font-black text-midnight_text dark:text-white tracking-tight">
            Les dates <span className="text-primary">à retenir.</span>
          </h2>
          <p className="text-muted dark:text-white/60 text-16 font-medium max-w-xs text-left md:text-right">
            Cohorte 1.
          </p>
        </div>

        {/* Ligne chronologique horizontale pure */}
        <div className="relative my-12">
          {/* Ligne horizontale */}
          <div className="absolute top-2.5 left-0 w-full h-[1px] bg-gray-300 dark:bg-white/20 z-0"></div>

          {/* Grille des étapes */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start pr-2">
                
                {/* Point d'ancrage sur la ligne */}
                <div
                  className={`w-5 h-5 rounded-full border-2 bg-white dark:bg-darkmode mb-6 flex items-center justify-center ${
                    step.highlight
                      ? "border-primary bg-primary"
                      : "border-gray-400 dark:border-white/40"
                  }`}
                >
                  {step.highlight && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>

                {/* Date en gras */}
                <span className="text-17 font-extrabold text-midnight_text dark:text-white mb-1">
                  {step.date}
                </span>

                {/* Titre / Description */}
                <p className="text-14 text-muted dark:text-white/70 leading-snug font-normal">
                  {step.title}
                </p>

                {/* Sous-texte mis en avant si présent */}
                {step.subtext && (
                  <span className="text-13 font-semibold text-primary mt-1 block">
                    {step.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;