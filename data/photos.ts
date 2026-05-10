export type PhotoCategory =
  | 'zwangerschap'
  | 'newborn'
  | 'familie'
  | 'geboorte'
  | 'liefde'

export interface Photo {
  id: string
  src: string
  thumbnail: string
  alt: string
  category: PhotoCategory
  caption?: string
  instagramUrl?: string
  width: number
  height: number
}

const B = 'https://picsum.photos'

export const photos: Photo[] = [
  // Zwangerschap
  {
    id: 'z1',
    src: `${B}/seed/lkw-z1/800/1000`,
    thumbnail: `${B}/seed/lkw-z1/600/600`,
    alt: 'Zwangerschapsfotografie Groningen — serene portretfoto van aanstaande moeder in warm licht',
    category: 'zwangerschap',
    caption: 'De verwachting',
    width: 800,
    height: 1000,
  },
  {
    id: 'z2',
    src: `${B}/seed/lkw-z2/800/1000`,
    thumbnail: `${B}/seed/lkw-z2/600/600`,
    alt: 'Zwangerschapsfoto buiten Groningen — aanstaande ouders in de natuur bij golden hour',
    category: 'zwangerschap',
    caption: 'Samen in afwachting',
    width: 800,
    height: 1000,
  },
  {
    id: 'z3',
    src: `${B}/seed/lkw-z3/800/1000`,
    thumbnail: `${B}/seed/lkw-z3/600/600`,
    alt: 'Zwangerschapssessie Groningen — intiem portret aanstaande mama thuis',
    category: 'zwangerschap',
    width: 800,
    height: 1000,
  },
  {
    id: 'z4',
    src: `${B}/seed/lkw-z4/800/1000`,
    thumbnail: `${B}/seed/lkw-z4/600/600`,
    alt: 'Zwangerschapsfotograaf Groningen — warm portret in avondlicht',
    category: 'zwangerschap',
    caption: 'Gouden uur',
    width: 800,
    height: 1000,
  },
  // Geboorte
  {
    id: 'g1',
    src: `${B}/seed/lkw-g1/800/1000`,
    thumbnail: `${B}/seed/lkw-g1/600/600`,
    alt: 'Geboortereportage Groningen — de eerste momenten na de geboorte vastgelegd',
    category: 'geboorte',
    caption: 'Het eerste moment',
    width: 800,
    height: 1000,
  },
  {
    id: 'g2',
    src: `${B}/seed/lkw-g2/800/1000`,
    thumbnail: `${B}/seed/lkw-g2/600/600`,
    alt: 'Geboortefotografie Groningen — papa houdt pasgeboren baby vast',
    category: 'geboorte',
    width: 800,
    height: 1000,
  },
  {
    id: 'g3',
    src: `${B}/seed/lkw-g3/800/1000`,
    thumbnail: `${B}/seed/lkw-g3/600/600`,
    alt: 'Geboortefotograaf Groningen — gezin verwelkomt de nieuwste telg',
    category: 'geboorte',
    caption: 'Welkom in de wereld',
    width: 800,
    height: 1000,
  },
  // Newborn
  {
    id: 'n1',
    src: `${B}/seed/lkw-n1/800/1000`,
    thumbnail: `${B}/seed/lkw-n1/600/600`,
    alt: 'Newborn fotografie Groningen — slapende pasgeboren baby in zacht warm licht',
    category: 'newborn',
    caption: 'Zo klein',
    width: 800,
    height: 1000,
  },
  {
    id: 'n2',
    src: `${B}/seed/lkw-n2/800/1000`,
    thumbnail: `${B}/seed/lkw-n2/600/600`,
    alt: 'Newborn fotograaf Groningen — portret van pasgeboren baby in beige omgeving',
    category: 'newborn',
    width: 800,
    height: 1000,
  },
  {
    id: 'n3',
    src: `${B}/seed/lkw-n3/800/1000`,
    thumbnail: `${B}/seed/lkw-n3/600/600`,
    alt: 'Newborn sessie Groningen — baby omringd door zachte dekentjes en warmte',
    category: 'newborn',
    caption: 'Puur geluk',
    width: 800,
    height: 1000,
  },
  {
    id: 'n4',
    src: `${B}/seed/lkw-n4/800/1000`,
    thumbnail: `${B}/seed/lkw-n4/600/600`,
    alt: 'Newborn fotosessie Groningen — mama knuffelt pasgeboren baby innig',
    category: 'newborn',
    width: 800,
    height: 1000,
  },
  // Familie
  {
    id: 'f1',
    src: `${B}/seed/lkw-f1/800/1000`,
    thumbnail: `${B}/seed/lkw-f1/600/600`,
    alt: 'Familiefotografie Groningen — gezin samen buiten in de natuur bij warm licht',
    category: 'familie',
    caption: 'Ons gezin',
    width: 800,
    height: 1000,
  },
  {
    id: 'f2',
    src: `${B}/seed/lkw-f2/800/1000`,
    thumbnail: `${B}/seed/lkw-f2/600/600`,
    alt: 'Familiefotograaf Groningen — ouders met kinderen in zachte avondgloed',
    category: 'familie',
    width: 800,
    height: 1000,
  },
  {
    id: 'f3',
    src: `${B}/seed/lkw-f3/800/1000`,
    thumbnail: `${B}/seed/lkw-f3/600/600`,
    alt: 'Gezinsfoto Groningen — spelende kinderen met lachende ouders',
    category: 'familie',
    caption: 'Spelen en lachen',
    width: 800,
    height: 1000,
  },
  {
    id: 'f4',
    src: `${B}/seed/lkw-f4/800/1000`,
    thumbnail: `${B}/seed/lkw-f4/600/600`,
    alt: 'Familie fotoshoot Groningen — knuffelmoment tussen ouder en kind vastgelegd',
    category: 'familie',
    width: 800,
    height: 1000,
  },
  // Liefde
  {
    id: 'l1',
    src: `${B}/seed/lkw-l1/800/1000`,
    thumbnail: `${B}/seed/lkw-l1/600/600`,
    alt: 'Koppelsfotografie Groningen — romantisch portret van stel in zachte avondgloed',
    category: 'liefde',
    caption: 'Samen',
    width: 800,
    height: 1000,
  },
  {
    id: 'l2',
    src: `${B}/seed/lkw-l2/800/1000`,
    thumbnail: `${B}/seed/lkw-l2/600/600`,
    alt: 'Liefdesfotografie Groningen — koppel wandelt hand in hand door de natuur',
    category: 'liefde',
    width: 800,
    height: 1000,
  },
  {
    id: 'l3',
    src: `${B}/seed/lkw-l3/800/1000`,
    thumbnail: `${B}/seed/lkw-l3/600/600`,
    alt: 'Romantische fotoshoot Groningen — koppel bij zonsondergang in warm licht',
    category: 'liefde',
    caption: 'Gouden moment',
    width: 800,
    height: 1000,
  },
]

export const categoryLabels: Record<PhotoCategory, string> = {
  zwangerschap: 'Zwangerschap',
  newborn: 'Newborn',
  familie: 'Familie',
  geboorte: 'Geboorte',
  liefde: 'Liefde',
}

export const categoryDescriptions: Record<PhotoCategory, string> = {
  zwangerschap:
    'De mooiste periode in het leven van een aanstaande moeder. Ik leg de zachtheid, kracht en verwachting vast in tijdloze beelden.',
  geboorte:
    'De eerste adembenemende momenten van een nieuw leven. Een geboortereportage is een kostbaar document voor het hele gezin.',
  newborn:
    'In de eerste weekjes na de geboorte is alles nog zo klein en puur. Ik kom bij jullie thuis voor een rustige, warme newbornsessie.',
  familie:
    'Jullie gezin in al zijn spontane schoonheid. Buiten in de natuur of gewoon thuis — ik vang de echte momenten.',
  liefde:
    'Voor koppels die hun verbinding willen vieren. Een romantische fotoshoot in Groningen of omgeving, op jullie favoriete plek.',
}
