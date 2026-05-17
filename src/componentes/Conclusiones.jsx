import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

const recomendacionesOrg = [
  {
    n: 1,
    texto: 'Implementar un programa formal de gestión de riesgos en la cadena de suministro de software, verificando la seguridad del proceso de build de proveedores críticos.',
    fundamento: 'SUNBURST ingresó por el proceso de compilación de Orion; ninguna organización víctima auditaba este proceso en su proveedor.',
  },
  {
    n: 2,
    texto: 'Adoptar el principio de mínimo privilegio y segmentación de redes para limitar el movimiento lateral de un atacante que ya esté dentro del perímetro.',
    fundamento: 'APT29 escaló privilegios y se movió lateralmente durante meses; la segmentación habría limitado el alcance del daño.',
  },
  {
    n: 3,
    texto: 'Desplegar capacidades de detección y respuesta en endpoints y red (EDR/NDR) con inteligencia de amenazas actualizada, especialmente para detectar tráfico de comando y control (C2).',
    fundamento: 'SUNBURST usó dominios de C2 que imitaban tráfico legítimo de Orion; herramientas especializadas podrían haberlo identificado.',
  },
  {
    n: 4,
    texto: 'Establecer y probar regularmente un plan de respuesta ante incidentes que incluya procedimientos de notificación a la autoridad competente y a los titulares de datos afectados.',
    fundamento: 'Varias organizaciones víctimas tardaron semanas en activar protocolos de respuesta tras el descubrimiento público del ataque.',
  },
  {
    n: 5,
    texto: 'Revisar y endurecer los controles sobre las actualizaciones automáticas de software de terceros, evaluando la implementación de entornos de prueba (sandboxing) antes de despliegues masivos.',
    fundamento: 'La actualización automática de Orion fue el vector de infección; un ambiente de prueba habría podido detectar el comportamiento anómalo.',
  },
  {
    n: 6,
    texto: 'Implementar autenticación multifactor (MFA) y monitoreo de tokens SAML para detectar el uso indebido de credenciales de identidad federada.',
    fundamento: 'APT29 abusó de tokens SAML para acceder a servicios cloud sin necesidad de credenciales adicionales.',
  },
]

const recomendacionesEstado = [
  {
    n: 1,
    texto: 'Aprobar con urgencia la modernización de la Ley 19.628, incorporando plazos de notificación de brechas, una autoridad fiscalizadora autónoma y sanciones proporcionales al daño causado.',
    fundamento: 'La ley vigente (1999) no contempla los vectores de ataque ni los volúmenes de datos comprometidos propios de la era cloud.',
  },
  {
    n: 2,
    texto: 'Dictar los reglamentos de la Ley 21.663 que definan los estándares mínimos de ciberseguridad para operadores de infraestructura crítica, incorporando requisitos específicos sobre gestión de riesgos en cadena de suministro de software.',
    fundamento: 'NERC CIP-013 y NIST SP 800-161r1 ofrecen modelos concretos y maduros que Chile puede adoptar como referencia.',
  },
  {
    n: 3,
    texto: 'Fortalecer el CSIRT de Gobierno con recursos humanos especializados, herramientas de inteligencia de amenazas y capacidad de respuesta activa, no solo reactiva.',
    fundamento: 'FireEye descubrió SUNBURST, no las agencias gubernamentales; Chile no debe depender de que sea el sector privado quien detecte ataques a infraestructura pública.',
  },
  {
    n: 4,
    texto: 'Establecer un marco de coordinación público-privada para el intercambio de inteligencia de amenazas cibernéticas, similar al modelo de los ISAC de EE.UU.',
    fundamento: 'La detección tardía de SUNBURST se debió en parte a la ausencia de mecanismos de intercambio de indicadores de compromiso entre organizaciones.',
  },
  {
    n: 5,
    texto: 'Incorporar en la Ley 21.459 agravantes explícitas para ataques a infraestructura crítica digital y para operaciones ejecutadas por actores estatales extranjeros.',
    fundamento: 'La redacción actual no diferencia adecuadamente la gravedad de un ataque de espionaje estatal respecto de un acceso indebido individual.',
  },
]

export default function Conclusiones() {
  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-amber-500" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">Conclusiones y Recomendaciones</h2>
        </div>
        <p className="text-slate-500 text-sm">Caso SolarWinds — Ataque SUNBURST (2019–2020)</p>
      </div>

      {/* Reflexión final */}
      <div className="bg-white rounded-lg shadow p-6 space-y-5">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">1. Reflexión Final sobre el Caso</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          El ataque SUNBURST representa un punto de inflexión en la historia de la ciberseguridad global. No fue un ataque convencional
          de fuerza bruta: fue una operación de precisión quirúrgica que subvirtió uno de los mecanismos en los que más confían las
          organizaciones modernas, la actualización automática de software legítimo y firmado digitalmente. Su éxito dependió de la
          combinación de tres factores que se refuerzan mutuamente:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              titulo: 'Confianza ciega en los proveedores',
              texto: 'Las 18.000 organizaciones que descargaron la actualización maliciosa siguieron exactamente los procedimientos recomendados. El ataque demostró que la cadena de confianza digital puede ser comprometida desde su origen.',
              color: 'border-red-400',
            },
            {
              titulo: 'Ausencia de visibilidad interna',
              texto: 'Durante ~14 meses, SUNBURST operó en silencio dentro de redes de las organizaciones más sofisticadas del mundo, revelando que la detección no puede depender solo de herramientas perimetrales.',
              color: 'border-amber-400',
            },
            {
              titulo: 'Fragmentación regulatoria',
              texto: 'Ningún estándar individual cubría de manera integral el vector de ataque empleado. El NIST CSF orientaba pero no prescribía; la Ley 19.628 protegía datos pero no imponía plazos de notificación ni creaba fiscalización efectiva.',
              color: 'border-blue-400',
            },
          ].map((item, i) => (
            <div key={i} className={`border-l-4 ${item.color} bg-slate-50 rounded-r-lg p-4`}>
              <p className="font-semibold text-slate-700 text-sm mb-2">{item.titulo}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Importancia estratégica */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
          2. Importancia de la Ciberseguridad como Prioridad Estratégica
        </h3>
        {[
          {
            titulo: '2.1 La ciberseguridad ya no es un problema técnico: es un problema de Estado',
            texto: 'SUNBURST comprometió al Departamento del Tesoro, a CISA, al Departamento de Estado y a decenas de agencias de inteligencia. En el escenario hipotético chileno, un ataque equivalente podría haber comprometido el Ministerio de Hacienda, el SII, el Banco Central o el Estado Mayor de la Defensa Nacional. La Ley 21.663 representa un avance significativo al crear la ANCI, pero su efectividad dependerá de la velocidad con que se dicten los reglamentos y de los recursos que el Estado destine a su implementación.',
          },
          {
            titulo: '2.2 La seguridad en la cadena de suministro de software es el nuevo frente crítico',
            texto: 'SUNBURST demostró que atacar a un proveedor de confianza es más eficiente que atacar directamente a miles de objetivos individuales. Este vector (supply chain attack) se ha repetido en casos posteriores como Kaseya VSA (2021) y 3CX (2023), indicando una tendencia estructural. Para Chile, esto implica extender la gestión de riesgos a toda la cadena de proveedores de software, servicios cloud y tecnología operacional.',
          },
          {
            titulo: '2.3 La detección temprana vale más que la respuesta tardía',
            texto: 'Fue FireEye, una empresa privada de ciberseguridad, quien descubrió el ataque al investigar el robo de sus propias herramientas, y no las agencias gubernamentales cuyas redes llevaban meses comprometidas. Esto revela una brecha crítica en las capacidades de detección de amenazas avanzadas (APT). La inversión en EDR, NDR y SIEM con inteligencia de amenazas es una condición mínima para la resiliencia organizacional.',
          },
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-lg p-4">
            <p className="font-semibold text-slate-700 text-sm mb-2">{item.titulo}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.texto}</p>
          </div>
        ))}
      </div>

      {/* Urgencia normativa */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
          3. La Urgencia de Actualizar las Normativas Legales en Chile
        </h3>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="text-amber-500 mt-0.5 shrink-0" size={16} />
            <div>
              <p className="font-semibold text-amber-800 text-sm">Principales limitaciones de la Ley 19.628 (1999)</p>
              <ul className="mt-2 space-y-1">
                {[
                  'No establece plazos de notificación de brechas.',
                  'No crea una autoridad fiscalizadora autónoma con poder sancionatorio efectivo.',
                  'Las sanciones vigentes (100 a 5.000 UTM) son insuficientes como elemento disuasorio para grandes organizaciones.',
                  'No regula expresamente el tratamiento de datos en la nube ni la transferencia internacional a proveedores extranjeros.',
                ].map((punto, i) => (
                  <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                    <span className="mt-1 shrink-0">•</span>
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="font-semibold text-blue-800 text-sm mb-2">Ley 21.663 — Ley Marco de Ciberseguridad (2024)</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            Es la respuesta legislativa más relevante de Chile a las nuevas amenazas. Al crear la ANCI, establecer un sistema de
            reporte de incidentes y definir obligaciones para operadores de infraestructura crítica, sienta las bases institucionales
            necesarias. Su efectividad práctica depende de la dictación oportuna de los reglamentos y de la dotación de recursos
            humanos y técnicos de la ANCI.
          </p>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">4. Recomendaciones de Seguridad</h3>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2 text-sm">
            <CheckCircle className="text-teal-500" size={16} />
            Para organizaciones (técnicas y operacionales)
          </h4>
          <div className="space-y-3">
            {recomendacionesOrg.map((r) => (
              <div key={r.n} className="grid grid-cols-12 gap-3 border border-slate-200 rounded-lg p-4">
                <div className="col-span-1 flex items-start justify-center">
                  <span className="w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {r.n}
                  </span>
                </div>
                <div className="col-span-11 space-y-1">
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{r.texto}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    <strong>Fundamento:</strong> {r.fundamento}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2 text-sm">
            <CheckCircle className="text-indigo-500" size={16} />
            Para el Estado y los legisladores
          </h4>
          <div className="space-y-3">
            {recomendacionesEstado.map((r) => (
              <div key={r.n} className="grid grid-cols-12 gap-3 border border-slate-200 rounded-lg p-4">
                <div className="col-span-1 flex items-start justify-center">
                  <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {r.n}
                  </span>
                </div>
                <div className="col-span-11 space-y-1">
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{r.texto}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    <strong>Fundamento:</strong> {r.fundamento}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reflexión final */}
      <div className="bg-slate-800 text-white rounded-lg shadow p-8">
        <h3 className="text-lg font-bold mb-4">5. Reflexión Final</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          El caso SolarWinds SUNBURST no es solo la historia de un ataque sofisticado: es el relato de cómo la confianza, cuando no
          está acompañada de verificación continua, se convierte en la vulnerabilidad más explotable de cualquier sistema.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          La ciberseguridad moderna no puede construirse sobre la confianza implícita. Debe construirse sobre la verificación explícita,
          continua y sistemática de cada componente de la cadena digital: el software que se instala, las credenciales que se usan,
          el tráfico que circula por las redes y los proveedores a quienes se les entrega acceso a los sistemas más críticos.
        </p>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
          <p className="text-white text-sm font-medium leading-relaxed">
            Para Chile, este caso es al mismo tiempo una advertencia y una oportunidad. La pregunta ya no es si Chile enfrentará un
            incidente de la magnitud de SUNBURST, sino si estará preparado cuando ocurra.
          </p>
        </div>
      </div>
    </section>
  )
}
