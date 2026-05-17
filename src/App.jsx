import { useState } from 'react'
import { Shield } from 'lucide-react'
import Resumen from './componentes/Resumen'
import Marco from './componentes/Marco'
import Delitos from './componentes/Delitos'
import Comparacion from './componentes/Comparacion'
import Responsabilidades from './componentes/Responsabilidades'
import Datos from './componentes/Datos'
import Prompts from './componentes/Prompts'
import Conclusiones from './componentes/Conclusiones'

const secciones = [
  { id: 'resumen',           label: 'Resumen',           componente: <Resumen /> },
  { id: 'marco',             label: 'Marco Normativo',   componente: <Marco /> },
  { id: 'delitos',           label: 'Delitos',           componente: <Delitos /> },
  { id: 'comparacion',       label: 'Comparación',       componente: <Comparacion /> },
  { id: 'responsabilidades', label: 'Responsabilidades', componente: <Responsabilidades /> },
  { id: 'datos',             label: 'Datos Personales',  componente: <Datos /> },
  { id: 'conclusiones',      label: 'Conclusiones',      componente: <Conclusiones /> },
  { id: 'prompts',           label: 'Bitácora Prompt',       componente: <Prompts /> },
]

export default function App() {
  const [activa, setActiva] = useState('resumen')
  const seccionActual = secciones.find(s => s.id === activa)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-6 shadow">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Shield size={36} className="text-red-400" />
          <div>
            <h1 className="text-2xl font-bold">Evaluación N°2 /// Unidad N°2</h1>
            <p className="text-slate-300 text-sm mt-1">
              TI3034 /// Fundamentos de Seguridad de la Información /// Caso SolarWinds SUNBURST
            </p>
          </div>
        </div>
      </header>

      {/* Navegación */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 flex gap-1 overflow-x-auto py-2">
          {secciones.map(s => (
            <button
              key={s.id}
              onClick={() => setActiva(s.id)}
              className={`px-3 py-2 rounded text-sm font-medium whitespace-nowrap transition-colors
                ${activa === s.id
                  ? 'bg-red-500 text-white'
                  : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenido */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        {seccionActual?.componente}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-500 text-sm py-4 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-1">
          <span>Estudiante: Jesús Bernal Moreira ///</span>
          <span> Docente: Rubén Schnettler L. /// INACAP Valparaíso /// Otoño 2026 </span>
        </div>
      </footer>

    </div>
  )
}
