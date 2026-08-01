import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/archives/year")({
  head: () => ({
    meta: [
      { title: "Archives by Year — IJLSCL" },
      { name: "description", content: "Browse IJLSCL archives by year." },
      { property: "og:title", content: "Archives by Year — IJLSCL" },
      { property: "og:description", content: "Browse IJLSCL archives by year." },
    ],
    links: [{ rel: "canonical", href: "/archives/year" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("archives-year")),
  component: () => <ContentPage slug="archives-year" title="Archives by Year" crumb="By Year" />,
});
