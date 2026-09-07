import { useRef, useState } from 'react'
import { X } from 'lucide-react'
import { fleetSpecs } from './fleetSpecs'
import d6m from '../assets/D6M.png'
import hitachi from '../assets/Hitachi.png'
import martillo from '../assets/Kobelco Martillo.png'
import sk350 from '../assets/Kobelco SK350 .png'
import pc200 from '../assets/Komatsu Pc200.png'
import volqueta from '../assets/Volqueta.png'
import d6n from '../assets/D6N CAT.jpeg'
import hitachi210 from '../assets/Hitachi 210.jpeg'
import dynapac from '../assets/Vibro DYNAPAC.jpeg'
import kobelco135 from '../assets/Kobelco 135.jpeg'
import komatsu210 from '../assets/Komatsu 210.jpeg'
import jsc30gt from '../assets/JSC 30 GT.jpeg'
import msh100t from '../assets/MSH 100 T.jpeg'
import poqutecPbv300 from '../assets/POQUETEC PBV300.jpeg'
import msh200 from '../assets/MSH 200.png'
import okada3600 from '../assets/Okada 3600.png'
import './FleetSection.css'

const machines = [
  { name: 'D6M', type: 'Bulldozer', image: d6m },
  { name: 'Hitachi 200', type: 'Excavadora', image: hitachi },
  { name: 'Kobelco Martillo', type: 'Martillo hidráulico', image: martillo },
  { name: 'Kobelco SK350', type: 'Excavadora', image: sk350 },
  { name: 'Komatsu PC200', type: 'Excavadora', image: pc200 },
  { name: 'Volqueta doble troque', type: 'Transporte de material', image: volqueta },
  { name: 'CAT D6N', type: 'Bulldozer', image: d6n },
  { name: 'Hitachi Zaxis 210', type: 'Excavadora', image: hitachi210 },
  { name: 'Dynapac 10 ton', type: 'Vibrocompactador', image: dynapac },
  { name: 'Kobelco SK135', type: 'Excavadora', image: kobelco135 },
  { name: 'Komatsu PC210', type: 'Excavadora', image: komatsu210 },
  { name: 'POQUETEC PBV300', type: 'Martillo demoledor', image: poqutecPbv300 },
  { name: 'Okada 3600', type: 'Martillo demoledor', image: okada3600 },
  { name: 'JSC 30 GT', type: 'Martillo demoledor', image: jsc30gt },
  { name: 'MSH 200', type: 'Martillo demoledor', image: msh200 },
  { name: 'MSH 100 T', type: 'Martillo demoledor', image: msh100t },
]

export default function FleetSection() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState(0)
  const spec = fleetSpecs[selected]
  return <section className="cwFleet" id="flota" aria-labelledby="fleet-title">
    <div className="fleetHeading">
      <p className="overline">Potencia para cada proyecto</p>
      <h2 id="fleet-title">Nuestra <em>flota</em></h2>
      <p>Conoce las máquinas que mueven tu obra.</p>
    </div>
    <div className="fleetStage">
      <div className="fleetOrbit" role="list" aria-label="Maquinaria de nuestra flota">
        {[0, 1].map(copy => <div className={`fleetGroup${copy ? ' fleetGroupCopy' : ''}`} aria-hidden={copy ? 'true' : undefined} key={copy}>
          {machines.map((machine, index) => <div className="fleetPosition" role={copy ? undefined : 'listitem'} key={`${copy}-${machine.name}`}>
            <button type="button" className="fleetCard" tabIndex={copy ? -1 : undefined} aria-haspopup={copy ? undefined : 'dialog'}
              aria-label={copy ? undefined : `Ver ficha técnica de ${machine.name}`}
              onClick={() => { setSelected(index); dialog.current?.showModal() }}>
              <span className="fleetNumber">{String(index + 1).padStart(2, '0')} / CAS&CO</span>
              <img src={machine.image} alt={copy ? '' : machine.name} loading="lazy" draggable={false} />
              <span className="fleetCardCopy"><small>{machine.type}</small><strong>{machine.name}</strong><span className="fleetSpecLink">Ver ficha técnica <span aria-hidden="true">→</span></span></span>
            </button>
          </div>)}
        </div>)}
      </div>
    </div>
    <dialog ref={dialog} className="fleetDialog" aria-labelledby="fleet-spec-title"
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <div className="fleetDialogBody">
        <button type="button" className="fleetDialogClose" aria-label="Cerrar ficha técnica" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button>
        <p className="overline">Información técnica</p>
        <h3 id="fleet-spec-title">{machines[selected].name}</h3>
        <p className="fleetSpecReference">{spec.reference}</p>
        <dl>{spec.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        {spec.source && <a className="fleetSource" href={spec.source.url} target="_blank" rel="noopener noreferrer">{spec.source.label} ↗</a>}
        <a className="yellowBtn" href="#contacto" onClick={() => dialog.current?.close()}>Consultar este equipo</a>
      </div>
    </dialog>
  </section>
}
