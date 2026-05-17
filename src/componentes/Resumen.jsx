import { FileText } from 'lucide-react'

export default function Resumen() {
  return (
    <section className="bg-white rounded-lg shadow p-8 space-y-6">

      {/* Título principal */}
      <div className="flex items-center gap-3">
        <FileText className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Resumen del Caso Real: El Ciberataque a SolarWinds
        </h2>
      </div>

      {/* Introducción */}
      <p className="text-slate-600 leading-relaxed">
        En 2019, actores de amenaza vinculados al Estado ruso (APT29 / Cozy Bear) comprometieron 
        el proceso de compilación de software de SolarWinds e inyectaron un backdoor (SUNBURST) 
        en las actualizaciones de la plataforma Orion. Entre marzo y junio de 2020, aproximadamente 
        18.000 organizaciones descargaron la actualización maliciosa, incluyendo agencias del gobierno 
        de EE.UU. (Departamento del Tesoro, CISA, DoD) y empresas privadas de sectores críticos como 
        energía, salud y tecnología. El ataque permaneció activo sin detección durante aproximadamente 
        14 meses.
      </p>

      {/* Cronología de los hechos */}
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Cronología de los hechos</h3>
        <div className="space-y-3">

          <div className="border-l-4 border-red-400 pl-4">
            <p className="font-semibold text-slate-700">Septiembre de 2019</p>
            <p className="text-slate-600">
              Piratas informáticos, posteriormente identificados como parte del Servicio de 
              Inteligencia Exterior ruso, accedieron a la red de SolarWinds.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4">
            <p className="font-semibold text-slate-700">Febrero de 2020</p>
            <p className="text-slate-600">
              Los atacantes inyectaron código malicioso oculto (troyano) en el software de 
              actualización de la plataforma Orion de SolarWinds.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4">
            <p className="font-semibold text-slate-700">Marzo de 2020</p>
            <p className="text-slate-600">
              SolarWinds distribuyó sin saberlo actualizaciones comprometidas a aproximadamente 
              18.000 clientes.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4">
            <p className="font-semibold text-slate-700">Diciembre de 2020</p>
            <p className="text-slate-600">
              La empresa de ciberseguridad FireEye detectó la intrusión, desencadenando una 
              respuesta coordinada del gobierno federal.
            </p>
          </div>

        </div>
      </div>

      {/* Impacto del Ataque */}
      <div className="bg-slate-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Impacto del Ataque</h3>
        <p className="text-slate-600 leading-relaxed">
          El ataque permitió a los perpetradores acceder remotamente a sistemas informáticos 
          de clientes de alto valor estratégico, incluyendo agencias federales estadounidenses 
          (Tesoro, Seguridad Nacional, Comercio, Estado) y empresas Fortune 500, con fines 
          primarios de espionaje.
        </p>
      </div>

    </section>
  )
}