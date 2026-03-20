export interface NewsArticle {
  slug: string;
  category: 'LANZAMIENTO' | 'NOTICIAS' | 'EVENTOS';
  date: string;
  title: string;
  excerpt: string;
  body: string;
  imageUrl: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'lanzamiento-246',
    category: 'LANZAMIENTO',
    date: 'MARZO, 2025',
    title: 'Lanzamiento Classer 246',
    excerpt: 'La nueva embarcación insignia de Astillero Fuentes establece un nuevo estándar en performance y confort náutico.',
    body: `El pasado mes de marzo, Astillero Fuentes presentó en sociedad su modelo más ambicioso hasta la fecha: el Classer 246. Una lancha que redefine los estándares de la industria náutica argentina.

Con una eslora de 7.50 metros y capacidad para 14 personas, el Classer 246 combina la potencia de un motor de hasta 350hp con el refinamiento de un interior diseñado en Italia. Cada detalle fue pensado para que la experiencia en el agua sea tan cómoda como emocionante.

El evento de lanzamiento contó con la presencia de distribuidores de todo el país, periodistas especializados y entusiastas de la náutica. Los asistentes pudieron vivir en primera persona la experiencia de navegación en el Lago San Roque, corroborando las prestaciones excepcionales del nuevo modelo.`,
    imageUrl: 'https://placehold.co/400x240/0f1525/a8b3c8?text=Lanzamiento+246',
    featured: true,
  },
  {
    slug: 'salon-nautico-2025',
    category: 'EVENTOS',
    date: 'FEBRERO, 2025',
    title: 'Astillero Fuentes en el Salón Náutico 2025',
    excerpt: 'Presentamos toda nuestra línea en el salón náutico más importante del país con récord de visitantes.',
    body: `Astillero Fuentes participó en el Salón Náutico Internacional 2025 con un stand de 400m² que exhibió la línea completa de embarcaciones Classer. El evento batió récords de asistencia con más de 50.000 visitantes.`,
    imageUrl: 'https://placehold.co/400x240/0f1525/a8b3c8?text=Salon+Nautico+2025',
  },
  {
    slug: 'partnership-mercury',
    category: 'NOTICIAS',
    date: 'ENERO, 2025',
    title: 'Alianza estratégica con Mercury Marine',
    excerpt: 'Consolidamos nuestra asociación con Mercury para ofrecer la mejor motorización disponible en el mercado.',
    body: `Astillero Fuentes firmó un acuerdo de partnership oficial con Mercury Marine, consolidando una relación que lleva años construyéndose sobre la base del rendimiento y la confiabilidad.`,
    imageUrl: 'https://placehold.co/400x240/0f1525/a8b3c8?text=Mercury+Partnership',
  },
];
