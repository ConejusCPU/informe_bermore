import { Terminal, Cpu, FileCode, HelpCircle, AlertTriangle } from 'lucide-react';

function Prompts() {
  return (
    <div className="space-y-8">
      {/* Encabezado Principal */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <Terminal className="text-emerald-400" size={28} />
          <h2 className="text-2xl font-bold">08. Bitácora de Uso de IA</h2>
        </div>
        <p className="text-slate-300">
          Prompt base utilizado como contexto e instrucciones para el desarrollo del análisis legal.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
          <Cpu size={16} />
          Modelo Utilizado: DeepSeek-V3
        </div>
      </div>

      {/* Sección: Contexto para la IA */}
      <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Contexto para la IA
        </h3>
        <p className="text-slate-600 bg-slate-50 p-4 rounded-lg leading-relaxed text-sm italic">
          "Eres un asistente especializado en derecho informático y ciberseguridad, con dominio de la legislación chilena (Ley 21.459 sobre delitos informáticos, Ley 19.628 de protección de datos, Código Civil, etc.) y estándares internacionales (GDPR, CCPA, directrices de la SEC, HIPAA, etc.). Ayudarás a un estudiante universitario a desarrollar un análisis legal de un caso real de ciberseguridad, siguiendo las instrucciones de su evaluación académica..."
        </p>
      </div>

      {/* Sección: Instrucciones Específicas por Archivo */}
      <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          Instrucciones Específicas del Prompt
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">01_resumen.md</span>
            <p className="text-xs text-slate-600 mt-2">Redactar un resumen ejecutivo del caso: qué pasó, cuándo, quiénes participaron e impactos generales.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">02_marco.md</span>
            <p className="text-xs text-slate-600 mt-2">Citar al menos 4 normas nacionales chilenas e internacionales justificando su relevancia en el caso.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">03_delitos.md</span>
            <p className="text-xs text-slate-600 mt-2">Tipificar conductas del atacante según la Ley 21.459 de Chile mediante un mapeo de acción → artículo → pena.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">04_comparacion.md</span>
            <p className="text-xs text-slate-600 mt-2">Comparar marcos regulatorios por industria (mínimo 3 industrias y 3 ejes) en formato de listado jerárquico.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">05_responsabilidades.md</span>
            <p className="text-xs text-slate-600 mt-2">Detallar responsabilidades penales, civiles y administrativas de los actores basándose en leyes chilenas.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">06_datos.md</span>
            <p className="text-xs text-slate-600 mt-2">Analizar el tratamiento de datos según la Ley 19.628, distinguiendo datos sensibles y evaluando derechos ARCO.</p>
          </div>

          <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 md:col-span-2">
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">07_conclusiones.md</span>
            <p className="text-xs text-slate-600 mt-2">Recomendaciones técnicas/legales y reflexión sobre la armonización normativa internacional.</p>
          </div>

        </div>
      </div>

      {/* Sección: Formato de Salida y Criterios */}
      <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='12 2 2 7 12 12 22 7 12 2'></polygon><polyline points='2 17 12 22 22 17'></polyline><polyline points='2 12 12 17 22 12'></polyline></svg>" alt="Icon" className="inline" />
          Formato de Salida Exigido a la IA
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>Cada archivo estructurado obligatoriamente con títulos de nivel 1 (<code className="bg-slate-100 px-1 rounded"># Título</code>) y subtítulos organizados.</li>
        </ul>
      </div>

      {/* Nota del Autor / Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
        <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-sm font-bold text-amber-900">Control de Calidad y Curación Manual</h4>
          <p className="text-xs text-amber-700 mt-1 leading-relaxed">
            Los contenidos desarrollados por la IA fueron revisados, curados y modificados por el autor (yo jeje), por lo que pueden existir ciertas discrepancias con lo establecido en éste apartado y lo presente en el trabajo final.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prompts;
