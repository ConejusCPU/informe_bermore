import { ShieldAlert } from 'lucide-react'

const delitos = [
  {
    articulo: 'Artículo 1',
    titulo: 'Ataque a la Integridad de un Sistema Informático',
    descripcionLegal:
      'El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, transmisión, daño, alteración o supresión de datos informáticos, será castigado.',
    conducta:
      'Aunque el malware Sunburst fue diseñado para elusión y espionaje, ciertas variantes derivadas instalaron puertas traseras y cargas útiles adicionales que afectaron el funcionamiento normal de los equipos infectados. La introducción y transmisión del código malicioso a través de las actualizaciones troyanizadas constituyen una transgresión a la integridad de los sistemas de las víctimas.',
    encaje:
      'La obstaculización no requiere que el sistema deje de funcionar por completo; basta que se vea impedido de operar de la manera esperada.',
    pena: 'Presidio menor en sus grados medio a máximo (541 días a 5 años)',
    color: 'border-red-400',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
  {
    articulo: 'Artículo 2',
    titulo: 'Acceso Ilícito — Intrusión Informática y Espionaje',
    descripcionLegal:
      'Acceder sin autorización o excediendo la autorización poseída, superando barreras técnicas o medidas tecnológicas de seguridad. Se distingue tipo básico, tipo agravado (espionaje) y divulgación agravada.',
    conducta:
      'Los atacantes ingresaron a la red de SolarWinds sin autorización en septiembre de 2019. Al insertar código malicioso en la plataforma Orion excedieron cualquier autorización posible. Durante aproximadamente 9 meses exfiltraron datos de agencias gubernamentales y empresas Fortune 500 con ánimo de apoderarse de esa información.',
    encaje:
      'Corresponde el tipo agravado (espionaje informático) por acceso con ánimo de apoderarse y usar la información. Si se acredita divulgación por los mismos atacantes, procede la sanción más alta.',
    pena: 'Presidio menor en sus grados mínimo a medio (tipo agravado) / medio a máximo (con divulgación)',
    color: 'border-orange-400',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    articulo: 'Artículo 3',
    titulo: 'Interceptación Ilícita',
    descripcionLegal:
      'Captar, grabar, reproducir o divulgar comunicaciones electrónicas o transmisiones de datos sin autorización, ya sea desde dentro o fuera del sistema. Sanciona tanto al interceptor como a quien facilita los medios.',
    conducta:
      'Una vez comprometidos los equipos, los atacantes instalaron herramientas de comando y control (C2) que les permitían capturar y reproducir en tiempo real las comunicaciones internas de agencias como el Departamento del Tesoro de EE.UU. y otras entidades, sin autorización de los titulares.',
    encaje:
      'Esta conducta encaja en el artículo 3, tipo básico. La pena se aplica sin perjuicio de las otras figuras penales concurrentes.',
    pena: 'Presidio menor en sus grados mínimo a medio',
    color: 'border-yellow-400',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
  },
  {
    articulo: 'Artículo 4',
    titulo: 'Ataque a la Integridad de los Datos Informáticos',
    descripcionLegal:
      'Alterar, dañar, suprimir o hacer inaccesibles datos informáticos sin autorización. Protege la integridad de los datos, entendida como su exactitud y fiabilidad.',
    conducta:
      'La inyección del código malicioso Sunburst en las actualizaciones legítimas de Orion constituyó una alteración de los datos originales del software. Los atacantes también instalaron malware adicional (Teardrop y Raindrop) para eliminar o modificar archivos de registro (logs) y otros datos que podían alertar sobre su presencia.',
    encaje:
      'La alteración de los datos del software Orion y la supresión de registros de auditoría encajan directamente en este artículo.',
    pena: 'Presidio menor en sus grados mínimo a medio (541 días a 3 años)',
    color: 'border-green-400',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  {
    articulo: 'Artículo 5',
    titulo: 'Falsificación Informática',
    descripcionLegal:
      'Introducir, alterar o suprimir datos informáticos que tengan relevancia jurídica, de modo que se generen documentos inauténticos con apariencia de veracidad.',
    conducta:
      'La manipulación del código fuente de Orion para convertirlo en un ejecutable infectado con apariencia de actualización legítima constituye falsificación informática. Asimismo, la modificación de sellos de tiempo y registros de actividad para eludir la detección alteró datos con relevancia probatoria, creando la apariencia de que no había ocurrido ninguna intrusión.',
    encaje:
      'Se configura la falsificación informática por la generación de documentos inauténticos (actualizaciones falsificadas) con apariencia de veracidad.',
    pena: 'Presidio menor en sus grados medio a máximo (541 días a 5 años)',
    color: 'border-blue-400',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    articulo: 'Artículo 6',
    titulo: 'Receptación de Datos Informáticos',
    descripcionLegal:
      'Almacenar, transportar, adquirir o comercializar datos informáticos a sabiendas de su origen ilícito.',
    conducta:
      'Los atacantes extrajeron datos de alto valor estratégico (estrategias de seguridad nacional, información comercial confidencial, datos de funcionarios). Cualquier persona o entidad que hubiera almacenado, adquirido o comercializado posteriormente esos datos sería responsable bajo este artículo.',
    encaje:
      'El artículo 6 remite a la pena del delito base (artículo 2), rebajada en un grado.',
    pena: 'Pena del delito base rebajada en un grado',
    color: 'border-purple-400',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
  },
  {
    articulo: 'Artículo 7',
    titulo: 'Fraude Informático',
    descripcionLegal:
      'Manipular un sistema informático o sus datos para obtener un beneficio económico indebido para sí o para otro, causando perjuicio a un tercero. Se conecta con el artículo 468 del Código Penal.',
    conducta:
      'El engaño a aproximadamente 18.000 clientes de SolarWinds haciéndoles instalar una actualización maliciosa que aparentaba ser legítima constituye fraude informático. Los atacantes se beneficiaron al obtener información susceptible de ser usada para extorsión o venta en mercados ilegales.',
    encaje:
      'Se configura el artículo 7 por la manipulación del sistema para obtener beneficio causando perjuicio a clientes.',
    pena: 'Presidio menor en sus grados medio a máximo (541 días a 5 años) — remite al Art. 468 CP',
    color: 'border-pink-400',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
  },
  {
    articulo: 'Artículo 8',
    titulo: 'Abuso de Dispositivos',
    descripcionLegal:
      'Producir, vender, importar, distribuir o adquirir dispositivos, herramientas o programas informáticos diseñados específicamente para cometer delitos informáticos.',
    conducta:
      'Los atacantes utilizaron código malicioso altamente sofisticado para infiltrarse, permanecer ocultos y exfiltrar datos. La producción y utilización de ese código configura este artículo.',
    encaje:
      'La producción y uso de herramientas diseñadas específicamente para cometer delitos informáticos encaja directamente.',
    pena: 'Presidio menor en su grado mínimo o multa de 11 a 20 UTM',
    color: 'border-slate-400',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
  },
]

export default function Delitos() {
  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">
            Tipificación de Delitos — Caso SUNBURST
          </h2>
        </div>
        <p className="text-slate-500 text-sm">
          Análisis de los delitos aplicables según la Ley N° 21.459 sobre Delitos Informáticos (Chile)
        </p>
      </div>

      {/* Tarjetas de delitos */}
      {delitos.map((d, i) => (
        <div key={i} className={`bg-white rounded-lg shadow border-l-4 ${d.color} p-6 space-y-4`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded ${d.bgColor} ${d.textColor}`}>
                {d.articulo}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2">{d.titulo}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-slate-600 mb-1">Descripción legal</p>
              <p className="text-slate-600 leading-relaxed">{d.descripcionLegal}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600 mb-1">Conducta en SUNBURST</p>
              <p className="text-slate-600 leading-relaxed">{d.conducta}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600 mb-1">Encaje penal</p>
              <p className="text-slate-600 leading-relaxed mb-3">{d.encaje}</p>
              <div className={`rounded p-2 ${d.bgColor}`}>
                <p className={`text-xs font-semibold ${d.textColor}`}>Pena aplicable</p>
                <p className={`text-xs ${d.textColor}`}>{d.pena}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
