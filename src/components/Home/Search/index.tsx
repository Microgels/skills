"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search = () => {
  const ref = useRef(null);
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleStartRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      router.push(`/inscription?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/inscription");
    }
  };

  // Données de témoignage et statistiques du programme
  const review = [
    {
      text: "La formation m'a permis d'acquérir des compétences concrètes en marketing digital et de lancer ma propre activité en ligne en seulement quelques semaines.",
      image: "/images/avatar/avatar_1.jpg",
      name: "Amina K.",
      post: "Entrepreneuse & Participante",
      satisfaction: "4.9",
      recommendation: "98%",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          icon="ph:star-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    if (halfStars) {
      stars.push(
        <Icon
          key="half"
          icon="ph:star-half-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          icon="ph:star-bold"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    return stars;
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-hero-bg rounded-3xl p-2"
        >
          {/* HEADER DU CTA */}
          <div className="text-center lg:px-20 px-4 pt-16">
            <div className="flex justify-center mb-2">
              <span className="bg-primary/10 text-primary font-semibold text-14 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Formation 100% Gratuite
              </span>
            </div>
            <h2 className="text-midnight_text font-bold dark:text-white md:text-35 sm:text-28 text-24 mt-2">
              Inscrivez-vous en moins de{" "}
              <span className="lg:text-35 text-primary text-24">
                2 minutes
              </span>
            </h2>
            <p className="text-muted dark:text-white/70 text-16 mt-3 max-w-xl mx-auto">
              Rejoignez la prochaine promotion Women’s in Digital initiée par Microgels et développez vos compétences opérationnelles.
            </p>

            {/* BARRE D'ACTION / INSCRIPTION RAPIDE */}
            <div className="md:max-w-75% mx-auto mt-8">
              <form
                onSubmit={handleStartRegistration}
                className="flex lg:items-center md:items-start items-center bg-white sm:flex-row flex-col dark:bg-darkHeroBg shadow-md rounded-2xl overflow-hidden p-1.5"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre adresse e-mail..."
                  className="grow px-4 py-4 text-midnight_text dark:text-white text-16 focus:outline-none bg-transparent w-full"
                />
                <button
                  type="submit"
                  className="text-16 font-semibold flex items-center justify-center bg-primary text-white py-3.5 px-8 rounded-xl w-full sm:w-auto mt-2 sm:mt-0 hover:bg-primary/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  S'inscrire maintenant
                </button>
              </form>

              <div className="flex items-center justify-center my-6 gap-2">
                <Icon
                  icon="solar:check-circle-bold"
                  className="w-5 h-5 text-primary"
                />
                <p className="text-15 text-muted dark:text-white/60">
                  Aucun prérequis technique exigé · Accompagnement personnalisé
                </p>
              </div>
            </div>
          </div>

          {/* TÉMOIGNAGE & STATISTIQUES D'IMPACT */}
          <div>
            {review.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl lg:py-12 sm:py-10 py-6 my-2 lg:px-16 sm:px-10 px-6 dark:bg-darkmode"
              >
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-8 items-center">
                  {/* Témoignage */}
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/images/search/double.png"
                        alt="citation"
                        width={40}
                        height={30}
                      />
                    </div>
                    <p className="text-midnight_text dark:text-white text-17 leading-relaxed mb-6 font-medium">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-16 text-midnight_text dark:text-white">
                          {item.name}
                        </h3>
                        <h5 className="text-muted dark:text-white/60 text-14">
                          {item.post}
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Statistiques d'Impact du Programme */}
                  <div className="flex sm:flex-row flex-col items-center justify-around gap-6 bg-hero-bg dark:bg-midnight_text p-6 rounded-2xl">
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-2">
                        {renderStars(parseFloat(item.satisfaction))}
                      </div>
                      <p className="text-28 font-extrabold text-midnight_text dark:text-white">
                        {item.satisfaction}/5
                      </p>
                      <p className="text-muted dark:text-white/60 text-14">
                        Satisfaction des participantes
                      </p>
                    </div>

                    <div className="hidden sm:block w-px h-16 bg-gray-200 dark:bg-white/10"></div>

                    <div className="text-center">
                      <p className="text-28 font-extrabold text-primary mb-1">
                        {item.recommendation}
                      </p>
                      <p className="text-muted dark:text-white/60 text-14">
                        Taux de recommandation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;