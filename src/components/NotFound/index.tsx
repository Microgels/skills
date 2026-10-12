import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white pt-8 pb-20 dark:bg-darkmode">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-129/138 max-w-96 text-center">
              <Image
                src="/images/404.svg"
                alt="Illustration 404"
                width={250}
                height={250}
                quality={100}
                style={{ width: "100%", height: "auto" }}
                className="mx-auto max-w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-3">
                  Oups ! La page est introuvable.
                </h3>
                <p className="text-muted dark:text-white/60 mb-8">
                  La page que vous essayez d'atteindre n'existe pas ou a été déplacée vers une autre section.
                </p>
                <div>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-primary py-3 px-8 text-center text-base font-medium text-white hover:bg-primary/90 transition-all"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;