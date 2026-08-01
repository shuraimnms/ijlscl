import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/copernicus")({
  head: () => ({
    meta: [
      { title: "Copernicus — IJLSCL" },
      { name: "description", content: "Copernicus Index information." },
      { property: "og:title", content: "Copernicus — IJLSCL" },
      { property: "og:description", content: "Copernicus Index information." },
    ],
    links: [{ rel: "canonical", href: "/copernicus" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("copernicus")),
  component: () => <ContentPage slug="copernicus" title="Copernicus" crumb="Copernicus" />,
});
