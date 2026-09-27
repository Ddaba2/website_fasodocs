import {
  ClipboardList,
  FileText,
  MapPin,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FrancCfaIcon } from "@/components/icons/FrancCfaIcon";
import type { ProcedureDetail } from "@/lib/procedures";
import { PROCEDURE_PLACEHOLDER } from "@/lib/procedures";

type ProcedureDetailViewProps = {
  procedure: ProcedureDetail;
};

const SUMMARY: Array<{
  key: "steps" | "amount" | "documents" | "laws" | "centers";
  label: string;
  icon?: LucideIcon;
  useCfa?: boolean;
  color: string;
}> = [
  { key: "steps", label: "Étapes", icon: ClipboardList, color: "text-amber-600" },
  { key: "amount", label: "Montant", useCfa: true, color: "text-brand-green" },
  { key: "documents", label: "Documents", icon: FileText, color: "text-sky-700" },
  { key: "laws", label: "Loi(s)", icon: Scale, color: "text-ink" },
  { key: "centers", label: "Centres", icon: MapPin, color: "text-brand-red" },
];

function summaryValue(
  procedure: ProcedureDetail,
  key: (typeof SUMMARY)[number]["key"]
): string {
  switch (key) {
    case "steps":
      return procedure.stepsCount != null
        ? String(procedure.stepsCount)
        : PROCEDURE_PLACEHOLDER;
    case "amount":
      return procedure.amountLabel ?? PROCEDURE_PLACEHOLDER;
    case "documents":
      return procedure.documentsCount != null
        ? String(procedure.documentsCount)
        : PROCEDURE_PLACEHOLDER;
    case "laws":
      return procedure.lawsCount != null
        ? String(procedure.lawsCount)
        : PROCEDURE_PLACEHOLDER;
    case "centers":
      return procedure.centersCount != null
        ? String(procedure.centersCount)
        : PROCEDURE_PLACEHOLDER;
  }
}

export function ProcedureDetailView({ procedure }: ProcedureDetailViewProps) {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {procedure.title}
        </h1>
        <p className="mt-2 text-base text-ink-muted">
          {procedure.subtitle ?? PROCEDURE_PLACEHOLDER}
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {SUMMARY.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.key}
              className="rounded-xl border border-border bg-white px-3 py-4 text-center"
            >
              {item.useCfa ? (
                <span className="mx-auto inline-flex h-5 w-5 items-center justify-center">
                  <FrancCfaIcon size={20} />
                </span>
              ) : Icon ? (
                <Icon
                  className={`mx-auto h-5 w-5 ${item.color}`}
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
              ) : null}
              <p className="mt-2 text-xs font-medium text-ink-subtle">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-ink break-words">
                {summaryValue(procedure, item.key)}
              </p>
            </li>
          );
        })}
      </ul>

      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-lg font-semibold text-ink">
          Étapes à suivre
        </h2>
        {procedure.steps?.length ? (
          <ol className="mt-4 space-y-4">
            {procedure.steps.map((step, index) => (
              <li
                key={`${step.title}-${index}`}
                className="rounded-xl border border-border bg-white p-4"
              >
                <p className="text-sm font-semibold text-ink">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-3 rounded-xl border border-dashed border-border-strong bg-surface-alt px-4 py-3 text-sm text-ink-subtle">
            {PROCEDURE_PLACEHOLDER} — les étapes officielles seront affichées ici.
          </p>
        )}
      </section>

      <section aria-labelledby="docs-heading">
        <h2 id="docs-heading" className="text-lg font-semibold text-ink">
          Documents requis
        </h2>
        {procedure.documents?.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
            {procedure.documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 rounded-xl border border-dashed border-border-strong bg-surface-alt px-4 py-3 text-sm text-ink-subtle">
            {PROCEDURE_PLACEHOLDER} — la liste des documents sera connectée aux
            données FasoDocs.
          </p>
        )}
      </section>

      <section aria-labelledby="centers-heading">
        <h2 id="centers-heading" className="text-lg font-semibold text-ink">
          Où faire la démarche
        </h2>
        {procedure.centers?.length ? (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {procedure.centers.map((center) => (
              <li
                key={center.name}
                className="rounded-xl border border-border bg-white p-4"
              >
                <p className="font-semibold text-ink">{center.name}</p>
                {center.address ? (
                  <p className="mt-1 text-sm text-ink-muted">{center.address}</p>
                ) : null}
                {center.phone ? (
                  <p className="mt-1 text-sm text-ink-muted">{center.phone}</p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 rounded-xl border border-dashed border-border-strong bg-surface-alt px-4 py-3 text-sm text-ink-subtle">
            {PROCEDURE_PLACEHOLDER} — les lieux officiels seront affichés ici.
          </p>
        )}
      </section>

      <p className="text-xs leading-relaxed text-ink-subtle">
        FasoDocs informe et oriente. Les démarches sont effectuées auprès des
        administrations compétentes. Aucune donnée officielle n&apos;est inventée
        sur ce site.
      </p>
    </div>
  );
}
