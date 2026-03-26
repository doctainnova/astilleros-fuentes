export interface ModelSpec {
  label: string;
  value: string;
  icon: string;
}

export interface ModelVersion {
  name: string;
  features: { label: string; ltd: boolean | 'optional'; flyer: boolean | 'optional' }[];
}

export interface Model {
  slug: string;
  name: string;
  line: string;
  eslora: string;
  badge?: 'NUEVO' | 'PRONTO';
  thumbnailUrl: string;
  heroUrl: string;
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
}

export const models: Model[] = [
  // ── LINEA DF ────────────────────────────────────────────────────
  {
    slug: '246',
    name: 'Classer 246',
    line: 'LINEA DF',
    eslora: '7.50M',
    thumbnailUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.webp',
    heroUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.webp',
    tagline: 'El estándar de la excelencia.',
    brochure: '/brochures/246 DF.pdf',
    specs: [
      { label: 'Eslora Máx', value: '7.40m', icon: 'ruler' },
      { label: 'Manga', value: '2.55m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.25m', icon: 'arrow-up' },
      { label: 'Motorización', value: '250-350hp', icon: 'lightning' },
      { label: 'Combustible', value: '200L', icon: 'drop' },
      { label: 'Personas', value: '14', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '200L', icon: 'drop' },
      { label: 'Pasajeros', value: '14', icon: 'users' },
      { label: 'Motorización', value: '1x350HP V8', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '52 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: [
      'Escalera retráctil inox',
      'Tanque combustible acero inoxidable',
      'Perfil perimetral protector',
      'Cockpit en "U" con mesa',
      'Piso evadeck premium',
      'Parabrisas panorámico',
      'Tapizado marino UV',
      'Sistema de audio 6 canales',
      'Bodega de proa con colchoneta doble',
      'Iluminación LED completa',
      'Canopla de proa extensible',
      'Pasamanos inox 316',
    ],
    versions: [
      {
        name: '246',
        features: [
          { label: 'Escalera retráctil inox', ltd: true, flyer: true },
          { label: 'Tapizado marino UV', ltd: true, flyer: false },
          { label: 'Sistema de audio 6 canales', ltd: true, flyer: 'optional' },
          { label: 'Iluminación LED completa', ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'HABANO', hex: '#A0856C' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/058A6347.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_054.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_089.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_090.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_102.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_103.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_112.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_153.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/INTERIOR/Fuentes_154.webp', w: 560, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/246 DF/EXTERIOR/CHZ_2066.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/EXTERIOR/Fuentes_066.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/EXTERIOR/Fuentes_067.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.webp', w: 560, h: 380 },
    ],
  },
  {
    slug: '246-surf',
    name: 'Classer 246 SURF',
    line: 'LINEA DF',
    eslora: '7.50M',
    thumbnailUrl: '/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3190.webp',
    heroUrl: '/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3190.webp',
    tagline: 'Performance y estilo en cada ola.',
    brochure: '/brochures/246 SURF.pdf',
    specs: [
      { label: 'Eslora Máx', value: '7.40m', icon: 'ruler' },
      { label: 'Manga', value: '2.55m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.25m', icon: 'arrow-up' },
      { label: 'Motorización', value: '250-350hp', icon: 'lightning' },
      { label: 'Combustible', value: '200L', icon: 'drop' },
      { label: 'Personas', value: '14', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '200L', icon: 'drop' },
      { label: 'Pasajeros', value: '14', icon: 'users' },
      { label: 'Motorización', value: '1x350HP V8', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '52 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: [
      'Escalera retráctil inox',
      'Tanque combustible acero inoxidable',
      'Perfil perimetral protector',
      'Cockpit en "U" con mesa',
      'Piso evadeck premium',
      'Parabrisas panorámico',
      'Tapizado marino UV',
      'Sistema de audio 6 canales',
      'Bodega de proa con colchoneta doble',
      'Iluminación LED completa',
      'Canopla de proa extensible',
      'Pasamanos inox 316',
    ],
    versions: [
      {
        name: '246 SURF',
        features: [
          { label: 'Escalera retráctil inox', ltd: true, flyer: true },
          { label: 'Tapizado marino UV', ltd: true, flyer: false },
          { label: 'Sistema de audio 6 canales', ltd: true, flyer: 'optional' },
          { label: 'Iluminación LED completa', ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'HABANO', hex: '#A0856C' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/246 SURF/INTERIOR/IMG_3243.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/INTERIOR/IMG_3248.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/INTERIOR/Still 2025-12-30 092528_1.1.1.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/INTERIOR/Still 2025-12-30 092922_1.1.2.webp', w: 560, h: 380 },

    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/0C9A6776-2.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/0C9A6864.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/058A6445.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_161130_0621_1771639354100_photo.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_181316_0635_1771639294305_photo.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/dji_fly_20260220_181548_0645_1771639286496_photo.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3190.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/IMG_3198.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/Still 2025-12-18 111512_1.2.2.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 SURF/EXTERIOR/Still 2025-12-18 111512_1.2.7.webp', w: 560, h: 380 },

    ],
  },

  // ── LINEA OB ────────────────────────────────────────────────────
  {
    slug: '246-ob',
    name: 'Classer 246 OB',
    line: 'LINEA OB',
    eslora: '7.80M',
    thumbnailUrl: '/image/2_PRODUCTO/246 OB/EXTERIOR/1A.webp',
    heroUrl: '/image/2_PRODUCTO/246 OB/EXTERIOR/1A.webp',
    tagline: 'Potencia fuera de borda sin compromisos.',
    brochure: '/brochures/246 OB.pdf',
    specs: [
      { label: 'Eslora Máx', value: '7.80m', icon: 'ruler' },
      { label: 'Manga', value: '2.60m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.25m', icon: 'arrow-up' },
      { label: 'Motorización', value: '250-350hp OB', icon: 'lightning' },
      { label: 'Combustible', value: '220L', icon: 'drop' },
      { label: 'Personas', value: '14', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '220L', icon: 'drop' },
      { label: 'Pasajeros', value: '14', icon: 'users' },
      { label: 'Motorización', value: '2x200HP OB', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '55 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: [
      'Escalera retráctil doble',
      'Tanque combustible 220L inox',
      'Consola central con parabrisas',
      'Plataforma de popa extensible',
      'Piso evadeck premium',
      'Asientos delanteros con apoya brazos',
    ],
    versions: [
      {
        name: '246 OB',
        features: [
          { label: 'Escalera retráctil doble', ltd: true, flyer: true },
          { label: 'Plataforma de popa extensible', ltd: true, flyer: 'optional' },
          { label: 'Sistema de audio', ltd: true, flyer: 'optional' },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1113.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1172.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1181.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1210.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1253.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_1315.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/IMG_2770.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/INTERIOR/WhatsApp Image 2026-01-25 at 6.11.42 PM.webp', w: 560, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/1A.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/246 OB FEED.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251018185945_0199_D.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251119151434_0363_D.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/DJI_20251119154154_0434_D.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0194.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0197.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0861.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_0915.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/246 OB/EXTERIOR/IMG_2918.webp', w: 560, h: 380 },
    ],
  },
  {
    slug: '206-ftx',
    name: 'Classer 206 FTX',
    line: 'LINEA OB',
    eslora: '6.20M',
    badge: 'NUEVO',
    thumbnailUrl: '/image/2_PRODUCTO/206 FTX/1.webp',
    heroUrl: '/image/2_PRODUCTO/206 FTX/1.webp',
    tagline: 'El punto de inflexión entre performance y confort.',
    brochure: '/brochures/206 FTX.pdf',
    specs: [
      { label: 'Eslora Máx', value: '6.08m', icon: 'ruler' },
      { label: 'Manga', value: '2.40m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.15m', icon: 'arrow-up' },
      { label: 'Motorización', value: '150-200hp', icon: 'lightning' },
      { label: 'Combustible', value: '145L', icon: 'drop' },
      { label: 'Personas', value: '9', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '150L', icon: 'drop' },
      { label: 'Pasajeros', value: '8', icon: 'users' },
      { label: 'Motorización', value: '1x200HP V6', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '45 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: [
      'Escalera retráctil',
      'Tanque acero inoxidable',
      'Perfil perimetral',
      'Cockpit en "U"',
      'Piso antideslizante evadeck',
      'Parabrisas integrado',
      'Tapizado premium resistente UV',
      'Sistema de audio marino',
      'Bodega de proa con colchoneta',
      'Luz de navegación LED',
      'Canopla de proa',
      'Pasamanos acero inoxidable',
    ],
    versions: [
      {
        name: '206 FTX',
        features: [
          { label: 'Escalera retráctil', ltd: true, flyer: true },
          { label: 'Tanque acero inoxidable', ltd: true, flyer: true },
          { label: 'Perfil perimetral', ltd: true, flyer: true },
          { label: 'Cockpit en "U"', ltd: true, flyer: true },
          { label: 'Piso antideslizante evadeck', ltd: true, flyer: true },
          { label: 'Parabrisas integrado', ltd: true, flyer: true },
          { label: 'Tapizado premium resistente UV', ltd: true, flyer: false },
          { label: 'Sistema de audio marino', ltd: true, flyer: 'optional' },
          { label: 'Bodega de proa con colchoneta', ltd: true, flyer: 'optional' },
          { label: 'Luz de navegación LED', ltd: true, flyer: true },
          { label: 'Canopla de proa', ltd: true, flyer: false },
          { label: 'Pasamanos acero inoxidable', ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'HABANO', hex: '#A0856C' },
      { name: 'NEGRO', hex: '#212121' },
      { name: 'ROJO OSCURO', hex: '#B71C1C' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9528.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9538.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/INTERIOR/1A8A9546.webp', w: 560, h: 380 },

    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/dji_fly_20251231_192350_0483_1767222675264_photo.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7411.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7418.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7425.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7433.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7514.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7565.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/206 FTX/EXTERIOR/IMG_7664.webp', w: 560, h: 380 },
    ],
  },
  {
    slug: '186',
    name: 'Classer 186',
    line: 'LINEA OB',
    eslora: 'PRÓXIMAMENTE',
    badge: 'PRONTO',
    thumbnailUrl: '/image/2_PRODUCTO/246 OB/1.webp',
    heroUrl: '/image/2_PRODUCTO/246 OB/1.webp',
    tagline: 'El próximo capítulo. Próximamente.',
    specs: [
      { label: 'Eslora Máx', value: 'TBD', icon: 'ruler' },
      { label: 'Manga', value: 'TBD', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: 'TBD', icon: 'arrow-up' },
      { label: 'Motorización', value: 'TBD', icon: 'lightning' },
      { label: 'Combustible', value: 'TBD', icon: 'drop' },
      { label: 'Personas', value: 'TBD', icon: 'users' },
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
    slug: '165',
    name: 'Classer 165',
    line: 'LINEA CLASSIC',
    eslora: '5.10M',
    thumbnailUrl: '/image/2_PRODUCTO/165/1.png',
    heroUrl: '/image/2_PRODUCTO/165/1.png',
    tagline: 'Compacta y ágil.',
    brochure: '/brochures/165.pdf',
    specs: [
      { label: 'Eslora Máx', value: '5.10m', icon: 'ruler' },
      { label: 'Manga', value: '2.10m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.00m', icon: 'arrow-up' },
      { label: 'Motorización', value: '90-115hp', icon: 'lightning' },
      { label: 'Combustible', value: '95L', icon: 'drop' },
      { label: 'Personas', value: '6', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '95L', icon: 'drop' },
      { label: 'Pasajeros', value: '6', icon: 'users' },
      { label: 'Motorización', value: '1x115HP', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '38 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: ['Escalera retráctil', 'Piso antideslizante', 'Cockpit abierto', 'Parabrisas integrado', 'Asientos tapizados', 'Bodega de proa'],
    versions: [
      {
        name: '165',
        features: [
          { label: 'Tapicería premium', ltd: true, flyer: false },
          { label: 'Parabrisas', ltd: true, flyer: true },
          { label: 'Bodega de proa', ltd: true, flyer: true },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'HABANO', hex: '#A0856C' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/165/INTERIOR/2.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/INTERIOR/5.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/INTERIOR/7.webp', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/165/EXTERIOR/2.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/3.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/5.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/12.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/18.webp', w: 560, h: 380 },
    ],
  },
  {
    slug: '170',
    name: 'Classer 170',
    line: 'LINEA CLASSIC',
    eslora: '5.40M',
    thumbnailUrl: '/image/2_PRODUCTO/170/2.png',
    heroUrl: '/image/2_PRODUCTO/170/2.png',
    tagline: 'Versatilidad en cada ola.',
    brochure: '/brochures/170.pdf',
    specs: [
      { label: 'Eslora Máx', value: '5.40m', icon: 'ruler' },
      { label: 'Manga', value: '2.20m', icon: 'arrows-horizontal' },
      { label: 'Puntal', value: '1.05m', icon: 'arrow-up' },
      { label: 'Motorización', value: '115-150hp', icon: 'lightning' },
      { label: 'Combustible', value: '110L', icon: 'drop' },
      { label: 'Personas', value: '7', icon: 'users' },
    ],
    specsExtra: [
      { label: 'Combustible', value: '110L', icon: 'drop' },
      { label: 'Pasajeros', value: '7', icon: 'users' },
      { label: 'Motorización', value: '1x150HP', icon: 'lightning' },
      { label: 'Velocidad Máx', value: '40 nudos', icon: 'gauge' },
    ],
    exteriorFeatures: ['Escalera retráctil', 'Tanque acero inoxidable', 'Perfil perimetral', 'Cockpit en "U"', 'Piso antideslizante evadeck', 'Bodega de proa'],
    versions: [
      {
        name: '170',
        features: [
          { label: 'Tapicería premium', ltd: true, flyer: false },
          { label: 'Parabrisas', ltd: true, flyer: true },
          { label: 'Sistema de audio', ltd: true, flyer: 'optional' },
        ],
      },
    ],
    gelcoatColors: [
      { name: 'BLANCO', hex: '#FFFFFF' },
      { name: 'TITANIUM', hex: '#9E9E9E' },
      { name: 'NARDO', hex: '#607D8B' },
      { name: 'TURQUESA', hex: '#00BCD4' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    tapiceriaColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS MEDIO', hex: '#9E9E9E' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'GRIS NEGRO', hex: '#424242' },
      { name: 'ROJO', hex: '#F44336' },
      { name: 'HABANO', hex: '#A0856C' },
      { name: 'NEGRO', hex: '#212121' },
    ],
    pisoColors: [
      { name: 'GRIS CLARO', hex: '#BDBDBD' },
      { name: 'GRIS OSCURO', hex: '#616161' },
      { name: 'HABANO', hex: '#A0856C' },
    ],
    interiorImages: [
      { url: '/image/2_PRODUCTO/170/INTERIOR/1.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/2.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/3.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/4.png', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/170/EXTERIOR/2.png', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/3.webp', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/5.png', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/16.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/18.webp', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/19.webp', w: 560, h: 380 },
    ],
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return models.find(m => m.slug === slug);
}