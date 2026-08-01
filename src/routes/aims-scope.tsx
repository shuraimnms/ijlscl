import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FAQSection } from "@/components/site/faq-section";
import { CtaStrip } from "@/components/site/cta-strip";
import {
  Landmark, LineChart, Megaphone, Users2, Building2, Package,
  Cpu, Lightbulb, Scale, GraduationCap, FlaskConical, Layers,
  Globe2
} from "lucide-react";

export const Route = createFileRoute("/aims-scope")({
  head: () => ({
    meta: [
      { title: "Focus & Scope — IJLSCL" },
      { name: "description", content: "IJLSCL publishes original research across legal studies, contemporary law, constitutional governance, public policy, legal technology, human rights, judicial reforms, international law, and allied disciplines." },
      { property: "og:title", content: "Focus & Scope — IJLSCL" },
      { property: "og:description", content: "Subject areas, methodological standards, and manuscript types accepted by IJLSCL." },
    ],
    links: [{ rel: "canonical", href: "/aims-scope" }],
  }),
  component: AimsScope,
});

// 10 subject areas
const AREAS = [
  { icon: Scale, title: "Constitutional & Administrative Law", body: "Constitutional Law, Administrative Law, Public Law, Electoral Law, Parliamentary Studies, Local Self-Government, Constitutional Governance." },
  { icon: Landmark, title: "Criminal Law & Justice", body: "Criminal Law, Criminology, Penology, Victimology, Police Science, Forensic Science, Juvenile Justice, Criminal Procedure, Evidence Law, Transnational Crimes." },
  { icon: Building2, title: "Corporate & Commercial Law", body: "Corporate Law, Company Law, Commercial Law, Contract Law, Partnership Law, Competition Law, Insolvency and Bankruptcy, Consumer Protection, Securities Law, Investment Law." },
  { icon: Cpu, title: "Technology & Cyber Law", body: "Cyber Law, Information Technology Law, Data Protection, Privacy Law, Artificial Intelligence and Law, E-Commerce Law, Telecommunication Law, Space Law, Media Law." },
  { icon: Lightbulb, title: "Intellectual Property Law", body: "Patent Law, Copyright Law, Trademark Law, Design Law, Geographical Indications, Trade Secrets, Traditional Knowledge, IP Management, Technology Transfer." },
  { icon: LineChart, title: "Financial & Economic Law", body: "Banking Law, Taxation Law (Direct and Indirect), Insurance Law, Financial Regulation, International Trade Law, Customs Law, Foreign Exchange Management, Investment Arbitration." },
  { icon: Users2, title: "Human Rights & Social Justice", body: "Human Rights Law, Humanitarian Law, Refugee Law, Gender Justice, Child Rights, Rights of Marginalized Communities, Disability Law, Poverty and Law, Right to Information." },
  { icon: Globe2, title: "International & Environmental Law", body: "Public International Law, Private International Law, Environmental Law, Climate Change Law, Energy Law, Natural Resources Law, Law of the Sea, Air and Space Law, Diplomatic Law." },
  { icon: FlaskConical, title: "Interdisciplinary & Clinical Legal Education", body: "Law and Economics, Law and Sociology, Law and Psychology, Legal History, Jurisprudence, Legal Philosophy, Alternate Dispute Resolution (ADR), Legal Aid, Judicial Reforms." },
  { icon: Package, title: "Labour, Family & Property Law", body: "Labour Law, Industrial Relations, Social Security Law, Family Law, Personal Laws, Succession Law, Property Law, Real Estate Law, Trust and Equity, Rent Control Law." },
];

const MANUSCRIPT_TYPES = [
  "Original Research Papers",
  "Review Articles",
  "Technical Notes",
  "Case Studies",
  "Conceptual Papers",
  "Theoretical Papers",
  "Thesis Notes",
  "Book Notes",
];

const FAQS = [
  { q: "Do you accept qualitative research?", a: "Yes. IJLSCL welcomes theoretical, empirical, conceptual, qualitative, quantitative and mixed-method studies that make a meaningful contribution." },
  { q: "Are interdisciplinary papers welcome?", a: "Yes, provided the paper clearly establishes its connection with legal studies or contemporary law and its academic, professional, policy, or societal value." },
  { q: "Can I submit a case study?", a: "Yes. Case studies are one of the accepted manuscript categories alongside original research, reviews, technical notes, conceptual and theoretical papers, thesis notes, and book notes." },
  { q: "Are country- or region-specific studies welcome?", a: "Absolutely — provided the findings are of broader theoretical, empirical, methodological, policy-based, or practical relevance." },
];

function AimsScope() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Focus & Scope"
        title="What IJLSCL publishes"
        intro="IJLSCL focuses on the publication of original, authentic, and high-quality research in legal studies, contemporary law, constitutional governance, public policy, legal technology, human rights, judicial reforms, international law, and allied disciplines."
      />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "About", to: "/about" }, { label: "Focus & Scope" }]} />

        <section className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Focus of the journal</div>
              <p className="mt-2 font-serif text-lg leading-snug">
                Theoretical and practice-oriented research that contributes to academic knowledge, professional understanding, institutional development, policy formulation, business decision-making, and contemporary managerial practices.
              </p>
              <div className="mt-6 rule-gold" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Manuscripts accepted</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {MANUSCRIPT_TYPES.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Layers className="mt-0.5 h-3.5 w-3.5 flex-none text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-semibold">Scope of the journal</h2>
            <div className="mt-2 rule-gold" />
            <p className="mt-4 text-sm text-muted-foreground">
              IJLSCL welcomes submissions across the following ten subject areas.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AREAS.map((a) => (
                <article key={a.title} className="rounded-xl border border-border bg-card p-5 transition hover:border-brand/40 hover:shadow-elev">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-muted text-brand">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-brand/30 bg-brand-muted/20 p-8">
          <h2 className="font-serif text-2xl font-semibold">Scope disclaimer</h2>
          <div className="mt-2 rule-gold" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A manuscript must make a clear contribution to legal studies, contemporary law, public policy, or an allied discipline. Interdisciplinary papers may be considered when their connection with the journal's scope is adequately established.
          </p>
        </section>

        <div className="mt-16">
          <FAQSection items={FAQS} />
        </div>

        <CtaStrip
          eyebrow="Match our scope?"
          title="Start your submission"
          intro="If your work fits our aims, submit today. Manuscripts are evaluated through external double-blind peer review."
          actions={[
            { label: "Submit a manuscript", to: "/submit", primary: true },
            { label: "Read author guidelines", to: "/author-guidelines" },
          ]}
        />
      </div>
    </SiteLayout>
  );
}
