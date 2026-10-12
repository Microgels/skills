import NotFound from "@/components/NotFound";
// import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Microgels ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
      
      <NotFound />
    </>
  );
};

export default ErrorPage;
