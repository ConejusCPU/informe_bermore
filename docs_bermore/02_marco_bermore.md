# Marco Normativo Aplicable

## Normativa Internacional de Referencia

El caso SolarWinds involucra a víctimas y afectados en múltiples jurisdicciones. Aunque Chile no es parte del GDPR ni del CCPA, estas normativas son clave para comprender los estándares globales que influyen en la legislación comparada y en las expectativas de los tribunales.

## GDPR (Reglamento General de Protección de Datos de la UE)
El GDPR establece principios y obligaciones que cualquier organización que trate datos de ciudadanos europeos debe cumplir, sin importar su ubicación geográfica. Es el estándar de protección de datos más influyente del mundo.


### Artículo 32 (Seguridad del Tratamiento)	
Establece la obligación del responsable y el encargado del tratamiento de implementar medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo. Incluye medidas como la seudonimización y el cifrado de datos personales, la capacidad de garantizar la confidencialidad, integridad, disponibilidad y resiliencia permanentes de los sistemas y servicios de tratamiento, y un proceso de verificación, evaluación y valoración regulares de la eficacia de las medidas técnicas y organizativas.	SolarWinds, como proveedor de software, era responsable de la seguridad de los datos en su infraestructura. Las deficiencias en sus controles, como la débil protección de su red interna y la falta de segmentación, configurarían una infracción de este artículo.

### Artículo 33 (Notificación de Violación de Datos)	
Obliga al responsable del tratamiento a notificar a la autoridad de control competente la violación de la seguridad de los datos personales en un plazo máximo de 72 horas tras tener conocimiento de ella, a menos que sea improbable que dicha violación constituya un riesgo para los derechos y libertades de las personas físicas. La notificación debe incluir la naturaleza de la violación, las categorías y número aproximado de afectados, y las medidas adoptadas para remediarla.	Se cuestionó severamente la demora de SolarWinds en notificar la brecha, que fue descubierta por FireEye y no divulgada proactivamente, y la insuficiencia de la divulgación realizada. Este es uno de los puntos más críticos del análisis legal del caso.

### Artículo 82 (Derecho a Indemnización)	
Otorga a cualquier persona que haya sufrido daños materiales o inmateriales como consecuencia de una infracción del GDPR el derecho a recibir una indemnización del responsable o del encargado del tratamiento por los daños sufridos. El responsable que haya pagado una indemnización por los daños causados tendrá derecho a reclamar el reembolso de la parte pagada a otros responsables o encargados del tratamiento que hayan contribuido a causar el daño.	Los clientes de SolarWinds que perdieron datos o sufrieron perjuicios económicos podrían demandar a la empresa para obtener una indemnización por daños directos e indirectos. La demostración de la causalidad entre la violación y el daño es un elemento crucial y potencialmente complejo en estos casos.

## CCPA/CPRA (California Consumer Privacy Act / California Privacy Rights Act)
Esta ley, aplicable a empresas que hacen negocios en California y cumplen ciertos umbrales, otorga a los consumidores un mayor control sobre su información personal.

### Derecho de Acción Privada (Sec. 1798.150)	
Permite a los consumidores demandar a una empresa por violaciones de seguridad de datos no cifrados y reclamar indemnizaciones por daños monetarios, que van desde 100 a 750 dólares por incidente por consumidor, o daños reales, lo que sea mayor. También permite obtener medidas cautelares o declaratorias.	Dado que la información de miles de clientes fue exfiltrada sin cifrar, los consumidores californianos afectados podrían ejercer este derecho, lo que expone a SolarWinds a una responsabilidad financiera y reputacional considerable.

### Requisitos de Auditoría de Ciberseguridad (en vigor desde enero de 2026)	
Las empresas sujetas a la CCPA deben realizar auditorías de cibersguridad anuales y evaluaciones de riesgo de privacidad. Las regulaciones actualizadas exigen que estas auditorías y evaluaciones sean realizadas por un profesional calificado.	Si esta disposición hubiera estado vigente en el momento del ataque, SolarWinds habría tenido la obligación de demostrar proactivamente la eficacia de su postura de seguridad, lo que podría haber revelado las vulnerabilidades que los atacantes aprovecharon.

## SEC Cybersecurity Disclosure Rules (Adoptadas en 2023)
Estas reglas, adoptadas por la Comisión de Bolsa y Valores de Estados Unidos, exigen a las empresas públicas una mayor transparencia en materia de ciberseguridad. Fueron un elemento central del litigio contra SolarWinds y su entonces director de seguridad de la información, Timothy G. Brown.

### Divulgación de Incidentes Materiales (Item 1.05 del Formulario 8-K)	
Las empresas deben informar cualquier incidente de ciberseguridad que determine como "material" (es decir, significativo para los inversores) dentro de los cuatro días hábiles posteriores a dicha determinación.	La SEC acusó a SolarWinds y a Brown de engañar a los inversores al ocultar los riesgos y la gravedad del ataque Sunburst, además de no contar con los controles internos adecuados.

### Divulgación de Procesos de Gestión de Riesgos y Gobierno	
Exige a las empresas describir sus procesos para evaluar, identificar y gestionar los riesgos materiales de ciberseguridad, el papel de la junta directiva en la supervisión de estos riesgos y la experiencia de la gerencia en este ámbito.	La SEC alegó que las declaraciones públicas de SolarWinds sobre su seguridad eran engañosas y no coincidían con las evaluaciones internas, que revelaban deficiencias significativas.

---------------------------------------------------------------------------------------

## Marco Normativo Chileno en el Contexto del Ciberataque

### Ley N° 19.628 sobre Protección de la Vida Privada (LPD)
Esta ley regula el tratamiento de datos personales en registros o bancos de datos por organismos públicos o particulares. Un ciberataque como SUNBURST impacta directamente en sus disposiciones fundamentales.

#### Artículo 1°: 
El tratamiento de datos debe realizarse de manera concordante con la ley y para finalidades permitidas por el ordenamiento jurídico, respetando el pleno ejercicio de los derechos fundamentales. Vulneración: Los atacantes accedieron y trataron los datos con fines de espionaje, una finalidad completamente ajena a lo permitido.

---------------------------------------------------------------------------------------

#### Artículo 2°: Define conceptos clave:

##### Datos personales: 
Información concerniente a personas naturales, identificadas o identificables.

##### Datos sensibles (letra g): 
Aquellos referidos a características físicas o morales, o a hechos o circunstancias de su vida privada, como hábitos personales, origen racial, ideologías, opiniones políticas, creencias religiosas, estados de salud y vida sexual. Vulneración: Los sistemas comprometidos contenían datos sensibles, cuya exposición es una infracción grave.

---------------------------------------------------------------------------------------

#### Artículo 10: 
Prohíbe el tratamiento de datos sensibles salvo autorización legal, consentimiento del titular o necesidad para determinar u otorgar beneficios de salud. Vulneración: El acceso y exfiltración no cumplían ninguna de estas excepciones.

---------------------------------------------------------------------------------------

### Nueva Ley de Protección de Datos Personales N° 21.719 (vigencia diferida al 1 de diciembre de 2026)

Esta ley reemplazará a la N° 19.628, creando un nuevo estándar de protección en Chile.

Cambios clave (Artículo 1° reformado): La nueva ley tiene por objeto "regular la forma y condiciones en la cual se efectúa el tratamiento y protección de los datos personales de las personas naturales".

Novedades principales:

Creación de la Agencia de Protección de Datos Personales: Un ente autónomo con facultades fiscalizadoras y sancionatorias.

Nuevos derechos del titular: Se incorpora explícitamente el derecho a la portabilidad de los datos.

Obligación de notificación de brechas: Se establece un plazo máximo para informar a la Agencia sobre incidentes de seguridad.

Mayores sanciones: Se introducen multas más elevadas para las infracciones.

### Legislación sobre Delitos Informáticos (Ley 21.459)
Esta ley derogó la antigua Ley 19.223, modernizando y ampliando el catálogo de conductas punibles en el ciberespacio. Define siete delitos informáticos específicos que son directamente aplicables al análisis de un ataque como SUNBURST:


Acceso ilícito	Art. 2°: Entrar sin autorización o superando barreras técnicas.	Los atacantes accedieron a la red de SolarWinds en septiembre de 2019.	Presidio menor en su grado mínimo o multa. Se agrava si se busca apoderarse de la información.

Interceptación ilícita	Art. 3°: Capturar, grabar o reproducir comunicaciones electrónicas o transmisiones de datos sin autorización.
Exfiltración de datos sensibles de clientes (FireEye, gobierno de EE.UU., empresas).	Presidio menor en sus grados mínimo a medio.
Ataque a la integridad de sistemas	Art. 4°: Introducir, transmitir o activar programas maliciosos que dañen o alteren sistemas.	Inyección del código malicioso "Sunburst" en las actualizaciones del software Orion.	Presidio menor en sus grados mínimo a medio.
Ataque a la integridad de datos	Art. 4° (párrafo 2): Destruir, dañar, modificar, suprimir o hacer inaccesibles datos informáticos sin autorización.	La manipulación del código y la potencial alteración o eliminación de datos durante la intrusión.	Presidio menor en sus grados mínimo a medio.

Fraude informático	Art. 6°: Manipular datos o sistemas para obtener un beneficio económico indebido, causando perjuicio.	El engaño a los clientes al hacerles instalar una actualización maliciosa que parecía legítima.	Presidio menor en sus grados medio a máximo.
Falsificación informática	Art. 7°: Introducir, alterar, borrar o suprimir datos para generar un documento inauténtico con relevancia jurídica.	La manipulación de logs de acceso, sellos de tiempo y registros de auditoría del software Orion.	Presidio menor en sus grados medio a máximo.

Abuso de dispositivos	Art. 8°: Producir, adquirir, importar, vender o comercializar herramientas diseñadas para cometer delitos informáticos.	La utilización de herramientas de código malicioso y de exfiltración diseñadas para evadir la detección.	Presidio menor en su grado mínimo o multa.

Responsabilidad de las Empresas: La Ley 21.459 establece la responsabilidad penal de las personas jurídicas en esta materia, en concordancia con la Ley N° 20.393. Las empresas pueden ser sancionadas si sus empleados o representantes cometen estos delitos para su beneficio. Las sanciones pueden incluir multas, disolución de la empresa, suspensión de actividades o inhabilitación para contratar con el Estado.

### Legislación Complementaria
Código Penal: Sus disposiciones sobre hurto, estafa, violación de secreto y robo de documentos privados son aplicables para aquellos aspectos no cubiertos específicamente por la ley de delitos informáticos.
