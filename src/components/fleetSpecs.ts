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
    rows: [['Equipo', 'Excavadora con martillo'], ['Accionamiento del accesorio', 'Hidráulico'], ['Aplicación', 'Demolición y rotura de material']],
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
]
