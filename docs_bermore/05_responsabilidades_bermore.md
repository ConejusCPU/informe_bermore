# Responsabilidades legales pertinentes al caso

## Actor 1 — Atacantes (APT29 / Cozy Bear)

Grupo de amenaza persistente avanzada atribuido al Servicio de Inteligencia Exterior de Rusia (SVR). Ejecutaron el compromiso de la cadena de suministro, el despliegue del backdoor SUNBURST y la exfiltración de datos de las organizaciones afectadas.

### Responsabilidad penal

| Acción realizada | Delito tipificado | Norma citada |
|---|---|---|
| Compromiso del sistema de compilación de SolarWinds mediante inyección de código malicioso | Acceso indebido a sistema informático | Ley 21.459, Art. 2 |
| Inyección del backdoor SUNBURST en el software Orion y firma digital de las actualizaciones maliciosas | Interceptación de datos informáticos e introducción de código malicioso | Ley 21.459, Art. 2 y Art. 4 |
| Exfiltración de correos electrónicos, documentos internos y credenciales de las organizaciones víctimas | Interceptación y apoderamiento de datos informáticos | Ley 21.459, Art. 4 |
| Despliegue de herramientas post-explotación (TEARDROP, Cobalt Strike) en redes comprometidas | Daño informático / sabotaje informático | Ley 21.459, Art. 3 |
| Uso de infraestructura de comando y control (C2) dentro de territorio de las víctimas para evadir detección | Acceso indebido agravado por uso de dispositivos de terceros | Ley 21.459, Art. 2 inc. 2° |

**Pena aplicable bajo legislación chilena (hipotética bajo Ley 21.459):** Presidio menor en su grado medio a máximo
(541 días a 5 años), con posibilidad de agravantes por afectación de infraestructura crítica
y actuación organizada (Art. 2 y Art. 10, Ley 21.459). La atribución a un Estado extranjero
introduce complejidades de jurisdicción y derecho internacional público.

### Responsabilidad civil

En el escenario hipotético, el Estado de Chile podría ejercer acción de responsabilidad extracontractual por daño a infraestructura pública (Art. 2314 y siguientes del Código Civil) si actores identificados tuvieran patrimonio dentro de la jurisdicción.

### Responsabilidad administrativa

No aplica directamente al actor atacante. Las consecuencias administrativas recaen sobre las organizaciones víctimas que no implementaron medidas preventivas adecuadas.

---

## Actor 2 — SolarWinds Corporation (proveedor del software comprometido)

**Descripción:** Empresa de software estadounidense proveedora de la plataforma de monitoreo de redes Orion. El proceso de compilación y distribución de actualizaciones fue comprometido sin que la empresa lo detectara durante aproximadamente 14 meses.

### Responsabilidad penal

SolarWinds no tiene responsabilidad penal directa en la ejecución del ataque. Sin embargo, en el escenario hipotético chileno, podría configurarse responsabilidad penal de personas jurídicas si se acredita que la empresa omitió dolosamente implementar controles de seguridad
exigidos, conforme a la **Ley 20.393** (responsabilidad penal de personas jurídicas en Chile), aplicable cuando existe negligencia grave en la prevención de delitos que la benefician o se cometen en su nombre.

### Responsabilidad civil

| Fundamento | Norma citada |
|---|---|
| Responsabilidad extracontractual por haber distribuido software con código malicioso a sus clientes, causando daño patrimonial y moral | Art. 2314 y Art. 2329, Código Civil de Chile |
| Incumplimiento de obligación contractual de entregar software íntegro y libre de vulnerabilidades conocidas (contratos de licencia y mantención con clientes) | Art. 1556 y Art. 1558, Código Civil de Chile |
| Falta de implementación de medidas de seguridad adecuadas en el proceso de build/compilación, constituyendo negligencia grave | Art. 44, Código Civil de Chile (culpa grave) |
| En el escenario real (EE.UU.): SolarWinds enfrentó demanda de la SEC (2023) por no revelar adecuadamente los riesgos de ciberseguridad a inversionistas | Securities Exchange Act of 1934, Sección 10(b); Regla SEC 10b-5 |

**Nota:** En diciembre de 2022, la SEC formuló cargos contra SolarWinds y su CISO Timothy
Brown por fraude y controles internos deficientes en relación con el incidente SUNBURST

### Responsabilidad administrativa

| Infracción | Norma citada |
|---|---|
| Incumplimiento de deber de seguridad en el tratamiento de datos de sus clientes (datos de configuración de red, credenciales, información operacional) | Art. 11 y Art. 23, Ley 19.628 (Chile) |
| Falta de notificación oportuna a clientes afectados una vez conocida la brecha | Art. 11, Ley 19.628 (Chile); Art. 33, GDPR (aplicable a clientes en la UE) |
| Incumplimiento de estándares de seguridad en cadena de suministro de software exigidos por contratos con el gobierno federal de EE.UU. | NIST SP 800-161r1; FAR (Federal Acquisition Regulation) Subpart 39.2 |

---

## Actor 3 — Organizaciones víctimas del sector público

**Descripción:** Agencias gubernamentales que instalaron la actualización maliciosa de Orion, incluyendo (en el caso real) el Departamento del Tesoro, CISA, el Departamento de Estado y el Pentágono de EE.UU. En el escenario hipotético chileno, equivaldrían a organismos
del Estado como el Ministerio de Hacienda, el Ministerio del Interior o la Agencia Nacional de Inteligencia (ANI).

### Responsabilidad penal

Los organismos públicos no tienen responsabilidad penal en calidad de víctimas del ataque. Sin embargo, los funcionarios responsables de la seguridad informática institucional podrían enfrentar responsabilidad penal individual si se acredita omisión dolosa en el ejercicio de
sus funciones (prevaricación administrativa, Art. 223 y siguientes del Código Penal de Chile).

### Responsabilidad civil

| Fundamento | Norma citada |
|---|---|
| Responsabilidad del Estado por falta de servicio: no implementar medidas de seguridad adecuadas para proteger datos de ciudadanos bajo su custodia | Art. 42, Ley 18.575 (Ley Orgánica Constitucional de Bases de la Administración del Estado) |
| Daño causado a ciudadanos cuyos datos personales fueron comprometidos como consecuencia de la brecha | Art. 2314, Código Civil de Chile; Art. 23, Ley 19.628 |

### Responsabilidad administrativa

| Infracción | Norma citada |
|---|---|
| Incumplimiento de los estándares mínimos de ciberseguridad para organismos del Estado, incluyendo gestión de riesgos en proveedores de software crítico | Decreto Supremo N° 83/2004 MINSEGPRES (estándares de seguridad de la información en organismos públicos); Instrucción General N°20 del CSIRT de Gobierno (2023) |
| Falta de implementación de un plan de respuesta ante incidentes de seguridad cibernética | Ley 21.459, Art. 10 (agravantes por afectación de servicios esenciales); Instrucción CSIRT Gobierno |
| No reportar oportunamente el incidente al CSIRT de Gobierno ni a la autoridad competente | Ley 21.663 — Ley Marco de Ciberseguridad (Chile, 2024), Art. 9: obligación de reportar incidentes de ciberseguridad de significancia |

---

## Actor 4 — Organizaciones víctimas del sector privado

**Descripción:** Empresas privadas de los sectores tecnología, energía, salud y consultoría que instalaron la actualización maliciosa. En el caso real: Microsoft, Intel, Cisco, FireEye y múltiples empresas del Fortune 500. En el escenario hipotético chileno: empresas de
telecomunicaciones, utilities eléctricas y entidades financieras que utilizaran Orion.

### Responsabilidad penal

Al igual que los organismos públicos, las empresas privadas son víctimas del ataque y no tienen responsabilidad penal por la intrusión. No obstante, sus ejecutivos y responsables de seguridad (CISO, CTO) podrían ser investigados penalmente si se acredita que:

- Conocían vulnerabilidades críticas y no adoptaron medidas, configurando omisión dolosa.
- Ocultaron la brecha a sus clientes o a la autoridad regulatoria de forma deliberada
  (posible delito de encubrimiento o falsedad, Arts. 193 y 197 del Código Penal de Chile).

### Responsabilidad civil

| Fundamento | Norma citada |
|---|---|
| Responsabilidad frente a clientes finales cuyos datos fueron comprometidos por no implementar controles de seguridad adecuados | Art. 2314 y Art. 2329, Código Civil de Chile |
| Incumplimiento contractual frente a clientes que confiaron datos en virtud de un contrato de prestación de servicios | Art. 1546 y Art. 1556, Código Civil de Chile |
| Responsabilidad ante consumidores finales por daño derivado de servicios deficientes en materia de seguridad | Art. 3° letra e) y Art. 23, Ley 19.496 (Ley de Protección al Consumidor, Chile) |

### Responsabilidad administrativa

| Infracción | Sector / Norma citada |
|---|---|
| Incumplimiento del deber de adoptar medidas de seguridad técnicas y organizativas para proteger datos personales de clientes | Art. 11, Ley 19.628 (Chile); Art. 32, GDPR |
| Falta de notificación de la brecha a la autoridad competente y a los titulares afectados | Art. 23, Ley 19.628 (Chile); Art. 33–34, GDPR |
| En sector energía: incumplimiento de estándares de seguridad para infraestructura crítica (hipotético Chile) | Ley 21.663 — Ley Marco de Ciberseguridad, Arts. 4° y 9°; NERC CIP-013 (referencia internacional) |
| En sector financiero: incumplimiento de la normativa de ciberseguridad de la CMF | Norma de Carácter General N°454 de la CMF (2021) — Gestión de riesgos de ciberseguridad en entidades financieras |

---

## Actor 5 — FireEye (empresa descubridora de la brecha)

**Descripción:** Empresa de ciberseguridad estadounidense que detectó el ataque en diciembre de 2020 al investigar el robo de sus propias herramientas de red team. Su divulgación responsable permitió la respuesta coordinada global.

### Responsabilidad penal

Ninguna. FireEye actuó como víctima del ataque (sus herramientas fueron robadas) y como descubridor que realizó divulgación responsable coordinada con CISA, NSA y el FBI.

### Responsabilidad civil

Ninguna en relación con el caso SUNBURST. FireEye no distribuyó el software comprometido ni tenía obligación contractual de detectar amenazas en sistemas de terceros.

### Responsabilidad administrativa

Ninguna. Su actuación fue ejemplar en términos de divulgación coordinada y transparencia con las autoridades. Su conducta es referencia de buenas prácticas en respuesta a incidentes (aligned con NIST CSF función *Respond*, RS.CO-5: coordinación con partes externas).
