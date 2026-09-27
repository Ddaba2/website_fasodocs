/**
 * Modèle de données prévu pour une démarche FasoDocs.
 * Aucune valeur officielle n'est inventée ici — uniquement la structure.
 */
export type ProcedureDetail = {
  slug: string;
  title: string;
  subtitle?: string;
  categorySlug?: string;
  stepsCount?: number | null;
  amountLabel?: string | null;
  documentsCount?: number | null;
  lawsCount?: number | null;
  centersCount?: number | null;
  steps?: Array<{ title: string; description: string }> | null;
  documents?: string[] | null;
  laws?: string[] | null;
  centers?: Array<{
    name: string;
    address?: string;
    phone?: string;
  }> | null;
};

export const PROCEDURE_PLACEHOLDER = "[Donnée officielle à renseigner]" as const;

export const EMPTY_PROCEDURE_SHELL: Omit<ProcedureDetail, "slug" | "title"> = {
  subtitle: PROCEDURE_PLACEHOLDER,
  categorySlug: undefined,
  stepsCount: null,
  amountLabel: null,
  documentsCount: null,
  lawsCount: null,
  centersCount: null,
  steps: null,
  documents: null,
  laws: null,
  centers: null,
};
