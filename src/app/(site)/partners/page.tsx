"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const PartnerComponent = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "Entreprise",
    investmentInterest: "Soutien financier / Mécénat",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Remplacez par l'URL de votre script Google Apps Script dédié aux partenaires si besoin
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzaNkOqmreyJIVGuulC93oxXgVjY6Ybfw5UY2bhvoHjLsMHxnjwIpgnXmA2Sb41VTon5A/exec";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors: { [key: string]: boolean } = {};
    if (!formData.organizationName.trim()) newErrors.organizationName = true;
    if (!formData.contactName.trim()) newErrors.contactName = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const submissionData = {
      ...formData,
      type: "Partenariat / Investissement",
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
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-16 uppercase tracking-widest mb-3 block">
            Devenir Partenaire · Microgels
          </span>
          <h1 className="md:text-45 sm:text-36 text-28 font-bold text-midnight_text dark:text-white mb-4">
            Investissez dans l'avenir du numérique
          </h1>
          <p className="text-17 text-muted dark:text-white/60">
            Entreprises, ONG, institutions ou investisseurs : unissez vos forces avec le programme Women’s in Digital pour maximiser notre impact sociétal.
          </p>
        </div>

        {/* FORMULAIRE PRINCIPAL */}
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary p-10 rounded-2xl text-center">
              <h3 className="text-24 font-bold text-midnight_text dark:text-white mb-3">
                Demande de partenariat envoyée !
              </h3>
              <p className="text-17 text-muted dark:text-white/60 mb-6">
                Merci de votre intérêt pour notre initiative. Notre équipe institutionnelle vous contactera dans les plus brefs délais pour en discuter.
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
              
              {/* Informations sur l'organisation */}
              <div>
                <h3 className="text-18 font-bold text-midnight_text dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                  1. Informations sur l'organisation
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Nom de l'organisation / Entreprise <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="Ex : Tech Africa / ONG Horizon"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                    />
                    {errors.organizationName && <span className="text-xs text-red-500 mt-1 block">Champ obligatoire</span>}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Type d'entité <span className="text-primary">*</span>
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-midnight_text text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                    >
                      <option value="Entreprise / Startup">Entreprise / Startup</option>
                      <option value="ONG / Association">ONG / Association</option>
                      <option value="Institution publique">Institution publique</option>
                      <option value="Investisseur / Business Angel">Investisseur / Business Angel</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Nom du référent <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                    />
                    {errors.contactName && <span className="text-xs text-red-500 mt-1 block">Champ obligatoire</span>}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      E-mail professionnel <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@organisation.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">E-mail invalide</span>}
                  </div>

                  <div>
                    <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                      Téléphone direct <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+257 ..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 block">Champ obligatoire</span>}
                  </div>
                </div>
              </div>

              {/* Nature du partenariat ou de l'investissement */}
              <div>
                <h3 className="text-18 font-bold text-midnight_text dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                  2. Objectif du partenariat / de l'investissement
                </h3>

                <div className="mb-6">
                  <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                    Forme de collaboration souhaitée
                  </label>
                  <select
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-midnight_text text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                  >
                    <option value="Soutien financier / Mécénat">Soutien financier / Mécénat</option>
                    <option value="Investissement stratégique">Investissement stratégique</option>
                    <option value="Partenariat technique ou opérationnel">Partenariat technique ou opérationnel</option>
                    <option value="Recrutement / Placement des talents formés">Recrutement / Placement des talents formés</option>
                    <option value="Autre forme de collaboration">Autre forme de collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-15 font-medium text-midnight_text dark:text-white mb-2">
                    Détails ou message de proposition
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez comment vous souhaitez collaborer avec Microgels..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/20 bg-transparent text-midnight_text dark:text-white focus:outline-none focus:border-primary"
                  ></textarea>
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
                    Soumettre la proposition de partenariat
                    <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
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

export default PartnerComponent;