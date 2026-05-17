import { BarChart2 } from 'lucide-react'

const marcos = [
  {
    nombre: 'NIST CSF v1.1 / v2.0',
    sector: 'TI / Gobierno',
    cadenaSupministro: 'Alta. La función Identify (ID.SC) exige evaluación de riesgos en proveedores. NIST SP 800-161r1 desarrolla específicamente la gestión de riesgos en cadena de suministro.',
    deteccion: 'Descriptivo-orientativo. Las funciones Detect (DE) y Respond (RS) exigen monitoreo continuo y planes de respuesta. No prescribe tecnología ni plazos de detección.',
    sanciones: 'Sin sanción directa. Consecuencias indirectas: pérdida de contratos federales o sanciones contractuales.',
    notificacion: 'Sin obligación. La función Respond recomienda comunicación como buena práctica, pero no establece plazos ni destinatarios obligatorios.',
    aplicabilidad: 'Alta',
    aplicabilidadColor: 'text-green-700 bg-green-100',
  },
  {
    nombre: 'ISO/IEC 27001:2022',
    sector: 'Sector Empresarial General',
    cadenaSupministro: 'Alta. Los controles A.5.19 a A.5.22 regulan la seguridad en relaciones con proveedores. El control A.8.8 cubre gestión de vulnerabilidades técnicas en software de proveedores.',
    deteccion: 'Descriptivo-orientativo. Controles A.8.15–A.8.16 (registro y monitoreo) y A.5.26 (respuesta a incidentes) exigen procedimientos documentados, sin prescribir herramientas ni plazos.',
    sanciones: 'Sin sanción directa. La pérdida de certificación genera consecuencias comerciales (exclusión de licitaciones, daño reputacional).',
    notificacion: 'Sin obligación externa. Exige documentación y reporte interno. La notificación pública depende de otras normativas superpuestas.',
    aplicabilidad: 'Alta',
    aplicabilidadColor: 'text-green-700 bg-green-100',
  },
  {
    nombre: 'GDPR + Ley 19.628',
    sector: 'Protección de Datos Personales',
    cadenaSupministro: 'Cobertura parcial. El Art. 28 GDPR y el Art. 11 Ley 19.628 exigen verificar garantías de proveedores. No aborda el vector de ataque a la cadena de compilación específicamente.',
    deteccion: 'Legal-obligatorio. El Art. 33 GDPR exige notificación a la autoridad en 72 horas. La Ley 19.628 vigente no establece plazos equivalentes.',
    sanciones: 'Significativa. GDPR: hasta €20 millones o el 4% de la facturación global anual. Ley 19.628 Chile: multas de 100 a 5.000 UTM.',
    notificacion: 'GDPR: 72 horas a la autoridad supervisora y notificación a titulares si hay riesgo elevado. Ley 19.628 Chile: sin plazo vigente.',
    aplicabilidad: 'Media-Alta',
    aplicabilidadColor: 'text-yellow-700 bg-yellow-100',
  },
  {
    nombre: 'HIPAA (45 CFR §164)',
    sector: 'Sector Salud',
    cadenaSupministro: 'Cobertura parcial. Los Business Associate Agreements (BAA) obligan al proveedor a cumplir estándares HIPAA. No contempla controles sobre el proceso de build/compilación.',
    deteccion: 'Legal-obligatorio. El §164.308 exige procedimientos formales de respuesta. La Breach Notification Rule obliga a reportar al HHS dentro de 60 días desde el descubrimiento.',
    sanciones: 'Escalonada. Las multas alcanzan hasta USD $1,9 millones por categoría de infracción por año. Proveedores afectados podrían enfrentar investigación de la OCR del HHS.',
    notificacion: '60 días desde el descubrimiento para notificar al HHS. Si afecta a más de 500 personas en un estado, también se notifica a medios locales.',
    aplicabilidad: 'Media',
    aplicabilidadColor: 'text-blue-700 bg-blue-100',
  },
  {
    nombre: 'NERC CIP',
    sector: 'Infraestructura Crítica Energética',
    cadenaSupministro: 'Muy alta. El estándar CIP-013-2 está dedicado íntegramente a la gestión de riesgos en la cadena de suministro de sistemas de control industrial. Es el marco más específico para el vector empleado en SUNBURST.',
    deteccion: 'Prescriptivo-obligatorio. El CIP-008-6 exige un plan de respuesta con pruebas anuales obligatorias. El CIP-007-6 regula gestión de parches con plazos definidos.',
    sanciones: 'Severa. NERC puede aplicar multas de hasta USD $1 millón por día por incumplimiento de los estándares CIP.',
    notificacion: 'CIP-008-6 exige notificación al E-ISAC y reportes al regulador FERC con plazos estrictos según criticidad (en algunos casos, dentro de 1 hora del descubrimiento).',
    aplicabilidad: 'Alta',
    aplicabilidadColor: 'text-green-700 bg-green-100',
  },
]

const ejes = [
  { key: 'cadenaSupministro', label: 'Eje 1: Cadena de suministro de software' },
  { key: 'deteccion', label: 'Eje 2: Detección y respuesta' },
  { key: 'sanciones', label: 'Eje 3: Sanciones' },
  { key: 'notificacion', label: 'Eje 4: Notificación de brechas' },
]

export default function Comparacion() {
  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart2 className="text-indigo-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">
            Comparativa de Marcos Regulatorios por Industria
          </h2>
        </div>
        <p className="text-slate-500 text-sm">Caso SolarWinds SUNBURST — Análisis comparativo EE.UU. / Chile</p>
      </div>

      {/* Contexto */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-slate-700 mb-3">Contexto del Caso</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          El ciberataque SUNBURST afectó a más de 18.000 organizaciones incluyendo empresas tecnológicas, agencias del gobierno federal
          de EE.UU. (Tesoro, Seguridad Nacional, Comercio, Estado) y entidades de los sectores financiero, energético y de salud.
          Cada industria enfrenta obligaciones legales diferenciadas en materia de ciberseguridad y protección de datos. La siguiente
          tabla compara los marcos regulatorios aplicables en EE.UU. con sus equivalentes funcionales en Chile.
        </p>
      </div>

      {/* Tabla comparativa — versión por eje */}
      <div className="space-y-6">
        {ejes.map((eje) => (
          <div key={eje.key} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h3 className="font-semibold text-sm">{eje.label}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {marcos.map((m, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Marco */}
                  <div className="bg-slate-50 p-4 border-r border-slate-100">
                    <p className="font-semibold text-slate-800 text-sm">{m.nombre}</p>
                    <p className="text-slate-500 text-xs mt-1">{m.sector}</p>
                    <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${m.aplicabilidadColor}`}>
                      Aplicabilidad: {m.aplicabilidad}
                    </span>
                  </div>
                  {/* Contenido del eje */}
                  <div className="col-span-3 p-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{m[eje.key]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Eje 5: Aplicabilidad directa */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-slate-800 text-white px-6 py-3">
          <h3 className="font-semibold text-sm">Eje 5: Aplicabilidad directa al vector de ataque SUNBURST</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { marco: 'NIST CSF v1.1 / v2.0', nivel: 'Alta', texto: 'El ataque comprometió directamente las funciones Identify (sin control sobre el proveedor Orion) y Detect (el backdoor operó ~14 meses sin ser identificado). La EO 14028 de 2021 surgió como respuesta directa a SUNBURST.', color: 'text-green-700 bg-green-100' },
            { marco: 'ISO/IEC 27001:2022', nivel: 'Alta', texto: 'Los controles sobre gestión de proveedores y vulnerabilidades técnicas eran insuficientes. El ataque habría sido prevenible con una aplicación estricta del Anexo A de ISO 27001:2022.', color: 'text-green-700 bg-green-100' },
            { marco: 'GDPR + Ley 19.628', nivel: 'Media-Alta', texto: 'Los datos personales procesados por las agencias afectadas activaron obligaciones GDPR en organismos con presencia en la UE. La Ley 19.628 aplicaría a los datos de ciudadanos chilenos en el escenario hipotético.', color: 'text-yellow-700 bg-yellow-100' },
            { marco: 'HIPAA', nivel: 'Media', texto: 'Hospitales, aseguradoras y laboratorios que usaban Orion debieron activar protocolos HIPAA para determinar si se comprometió PHI. El vector fue indirecto: el ataque no apuntó al sector salud específicamente.', color: 'text-blue-700 bg-blue-100' },
            { marco: 'NERC CIP', nivel: 'Alta', texto: 'Las empresas eléctricas y utilities afectadas estaban bajo mandato NERC CIP. El ataque fue el catalizador directo de la revisión de CIP-013 y motivó la directiva de emergencia ED-21-01 de CISA.', color: 'text-green-700 bg-green-100' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4">
              <div className="bg-slate-50 p-4 border-r border-slate-100">
                <p className="font-semibold text-slate-800 text-sm">{item.marco}</p>
                <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${item.color}`}>
                  {item.nivel}
                </span>
              </div>
              <div className="col-span-3 p-4">
                <p className="text-slate-600 text-sm leading-relaxed">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
