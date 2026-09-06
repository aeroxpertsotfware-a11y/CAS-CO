import excavator from '../assets/WhatsApp Image 2026-09-05 at 6.58.48 PM (3).jpeg'
import bulldozer from '../assets/WhatsApp Image 2026-09-05 at 6.58.48 PM.jpeg'
import workingExcavator from '../assets/WhatsApp Image 2026-09-05 at 6.58.49 PM (5).jpeg'
import truck from '../assets/WhatsApp Image 2026-09-05 at 6.58.49 PM (1).jpeg'
import './MachineryCollage.css'

// Orden de las fotos: centro, arriba, derecha y abajo a la izquierda.
// Sustituye cada src por una foto propia para mantener esta composición.
const photos = [
  { position: 'main', src: excavator, alt: 'Excavadora Kobelco de CAS&CO' },
  { position: 'top', src: bulldozer, alt: 'Bulldozer Caterpillar' },
  { position: 'right', src: workingExcavator, alt: 'Excavadora Kobelco trabajando en terreno' },
  { position: 'bottom', src: truck, alt: 'Volqueta Freightliner' },
]

export default function MachineryCollage() {
  return <div className="machineryCollage" role="group" aria-label="Maquinaria y trabajo en obra">
    {photos.map(photo => <figure className={`collagePhoto collagePhoto--${photo.position}`} key={photo.position}>
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
    </figure>)}
  </div>
}
