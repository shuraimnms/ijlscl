import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/archives/volume")({
  head: () => ({
    meta: [
      { title: "Archives by Volume — IJLSCL" },
      { name: "description", content: "Browse IJLSCL archives by volume." },
      { property: "og:title", content: "Archives by Volume — IJLSCL" },
      { property: "og:description", content: "Browse IJLSCL archives by volume." },
    ],
    links: [{ rel: "canonical", href: "/archives/volume" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("archives-volume")),
  component: () => (
    <ContentPage slug="archives-volume" title="Archives by Volume" crumb="By Volume" />
  ),
});
