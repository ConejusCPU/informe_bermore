# Tratamiento de Datos Personales

## 1. Tipos de datos comprometidos en el ataque

### 1.1 Datos personales

Conforme al **Art. 2° letra f de la Ley 19.628**, se entiende por dato de carácter personal toda información sobre una persona natural identificada o identificable.

Los siguientes datos personales fueron comprometidos o expuestos durante el ataque SUNBURST:

| Categoría | Descripción en el contexto del caso | Norma de referencia |
|---|---|---|
| Datos de identificación | Nombres de usuario, identificadores de cuentas de dominio (Active Directory), correos electrónicos corporativos de funcionarios y empleados | Art. 2° letra f, Ley 19.628 |
| Datos de comunicaciones | Contenido de correos electrónicos internos de organismos gubernamentales exfiltrados mediante acceso a Microsoft 365 / Exchange Online | Art. 2° letra f, Ley 19.628; Art. 19 N°5, Constitución Política de Chile (inviolabilidad de las comunicaciones) |
| Datos de autenticación | Credenciales (tokens SAML, contraseñas hasheadas, certificados digitales) utilizadas para escalar privilegios y moverse lateralmente | Art. 2° letra f, Ley 19.628 |
| Datos laborales | Información sobre roles, cargos, estructura organizacional de las entidades afectadas | Art. 2° letra f), Ley 19.628 |
| Datos de configuración de red | Topología de redes internas, direcciones IP, activos críticos monitoreados por Orion | Art. 2° letra f), Ley 19.628 (datos de personas jurídicas con personas naturales vinculadas) |

### 1.2 Datos sensibles

Conforme al **Art. 2° letra g de la Ley 19.628**, son datos sensibles aquellos que se refieren a características físicas o morales de las personas, a hechos o circunstancias de su vida privada o intimidad, tales como los hábitos personales, el origen racial, las ideologías y opiniones políticas, las creencias o convicciones religiosas, los estados de salud físicos o psíquicos y la vida sexual.

En el caso SUNBURST, los siguientes datos sensibles estuvieron potencialmente expuestos:

| Categoría sensible | Descripción en el contexto del caso | Norma de referencia |
|---|---|---|
| Información de inteligencia y seguridad nacional | Datos de operaciones clasificadas del Departamento de Seguridad Nacional (DHS/CISA), el Pentágono y agencias de inteligencia de EE.UU. En el hipotético chileno: información de la ANI o del Estado Mayor Conjunto | Art. 2° letra g, Ley 19.628; Ley 19.974 (Sistema de Inteligencia del Estado, Chile) |
| Datos de salud | Información de salud protegida (PHI) de pacientes en hospitales y aseguradoras que utilizaban Orion; en Chile, equivalente a datos clínicos de pacientes en sistemas de salud afectados | Art. 2° letra g, Ley 19.628 (estado de salud como dato sensible); Ley 20.584 (derechos de pacientes, Chile) |
| Opiniones e ideología política | Correos electrónicos de funcionarios de gobierno con contenido político o estratégico exfiltrados durante la intrusión | Art. 2° letra g, Ley 19.628 |

---

## 2. Principios de tratamiento de datos vulnerados

La Ley 19.628 establece principios que regulan el tratamiento legítimo de datos personales.

El ataque SUNBURST vulneró los siguientes:

| Principio | Descripción | Cómo fue vulnerado en SUNBURST | Norma citada |
|---|---|---|---|
| **Finalidad** | Los datos solo pueden usarse para el fin para el que fueron recopilados | Los datos recopilados por Orion (monitoreo de red) fueron utilizados por los atacantes para fines de espionaje y exfiltración, sin consentimiento ni autorización legal | Art. 9°, Ley 19.628 |
| **Seguridad** | El responsable debe adoptar medidas técnicas y organizativas para proteger los datos | SolarWinds no implementó controles suficientes en su proceso de compilación; las organizaciones víctimas no detectaron el acceso ilegítimo durante 14 meses | Art. 11, Ley 19.628 |
| **Licitud** | El tratamiento debe tener una base legal válida (consentimiento, ley, contrato) | La exfiltración de datos por APT29 carecía de toda base legal; fue un tratamiento ilícito en su totalidad | Art. 4°, Ley 19.628 |
| **Confidencialidad** | Los datos deben mantenerse reservados y no cederse a terceros sin autorización | Los datos fueron transferidos (exfiltrados) a servidores de comando y control del atacante sin autorización alguna | Art. 7°, Ley 19.628 |

---

## 3. Derechos ARCO y su afectación en el caso

Los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) son los derechos
fundamentales que la Ley 19.628 reconoce a los titulares de datos personales respecto
de quienes los tratan. El ataque SUNBURST afectó el ejercicio efectivo de estos derechos
de la siguiente manera:

### 3.1 Derecho de Acceso

> **Definición:** El titular tiene derecho a solicitar al responsable del tratamiento que le
> informe si posee datos suyos, de qué tipo, con qué finalidad y a quiénes los ha comunicado.  
> **Norma:** Art. 12, Ley 19.628.

**Afectación en el caso:**  
Las organizaciones afectadas por SUNBURST no tenían conocimiento de que datos personales
de sus funcionarios y clientes habían sido exfiltrados durante al menos 14 meses. Durante
ese período, si un titular hubiera ejercido su derecho de acceso, la organización habría
respondido de manera inexacta, omitiendo informar la brecha activa. Esto implica una
vulneración indirecta del derecho de acceso: el responsable no estaba en condiciones de
proporcionar información fidedigna sobre el estado real de los datos.

### 3.2 Derecho de Rectificación

> **Definición:** El titular puede exigir que se corrijan datos erróneos, inexactos,
> equívocos o incompletos que le conciernan.  
> **Norma:** Art. 12, Ley 19.628.

**Afectación en el caso:**  
Durante la exfiltración, los atacantes pudieron haber modificado registros de auditoría,
logs de acceso y configuraciones del sistema para ocultar su presencia (técnica conocida
como *log tampering*). Si datos personales fueron alterados en este proceso, los titulares
afectados no habrían podido ejercer su derecho de rectificación porque desconocían que
sus datos habían sido comprometidos o modificados.

### 3.3 Derecho de Cancelación

> **Definición:** El titular puede solicitar la eliminación de sus datos cuando su tratamiento
> no se ajusta a la ley (datos caducados, innecesarios o tratados ilícitamente).  
> **Norma:** Art. 12, Ley 19.628.

**Afectación en el caso:**  
Los datos exfiltrados por APT29 quedaron en posesión de terceros (el actor atacante y
potencialmente otros) completamente fuera del control del responsable del tratamiento y
del titular. Una vez exfiltrados, es materialmente imposible ejercer el derecho de
cancelación: el responsable original puede eliminar sus propias copias, pero no puede
recuperar ni destruir los datos que ya obran en poder del atacante. Esto representa una
vulneración irreversible del derecho de cancelación.

### 3.4 Derecho de Oposición

> **Definición:** El titular puede oponerse al tratamiento de sus datos cuando existan
> motivos fundados y la ley no lo imponga expresamente.  
> **Norma:** Art. 12, Ley 19.628.

**Afectación en el caso:**  
El tratamiento ilícito de datos por parte de APT29 se realizó sin conocimiento de los
titulares, por lo que estos jamás tuvieron la oportunidad de oponerse. Adicionalmente,
incluso si un titular hubiera ejercido oposición frente al responsable legítimo (la
organización víctima), este no habría podido hacer efectiva esa oposición respecto del
tratamiento ilícito ya consumado por los atacantes.

---

## Nota metodológica

El análisis se construye sobre el **escenario hipotético chileno** conforme a las
instrucciones de la evaluación: el tratamiento de datos se evalúa con la **Ley 19.628**
y los derechos ARCO, aun cuando el caso real se rigió por la normativa estadounidense
y, parcialmente, por el GDPR para organizaciones con presencia en la Unión Europea.
La comparación con el GDPR se incluye a modo referencial para enriquecer el análisis
del criterio 2.1.3.

**Normas chilenas citadas:**
- Ley 19.628 — Protección de la Vida Privada (1999), Arts. 2°, 4°, 7°, 9°, 10, 11, 12 y 23
- Ley 21.663 — Ley Marco de Ciberseguridad (2024), Art. 9°
- Ley 20.584 — Derechos y deberes de los pacientes (2012)
- Ley 19.974 — Sistema de Inteligencia del Estado (2004)
- Art. 19 N°5, Constitución Política de la República de Chile
- Proyecto de Ley que modifica la Ley 19.628 (Boletín N°11.144-07)

**Norma internacional de referencia:**
- Reglamento (UE) 2016/679 — GDPR, Arts. 4°, 9°, 32, 33, 34, 77 y 83
