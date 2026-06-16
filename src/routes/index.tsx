import { createFileRoute } from "@tanstack/react-router";
import JalsutraPage from "@/components/JalsutraPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jalsutra — Pure Packaged Drinking Water & Custom Co-Branding" },
      {
        name: "description",
        content:
          "Purest drinking water in West Bengal, certified by FSSAI & BIS. We offer custom co-branded water bottles for events, corporate clients, and hospitality.",
      },
      { property: "og:title", content: "Jalsutra — Pure Packaged Drinking Water" },
      {
        property: "og:description",
        content:
          "Pure water enriched with minerals, bottled under fully automated, untouched conditions in West Bengal.",
      },
    ],
  }),
  component: JalsutraPage,
});
