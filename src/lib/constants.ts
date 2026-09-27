export const SITE = {
  name: "FasoDocs",
  tagline: "Digitalisation du Mali",
  description:
    "FasoDocs est une application gratuite qui centralise et simplifie l'accès aux informations administratives au Mali. Plateforme d'orientation pour comprendre vos démarches avant de vous rendre au service concerné.",
  url: "https://fasodocs.ml",
  email: "fasodocs@gmail.com",
  youtubeDemo: "https://youtube.com/shorts/RRoDC4f2bEk",
  isFree: true,
  defaultLocale: "fr",
  keywords: [
    "FasoDocs",
    "démarches administratives Mali",
    "documents administratifs Mali",
    "carte d'identité Mali",
    "passeport Mali",
    "création d'entreprise Mali",
    "GovTech Mali",
    "application gratuite Mali",
    "bambara",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/demarches", label: "Démarches" },
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/demarches", label: "Démarches" },
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "#",
    label: "LinkedIn",
    placeholder: true,
  },
  {
    href: "#",
    label: "TikTok",
    placeholder: true,
  },
  {
    href: "https://youtube.com/shorts/RRoDC4f2bEk",
    label: "YouTube",
    placeholder: false,
  },
] as const;

/** Liens store — placeholders tant que les URLs officielles ne sont pas fournies */
export const APP_DOWNLOAD = {
  googlePlay: {
    href: "#telecharger",
    label: "Google Play",
    available: false,
  },
  appStore: {
    href: "#telecharger",
    label: "App Store",
    available: false,
  },
} as const;

export const SEARCH_EXAMPLES = [
  "Carte d'identité",
  "Passeport",
  "Création d'entreprise",
  "Permis de conduire",
  "Certificat de nationalité",
] as const;

/** Catégories alignées sur la base FasoDocs — icônes images (remplacent les emojis du SQL) */
export const CATEGORIES = [
  {
    id: "identite",
    slug: "identite-citoyennete",
    name: "Identité et citoyenneté",
    description: "Documents d'identité, état civil et citoyenneté.",
    icon: "id-card",
    /** Remplace l'emoji 🪪 du SQL */
    iconUrl: "https://img.icons8.com/color/96/identification-documents.png",
    dbEnum: "IDENTITE_ET_CITOYENNETE",
  },
  {
    id: "entreprise",
    slug: "creation-entreprise",
    name: "Création d'entreprise",
    description: "Création et immatriculation d'entreprises.",
    icon: "building",
    /** Remplace l'emoji 🏢 du SQL */
    iconUrl: "https://img.icons8.com/color/96/company.png",
    dbEnum: "CREATION_D_ENTREPRISE",
  },
  {
    id: "auto",
    slug: "documents-auto",
    name: "Documents auto",
    description: "Permis de conduire, carte grise et documents automobiles.",
    icon: "car",
    /** Remplace l'emoji 🚗 du SQL */
    iconUrl: "https://img.icons8.com/color/96/car.png",
    dbEnum: "DOCUMENTS",
  },
  {
    id: "foncier",
    slug: "foncier",
    name: "Services fonciers",
    description: "Terrains, titres fonciers et permis de construire.",
    icon: "land",
    /** Remplace l'emoji 🏗️ du SQL */
    iconUrl: "https://img.icons8.com/color/96/crane.png",
    dbEnum: "SERVICE_FONCIER",
  },
  {
    id: "eau-electricite",
    slug: "eau-electricite",
    name: "Eau et électricité",
    description: "Compteurs d'eau et d'électricité.",
    icon: "bolt",
    /** Remplace l'emoji 💡 du SQL */
    iconUrl: "https://img.icons8.com/color/96/light-on.png",
    dbEnum: "EAU_ET_ELECTRICITE",
  },
  {
    id: "justice",
    slug: "justice",
    name: "Justice",
    description: "Procédures judiciaires et juridiques.",
    icon: "scales",
    /** Remplace l'emoji ⚖️ du SQL */
    iconUrl: "https://img.icons8.com/color/96/scales.png",
    dbEnum: "JUSTICE",
  },
  {
    id: "impots",
    slug: "impot-douane",
    name: "Impôt et Douane",
    description: "Déclarations fiscales et taxes.",
    icon: "receipt",
    /** Remplace l'emoji 💰 du SQL */
    iconUrl: "https://img.icons8.com/color/96/money-bag.png",
    dbEnum: "AUTRES_CATEGORIES",
  },
  {
    id: "voyage",
    slug: "voyage-tourisme",
    name: "Voyage et Tourisme",
    description: "Procédures de visas et documents de voyage.",
    icon: "plane",
    /** Icône réelle déjà présente dans le SQL */
    iconUrl: "https://img.icons8.com/color/96/airplane-take-off.png",
    dbEnum: "AUTRES_CATEGORIES",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Recherchez votre démarche",
    description:
      "Trouvez la procédure qui vous concerne parmi les catégories et la recherche FasoDocs.",
  },
  {
    step: 2,
    title: "Consultez les informations nécessaires",
    description:
      "Documents, étapes, coûts, délais, lieux et références — pour comprendre avant d'agir.",
  },
  {
    step: 3,
    title: "Préparez-vous avant de vous rendre au service",
    description:
      "FasoDocs oriente : les démarches restent effectuées auprès des administrations compétentes.",
  },
] as const;

export const FEATURES = [
  {
    id: "demarches",
    title: "Plus de 450 démarches référencées",
    description:
      "Un catalogue d'informations administratives pour s'orienter au Mali.",
  },
  {
    id: "recherche",
    title: "Recherche et filtrage",
    description:
      "Retrouvez rapidement une procédure par mot-clé ou par catégorie.",
  },
  {
    id: "infos",
    title: "Documents, étapes, coûts et délais",
    description:
      "Les informations essentielles pour préparer votre démarche.",
  },
  {
    id: "lieux",
    title: "Lieux et références",
    description:
      "Où aller, quelles bases juridiques consulter — selon les données disponibles.",
  },
  {
    id: "langues",
    title: "Français, anglais et bambara",
    description:
      "Accès multilingue pour élargir l'accessibilité de l'information.",
  },
  {
    id: "voix",
    title: "Synthèse vocale en bambara",
    description:
      "Écoutez les informations pour mieux comprendre, même hors lecture écrite.",
  },
  {
    id: "quiz",
    title: "Quiz et QCM",
    description:
      "Testez vos connaissances sur les démarches administratives.",
  },
  {
    id: "gratuit",
    title: "Application 100 % gratuite",
    description:
      "Téléchargez et utilisez FasoDocs sans frais pour accéder à l'information administrative.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Daba Diallo",
    role: "CEO & Backend",
    skills: "Spring Boot, architecture API, vision stratégique",
    image: "/images/team/daba-diallo.png",
  },
  {
    name: "Tenen Madyeh Sylla",
    role: "CTO & Frontend",
    skills: "Flutter, Angular, UI/UX, développement mobile et web",
    image: "/images/team/tenen-madyeh-sylla.png",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que FasoDocs ?",
    answer:
      "FasoDocs est une application numérique malienne gratuite qui centralise et simplifie l'accès aux informations sur les démarches administratives. Elle aide les citoyens à comprendre une procédure avant de se rendre au service concerné.",
  },
  {
    question: "FasoDocs délivre-t-il des documents administratifs ?",
    answer:
      "Non. FasoDocs ne délivre aucun document officiel et ne remplace pas les administrations. C'est une plateforme d'information et d'orientation.",
  },
  {
    question: "À qui s'adresse FasoDocs ?",
    answer:
      "Aux citoyens maliens, aux entrepreneurs, aux étudiants, ainsi qu'à toute personne qui a besoin de comprendre une démarche administrative au Mali.",
  },
  {
    question: "Quelles informations trouve-t-on sur une démarche ?",
    answer:
      "Selon les données disponibles dans l'application : documents nécessaires, étapes, coûts, délais, lieux où effectuer la démarche et références associées.",
  },
  {
    question: "Dans quelles langues FasoDocs est-il disponible ?",
    answer:
      "L'application propose le français, l'anglais et le bambara, ainsi qu'une synthèse vocale en bambara pour faciliter l'accès à l'information.",
  },
  {
    question: "Comment utiliser FasoDocs ?",
    answer:
      "Recherchez votre démarche, consultez les informations utiles, puis préparez-vous avant de vous rendre auprès de l'administration compétente.",
  },
  {
    question: "L'application est-elle gratuite ?",
    answer:
      "Oui. FasoDocs est une application gratuite pour les citoyens.",
  },
  {
    question: "Comment contacter l'équipe ?",
    answer:
      "Écrivez-nous à fasodocs@gmail.com pour toute question, suggestion ou demande d'information. Vous pouvez aussi utiliser le formulaire sur la page Contact.",
  },
] as const;

export const PROCEDURE_INFO_TYPES = [
  {
    title: "Documents requis",
    description: "La liste des pièces à préparer avant votre déplacement.",
    icon: "docs" as const,
  },
  {
    title: "Étapes de la procédure",
    description: "Le déroulé clair de la démarche, étape par étape.",
    icon: "steps" as const,
  },
  {
    title: "Coûts et délais",
    description: "Les informations de coût et de délai lorsqu'elles sont disponibles.",
    icon: "cfa" as const,
  },
  {
    title: "Lieux et références",
    description: "Où se rendre et quelles références consulter.",
    icon: "place" as const,
  },
] as const;
