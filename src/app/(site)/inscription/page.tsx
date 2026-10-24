"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    ville: "",
    age: "",
    niveau: "",
    occupation: "",
    experience: "",
    modules: [] as string[],
    objectif: "",
    source: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzaNkOqmreyJIVGuulC93oxXgVjY6Ybfw5UY2bhvoHjLsMHxnjwIpgnXmA2Sb41VTon5A/exec";

  // Sources avec icônes associées pour un rendu visuel moderne
  const sourceOptions = [
    { label: "Réseaux sociaux", icon: "solar:share-circle-bold-duotone" },
    { label: "Bouche à oreille", icon: "solar:chat-round-dots-bold-duotone" },
    { label: "Affiche / Flyer", icon: "solar:document-text-bold-duotone" },
    { label: "Site web", icon: "solar:global-bold-duotone" },
    { label: "Autre", icon: "solar:stars-minimalistic-bold-duotone" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => {
        const modules = checked
          ? [...prev.modules, value]
          : prev.modules.filter((m) => m !== value);
        return { ...prev, modules };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSourceSelect = (val: string) => {
    setFormData((prev) => ({ ...prev, source: val }));
  };

  const validate = () => {
    let newErrors: { [key: string]: boolean } = {};
    if (!formData.prenom.trim()) newErrors.prenom = true;
    if (!formData.nom.trim()) newErrors.nom = true;
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.ville.trim()) newErrors.ville = true;
    if (!formData.niveau) newErrors.niveau = true;
    if (!formData.occupation) newErrors.occupation = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const submissionData = {
      ...formData,
      modules: formData.modules.join(", "),
      date: new Date().toLocaleString("fr-FR"),
    };

    try {
      const params = new URLSearchParams(submissionData as any);
      await fetch(SCRIPT_URL + "?" + params.toString(), {
        method: "GET",
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch (err) {
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-36 pb-24 bg-cover bg-center dark:bg-darkmode relative">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* EN-TÊTE DE SECTION SOIGNÉE & MODERNE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-13 font-bold tracking-wider uppercase">
              Microgels · Cohorte 1
            </span>
          </div>

          <h1 className="md:text-45 sm:text-36 text-28 font-bold text-midnight_text dark:text-white mb-5 leading-tight">
            Candidature au programme{" "}
            <span className="text-primary block sm:inline">Women’s in Digital</span>
          </h1>

          <p className="text-17 text-muted dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
            Une formation intensive et 100 % gratuite pour acquérir des compétences pratiques en marketing digital, création de contenu et entrepreneuriat à Bujumbura.
          </p>
        </div>

        {/* FORMULAIRE PRINCIPAL */}
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary p-10 rounded-2xl text-center">
              <h3 className="text-24 font-bold text-midnight_text dark:text-white mb-3">
                Inscription confirmée !
              </h3>
              <p className="text-17 text-muted dark:text-white/60 mb-6">
                Merci pour votre inscription au programme Microgels. Notre
                équipe vous contactera très prochainement.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Informations personnelles */}
              <div>
                <h3 className="text-18 font-bold text-midnight_text dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                  1. Informations personnelles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Prénom <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.prenom && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Nom <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.nom && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Adresse e-mail <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemple@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Adresse e-mail invalide
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Téléphone / WhatsApp{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+257 ..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Ville / Localité <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      placeholder="Ex : Bujumbura"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.ville && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Tranche d'âge
                    </label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-midnight_text text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">— Sélectionner —</option>
                      <option value="18 – 24 ans">18 – 24 ans</option>
                      <option value="25 – 34 ans">25 – 34 ans</option>
                      <option value="35 – 44 ans">35 – 44 ans</option>
                      <option value="45 ans et plus">45 ans et plus</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Parcours professionnel */}
              <div>
                <h3 className="text-18 font-bold text-midnight_text dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                  2. Parcours & Situation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Niveau d'études <span className="text-primary">*</span>
                    </label>
                    <select
                      name="niveau"
                      value={formData.niveau}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-midnight_text text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">— Sélectionner —</option>
                      <option value="Secondaire">Secondaire</option>
                      <option value="Technicien / BTS">Technicien / BTS</option>
                      <option value="Licence (Bac+3)">Licence (Bac+3)</option>
                      <option value="Master et plus">Master et plus</option>
                      <option value="Autodidacte">Autodidacte</option>
                    </select>
                    {errors.niveau && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Situation actuelle <span className="text-primary">*</span>
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-midnight_text text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">— Sélectionner —</option>
                      <option value="Étudiante">Étudiante</option>
                      <option value="En emploi (salariée)">
                        En emploi (salariée)
                      </option>
                      <option value="Freelance">Freelance</option>
                      <option value="En recherche d'emploi">
                        En recherche d'emploi
                      </option>
                      <option value="Entrepreneuse">Entrepreneuse</option>
                    </select>
                    {errors.occupation && (
                      <span className="text-xs text-red-500 mt-1 block">
                        Champ obligatoire
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Motivation & Source */}
              <div>
                <h3 className="text-18 font-bold text-midnight_text dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                  3. Motivation & Origine
                </h3>

                <div className="mb-6">
                  <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                    Pourquoi souhaitez-vous rejoindre le programme ?
                  </label>
                  <textarea
                    name="objectif"
                    rows={4}
                    value={formData.objectif}
                    onChange={handleChange}
                    placeholder="Partagez brièvement vos attentes..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary transition-colors"
                  ></textarea>
                </div>

                {/* SOURCE DE DÉCOUVERTE */}
                <div className="space-y-3">
                  <label className="block text-15 font-bold text-midnight_text dark:text-white">
                    4. Comment avez-vous entendu parler de cette formation ?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {sourceOptions.map((item) => {
                      const isSelected = formData.source === item.label;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleSourceSelect(item.label)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${
                            isSelected
                              ? "border-primary bg-primary/10 dark:bg-primary/20 text-primary font-semibold shadow-sm"
                              : "border-gray-200 dark:border-white/10 bg-transparent text-midnight_text/80 dark:text-white/80 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            icon={item.icon}
                            width="22"
                            height="22"
                            className={
                              isSelected
                                ? "text-primary"
                                : "text-gray-400 dark:text-white/40"
                            }
                          />
                          <span className="text-14">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-8 rounded-xl bg-primary text-white font-semibold text-17 hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:bg-gray-400"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Valider mon inscription
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="18"
                      height="18"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupComponent;