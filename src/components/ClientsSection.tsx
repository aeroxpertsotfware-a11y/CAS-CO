import { motion, useReducedMotion } from 'framer-motion'
import chec from '../assets/chec-empresa-removebg-preview.png'
import devimar from '../assets/Devimar.png'
import epm from '../assets/EPM.png'
import granColombiaGold from '../assets/gran colombia gold.png'
import pacifico from '../assets/Pacifico.png'
import ruta40 from '../assets/RUTA 40.png'
import argos from '../assets/Argos.png'
import autopistasUraba from '../assets/Autopistas del uraba.png'
import laPintada from '../assets/La pintada.png'
import './ClientsSection.css'

const clients = [
  { name: 'Gran Colombia Gold', logo: granColombiaGold },
  { name: 'CHEC — China Harbour Engineering Company', logo: chec },
  { name: 'EPM', logo: epm },
  { name: 'Devimar', logo: devimar },
  { name: 'Concesionaria Vial del Pacífico', logo: pacifico },
  { name: 'Consorcio Vial Ruta 40', logo: ruta40 },
  { name: 'Argos', logo: argos },
  { name: 'Autopistas Urabá', logo: autopistasUraba },
  { name: 'Concesión La Pintada', logo: laPintada },
]

export default function ClientsSection() {
  const reduced = useReducedMotion()
  return <section className="cwClients" id="clientes" aria-labelledby="clients-title">
    <motion.div className="clientsHeading" initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: .25 }} transition={{ duration: reduced ? 0 : .7 }}>
      <p className="overline">Experiencia que genera confianza</p>
      <h2 id="clients-title">Empresas con las que<br/>hemos <em>trabajado.</em></h2>
      <p>Nuestra maquinaria y experiencia han contribuido al desarrollo de proyectos de minería, energía e infraestructura.</p>
    </motion.div>
    <div className="clientsGrid" aria-label="Empresas con las que hemos trabajado">
      {clients.map((client, index) => <motion.article key={client.name}
        initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: .2 }} transition={{ duration: reduced ? 0 : .55, delay: reduced ? 0 : index * .07 }}>
        <img className={client.name === 'EPM' ? 'clientLogoEpm' : undefined} src={client.logo} alt={client.name} loading="lazy" />
      </motion.article>)}
    </div>
  </section>
}
