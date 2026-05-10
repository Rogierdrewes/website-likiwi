export interface Review {
  id: string
  name: string
  shootType: string
  rating: number
  text: string
  date: string
  featured?: boolean
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marieke & Joost',
    shootType: 'Zwangerschap',
    rating: 5,
    featured: true,
    date: '2024-11',
    text: 'Lisa heeft onze zwangerschapssessie zo mooi gemaakt. Ze voelde meteen aan welke sfeer we zochten en zorgde dat we ons totaal op ons gemak voelden. De foto\'s zijn adembenemend — zo warm, zo puur. We koesteren ze voor altijd.',
  },
  {
    id: 'r2',
    name: 'Nathalie',
    shootType: 'Newborn',
    rating: 5,
    date: '2024-10',
    text: 'Lisa kwam bij ons thuis voor de newbornsessie van onze dochtertje. Ze was rustig, geduldig en ontzettend lief voor de baby. De beelden zijn prachtig — precies de zachtheid en intimiteit die ik hoopte vast te leggen.',
  },
  {
    id: 'r3',
    name: 'Familie De Vries',
    shootType: 'Familie',
    rating: 5,
    date: '2024-09',
    text: 'Wij hadden geen idee wat we moesten verwachten, want onze kinderen zijn niet altijd even coöperatief. Maar Lisa wist ze meteen op hun gemak te stellen. De foto\'s zijn spontaan, vrolijk en precies zoals ons gezin echt is.',
  },
  {
    id: 'r4',
    name: 'Sara & Thomas',
    shootType: 'Geboorte',
    rating: 5,
    date: '2024-08',
    text: 'Lisa was onze geboortfotografe en dat was de beste beslissing die we hadden kunnen nemen. Ze was onopvallend aanwezig maar miste geen enkel moment. De reportage brengt ons elke keer weer terug naar die bijzondere dag.',
  },
  {
    id: 'r5',
    name: 'Lotte & Bas',
    shootType: 'Liefde',
    rating: 5,
    date: '2024-07',
    text: 'We kozen voor een koppelshoot als verjaardagscadeau aan onszelf en het was fantastisch. Lisa maakte ons snel op ons gemak, gaf subtiele tips en het resultaat is beter dan we hadden durven dromen. Absoluut aanrader!',
  },
  {
    id: 'r6',
    name: 'Anne',
    shootType: 'Zwangerschap',
    rating: 5,
    date: '2024-06',
    text: 'Ik was in eerste instantie een beetje zenuwachtig voor de shoot, maar Lisa nam alle spanning weg. Haar warme persoonlijkheid en professionele aanpak maken het verschil. De foto\'s zijn tijdloos mooi.',
  },
  {
    id: 'r7',
    name: 'Kim & Daan',
    shootType: 'Newborn',
    rating: 5,
    date: '2024-05',
    text: 'We zijn zo blij dat we voor Lisa hebben gekozen. Ze heeft de eerste weekjes van onze zoon op de mooiste manier vastgelegd. Haar editing stijl is precies wat we hoopten: warm, zacht en heel persoonlijk.',
  },
  {
    id: 'r8',
    name: 'Eline & Pieter',
    shootType: 'Familie',
    rating: 5,
    date: '2024-04',
    text: 'Onze tweede familiesessie met Lisa en weer helemaal geweldig. Ze groeit echt mee met jullie gezin. De foto\'s van dit jaar zijn zo mooi dat we ze meteen hebben ingelijst. Tot volgend jaar!',
  },
]
