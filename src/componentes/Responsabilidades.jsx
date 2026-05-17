import { Users } from 'lucide-react'

function TablaResponsabilidad({ filas, headers = ['Acción / Fundamento', 'Norma citada'] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-slate-700 text-white">
            {headers.map((h, i) => (
              <th key={i} className="text-left p-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {fila.map((celda, j) => (
                <td key={j} className="p-3 text-slate-600 border-b border-slate-100 align-top leading-relaxed">{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ResponsabilidadBloque({ tipo, contenido, color }) {
  const colores = {
    penal: 'bg-red-50 border-red-200 text-red-700',
    civil: 'bg-blue-50 border-blue-200 text-blue-700',
    admin: 'bg-amber-50 border-amber-200 text-amber-700',
    ninguna: 'bg-green-50 border-green-200 text-green-700',
  }
  const etiquetas = {
    penal: 'Responsabilidad Penal',
    civil: 'Responsabilidad Civil',
    admin: 'Responsabilidad Administrativa',
    ninguna: 'Sin Responsabilidad',
  }
  return (
    <div className={`rounded-lg border p-4 ${colores[tipo]}`}>
      <p className="font-bold text-sm mb-2">{etiquetas[tipo]}</p>
      <div className="text-sm">{contenido}</div>
    </div>
  )
}

export default function Responsabilidades() {
  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-violet-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">Responsabilidades Legales</h2>
        </div>
        <p className="text-slate-500 text-sm">Análisis por actor involucrado en el caso SolarWinds SUNBURST</p>
      </div>

      {/* Actor 1: Atacantes */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Actor 1</span>
          <h3 className="text-lg font-bold text-slate-800">Atacantes — APT29 / Cozy Bear</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Grupo de amenaza persistente avanzada atribuido al Servicio de Inteligencia Exterior de Rusia (SVR). Ejecutaron el compromiso
          de la cadena de suministro, el despliegue del backdoor SUNBURST y la exfiltración de datos de las organizaciones afectadas.
        </p>

        <ResponsabilidadBloque tipo="penal" contenido={
          <>
            <TablaResponsabilidad
              headers={['Acción realizada', 'Delito tipificado', 'Norma citada']}
              filas={[
                ['Compromiso del sistema de compilación mediante inyección de código malicioso', 'Acceso indebido a sistema informático', 'Ley 21.459, Art. 2'],
                ['Inyección del backdoor SUNBURST y firma digital de actualizaciones maliciosas', 'Interceptación de datos e introducción de código malicioso', 'Ley 21.459, Art. 2 y Art. 4'],
                ['Exfiltración de correos, documentos internos y credenciales', 'Interceptación y apoderamiento de datos informáticos', 'Ley 21.459, Art. 4'],
                ['Despliegue de herramientas post-explotación (TEARDROP, Cobalt Strike)', 'Daño informático / sabotaje informático', 'Ley 21.459, Art. 3'],
                ['Uso de infraestructura C2 dentro de territorio de las víctimas para evadir detección', 'Acceso indebido agravado por uso de dispositivos de terceros', 'Ley 21.459, Art. 2 inc. 2°'],
              ]}
            />
            <p className="mt-3 text-red-800 text-sm leading-relaxed">
              <strong>Pena aplicable (hipotética, Ley 21.459):</strong> Presidio menor en su grado medio a máximo (541 días a 5 años),
              con posibles agravantes por afectación de infraestructura crítica y actuación organizada. La atribución a un Estado
              extranjero introduce complejidades de jurisdicción y derecho internacional público.
            </p>
          </>
        } />

        <ResponsabilidadBloque tipo="civil" contenido={
          <p className="text-blue-800 text-sm leading-relaxed">
            En el escenario hipotético, el Estado de Chile podría ejercer acción de responsabilidad extracontractual por daño a
            infraestructura pública (Art. 2314 y siguientes del Código Civil) si actores identificados tuvieran patrimonio dentro
            de la jurisdicción.
          </p>
        } />

        <ResponsabilidadBloque tipo="admin" contenido={
          <p className="text-amber-800 text-sm">
            No aplica directamente al actor atacante. Las consecuencias administrativas recaen sobre las organizaciones víctimas
            que no implementaron medidas preventivas adecuadas.
          </p>
        } />
      </div>

      {/* Actor 2: SolarWinds */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Actor 2</span>
          <h3 className="text-lg font-bold text-slate-800">SolarWinds Corporation</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Empresa de software estadounidense proveedora de la plataforma Orion. El proceso de compilación y distribución de
          actualizaciones fue comprometido sin que la empresa lo detectara durante aproximadamente 14 meses.
        </p>

        <ResponsabilidadBloque tipo="penal" contenido={
          <p className="text-red-800 text-sm leading-relaxed">
            SolarWinds no tiene responsabilidad penal directa en la ejecución del ataque. Sin embargo, en el escenario hipotético
            chileno, podría configurarse responsabilidad penal de personas jurídicas si se acredita omisión dolosa en implementar
            controles de seguridad exigidos, conforme a la <strong>Ley 20.393</strong> (responsabilidad penal de personas jurídicas
            en Chile).
          </p>
        } />

        <ResponsabilidadBloque tipo="civil" contenido={
          <>
            <TablaResponsabilidad filas={[
              ['Responsabilidad extracontractual por distribuir software con código malicioso, causando daño patrimonial y moral', 'Art. 2314 y Art. 2329, Código Civil de Chile'],
              ['Incumplimiento de obligación contractual de entregar software íntegro y libre de vulnerabilidades conocidas', 'Art. 1556 y Art. 1558, Código Civil de Chile'],
              ['Falta de implementación de medidas de seguridad en el proceso de build/compilación (negligencia grave)', 'Art. 44, Código Civil de Chile (culpa grave)'],
              ['En el caso real (EE.UU.): demanda de la SEC (2023) por no revelar adecuadamente los riesgos de ciberseguridad a inversionistas', 'Securities Exchange Act of 1934, Sección 10(b); Regla SEC 10b-5'],
            ]} />
            <p className="mt-3 text-blue-800 text-xs">
              <strong>Nota:</strong> En diciembre de 2022 la SEC formuló cargos contra SolarWinds y su CISO Timothy Brown por fraude
              y controles internos deficientes en relación con el incidente SUNBURST.
            </p>
          </>
        } />

        <ResponsabilidadBloque tipo="admin" contenido={
          <TablaResponsabilidad filas={[
            ['Incumplimiento de deber de seguridad en el tratamiento de datos de sus clientes (datos de configuración de red, credenciales, información operacional)', 'Art. 11 y Art. 23, Ley 19.628 (Chile)'],
            ['Falta de notificación oportuna a clientes afectados una vez conocida la brecha', 'Art. 11, Ley 19.628 (Chile); Art. 33, GDPR'],
            ['Incumplimiento de estándares de seguridad en cadena de suministro exigidos por contratos con el gobierno federal de EE.UU.', 'NIST SP 800-161r1; FAR Subpart 39.2'],
          ]} />
        } />
      </div>

      {/* Actor 3: Sector Público */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Actor 3</span>
          <h3 className="text-lg font-bold text-slate-800">Organizaciones Víctimas — Sector Público</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Agencias gubernamentales que instalaron la actualización maliciosa (Tesoro, CISA, Departamento de Estado, Pentágono en el
          caso real). En el hipotético chileno: Ministerio de Hacienda, Ministerio del Interior o la ANI.
        </p>

        <ResponsabilidadBloque tipo="penal" contenido={
          <p className="text-red-800 text-sm leading-relaxed">
            Los organismos públicos no tienen responsabilidad penal en calidad de víctimas. Sin embargo, los funcionarios responsables
            de la seguridad informática podrían enfrentar responsabilidad penal individual si se acredita omisión dolosa en el ejercicio
            de sus funciones (prevaricación administrativa, Art. 223 y siguientes del Código Penal de Chile).
          </p>
        } />

        <ResponsabilidadBloque tipo="civil" contenido={
          <TablaResponsabilidad filas={[
            ['Responsabilidad del Estado por falta de servicio: no implementar medidas de seguridad adecuadas para proteger datos de ciudadanos', 'Art. 42, Ley 18.575 (Ley Orgánica de Bases de la Administración del Estado)'],
            ['Daño causado a ciudadanos cuyos datos personales fueron comprometidos como consecuencia de la brecha', 'Art. 2314, Código Civil de Chile; Art. 23, Ley 19.628'],
          ]} />
        } />

        <ResponsabilidadBloque tipo="admin" contenido={
          <TablaResponsabilidad filas={[
            ['Incumplimiento de estándares mínimos de ciberseguridad para organismos del Estado, incluyendo gestión de riesgos en proveedores de software crítico', 'Decreto Supremo N° 83/2004 MINSEGPRES; Instrucción General N°20 del CSIRT de Gobierno (2023)'],
            ['Falta de implementación de un plan de respuesta ante incidentes de seguridad cibernética', 'Ley 21.459, Art. 10 (agravantes por afectación de servicios esenciales); Instrucción CSIRT Gobierno'],
            ['No reportar oportunamente el incidente al CSIRT de Gobierno ni a la autoridad competente', 'Ley 21.663 — Ley Marco de Ciberseguridad (2024), Art. 9'],
          ]} />
        } />
      </div>

      {/* Actor 4: Sector Privado */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Actor 4</span>
          <h3 className="text-lg font-bold text-slate-800">Organizaciones Víctimas — Sector Privado</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Empresas privadas de tecnología, energía, salud y consultoría (Microsoft, Intel, Cisco, FireEye, Fortune 500 en el caso real).
          En Chile hipotético: empresas de telecomunicaciones, utilities eléctricas y entidades financieras que utilizaran Orion.
        </p>

        <ResponsabilidadBloque tipo="penal" contenido={
          <p className="text-red-800 text-sm leading-relaxed">
            Las empresas privadas son víctimas del ataque y no tienen responsabilidad penal por la intrusión. No obstante, sus
            ejecutivos (CISO, CTO) podrían ser investigados si se acredita que conocían vulnerabilidades críticas y no adoptaron
            medidas (omisión dolosa), u ocultaron deliberadamente la brecha a clientes o a la autoridad regulatoria
            (posible encubrimiento o falsedad, Arts. 193 y 197 del Código Penal de Chile).
          </p>
        } />

        <ResponsabilidadBloque tipo="civil" contenido={
          <TablaResponsabilidad filas={[
            ['Responsabilidad frente a clientes finales cuyos datos fueron comprometidos por no implementar controles de seguridad adecuados', 'Art. 2314 y Art. 2329, Código Civil de Chile'],
            ['Incumplimiento contractual frente a clientes que confiaron datos en virtud de un contrato de prestación de servicios', 'Art. 1546 y Art. 1556, Código Civil de Chile'],
            ['Responsabilidad ante consumidores finales por daño derivado de servicios deficientes en materia de seguridad', 'Art. 3° letra e) y Art. 23, Ley 19.496 (Ley de Protección al Consumidor)'],
          ]} />
        } />

        <ResponsabilidadBloque tipo="admin" contenido={
          <TablaResponsabilidad
            headers={['Infracción', 'Sector / Norma citada']}
            filas={[
              ['Incumplimiento del deber de adoptar medidas de seguridad técnicas y organizativas para proteger datos personales de clientes', 'Art. 11, Ley 19.628 (Chile); Art. 32, GDPR'],
              ['Falta de notificación de la brecha a la autoridad competente y a los titulares afectados', 'Art. 23, Ley 19.628 (Chile); Art. 33–34, GDPR'],
              ['Sector energía: incumplimiento de estándares para infraestructura crítica', 'Ley 21.663, Arts. 4° y 9°; NERC CIP-013 (referencia internacional)'],
              ['Sector financiero: incumplimiento de la normativa de ciberseguridad de la CMF', 'NCG N°454 de la CMF (2021) — Gestión de riesgos de ciberseguridad'],
            ]}
          />
        } />
      </div>

      {/* Actor 5: FireEye */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Actor 5</span>
          <h3 className="text-lg font-bold text-slate-800">FireEye — Empresa descubridora de la brecha</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Empresa de ciberseguridad estadounidense que detectó el ataque en diciembre de 2020 al investigar el robo de sus propias
          herramientas de red team. Su divulgación responsable permitió la respuesta coordinada global.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { tipo: 'Responsabilidad Penal', texto: 'Ninguna. FireEye actuó como víctima del ataque y como descubridor que realizó divulgación responsable coordinada con CISA, NSA y el FBI.', color: 'bg-green-50 border-green-200 text-green-800' },
            { tipo: 'Responsabilidad Civil', texto: 'Ninguna. FireEye no distribuyó el software comprometido ni tenía obligación contractual de detectar amenazas en sistemas de terceros.', color: 'bg-green-50 border-green-200 text-green-800' },
            { tipo: 'Responsabilidad Administrativa', texto: 'Ninguna. Su actuación es referencia de buenas prácticas en divulgación coordinada (alineada con NIST CSF función Respond, RS.CO-5).', color: 'bg-green-50 border-green-200 text-green-800' },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg border p-4 ${item.color}`}>
              <p className="font-bold text-sm mb-2">{item.tipo}</p>
              <p className="text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
