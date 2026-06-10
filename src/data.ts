import { ServiceItem, GalleryItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "acrylic",
    number: "01",
    category: "ARQUITECTURA",
    name: "ESCULTURA ACRÍLICA",
    description: "Perfección estructural para largos extremos, formas personalizadas y balances impecables.",
    price: "$180",
    duration: "120 min"
  },
  {
    id: "gelish",
    number: "02",
    category: "DURACIÓN",
    name: "ACABADO GELISH",
    description: "Color de alto brillo, resistente y tipo cristal con finos destellos dorados.",
    price: "$120",
    duration: "90 min"
  },
  {
    id: "custom-art",
    number: "03",
    category: "DISEÑO",
    name: "ARTE PERSONALIZADO",
    description: "Detalles pintados a mano, letras cromadas y texturas metálicas creadas para tu estilo.",
    price: "$240",
    duration: "150 min"
  },
  {
    id: "velvet-matte",
    number: "04",
    category: "DURACIÓN",
    name: "MATE TEXTURIZADO",
    description: "Capas mate profundas con puntas cromadas de alto reflejo.",
    price: "$140",
    duration: "75 min"
  },
  {
    id: "lumiere-ritual",
    number: "05",
    category: "EXCLUSIVOS",
    name: "RITUAL NAILS BY CRIS",
    description: "La experiencia completa: extensiones esculpidas, detalles decorativos a mano, mascarilla hidratante y atencion premium.",
    price: "$380",
    duration: "210 min"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Obsidiana Dorada",
    technique: "01 / ARQUITECTURA + 03 / DISEÑO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtmT3CmGBfzCPU9K2jQnLHMRQ-PfDD3qj8fxkksIVKPazRJoBbyHmI8M_QaahuT0vGo_DjgZ4Wv0UjugWg7R3j9lvefPhn_Vn9JYTh4Eg1GZndTVyKliQJ396Rmcp1eGBjhKkEzvLygal6eCj1NQI8PbABNiauw3wQyo_gh6Rac7S11f7zb3Kmqsb1upXX16yMj4B3B-tE0j72PiPlzgidX-RsgIUmhI807AB1RZhc8BSBIjen9TKz7biF1Nc8MmG-_cnTH2Ty_8E"
  },
  {
    id: "g2",
    title: "Puntas de Vanguardia",
    technique: "03 / DISEÑO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnHbXTeCbtlAAcgekDSFXHF49kQmtyrNRPb9tSqodxT1mR4xsQ2OWLxU8BEKov0yTXyRmAkkfh9aolj2MJHTzDUMNbTHHEV4RzBCHPGW-87FGLbJLJvhHoIfYcO3Mk64LCwX8Qb-IDmL0zjFV-Z2f-O6Hz2Lr-mgK2ECSplzaM0wsI0jGh8B9-XKotCaNxP8eeOl7yq4Xp3XJd1jwwI2PKisbM6ymR7teXIXkl22rt7pUtVe_d0KzTodOm2GK1yIMX8Wpjj8p7KLw"
  },
  {
    id: "g3",
    title: "Obsidiana Mate",
    technique: "02 / DURACIÓN + 04 / DISEÑO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF_bqGOw48dJMhRN0B4Dz90Zf_-pPPIEHyxCOxMyKlooZqqbfKWsGnjPwXyLsdtcPTysmevA2PzE3g_3aMO60Z89od55rwLGIEPc5tDRhyS_o32XEIiUTUmlm644Mc9thpuxDYn2OuiBd7Orx5BUwVgQq32hsvW6xH11V4v8rpAGo9d0LtSNeZYYD0l3m1ho9r3DiQeIeSykpXHQkrnM_DwKtM5G4NJ6cCiNiwby1lhCBvwLNo_82n1Pl1Z-Zrz7Pc05SJiRMH4ls"
  }
];

export const CALENDAR_DAYS = [
  { day: 29, currentMonth: false },
  { day: 30, currentMonth: false },
  { day: 1, currentMonth: true, busy: false },
  { day: 2, currentMonth: true, busy: false },
  { day: 3, currentMonth: true, busy: false },
  { day: 4, currentMonth: true, busy: true }, // Dots indicate highlights or occupied
  { day: 5, currentMonth: true, busy: false },
  { day: 6, currentMonth: true, busy: true },
  { day: 7, currentMonth: true, busy: false },
  { day: 8, currentMonth: true, busy: false },
  { day: 9, currentMonth: true, active: true }, // Oct 9 default
  { day: 10, currentMonth: true, busy: false },
  { day: 11, currentMonth: true, busy: false },
  { day: 12, currentMonth: true, busy: false },
  { day: 13, currentMonth: true, busy: false },
  { day: 14, currentMonth: true, busy: true },
  { day: 15, currentMonth: true, busy: false },
  { day: 16, currentMonth: true, busy: false },
  { day: 17, currentMonth: true, busy: false },
  { day: 18, currentMonth: true, busy: true },
  { day: 19, currentMonth: true, busy: false },
  { day: 20, currentMonth: true, busy: false },
  { day: 21, currentMonth: true, busy: false },
];

export const AVAILABLE_HOURS = [
  "10:00 a. m.",
  "12:30 p. m.",
  "03:00 p. m.",
  "05:30 p. m.",
  "08:00 p. m."
];
