import { createFileRoute } from "@tanstack/react-router";
import EverlynnPage from "@/components/EverlynnPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EVERLYNN — Every Drop, A Promise of Purity" },
      { name: "description", content: "EVERLYNN by Mollveris Global. Luxury mineral water crafted with precision, purity, and timeless excellence." },
      { property: "og:title", content: "EVERLYNN — Luxury Mineral Water" },
      { property: "og:description", content: "Crafting trusted experiences through innovation, purity, and timeless excellence." },
    ],
  }),
  component: EverlynnPage,
});
