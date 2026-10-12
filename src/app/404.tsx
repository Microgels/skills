import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable | Women’s in Digital - Microgels",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Accueil" },
    { href: "#", text: "404" },
  ];

  return (
    <>
      
      <NotFound />
    </>
  );
};

export default ErrorPage;