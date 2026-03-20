import HomeClient from "./HomeClient";
import { generateNextSeo } from "next-seo/pages";

export default function Home() {
  const seo = generateNextSeo({
    title: "Perfect Pairings | Wine Food Pairing Guide",
    description:
      "Discover the art of wine pairing and wine food pairing. Explore curated wine and food combinations, learn pairing principles, and find perfect matches for your favorite wines and dishes.",
  });

  return (
    <>
      {seo}
      <HomeClient />
    </>
  );
}
