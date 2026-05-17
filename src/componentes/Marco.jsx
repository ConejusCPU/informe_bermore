import { Globe, AlertTriangle, BookOpen, Scale } from 'lucide-react'

function SeccionTitulo({ icono: Icono, texto, color = 'text-blue-600' }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icono className={color} size={22} />
      <h3 className="text-lg font-bold text-slate-800">{texto}</h3>
    </div>
  )
}

function ArticuloCard({ titulo, descripcion, aplicacion }) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 space-y-2">
      <p className="font-semibold text-slate-700">{titulo}</p>
      <p className="text-slate-600 text-sm leading-relaxed">{descripcion}</p>
      {aplicacion && (
        <div className="bg-blue-50 border-l-4 border-blue-400 pl-3 py-2 mt-2">
          <p className="text-blue-800 text-sm leading-relaxed">
            <span className="font-semibold">Aplicación al caso: </span>{aplicacion}
          </p>
        </div>
      )}
    </div>
  )
}

function TablaDelitos({ filas }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="text-left p-3 font-semibold">Delito</th>
            <th className="text-left p-3 font-semibold">Descripción</th>
            <th className="text-left p-3 font-semibold">Conducta en el caso</th>
            <th className="text-left p-3 font-semibold">Pena</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-medium text-slate-800 border-b border-slate-100">{fila.delito}</td>
              <td className="p-3 text-slate-600 border-b border-slate-100">{fila.descripcion}</td>
              <td className="p-3 text-slate-600 border-b border-slate-100">{fila.conducta}</td>
              <td className="p-3 text-slate-600 border-b border-slate-100">{fila.pena}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Marco() {
  const delitosLey21459 = [
    {
      delito: 'Acceso ilícito',
      descripcion: 'Art. 2°: Entrar sin autorización o superando barreras técnicas.',
      conducta: 'Los atacantes accedieron a la red de SolarWinds en septiembre de 2019.',
      pena: 'Presidio menor en su grado mínimo o multa. Se agrava si se busca apoderarse de la información.',
    },
    {
      delito: 'Interceptación ilícita',
      descripcion: 'Art. 3°: Capturar, grabar o reproducir comunicaciones electrónicas o transmisiones de datos sin autorización.',
      conducta: 'Exfiltración de datos sensibles de clientes (FireEye, gobierno de EE.UU., empresas).',
      pena: 'Presidio menor en sus grados mínimo a medio.',
    },
    {
      delito: 'Ataque a la integridad de sistemas',
      descripcion: 'Art. 4°: Introducir, transmitir o activar programas maliciosos que dañen o alteren sistemas.',
      conducta: 'Inyección del código malicioso "Sunburst" en las actualizaciones del software Orion.',
      pena: 'Presidio menor en sus grados mínimo a medio.',
    },
    {
      delito: 'Ataque a la integridad de datos',
      descripcion: 'Art. 4° (párrafo 2): Destruir, dañar, modificar, suprimir o hacer inaccesibles datos informáticos sin autorización.',
      conducta: 'La manipulación del código y la potencial alteración o eliminación de datos durante la intrusión.',
      pena: 'Presidio menor en sus grados mínimo a medio.',
    },
    {
      delito: 'Fraude informático',
      descripcion: 'Art. 6°: Manipular datos o sistemas para obtener un beneficio económico indebido, causando perjuicio.',
      conducta: 'El engaño a los clientes al hacerles instalar una actualización maliciosa que parecía legítima.',
      pena: 'Presidio menor en sus grados medio a máximo.',
    },
    {
      delito: 'Falsificación informática',
      descripcion: 'Art. 7°: Introducir, alterar, borrar o suprimir datos para generar un documento inauténtico con relevancia jurídica.',
      conducta: 'La manipulación de logs de acceso, sellos de tiempo y registros de auditoría del software Orion.',
      pena: 'Presidio menor en sus grados medio a máximo.',
    },
    {
      delito: 'Abuso de dispositivos',
      descripcion: 'Art. 8°: Producir, adquirir, importar, vender o comercializar herramientas diseñadas para cometer delitos informáticos.',
      conducta: 'La utilización de herramientas de código malicioso y de exfiltración diseñadas para evadir la detección.',
      pena: 'Presidio menor en su grado mínimo o multa.',
    },
  ]

  return (
    <section className="space-y-8">
      {/* Título */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">Marco Normativo Aplicable</h2>
        </div>
        <p className="text-slate-500 text-sm">Normativa internacional y chilena relevante al caso SolarWinds SUNBURST</p>
      </div>

      {/* Normativa Internacional */}
      <div className="bg-white rounded-lg shadow p-8 space-y-6">
        <SeccionTitulo icono={Globe} texto="Normativa Internacional de Referencia" color="text-blue-600" />
        <p className="text-slate-600 leading-relaxed text-sm">
          El caso SolarWinds involucra a víctimas y afectados en múltiples jurisdicciones. Aunque Chile no es parte del GDPR ni del CCPA,
          estas normativas son clave para comprender los estándares globales que influyen en la legislación comparada y en las expectativas
          de los tribunales.
        </p>

        {/* GDPR */}
        <div>
          <h3 className="text-base font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
            GDPR — Reglamento General de Protección de Datos (UE)
          </h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            El GDPR establece principios y obligaciones que cualquier organización que trate datos de ciudadanos europeos debe cumplir,
            sin importar su ubicación geográfica. Es el estándar de protección de datos más influyente del mundo.
          </p>
          <div className="space-y-3">
            <ArticuloCard
              titulo="Artículo 32 — Seguridad del Tratamiento"
              descripcion="Establece la obligación de implementar medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, incluyendo seudonimización, cifrado, y un proceso de verificación regular de la eficacia de las medidas adoptadas."
              aplicacion="SolarWinds, como proveedor de software, era responsable de la seguridad de los datos en su infraestructura. Las deficiencias en sus controles (débil protección de la red interna, falta de segmentación) configurarían una infracción de este artículo."
            />
            <ArticuloCard
              titulo="Artículo 33 — Notificación de Violación de Datos"
              descripcion="Obliga al responsable del tratamiento a notificar a la autoridad de control competente la violación de seguridad en un plazo máximo de 72 horas tras tener conocimiento de ella."
              aplicacion="Se cuestionó severamente la demora de SolarWinds en notificar la brecha, que fue descubierta por FireEye y no divulgada proactivamente. Este es uno de los puntos más críticos del análisis legal del caso."
            />
            <ArticuloCard
              titulo="Artículo 82 — Derecho a Indemnización"
              descripcion="Otorga a cualquier persona que haya sufrido daños materiales o inmateriales como consecuencia de una infracción del GDPR el derecho a recibir una indemnización del responsable o encargado del tratamiento."
              aplicacion="Los clientes de SolarWinds que perdieron datos o sufrieron perjuicios económicos podrían demandar a la empresa. La demostración de causalidad entre la violación y el daño es un elemento crucial y potencialmente complejo."
            />
          </div>
        </div>

        {/* CCPA */}
        <div>
          <h3 className="text-base font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
            CCPA/CPRA — California Consumer Privacy Act
          </h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Esta ley otorga a los consumidores de California un mayor control sobre su información personal, aplicable a empresas que
            cumplen ciertos umbrales de negocio en ese estado.
          </p>
          <div className="space-y-3">
            <ArticuloCard
              titulo="Derecho de Acción Privada (Sec. 1798.150)"
              descripcion="Permite a los consumidores demandar a una empresa por violaciones de seguridad de datos no cifrados, reclamando entre 100 y 750 dólares por incidente por consumidor, o daños reales, lo que sea mayor."
              aplicacion="Dado que la información de miles de clientes fue exfiltrada sin cifrar, los consumidores californianos afectados podrían ejercer este derecho, exponiendo a SolarWinds a una responsabilidad financiera y reputacional considerable."
            />
            <ArticuloCard
              titulo="Requisitos de Auditoría de Ciberseguridad (vigentes desde enero de 2026)"
              descripcion="Las empresas sujetas a la CCPA deben realizar auditorías de ciberseguridad anuales y evaluaciones de riesgo de privacidad realizadas por un profesional calificado."
              aplicacion="Si esta disposición hubiera estado vigente al momento del ataque, SolarWinds habría tenido la obligación de demostrar proactivamente la eficacia de su postura de seguridad, lo que podría haber revelado las vulnerabilidades aprovechadas."
            />
          </div>
        </div>

        {/* SEC */}
        <div>
          <h3 className="text-base font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
            SEC Cybersecurity Disclosure Rules (adoptadas en 2023)
          </h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Estas reglas exigen a las empresas públicas mayor transparencia en materia de ciberseguridad. Fueron un elemento central
            del litigio contra SolarWinds y su entonces CISO, Timothy G. Brown.
          </p>
          <div className="space-y-3">
            <ArticuloCard
              titulo="Divulgación de Incidentes Materiales (Item 1.05, Formulario 8-K)"
              descripcion="Las empresas deben informar cualquier incidente de ciberseguridad considerado 'material' para los inversores dentro de los cuatro días hábiles posteriores a esa determinación."
              aplicacion="La SEC acusó a SolarWinds y a Brown de engañar a los inversores al ocultar los riesgos y la gravedad del ataque Sunburst, además de no contar con los controles internos adecuados."
            />
            <ArticuloCard
              titulo="Divulgación de Procesos de Gestión de Riesgos y Gobierno"
              descripcion="Exige a las empresas describir sus procesos para evaluar, identificar y gestionar los riesgos materiales de ciberseguridad, incluyendo el rol de la junta directiva y la experiencia de la gerencia."
              aplicacion="La SEC alegó que las declaraciones públicas de SolarWinds sobre su seguridad eran engañosas y no coincidían con las evaluaciones internas, que revelaban deficiencias significativas."
            />
          </div>
        </div>
      </div>

      {/* Marco Chileno */}
      <div className="bg-white rounded-lg shadow p-8 space-y-6">
        <SeccionTitulo icono={Scale} texto="Marco Normativo Chileno" color="text-red-600" />

        {/* Ley 19.628 */}
        <div>
          <h3 className="text-base font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
            Ley N° 19.628 — Protección de la Vida Privada (LPD)
          </h3>
          <div className="space-y-3">
            <ArticuloCard
              titulo="Artículo 1°"
              descripcion="El tratamiento de datos debe realizarse de manera concordante con la ley y para finalidades permitidas por el ordenamiento jurídico, respetando el pleno ejercicio de los derechos fundamentales."
              aplicacion="Los atacantes accedieron y trataron los datos con fines de espionaje, una finalidad completamente ajena a lo permitido por la ley."
            />
            <ArticuloCard
              titulo="Artículo 2° — Definiciones clave"
              descripcion="Define datos personales (información concerniente a personas naturales identificadas o identificables) y datos sensibles (información referida a características físicas o morales, hábitos personales, origen racial, ideologías, estado de salud, etc.)."
              aplicacion="Los sistemas comprometidos contenían datos sensibles cuya exposición constituye una infracción grave bajo esta ley."
            />
            <ArticuloCard
              titulo="Artículo 10°"
              descripcion="Prohíbe el tratamiento de datos sensibles salvo autorización legal, consentimiento del titular o necesidad para determinar u otorgar beneficios de salud."
              aplicacion="El acceso y exfiltración de datos sensibles no cumplían ninguna de estas excepciones legales."
            />
          </div>
        </div>

        {/* Ley 21.719 */}
        <div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-amber-800 text-sm font-semibold">
              ⚠ Nueva Ley N° 21.719 — Vigencia diferida al 1 de diciembre de 2026
            </p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Esta ley reemplazará a la N° 19.628, creando un nuevo estándar de protección en Chile. Sus novedades principales incluyen:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { titulo: 'Agencia de Protección de Datos', desc: 'Ente autónomo con facultades fiscalizadoras y sancionatorias.' },
              { titulo: 'Derecho a la portabilidad', desc: 'Se incorpora explícitamente como derecho del titular.' },
              { titulo: 'Notificación de brechas', desc: 'Plazo máximo para informar a la Agencia sobre incidentes de seguridad.' },
              { titulo: 'Mayores sanciones', desc: 'Multas más elevadas y proporcionales para las infracciones.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-700 text-sm">{item.titulo}</p>
                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ley 21.459 tabla */}
        <div>
          <h3 className="text-base font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
            Ley N° 21.459 — Delitos Informáticos
          </h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Esta ley derogó la antigua Ley 19.223, modernizando y ampliando el catálogo de conductas punibles en el ciberespacio.
            Define siete delitos informáticos directamente aplicables al caso SUNBURST:
          </p>
          <TablaDelitos filas={delitosLey21459} />

          <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm leading-relaxed">
              <span className="font-semibold">Responsabilidad de las empresas:</span> La Ley 21.459 establece la responsabilidad penal
              de personas jurídicas en concordancia con la Ley N° 20.393. Las empresas pueden ser sancionadas con multas, disolución,
              suspensión de actividades o inhabilitación para contratar con el Estado.
            </p>
          </div>
        </div>
      </div>

      {/* Legislación complementaria */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="text-amber-500" size={18} />
          <h3 className="font-semibold text-slate-700">Legislación Complementaria</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          El Código Penal chileno complementa el marco normativo específico: sus disposiciones sobre hurto, estafa, violación de secreto
          y robo de documentos privados son aplicables para aquellos aspectos no cubiertos específicamente por la ley de delitos informáticos.
        </p>
      </div>
    </section>
  )
}
