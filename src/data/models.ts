export interface ModelSpec {
  label: string;
  value: string;
  icon: string;
}

export interface ModelVersion {
  name: string;
  features: {
    label: string;
    ltd: boolean | "optional";
    flyer: boolean | "optional";
  }[];
}

export interface Model {
  slug: string;
  name: string;
  line: string;
  eslora: string;
  badge?: "NUEVO" | "PRONTO";
  thumbnailUrl: string;
  heroUrl: string;
  silhouetteTechnicalUrl: string;
  tagline: string;
  brochure?: string;
  specs: ModelSpec[];
  specsExtra: ModelSpec[];
  exteriorFeatures: string[];
  versions: ModelVersion[];
  gelcoatColors: { name: string; hex: string }[];
  tapiceriaColors: { name: string; hex: string }[];
  pisoColors: { name: string; hex: string }[];
  interiorImages: { url: string; w: number; h: number }[];
  exteriorImages: { url: string; w: number; h: number }[];
  technicalDiagramUrl?: string;
  featurePoints?: { x: number; y: number }[];
  navbarThumbnailUrl?: string;
  preVentaVideoUrl?: string;
  preVentaSpecs?: { label: string; value: string; icon: string }[];
}

export const models: Model[] = [
  // ── LINEA DF ────────────────────────────────────────────────────
  {
    slug: "246",
    name: "Classer 246 DF",
    line: "LINEA DF",
    eslora: "7.50M",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/246df.webp",
    thumbnailUrl: "/image/2_PRODUCTO/246 DF/1.webp",
    heroUrl: "/image/2_PRODUCTO/246 DF/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/246 DF.webp",
    tagline: "El estándar de la excelencia.",
    brochure: "/brochures/246 DF.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/246 DF.webp",
    featurePoints: [
      { x: 19, y: 22 }, // 01 Escalera retráctil inox
      { x: 30, y: 17 }, // 02 Tanque combustible
      { x: 58, y: 17 }, // 03 Perfil perimetral
      { x: 66, y: 9 }, // 04 Cockpit en U con mesa
      { x: 76, y: 2 }, // 05 Piso evadeck
      { x: 94, y: 17 }, // 06 Parabrisas
      { x: 90, y: 62 }, // 07 Tapizado marino
      { x: 71, y: 72 }, // 08 Sistema de audio
      { x: 75, y: 89 }, // 09 Bodega de proa
      { x: 61, y: 92 }, // 10 Iluminación LED
      { x: 47, y: 79 }, // 11 Canopla de proa
      { x: 39.5, y: 99 }, // 12 Pasamanos inox
      { x: 32, y: 77 }, // 13 Pasamanos inox
      { x: 21, y: 83 }, // 14 Pasamanos inox
      { x: 10, y: 85 }, // 15 Pasamanos inox
      { x: 15.5, y: 36 }, // 16 Pasamanos inox
    ],
    specs: [
      { label: "Eslora Máx", value: "7.40m", icon: "ruler" },
      { label: "Manga", value: "2.55m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.25m", icon: "arrow-up" },
      { label: "Motorización", value: "250-350hp", icon: "lightning" },
      { label: "Combustible", value: "200L", icon: "drop" },
      { label: "Personas", value: "14", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "200L", icon: "drop" },
      { label: "Pasajeros", value: "14", icon: "users" },
      { label: "Motorización", value: "1x350HP V8", icon: "lightning" },
      { label: "Velocidad Máx", value: "52 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      "Torre para wakeboard importada.<br/>Toldilla Bimini en lona acrílica importada con protección UV, estructura inoxidable y herrajes en bronce cromado.<br/>Sistema de audio con Bluetooth y cuatro parlantes náuticos.",
      "Tapicería construida en tela náutica Heavy Duty con Protección UV y antihongos.<br/>Disposición de asientos que conforman una sala de estar en cockpit con mesa desmontable y amplios lugares de guarda.<br/>Luces full led en interior de cockpit.<br/>Sistema de calefacción integrado.",
      "Compartimiento guarda ski en pasillo de cockpit a proa.",
      "Compartimiento de baño interno. Guantera de acompañante con cerradura.",
      "Sunpad de proa que forma un cómodo solarium acolchado.",
      "Gran amplitud de espacio en proa con guarda y acceso directo a una escalera de abordaje.<br/>Cavidad porta anclas con tapa en el extremo de proa.",
      "Perfil perimetral de protección con inserto en acero inoxidable.",
      "Posavasos y manijones inoxidables de sujeción.<br/>Cornamusas rebatibles.",
      "Volante de mando importado.<br/>Sistema de dirección hidráulica con columna de dirección regulable en altura.<br/>Pantalla digital para instrumentos de funciones de motor y navegación.<br/>Comando de control de luces, bomba de achique y accesorios en el puesto de mando con LED indicativos. Ecosonda integrada.",
      'Butacón tipo "bucket" giratoria con elevador de asiento abatible y corredera ajustable.',
      "Conservadora desmontable Coleman.",
      "Tanque de combustible de acero inoxidable con sensor magnético.",
      "Locker escurridor.",
      "Asientos de popa rebatibles que forman un amplio sofá para tomar sol o descansar cómodamente.",
      "Plataforma de baño integrada de gran amplitud para una experiencia única, con luces embutidas y escalera retráctil.",
      "Duchador en planchada con sistema de agua dulce con tanque de 50 lts.",
    ],
    versions: [
      {
        name: "246",
        features: [
          { label: "Escalera retráctil inox", ltd: true, flyer: true },
          { label: "Tapizado marino UV", ltd: true, flyer: false },
          { label: "Sistema de audio 6 canales", ltd: true, flyer: "optional" },
          { label: "Iluminación LED completa", ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "ROJO", hex: "#F44336" },
      { name: "HABANO", hex: "#A0856C" },
      { name: "NEGRO", hex: "#212121" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/058A6347.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_054.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_089.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_090.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_102.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_103.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_112.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_153.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_154.webp",
        w: 560,
        h: 380,
      },
    ],
    exteriorImages: [
      {
        url: "/image/2_PRODUCTO/246 DF/EXTERIOR/CHZ_2066.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/EXTERIOR/Fuentes_066.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/EXTERIOR/Fuentes_067.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.webp",
        w: 560,
        h: 380,
      },
    ],
  },
  {
    slug: "246-surf",
    name: "Classer 246 SURF",
    line: "LINEA DF",
    eslora: "7.50M",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/246surf.webp",
    thumbnailUrl: "/image/2_PRODUCTO/246 SURF/1.webp",
    heroUrl: "/image/2_PRODUCTO/246 SURF/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/246 SURF.webp",
    tagline: "Performance y estilo en cada ola.",
    brochure: "/brochures/246 SURF.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/246 SURF.webp",
    featurePoints: [
      { x: 21, y: 25 }, // 01 Escalera retráctil inox
      { x: 31, y: 22 }, // 02 Tanque combustible
      { x: 54, y: 20 }, // 03 Perfil perimetral
      { x: 61, y: 13 }, // 04 Cockpit en U con mesa
      { x: 69, y: 6 }, // 05 Piso evadeck
      { x: 84, y: 20 }, // 06 Parabrisas
      { x: 80, y: 62 }, // 07 Tapizado marino
      { x: 65, y: 72 }, // 08 Sistema de audio
      { x: 69, y: 87 }, // 09 Bodega de proa
      { x: 56, y: 90 }, // 10 Iluminación LED
      { x: 45, y: 78 }, // 11 Canopla de proa
      { x: 39, y: 97 }, // 12 Pasamanos inox
      { x: 32, y: 77 }, // 13 Pasamanos inox
      { x: 23, y: 83 }, // 14 Pasamanos inox
      { x: 14, y: 83 }, // 15 Pasamanos inox
      { x: 19, y: 39 }, // 16 Pasamanos inox
    ],
    specs: [
      { label: "Eslora Máx", value: "7.40m", icon: "ruler" },
      { label: "Manga", value: "2.55m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.25m", icon: "arrow-up" },
      { label: "Motorización", value: "250-350hp", icon: "lightning" },
      { label: "Combustible", value: "200L", icon: "drop" },
      { label: "Personas", value: "14", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "200L", icon: "drop" },
      { label: "Pasajeros", value: "14", icon: "users" },
      { label: "Motorización", value: "1x350HP V8", icon: "lightning" },
      { label: "Velocidad Máx", value: "52 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      "Torre para wakeboard importada.<br/>Toldilla Bimini en lona acrílica importada con protección UV, estructura inoxidable y herrajes en bronce cromado.<br/>Sistema de audio con Bluetooth y cuatro parlantes náuticos.",
      "Tapicería construida en tela náutica Heavy Duty con Protección UV y antihongos.<br/>Disposición de asientos que conforman una sala de estar en cockpit con mesa desmontable y amplios lugares de guarda.<br/>Luces full led en interior de cockpit.<br/>Sistema de calefacción integrado.",
      "Compartimiento guarda ski en pasillo de cockpit a proa.",
      "Compartimiento de baño interno.<br/>Guantera de acompañante con cerradura.",
      "Sunpad de proa que forma un cómodo solarium acolchado.",
      "Gran amplitud de espacio en proa con guarda y acceso directo a una escalera de abordaje.<br/>Cavidad porta anclas con tapa en el extremo de proa.",
      "Perfil perimetral de protección con inserto en acero inoxidable.",
      "Posavasos y manijones inoxidables de sujeción.<br/>Cornamusas rebatibles.",
      "Volante de mando importado.<br/>Sistema de dirección hidráulica con columna de dirección regulable en altura.<br/>Pantalla digital para instrumentos de funciones de motor y navegación.<br/>Comando de control de luces, bomba de achique y accesorios en el puesto de mando con LED indicativos. Ecosonda integrada.",
      'Butacón tipo "bucket" giratoria con elevador de asiento abatible y corredera ajustable.',
      "Conservadora desmontable Coleman.",
      "Tanque de combustible de acero inoxidable con sensor magnético.",
      "Locker escurridor.",
      "Asientos de popa rebatibles que forman un amplio sofá para tomar sol o descansar cómodamente.",
      "Plataforma de baño integrada de gran amplitud para una experiencia única, con luces embutidas y escalera retráctil.",
    ],
    versions: [
      {
        name: "246 SURF",
        features: [
          { label: "Escalera retráctil inox", ltd: true, flyer: true },
          { label: "Tapizado marino UV", ltd: true, flyer: false },
          { label: "Sistema de audio 6 canales", ltd: true, flyer: "optional" },
          { label: "Iluminación LED completa", ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "ROJO", hex: "#F44336" },
      { name: "HABANO", hex: "#A0856C" },
      { name: "NEGRO", hex: "#212121" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      {
        url: "/image/2_PRODUCTO/246 SURF/INTERIOR/IMG_3243.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/INTERIOR/IMG_3248.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/INTERIOR/Still 2025-12-30 092528_1.1.1.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/INTERIOR/Still 2025-12-30 092922_1.1.2.webp",
        w: 560,
        h: 380,
      },
    ],
    exteriorImages: [
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/0C9A6776-2.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/0C9A6864.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/058A6445.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_161130_0621_1771639354100_photo.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_181316_0635_1771639294305_photo.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_181548_0645_1771639286496_photo.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3190.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3198.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/Still 2025-12-18 111512_1.2.2.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 SURF/EXTERIOR/Still 2025-12-18 111512_1.2.7.webp",
        w: 560,
        h: 380,
      },
    ],
  },

  // ── LINEA OB ────────────────────────────────────────────────────
  {
    slug: "246-ob",
    name: "Classer 246 OB",
    line: "LINEA OB",
    eslora: "7.80M",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/246ob.webp",
    thumbnailUrl: "/image/2_PRODUCTO/246 OB/1.webp",
    heroUrl: "/image/2_PRODUCTO/246 OB/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/246 OB.webp",
    tagline: "Potencia fuera de borda sin compromisos.",
    brochure: "/brochures/246 OB.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/246 OB.webp",
    featurePoints: [
      { x: 24, y: 28 }, // 01 Escalera retráctil inox
      { x: 38, y: 12 }, // 02 Tanque combustible
      { x: 57, y: 19 }, // 03 Perfil perimetral
      { x: 58, y: 9 }, // 04 Cockpit en U con mesa
      { x: 71, y: 20 }, // 05 Piso evadeck
      { x: 84, y: 17 }, // 06 Parabrisas
      { x: 83, y: 56 }, // 07 Tapizado marino
      { x: 71, y: 64 }, // 08 Sistema de audio
      { x: 65, y: 94 }, // 09 Bodega de proa
      { x: 60, y: 87 }, // 10 Iluminación LED
      { x: 48, y: 76 }, // 11 Canopla de proa
      { x: 41, y: 95 }, // 12 Pasamanos inox
      { x: 34, y: 75 }, // 13 Pasamanos inox
      { x: 27, y: 85 }, // 14 Pasamanos inox
      { x: 19, y: 86 }, // 15 Pasamanos inox
      { x: 24, y: 39 }, // 16 Pasamanos inox
    ],
    specs: [
      { label: "Eslora Máx", value: "7.80m", icon: "ruler" },
      { label: "Manga", value: "2.60m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.25m", icon: "arrow-up" },
      { label: "Motorización", value: "250-350hp OB", icon: "lightning" },
      { label: "Combustible", value: "220L", icon: "drop" },
      { label: "Personas", value: "14", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "220L", icon: "drop" },
      { label: "Pasajeros", value: "14", icon: "users" },
      { label: "Motorización", value: "2x200HP OB", icon: "lightning" },
      { label: "Velocidad Máx", value: "55 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      "Tapicería construida en tela náutica Heavy Duty con Protección UV.<br/>Disposición de asientos que conforman una sala de estar en cockpit con mesa desmontable y amplios lugares de guarda.<br/>Luces full led en interior de cockpit.",
      "Torre para wakeboard importada.<br/>Toldilla Bimini en lona acrílica importada con protección UV, estructura inoxidable y herrajes en bronce cromado.<br/>Sistema de audio con Bluetooth y cuatro parlantes náuticos.",
      "Compartimiento de baño interno.<br/>Guantera de acompañante con cerradura.",
      "Compartimiento guarda ski en pasillo de cockpit a proa.",
      "Sunpad de proa que forma un cómodo solarium acolchado.",
      "Gran amplitud de espacio en proa con guarda y acceso directo a una escalera de abordaje.<br/>Cavidad porta anclas con tapa en el extremo de proa.",
      "Perfil perimetral de protección con inserto en acero inoxidable.",
      "Posavasos y manijones inoxidables de sujeción.<br/>Cornamusas rebatibles.",
      "Volante de mando importado.<br/>Sistema de dirección hidráulica con columna de dirección regulable en altura.<br/>Pantalla digital para instrumentos de funciones de motor y navegación.<br/>Comando de control de luces, bomba de achique y accesorios en el puesto de mando con LED indicativos.<br/>Ecosonda integrada.",
      'Butacón tipo "bucket" giratoria con elevador de asiento abatible y corredera ajustable.',
      "Conservadora desmontable Coleman.",
      "Tanque de combustible de acero inoxidable con sensor magnético.",
      "Locker escurridor.",
      "Asientos de popa rebatibles que forman un amplio sofá para tomar sol o descansar cómodamente.",
      "Plataforma de popa tipo planchada integrada de gran amplitud para una experiencia única.<br/>Luces bajo planchada.<br/>Escalera retráctil debajo de planchada.",
      "Duchador en planchada con sistema de agua dulce con tanque de 50 lts.",
    ],
    versions: [
      {
        name: "246 OB",
        features: [
          { label: "Escalera retráctil doble", ltd: true, flyer: true },
          {
            label: "Plataforma de popa extensible",
            ltd: true,
            flyer: "optional",
          },
          { label: "Sistema de audio", ltd: true, flyer: "optional" },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "NEGRO", hex: "#212121" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1113.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1172.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1181.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1210.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1253.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1315.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/IMG_2770.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/INTERIOR/WhatsApp Image 2026-01-25 at 6.11.42 PM.webp",
        w: 560,
        h: 380,
      },
    ],
    exteriorImages: [
      { url: "/image/2_PRODUCTO/246 OB/EXTERIOR/1A.webp", w: 560, h: 380 },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/246 OB FEED.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251018185945_0199_D.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251119151434_0363_D.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251119154154_0434_D.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0194.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0197.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0861.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0915.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_2918.webp",
        w: 560,
        h: 380,
      },
    ],
  },
  {
    slug: "206-ftx",
    name: "Classer 206 FTX",
    line: "LINEA OB",
    eslora: "6.20M",
    badge: "NUEVO",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/206.webp",
    thumbnailUrl: "/image/2_PRODUCTO/206 FTX/1.webp",
    heroUrl: "/image/2_PRODUCTO/206 FTX/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/206 FTX.webp",
    tagline: "El punto de inflexión entre performance y confort.",
    brochure: "/brochures/206 FTX.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/206 FTX.webp",
    featurePoints: [
      { x: 22, y: 9 }, // 01 Escalera retráctil
      { x: 44, y: 9 }, // 02 Tanque acero inoxidable
      { x: 61, y: 7 }, // 03 Perfil perimetral
      { x: 58, y: 18 }, // 04 Cockpit en U
      { x: 68, y: 30 }, // 05 Piso antideslizante evadeck
      { x: 90, y: 21 }, // 06 Parabrisas integrado
      { x: 90, y: 70 }, // 07 Tapizado premium
      { x: 61, y: 97 }, // 08 Sistema de audio marino
      { x: 43, y: 92 }, // 09 Bodega de proa
      { x: 39, y: 82 }, // 10 Luz de navegación LED
      { x: 19, y: 91 }, // 11 Canopla de proa
      { x: 17, y: 37 }, // 12 Pasamanos acero inoxidable
    ],
    specs: [
      { label: "Eslora Máx", value: "6.08m", icon: "ruler" },
      { label: "Manga", value: "2.40m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.15m", icon: "arrow-up" },
      { label: "Motorización", value: "150-200hp", icon: "lightning" },
      { label: "Combustible", value: "145L", icon: "drop" },
      { label: "Personas", value: "9", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "150L", icon: "drop" },
      { label: "Pasajeros", value: "8", icon: "users" },
      { label: "Motorización", value: "1x200HP V6", icon: "lightning" },
      { label: "Velocidad Máx", value: "45 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      'Tapicería construida en tela náutica Heavy Duty con Protección UV.<br/>Amplio cockpit configurado en "U" para uso multipropósito, con sus correspondientes lugares de guarda.<br/>Mesa desmontable plástica con base inoxidable y posavasos integrados.',
      'Butacón tipo "bucket" giratoria con elevador de asiento abatible y corredera ajustable.',
      "Torre para wakeboard importada.<br/>Toldilla Bimini en lona acrílica importada con protección UV, estructura inoxidable y herrajes en bronce cromado.<br/>Sistema de audio con Bluetooth y cuatro parlantes náuticos.",
      "Guantera de acompañante con cerradura.",
      "Compartimiento guarda ski en pasillo de cockpit a proa.",
      "Cavidad porta anclas con tapa en el extremo de proa.<br/>Posavasos y manijones inoxidables de sujeción.<br/>Cornamusas rebatibles.",
      "Perfil perimetral de protección con inserto en acero inoxidable.",
      "Volante de mando importado.<br/>Columna de dirección regulable en altura.<br/>Comando de control de luces, bomba de achique y accesorios en el puesto de mando con LED indicativos.<br/>Instrumental de seis elementos con indicadores de motor, performance y nivel de combustible. / Pantalla digital para instrumentos de funciones de motor y navegación.<br/>Ecosonda.",
      "Piso antideslizante tipo evadeck con diseño único a este modelo.",
      "Tanque de combustible de acero inoxidable con sensor magnético.",
      "Plataformas de popa integradas para fácil acceso y descenso del agua.<br/>Escalera retráctil debajo de planchada.",
      "Conservadora integrada de 24 lts. con desagote a sentina.",
    ],
    versions: [
      {
        name: "206 FTX",
        features: [
          { label: "Escalera retráctil", ltd: true, flyer: true },
          { label: "Tanque acero inoxidable", ltd: true, flyer: true },
          { label: "Perfil perimetral", ltd: true, flyer: true },
          { label: 'Cockpit en "U"', ltd: true, flyer: true },
          { label: "Piso antideslizante evadeck", ltd: true, flyer: true },
          { label: "Parabrisas integrado", ltd: true, flyer: true },
          { label: "Tapizado premium resistente UV", ltd: true, flyer: false },
          { label: "Sistema de audio marino", ltd: true, flyer: "optional" },
          {
            label: "Bodega de proa con colchoneta",
            ltd: true,
            flyer: "optional",
          },
          { label: "Luz de navegación LED", ltd: true, flyer: true },
          { label: "Canopla de proa", ltd: true, flyer: false },
          { label: "Pasamanos acero inoxidable", ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "ROJO", hex: "#F44336" },
      { name: "HABANO", hex: "#A0856C" },
      { name: "NEGRO", hex: "#212121" },
      { name: "ROJO OSCURO", hex: "#B71C1C" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      {
        url: "/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9528.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9538.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9546.webp",
        w: 560,
        h: 380,
      },
    ],
    exteriorImages: [
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/dji_fly_20251231_192350_0483_1767222675264_photo.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7411.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7418.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7425.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7433.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7514.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7565.webp",
        w: 560,
        h: 380,
      },
      {
        url: "/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7664.webp",
        w: 560,
        h: 380,
      },
    ],
  },
  {
    slug: "186",
    name: "Classer 186",
    line: "LINEA OB",
    eslora: "5.80M",
    badge: "PRONTO",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/186.webp",
    thumbnailUrl: "/image/2_PRODUCTO/186/1.webp",
    heroUrl: "/image/2_PRODUCTO/186/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/186.webp",
    tagline: "El próximo capítulo. Próximamente.",
    preVentaVideoUrl: "/image/pre-venta/186/animation.mp4",
    preVentaSpecs: [
      { label: "Eslora", value: "5,80m", icon: "ruler" },
      { label: "Manga", value: "2,38m", icon: "arrows-horizontal" },
      { label: "Personas", value: "8", icon: "users" },
      { label: "Motorización", value: "115 a 150hp", icon: "lightning" },
    ],
    specs: [
      { label: "Eslora Máx", value: "5.80m", icon: "ruler" },
      { label: "Manga", value: "2.38m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "TBD", icon: "arrow-up" },
      { label: "Motorización", value: "115 a 150hp", icon: "lightning" },
      { label: "Combustible", value: "TBD", icon: "drop" },
      { label: "Personas", value: "8", icon: "users" },
    ],
    specsExtra: [],
    exteriorFeatures: [],
    versions: [],
    gelcoatColors: [],
    tapiceriaColors: [],
    pisoColors: [],
    interiorImages: [],
    exteriorImages: [],
  },

  // ── LINEA CLASSIC ────────────────────────────────────────────────
  {
    slug: "165",
    name: "Classer 165",
    line: "LINEA CLASSIC",
    eslora: "5.10M",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/165.webp",
    thumbnailUrl: "/image/2_PRODUCTO/165/1.webp",
    heroUrl: "/image/2_PRODUCTO/165/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/165.webp",
    tagline: "Compacta y ágil.",
    brochure: "/brochures/165.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/165.webp",
    featurePoints: [
      { x: 33, y: 31 }, // 01 Escalera retráctil inox
      { x: 41, y: 12 }, // 02 Tanque combustible
      { x: 50.5, y: 17 }, // 03 Perfil perimetral
      { x: 53.5, y: 9 }, // 04 Cockpit en U con mesa
      { x: 55, y: 17 }, // 05 Piso evadeck
      { x: 63.5, y: 5 }, // 06 Parabrisas
      { x: 72.5, y: 48 }, // 07 Tapizado marino
      { x: 66.6, y: 63 }, // 08 Sistema de audio
      { x: 55, y: 74 }, // 09 Bodega de proa
      { x: 48.5, y: 92 }, // 10 Iluminación LED
      { x: 40, y: 91 }, // 11 Canopla de proa
      { x: 27, y: 40 }, // 12 Pasamanos inox
    ],
    specs: [
      { label: "Eslora Máx", value: "5.30m", icon: "ruler" },
      { label: "Manga", value: "2.10m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.00m", icon: "arrow-up" },
      { label: "Motorización", value: "70-115hp", icon: "lightning" },
      { label: "Combustible", value: "95L", icon: "drop" },
      { label: "Personas", value: "6", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "95L", icon: "drop" },
      { label: "Pasajeros", value: "6", icon: "users" },
      { label: "Motorización", value: "1x115HP", icon: "lightning" },
      { label: "Velocidad Máx", value: "38 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      "Sistema de audio con Bluetooth y cuatro parlantes náuticos.",
      "Toldilla Bimini en lona acrílica importada con protección UV y estructura inoxidable.",
      "Butacones envolventes giratorios.",
      "Guantera de acompañante con cerradura.",
      "Compartimiento guarda ski en pasillo de cockpit a proa.",
      "Volante de mando con diseño distintivo.<br/>Instrumental de cinco elementos con indicadores de motor, performance y nivel de combustible.<br/>Comando de control de luces, bomba de achique y accesorios en el puesto de mando con LED indicativos.",
      "Posavasos y manijones inoxidables de sujeción.<br/>Cornamusas rebatibles.",
      "Perfil perimetral de protección en PVC con detalle en chromo.",
      "Tanque de combustible de acero inoxidable con sensor magnético.",
      'Tapicería construida en tela náutica Heavy Duty con Protección UV.<br/>Asientos en popa en "U" formando un living, con sus correspondientes lugares de guarda debajo.',
      "Plataformas de popa para fácil acceso y descenso del agua.",
      "Escalera retráctil sobre planchada.",
    ],
    versions: [
      {
        name: "165",
        features: [
          { label: "Tapicería premium", ltd: true, flyer: false },
          { label: "Parabrisas", ltd: true, flyer: true },
          { label: "Bodega de proa", ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "ROJO", hex: "#F44336" },
      { name: "HABANO", hex: "#A0856C" },
      { name: "NEGRO", hex: "#212121" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      { url: "/image/2_PRODUCTO/165/INTERIOR/2.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/165/INTERIOR/5.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/165/INTERIOR/7.webp", w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: "/image/2_PRODUCTO/165/EXTERIOR/2.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/165/EXTERIOR/3.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/165/EXTERIOR/5.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/165/EXTERIOR/12.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/165/EXTERIOR/18.webp", w: 560, h: 380 },
    ],
  },
  {
    slug: "170",
    name: "Classer 170",
    line: "LINEA CLASSIC",
    eslora: "5.40M",
    navbarThumbnailUrl: "/image/2_PRODUCTO/navbar/170.webp",
    thumbnailUrl: "/image/2_PRODUCTO/170/1.webp",
    heroUrl: "/image/2_PRODUCTO/170/1.webp",
    silhouetteTechnicalUrl: "/image/siluetas/170.webp",
    tagline: "Versatilidad en cada ola.",
    brochure: "/brochures/170.pdf",
    technicalDiagramUrl: "/image/2_PRODUCTO/lineas_productos/170.webp",
    featurePoints: [
      { x: 36, y: 34 }, // 01 Escalera retráctil inox
      { x: 49, y: 8 }, // 02 Tanque combustible
      { x: 56.5, y: 17 }, // 03 Perfil perimetral
      { x: 61.5, y: 9 }, // 04 Cockpit en U con mesa
      { x: 62, y: 27 }, // 05 Piso evadeck
      { x: 73.3, y: 22 }, // 06 Parabrisas
      { x: 71, y: 56 }, // 07 Tapizado marino
      { x: 67, y: 81 }, // 08 Sistema de audio
      { x: 64, y: 89 }, // 09 Bodega de proa
      { x: 52, y: 72 }, // 10 Iluminación LED
      { x: 46, y: 78 }, // 11 Canopla de proa
      { x: 36, y: 95 }, // 12 Pasamanos inox
      { x: 26, y: 46 }, // 13 Pasamanos inox
    ],
    specs: [
      { label: "Eslora Máx", value: "5.70m", icon: "ruler" },
      { label: "Manga", value: "2.20m", icon: "arrows-horizontal" },
      { label: "Puntal", value: "1.05m", icon: "arrow-up" },
      { label: "Motorización", value: "90-150hp", icon: "lightning" },
      { label: "Combustible", value: "110L", icon: "drop" },
      { label: "Personas", value: "7", icon: "users" },
    ],
    specsExtra: [
      { label: "Combustible", value: "110L", icon: "drop" },
      { label: "Pasajeros", value: "7", icon: "users" },
      { label: "Motorización", value: "1x150HP", icon: "lightning" },
      { label: "Velocidad Máx", value: "40 nudos", icon: "gauge" },
    ],
    exteriorFeatures: [
      "Escalera retráctil",
      "Tanque acero inoxidable",
      "Perfil perimetral",
      'Cockpit en "U"',
      "Piso antideslizante evadeck",
      "Bodega de proa",
    ],
    versions: [
      {
        name: "170",
        features: [
          { label: "Tapicería premium", ltd: true, flyer: false },
          { label: "Parabrisas", ltd: true, flyer: true },
          { label: "Sistema de audio", ltd: true, flyer: "optional" },
        ],
      },
    ],
    gelcoatColors: [
      { name: "BLANCO", hex: "#FFFFFF" },
      { name: "TITANIUM", hex: "#9E9E9E" },
      { name: "NARDO", hex: "#607D8B" },
      { name: "TURQUESA", hex: "#00BCD4" },
      { name: "ROJO", hex: "#F44336" },
      { name: "NEGRO", hex: "#212121" },
    ],
    tapiceriaColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS MEDIO", hex: "#9E9E9E" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "GRIS NEGRO", hex: "#424242" },
      { name: "ROJO", hex: "#F44336" },
      { name: "HABANO", hex: "#A0856C" },
      { name: "NEGRO", hex: "#212121" },
    ],
    pisoColors: [
      { name: "GRIS CLARO", hex: "#BDBDBD" },
      { name: "GRIS OSCURO", hex: "#616161" },
      { name: "HABANO", hex: "#A0856C" },
    ],
    interiorImages: [
      { url: "/image/2_PRODUCTO/170/INTERIOR/1.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/170/INTERIOR/2.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/170/INTERIOR/3.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/170/INTERIOR/4.webp", w: 420, h: 380 }, // TODO: convertir a .webp
    ],
    exteriorImages: [
      { url: "/image/2_PRODUCTO/170/EXTERIOR/2.webp", w: 560, h: 380 }, // TODO: convertir a .webp
      { url: "/image/2_PRODUCTO/170/EXTERIOR/3.webp", w: 420, h: 380 },
      { url: "/image/2_PRODUCTO/170/EXTERIOR/5.webp", w: 420, h: 380 }, // TODO: convertir a .webp
      { url: "/image/2_PRODUCTO/170/EXTERIOR/16.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/170/EXTERIOR/18.webp", w: 560, h: 380 },
      { url: "/image/2_PRODUCTO/170/EXTERIOR/19.webp", w: 560, h: 380 },
    ],
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}
