import { createFileRoute } from "@tanstack/react-router";
import { ArticleListingPage } from "@/components/site/article-listing-page";
import { articlesQuery } from "@/lib/queries";

export const Route = createFileRoute("/in-press")({
  head: () => ({
    meta: [
      { title: "Articles In Press — IJLSCL" },
      { name: "description", content: "Accepted IJLSCL manuscripts in final production, awaiting issue assignment and DOI registration." },
      { property: "og:title", content: "Articles In Press — IJLSCL" },
      { property: "og:description", content: "Peer-reviewed manuscripts in final production at IJLSCL." },
    ],
    links: [{ rel: "canonical", href: "/in-press" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQuery()),
  component: () => <ArticleListingPage mode="in-press" />,
});
