import { createFileRoute } from "@tanstack/react-router";
import { HanviSite } from "@/components/hanvi-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HANVI GLOBAL TECH PVT LTD | Technology for a connected world" },
      {
        name: "description",
        content: "Explore HANVI GLOBAL TECH PVT LTD, its services, company story, clients, partners, and contact details.",
      },
      { property: "og:title", content: "HANVI GLOBAL TECH PVT LTD | Technology for a connected world" },
      {
        property: "og:description",
        content: "Explore HANVI GLOBAL TECH PVT LTD, its services, company story, clients, partners, and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HanviSite,
});
