import { Database } from 'lucide-react'

function TablaSimple({ headers, filas }) {
  return (
    <div className="overflow-x-auto">
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

export default function Datos() {
  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <Database className="text-teal-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">Tratamiento de Datos Personales</h2>
        </div>
        <p className="text-slate-500 text-sm">
          Análisis bajo la Ley 19.628 — Datos comprometidos, principios vulnerados y derechos ARCO afectados
        </p>
        <div className="mt-3 bg-teal-50 border border-teal-200 rounded-lg p-3">
          <p className="text-teal-800 text-xs leading-relaxed">
            <strong>Nota metodológica:</strong> El análisis se construye sobre el escenario hipotético chileno conforme a las
            instrucciones de la evaluación. El tratamiento de datos se evalúa con la Ley 19.628 y los derechos ARCO, aun cuando
            el caso real se rigió por la normativa estadounidense y, parcialmente, por el GDPR.
          </p>
        </div>
      </div>

      {/* Tipos de datos comprometidos */}
      <div className="bg-white rounded-lg shadow p-6 space-y-5">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
          1. Tipos de Datos Comprometidos en el Ataque
        </h3>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3 text-sm">1.1 Datos Personales — Art. 2° letra f, Ley 19.628</h4>
          <TablaSimple
            headers={['Categoría', 'Descripción en el caso', 'Norma de referencia']}
            filas={[
              ['Datos de identificación', 'Nombres de usuario, identificadores de cuentas de dominio (Active Directory), correos electrónicos corporativos de funcionarios y empleados.', 'Art. 2° letra f, Ley 19.628'],
              ['Datos de comunicaciones', 'Contenido de correos electrónicos internos de organismos gubernamentales exfiltrados mediante acceso a Microsoft 365 / Exchange Online.', 'Art. 2° letra f, Ley 19.628; Art. 19 N°5, CPR (inviolabilidad de las comunicaciones)'],
              ['Datos de autenticación', 'Credenciales (tokens SAML, contraseñas hasheadas, certificados digitales) utilizadas para escalar privilegios y moverse lateralmente.', 'Art. 2° letra f, Ley 19.628'],
              ['Datos laborales', 'Información sobre roles, cargos y estructura organizacional de las entidades afectadas.', 'Art. 2° letra f, Ley 19.628'],
              ['Datos de configuración de red', 'Topología de redes internas, direcciones IP, activos críticos monitoreados por Orion.', 'Art. 2° letra f, Ley 19.628'],
            ]}
          />
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-3 text-sm">1.2 Datos Sensibles — Art. 2° letra g, Ley 19.628</h4>
          <TablaSimple
            headers={['Categoría sensible', 'Descripción en el caso', 'Norma de referencia']}
            filas={[
              ['Información de inteligencia y seguridad nacional', 'Datos de operaciones clasificadas del DHS/CISA, el Pentágono y agencias de inteligencia. En el hipotético chileno: información de la ANI o del Estado Mayor Conjunto.', 'Art. 2° letra g, Ley 19.628; Ley 19.974 (Sistema de Inteligencia del Estado)'],
              ['Datos de salud', 'Información de salud protegida (PHI) de pacientes en hospitales y aseguradoras que utilizaban Orion. En Chile: datos clínicos en sistemas de salud afectados.', 'Art. 2° letra g, Ley 19.628 (estado de salud como dato sensible); Ley 20.584'],
              ['Opiniones e ideología política', 'Correos electrónicos de funcionarios de gobierno con contenido político o estratégico exfiltrados durante la intrusión.', 'Art. 2° letra g, Ley 19.628'],
            ]}
          />
        </div>
      </div>

      {/* Principios vulnerados */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
          2. Principios de Tratamiento de Datos Vulnerados
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          La Ley 19.628 establece principios que regulan el tratamiento legítimo de datos personales. El ataque SUNBURST vulneró los siguientes:
        </p>
        <TablaSimple
          headers={['Principio', 'Descripción', 'Cómo fue vulnerado', 'Norma']}
          filas={[
            ['Finalidad', 'Los datos solo pueden usarse para el fin para el que fueron recopilados.', 'Los datos recopilados por Orion (monitoreo de red) fueron utilizados por los atacantes para fines de espionaje y exfiltración, sin consentimiento ni autorización legal.', 'Art. 9°, Ley 19.628'],
            ['Seguridad', 'El responsable debe adoptar medidas técnicas y organizativas para proteger los datos.', 'SolarWinds no implementó controles suficientes en su proceso de compilación; las organizaciones víctimas no detectaron el acceso ilegítimo durante 14 meses.', 'Art. 11, Ley 19.628'],
            ['Licitud', 'El tratamiento debe tener una base legal válida (consentimiento, ley, contrato).', 'La exfiltración de datos por APT29 carecía de toda base legal; fue un tratamiento ilícito en su totalidad.', 'Art. 4°, Ley 19.628'],
            ['Confidencialidad', 'Los datos deben mantenerse reservados y no cederse a terceros sin autorización.', 'Los datos fueron transferidos (exfiltrados) a servidores del atacante sin autorización alguna.', 'Art. 7°, Ley 19.628'],
          ]}
        />
      </div>

      {/* Derechos ARCO */}
      <div className="bg-white rounded-lg shadow p-6 space-y-5">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">
          3. Derechos ARCO y su Afectación en el Caso
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) son los derechos fundamentales que la Ley 19.628
          reconoce a los titulares de datos personales. El ataque SUNBURST afectó el ejercicio efectivo de estos derechos de la
          siguiente manera:
        </p>

        {[
          {
            letra: 'A',
            derecho: 'Derecho de Acceso',
            definicion: 'El titular tiene derecho a solicitar al responsable que le informe si posee datos suyos, de qué tipo, con qué finalidad y a quiénes los ha comunicado.',
            norma: 'Art. 12, Ley 19.628',
            afectacion: 'Las organizaciones afectadas no tenían conocimiento de que datos personales habían sido exfiltrados durante al menos 14 meses. Si un titular hubiera ejercido su derecho de acceso, la organización habría respondido de manera inexacta, omitiendo informar la brecha activa. Esto implica una vulneración indirecta: el responsable no podía proporcionar información fidedigna sobre el estado real de los datos.',
            color: 'bg-blue-600',
          },
          {
            letra: 'R',
            derecho: 'Derecho de Rectificación',
            definicion: 'El titular puede exigir que se corrijan datos erróneos, inexactos, equívocos o incompletos que le conciernan.',
            norma: 'Art. 12, Ley 19.628',
            afectacion: 'Durante la exfiltración, los atacantes pudieron haber modificado registros de auditoría, logs de acceso y configuraciones del sistema para ocultar su presencia (log tampering). Si datos personales fueron alterados, los titulares afectados no habrían podido ejercer su derecho de rectificación porque desconocían que sus datos habían sido comprometidos o modificados.',
            color: 'bg-green-600',
          },
          {
            letra: 'C',
            derecho: 'Derecho de Cancelación',
            definicion: 'El titular puede solicitar la eliminación de sus datos cuando su tratamiento no se ajusta a la ley (datos caducados, innecesarios o tratados ilícitamente).',
            norma: 'Art. 12, Ley 19.628',
            afectacion: 'Los datos exfiltrados quedaron en posesión de terceros (APT29 y potencialmente otros actores) completamente fuera del control del responsable y del titular. Una vez exfiltrados, es materialmente imposible ejercer el derecho de cancelación: el responsable puede eliminar sus propias copias, pero no puede recuperar ni destruir los datos en poder del atacante. Esto representa una vulneración irreversible.',
            color: 'bg-amber-600',
          },
          {
            letra: 'O',
            derecho: 'Derecho de Oposición',
            definicion: 'El titular puede oponerse al tratamiento de sus datos cuando existan motivos fundados y la ley no lo imponga expresamente.',
            norma: 'Art. 12, Ley 19.628',
            afectacion: 'El tratamiento ilícito de datos por parte de APT29 se realizó sin conocimiento de los titulares, por lo que jamás tuvieron la oportunidad de oponerse. Incluso si un titular hubiera ejercido oposición frente al responsable legítimo, este no habría podido hacer efectiva esa oposición respecto del tratamiento ilícito ya consumado por los atacantes.',
            color: 'bg-red-600',
          },
        ].map((item, i) => (
          <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
            <div className={`${item.color} text-white px-5 py-3 flex items-center gap-3`}>
              <span className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center font-bold text-lg">
                {item.letra}
              </span>
              <div>
                <p className="font-bold">{item.derecho}</p>
                <p className="text-xs opacity-80">{item.norma}</p>
              </div>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Definición legal</p>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{item.definicion}"</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Afectación en el caso</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.afectacion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
