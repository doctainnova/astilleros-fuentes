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
    thumbnailUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.jpg',
    heroUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.jpg',
    tagline: 'El estándar de la excelencia.',
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
      { url: 'https://placehold.co/560x380/1a2035/a8b3c8?text=Interior+246+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+3', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: 'https://placehold.co/560x380/0f1525/a8b3c8?text=Exterior+246+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+3', w: 420, h: 380 },
    ],
  },
  {
    slug: '246-surf',
    name: 'Classer 246 SURF',
    line: 'LINEA DF',
    eslora: '7.50M',
    thumbnailUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.jpg',
    heroUrl: '/image/2_PRODUCTO/246 DF/EXTERIOR/IMAGEN 2.jpg',
    tagline: 'Performance y estilo en cada ola.',
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
      { url: 'https://placehold.co/560x380/1a2035/a8b3c8?text=Interior+246+SURF+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+SURF+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+SURF+3', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: 'https://placehold.co/560x380/0f1525/a8b3c8?text=Exterior+246+SURF+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+SURF+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+SURF+3', w: 420, h: 380 },
    ],
  },

  // ── LINEA OB ────────────────────────────────────────────────────
  {
    slug: '246-ob',
    name: 'Classer 246 OB',
    line: 'LINEA OB',
    eslora: '7.80M',
    thumbnailUrl: '/image/2_PRODUCTO/246 OB/1.JPG',
    heroUrl: '/image/2_PRODUCTO/246 OB/1.JPG',
    tagline: 'Potencia fuera de borda sin compromisos.',
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
      { url: 'https://placehold.co/560x380/1a2035/a8b3c8?text=Interior+246+OB+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+OB+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+246+OB+3', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: 'https://placehold.co/560x380/0f1525/a8b3c8?text=Exterior+246+OB+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+OB+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+246+OB+3', w: 420, h: 380 },
    ],
  },
  {
    slug: '206-ftx',
    name: 'Classer 206 FTX',
    line: 'LINEA OB',
    eslora: '6.20M',
    badge: 'NUEVO',
    thumbnailUrl: '/image/2_PRODUCTO/206 FTX/1.JPG',
    heroUrl: '/image/2_PRODUCTO/206 FTX/1.JPG',
    tagline: 'El punto de inflexión entre performance y confort.',
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
      { url: 'https://placehold.co/560x380/1a2035/a8b3c8?text=Interior+206+FTX+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+206+FTX+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/1a2035/a8b3c8?text=Interior+206+FTX+3', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: 'https://placehold.co/560x380/0f1525/a8b3c8?text=Exterior+206+FTX+1', w: 560, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+206+FTX+2', w: 420, h: 380 },
      { url: 'https://placehold.co/420x380/0f1525/a8b3c8?text=Exterior+206+FTX+3', w: 420, h: 380 },
    ],
  },
  {
    slug: '186',
    name: 'Classer 186',
    line: 'LINEA OB',
    eslora: 'PRÓXIMAMENTE',
    badge: 'PRONTO',
    thumbnailUrl: '/image/2_PRODUCTO/246 OB/1.JPG',
    heroUrl: '/image/2_PRODUCTO/246 OB/1.JPG',
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
      { url: '/image/2_PRODUCTO/165/INTERIOR/2.jpg', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/INTERIOR/5.jpg', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/INTERIOR/7.jpg', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/165/EXTERIOR/2.png', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/3.png', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/5.png', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/12.jpg', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/165/EXTERIOR/18.jpg', w: 560, h: 380 },
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
      { url: '/image/2_PRODUCTO/170/INTERIOR/1.jpg', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/2.jpg', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/3.jpg', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/INTERIOR/4.png', w: 420, h: 380 },
    ],
    exteriorImages: [
      { url: '/image/2_PRODUCTO/170/EXTERIOR/2.png', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/3.jpg', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/5.png', w: 420, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/16.JPG', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/18.jpg', w: 560, h: 380 },
      { url: '/image/2_PRODUCTO/170/EXTERIOR/19.JPG', w: 560, h: 380 },
    ],
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return models.find(m => m.slug === slug);
}