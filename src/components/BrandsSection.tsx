import { motion, useReducedMotion } from 'framer-motion'
import './BrandsSection.css'
import hitachi from '../assets/Hitachi-Logo-1968.png'
import cat from '../assets/Logo CAT.webp'
import kobelco from '../assets/Logo Kobelco.webp'
import newHolland from '../assets/Logo New.webp'
import mercedes from '../assets/Mercedes.png'

export default function BrandsSection() {
  const reduced = useReducedMotion()
  return <section className="cwBrands" id="marcas">
    <motion.div className="brandsPanel" initial={reduced ? false : { opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: .2 }} transition={{ duration: reduced ? 0 : .75 }}>
      <div className="brandsGrid brandsGridImages" aria-label="Marcas con las que trabajamos">
        <div className="brandImage"><img src={kobelco} alt="Kobelco" loading="lazy" /></div>
        <div className="brandImage"><img src={cat} alt="CAT" loading="lazy" /></div>
        <div className="brandImage"><img src={hitachi} alt="Hitachi" loading="lazy" /></div>
        <div className="brandImage"><img src={newHolland} alt="New Holland" loading="lazy" /></div>
        <div className="brandImage brandImageMercedes"><img src={mercedes} alt="Mercedes-Benz" loading="lazy" /></div>
      </div>
    </motion.div>
    <motion.div className="brandsCopy" initial={reduced ? false : { opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: .2 }} transition={{ duration: reduced ? 0 : .75, delay: reduced ? 0 : .1 }}>
      <p className="overline">Calidad en cada equipo</p>
      <h2>Marcas que mueven<br/><em>grandes proyectos.</em></h2>
      <p>Trabajamos con equipos Kobelco, CAT, Hitachi, New Holland y Mercedes-Benz para responder a las necesidades de cada obra.</p>
      <p>Seleccionamos el equipo según el terreno, la actividad y el alcance de tu proyecto, con el acompañamiento de CAS&CO en cada etapa.</p>
      <a className="yellowBtn" href="#contacto">Encuentra tu equipo <span aria-hidden="true">↗</span></a>
    </motion.div>
  </section>
}
