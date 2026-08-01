import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — IJLSCL" },
      { name: "description", content: "Legal disclaimers for IJLSCL." },
      { property: "og:title", content: "Disclaimer — IJLSCL" },
      { property: "og:description", content: "Legal disclaimers for IJLSCL." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("disclaimer")),
  component: () => <ContentPage slug="disclaimer" title="Disclaimer" crumb="Disclaimer" />,
});
