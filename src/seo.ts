import { FAQ } from "./data/faq";

/** Metadatos y JSON-LD por ruta. Todo va en el HTML prerenderizado (sin depender de JS). */
export const SITE = "https://legendslatam.com";

const TITLE = "Legends · Coach AI gratis para Dota 2 | Sube de MMR";
const DESCRIPTION = "Coach AI gratis para Dota 2 en Windows: analiza tus replays, detecta tus 3 brechas según tu rol y te arma una ruta semanal con desafíos y XP. Sin Pay to Win.";
const OG_TITLE = "Sube de MMR con tu coach AI gratis para Dota 2 · Legends";
const OG_IMAGE = `${SITE}/og-image.png`;
const OG_IMAGE_ALT = "Legends: Watata, el coach, junto al titular «Sube de MMR. Entrena como Midlaner».";

const DL_TITLE = "Descargar Legends para Windows · Coach AI gratis para Dota 2";
const DL_DESCRIPTION = "Descarga Legends para Windows (64 bits) desde Discord: únete al canal de Legends Beta y recibe tu invitación. Gratis: conecta Steam, elige hasta 5 replays de Dota 2 y recibe tu diagnóstico y tu ruta de entrenamiento.";

const ORG_ID = `${SITE}/#organization`;
const APP_ID = `${SITE}/#software`;
const SITE_ID = `${SITE}/#website`;

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function ld(data: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/<\//g, "<\\/")}</script>`;
}

const ORG = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Legends",
  alternateName: ["Legends LATAM", "Legends Coach"],
  url: `${SITE}/`,
  logo: { "@type": "ImageObject", url: `${SITE}/assets/legends-logo.png`, width: 500, height: 500 },
  sameAs: [
    "https://www.tiktok.com/@legends.dsv",
    "https://www.youtube.com/@Legendsdsv",
    "https://www.instagram.com/legends.dsv",
    "https://github.com/legends-latam",
  ],
};

const WEBSITE = { "@type": "WebSite", "@id": SITE_ID, url: `${SITE}/`, name: "Legends", inLanguage: "es-419", publisher: { "@id": ORG_ID } };

const SOFTWARE = {
  "@type": "SoftwareApplication",
  "@id": APP_ID,
  name: "Legends",
  alternateName: ["Legends LATAM", "Legends · Tu Coach AI Personal para Dota 2"],
  description: "Legends es una aplicación gratuita para Windows que funciona como coach AI personal para Dota 2: analiza tus replays .dem, extrae más de 50 métricas, detecta tu rol y tus 3 brechas y arma una ruta de entrenamiento semanal con 12 desafíos.",
  url: `${SITE}/`,
  image: OG_IMAGE,
  screenshot: [`${SITE}/assets/shot-coach.webp`, `${SITE}/assets/shot-wards.webp`, `${SITE}/assets/shot-replays.webp`],
  applicationCategory: "GameApplication",
  applicationSubCategory: "Coaching y análisis de replays de Dota 2",
  operatingSystem: "Windows (64 bits)",
  installUrl: `${SITE}/descargar/`,
  inLanguage: "es-419",
  isAccessibleForFree: true,
  softwareRequirements: "Windows de 64 bits, cuenta de Steam y Dota 2",
  featureList: [
    "Análisis de replays .dem de Dota 2 con más de 50 métricas",
    "Detección automática de tu rol y posición",
    "3 KPIs por rol con su cálculo a la vista",
    "Diagnóstico de tus 3 brechas frente a tu rango",
    "Ruta de entrenamiento semanal con 12 desafíos, XP, cofres y racha",
    "Chat con Watata, tu coach AI, sobre tus partidas",
    "Inicio de sesión con Steam OpenID, sin contraseña",
  ],
  keywords: "coach Dota 2, coach AI Dota 2, subir MMR, mejorar en Dota 2, análisis de replays Dota 2, entrenamiento por rol, Midlaner, Carry, Offlaner, Support",
  about: { "@type": "VideoGame", name: "Dota 2", url: "https://www.dota2.com/", sameAs: "https://es.wikipedia.org/wiki/Dota_2" },
  audience: { "@type": "PeopleAudience", audienceType: "Jugadores competitivos de Dota 2 en Latinoamérica que quieren subir de MMR" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
};

function common(canonical: string, title: string, description: string): string {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta name="theme-color" content="#0C0E11">`,
    `<meta name="color-scheme" content="dark">`,
    `<meta name="author" content="Legends">`,
    `<meta name="application-name" content="Legends">`,
    `<meta name="apple-mobile-web-app-title" content="Legends">`,
    `<meta name="format-detection" content="telephone=no">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Legends">`,
    `<meta property="og:locale" content="es_LA">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${esc(title === TITLE ? OG_TITLE : title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:secure_url" content="${OG_IMAGE}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title === TITLE ? OG_TITLE : title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    `<meta name="twitter:image:alt" content="${esc(OG_IMAGE_ALT)}">`,
    `<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">`,
    `<link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192">`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="sitemap" type="application/xml" href="/sitemap.xml">`,
  ].join("\n");
}

export function headFor(url: string): string {
  const path = url.replace(/[?#].*$/, "").replace(/\/+$/, "") || "/";

  if (path === "/") {
    const graph = [
      ORG,
      WEBSITE,
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        url: `${SITE}/`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "es-419",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": APP_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
      },
      SOFTWARE,
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ];
    return common(`${SITE}/`, TITLE, DESCRIPTION) + "\n" + ld({ "@context": "https://schema.org", "@graph": graph });
  }

  if (path === "/descargar") {
    const page = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE}/descargar/#webpage`,
      url: `${SITE}/descargar/`,
      name: "Descargar Legends para Windows",
      inLanguage: "es-419",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": APP_ID },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Legends", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Descargar", item: `${SITE}/descargar/` },
        ],
      },
    };
    return common(`${SITE}/descargar/`, DL_TITLE, DL_DESCRIPTION) + "\n" + ld(page);
  }

  // 404
  return [
    `<title>Página no encontrada · Legends</title>`,
    `<meta name="robots" content="noindex">`,
    `<meta name="theme-color" content="#0C0E11">`,
    `<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">`,
  ].join("\n");
}
