import { GrootitExperience } from "@/components/GrootitExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  absoluteTitle: "GROOTIT | Web Design, Branding & AI Agency in Sri Lanka",
  description:
    "Creative + AI agency in Sri Lanka. Brand identity, websites, AI automation and digital marketing for restaurants, construction, retail, startups and local businesses.",
  path: "/",
});

export default function Home() {
  return <GrootitExperience />;
}
