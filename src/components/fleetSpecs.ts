export type FleetSpec = {
  reference: string
  rows: [string, string][]
  source?: { label: string; url: string }
}

// Manufacturer references are not a confirmation of the fleet's serial/configuration.
export const fleetSpecs: FleetSpec[] = [
  {
    reference: 'Caterpillar D6M',
    rows: [['Equipo', 'Tractor sobre orugas'], ['Motor de referencia', 'Caterpillar 3116'], ['Aplicación', 'Empuje y nivelación de terreno']],
    source: { label: 'Referencia Caterpillar D6M LGP', url: 'https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=323&it=product&lid=en&nc=1&pid=752784&sc=US' },
  },
  {
    reference: 'Hitachi ZX200-5G',
    rows: [['Potencia nominal', '125 kW / 168 HP'], ['Peso operativo de referencia', '19.800 kg'], ['Configuración del peso', 'Brazo 2,91 m · zapatas 600 mm']],
    source: { label: 'Ficha oficial Hitachi (PDF)', url: 'https://www.hitachicm.com/content/dam/hitachicm/my/en/docs/brochures-pdf/medium-excavators/KS-EN178U.pdf' },
  },
  {
    reference: 'Kobelco con martillo hidráulico',
    rows: [['Equipo', 'Excavadora con martillo'], ['Accionamiento', 'Hidráulico'], ['Referencias Poquet', 'PVPBV 300 / K 36 00'], ['Referencia JSC', '30 GT'], ['Excavadoras compatibles', '13, 20 y 36 toneladas'], ['Aplicación', 'Demolición y rotura de material']],
  },
  {
    reference: 'Kobelco SK350LC-10 · Latinoamérica',
    rows: [['Peso operativo', '36.000 kg'], ['Motor', 'HINO J08ETM'], ['Profundidad máxima', '7,56 m'], ['Alcance máximo', '11,26 m']],
    source: { label: 'Ficha oficial Kobelco', url: 'https://www.kobelcocm-global.com/products/excavators/latinamerica/SK350LC-10.html' },
  },
  {
    reference: 'Komatsu PC200-8M0 ',
    rows: [['Potencia neta', '103 kW / 138 HP'], ['Peso operativo', '21.000–21.200 kg'], ['Motor', 'Komatsu SAA6D107E-1'], ['Cilindrada', '6,69 L']],
    source: { label: 'Ficha oficial Komatsu (PDF)', url: 'https://www.komatsu.com/content/dam/komatsu/websites/oceania/documents/brochures/excavators/pc200_220lc-8m0.pdf' },
  },
  {
    reference: 'Volqueta doble troque',
    rows: [['Configuración', 'Doble troque · 3 ejes'], ['Carrocería', 'Volco basculante'], ['Aplicación', 'Transporte de material']],
  },
  {
    reference: 'Caterpillar D6N',
    rows: [['Potencia neta', '111,8 kW / 150 HP'], ['Peso operativo XL', '16.668 kg'], ['Peso operativo LGP', '17.997 kg'], ['Motor', 'Cat C6.6 ACERT']],
    source: { label: 'Ficha técnica Caterpillar D6N (PDF)', url: 'https://www.plmcat.com/docs/default-source/track-type-tractors/d6n-brochure-in-english.pdf?sfvrsn=0' },
  },
  {
    reference: 'Hitachi Zaxis ZX210LC-5B',
    rows: [['Potencia neta', '122 kW'], ['Peso operativo', '20.200–21.800 kg'], ['Profundidad máxima', '6,67 m'], ['Alcance a nivel del suelo', '9,75 m']],
    source: { label: 'Ficha oficial Hitachi', url: 'https://www.hitachicm.com/us/en/products/excavators/medium-large/product.zx210lc-5b-la/' },
  },
  {
    reference: 'Dynapac CA250-II · 10 toneladas',
    rows: [['Peso operativo', '10.000 kg'], ['Potencia', '82 kW / 110 HP'], ['Ancho de compactación', '2.130 mm'], ['Peso máximo operativo', '12.700 kg']],
    source: { label: 'Ficha oficial Dynapac', url: 'https://dynapac.com/eu-es/products/compaction/ca250-ii' },
  },
  {
    reference: 'Kobelco SK135SR',
    rows: [['Potencia neta', '69,2 kW'], ['Peso operativo', '13.800 kg'], ['Profundidad máxima', '5,52 m'], ['Capacidad de cucharón', '0,50 m³']],
    source: { label: 'Ficha oficial Kobelco', url: 'https://www.kobelcocm-global.com/products/excavators/ame/SK135SR_2.html' },
  },
  {
    reference: 'Komatsu PC210-10M0',
    rows: [['Potencia', '123 kW / 165 HP'], ['Peso operativo', '20,4–21,1 t'], ['Profundidad máxima', '6,62 m'], ['Alcance a nivel del suelo', '9,70 m']],
    source: { label: 'Ficha oficial Komatsu', url: 'https://www.komatsu.com/en-ae/products/equipment/excavators/mid-size-excavators/pc210-10m0' },
  },
  {
    reference: 'POQUETEC PBV300',
    rows: [['Tipo', 'Martillo hidráulico de carcasa abierta'], ['Excavadora portadora', '27–35 toneladas'], ['Caudal de aceite', '160–190 L/min'], ['Presión de operación', '160–180 kg/cm²'], ['Frecuencia de impacto', '350–750 golpes/min'], ['Diámetro de herramienta', '150 mm']],
    source: { label: 'Catálogo técnico POQUETEC (PDF)', url: 'https://holman.co.ke/wp-content/uploads/2023/04/POQUTEC-Thin-CATALOG.pdf' },
  },
  {
    reference: 'Okada 3600',
    rows: [['Peso', '2.610 kg'], ['Excavadora portadora', '25–36 toneladas'], ['Caudal de aceite', '180–250 L/min'], ['Presión de operación', '140–190 bar'], ['Frecuencia de impacto', '300–650 golpes/min'], ['Diámetro de herramienta', '150 mm']],
    source: { label: 'Especificaciones Okada 3600', url: 'https://www.lectura-specs.com/en/model/construction-machinery/attachments-hydraulic-breakers-okada/okada-3600-11693837' },
  },
  {
    reference: 'JSC 30 GT',
    rows: [['Tipo', 'Martillo hidráulico demoledor'], ['Montaje', 'Accesorio para excavadora'], ['Herramienta', 'Puntero demoledor'], ['Aplicación', 'Roca, concreto y demolición']],
  },
  {
    reference: 'MSH 200',
    rows: [['Tipo', 'Martillo hidráulico demoledor'], ['Configuración', 'Carcasa cerrada'], ['Montaje', 'Accesorio para excavadora'], ['Aplicación', 'Demolición y rotura de material']],
  },
  {
    reference: 'MSH 100 T',
    rows: [['Tipo', 'Martillo hidráulico demoledor'], ['Montaje', 'Accesorio para excavadora'], ['Herramienta', 'Puntero demoledor'], ['Aplicación', 'Roca, concreto y demolición']],
  },
]
