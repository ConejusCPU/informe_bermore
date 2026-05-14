## Tipificación de Delitos en el Caso SUNBURST según Ley N° 21.459

### Artículo 1: Ataque a la Integridad de un Sistema Informático (Obstrucción o Sabotaje Informático)

#### Descripción legal: 
El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, transmisión, daño, alteración o supresión de datos informáticos, será castigado.

#### Conducta en SUNBURST:
Aunque el malware Sunburst fue diseñado para elusión y espionaje (sistemas siguieron operando normalmente), ciertas variantes derivadas instalaron puertas traseras y cargas útiles adicionales que, en algunos casos, afectaron el funcionamiento normal de los equipos infectados. La introducción y transmisión del código malicioso y su propagación a través de las actualizaciones troyanizadas constituyen una transgresión a la integridad de los sistemas informáticos de las víctimas.

#### Encaje penal: 
La obstaculización del sistema no requiere que este deje de funcionar por completo; basta con que se vea impedido de operar de la manera esperada, aplicándose la pena de presidio menor en sus grados medio a máximo (541 días a 5 años).

------------------------------------------------------------------------------------------------

### Artículo 2: Acceso Ilícito (Intrusión Informática y Espionaje)

#### Descripción legal:
Acceder sin autorización o excediendo la autorización poseída, superando barreras técnicas o medidas tecnológicas de seguridad. Se distingue entre:

#### Tipo básico:
Pena de presidio menor en su grado mínimo o multa de 11 a 20 UTM.

#### Tipo agravado (espionaje informático): 
Cuando el acceso se realiza con el ánimo de apoderarse o usar la información contenida en el sistema, aplicándose presidio menor en sus grados mínimo a medio.

#### Divulgación agravada:
Si la misma persona que accede ilegítimamente también divulga la información, se aplica presidio menor en sus grados medio a máximo.

Conducta en SUNBURST:

Acceso ilegítimo inicial (septiembre 2019): Los atacantes ingresaron a la red de SolarWinds sin autorización.

Excedimiento de autorización: Al insertar código malicioso en la plataforma Orion, los atacantes excedieron groseramente cualquier autorización que hubieren podido tener.

Exfiltración de datos: Durante aproximadamente 9 meses, exfiltraron datos de clientes de alto valor (agencias gubernamentales estadounidenses, empresas Fortune 500) con ánimo de apoderarse de esa información.

Encaje penal: Corresponde aplicar el tipo agravado (espionaje informático) del artículo 2, inciso segundo, porque el acceso se realizó con el ánimo de apoderarse y usar la información contenida en el sistema informático (pena de presidio menor en sus grados mínimo a medio). Si además se acredita que los mismos atacantes divulgaron la información, procedería la sanción más alta de presidio menor en sus grados medio a máximo.

------------------------------------------------------------------------------------------------

### Artículo 3: Interceptación Ilícita
#### Descripción legal: 
Captar, grabar, reproducir o divulgar comunicaciones electrónicas o transmisiones de datos sin autorización, ya sea desde dentro o fuera del sistema. Sanciona tanto la conducta del que intercepta directamente como la de quien facilita los medios para ello, estableciendo penas de presidio menor en sus grados mínimo a medio.

#### Conducta en SUNBURST:
Una vez que los equipos de las víctimas fueron comprometidos, los atacantes instalaron herramientas de comando y control (C2) que les permitían capturar y reproducir en tiempo real las comunicaciones y transmisiones internas de datos de agencias como el Tesoro de EE.UU. y otras entidades, sin autorización de los titulares de esos sistemas.

#### Encaje penal:
Esta conducta encaja perfectamente en el artículo 3, tipo básico, penado con presidio menor en sus grados mínimo a medio. La pena se aplica sin perjuicio de las otras figuras penales concurrentes.

------------------------------------------------------------------------------------------------

### Artículo 4: Ataque a la Integridad de los Datos Informáticos
#### Descripción legal: 
Alterar, dañar, suprimir o hacer inaccesibles datos informáticos sin autorización, penado con presidio menor en sus grados mínimo a medio. Este tipo penal protege el bien jurídico de la integridad de los datos, entendida como su exactitud y fiabilidad.

#### Conducta en SUNBURST: 
La inyección del código malicioso Sunburst en las actualizaciones legítimas de Orion constituyó una alteración y modificación de los datos originales del software. En algunos casos, los atacantes instalaron malware adicional (como Teardrop y Raindrop) para eliminar o modificar archivos de registro (logs) y otros datos que podían alertar sobre su presencia.

#### Encaje penal:
La alteración de los datos del software Orion y la supresión de registros de auditoría encajan en el artículo 4. La pena es de presidio menor en sus grados mínimo a medio (541 días a 3 años).

------------------------------------------------------------------------------------------------

### Artículo 5: Falsificación Informática
#### Descripción legal: 
Introducir, alterar o suprimir datos informáticos que tengan relevancia jurídica, de modo que se generen documentos inauténticos con apariencia de veracidad.

#### Conducta en SUNBURST: 
La manipulación del código fuente de Orion para convertirlo en un archivo ejecutable infectado pero con apariencia de actualización legítima constituye una falsificación informática. Asimismo, cuando los atacantes modificaron los sellos de tiempo y los registros de actividad para eludir la detección, alteraron datos con relevancia probatoria y de auditoría, creando la apariencia de que no había ocurrido ninguna intrusión.

#### Encaje penal:
Se configura la falsificación informática del artículo 5, penada con presidio menor en sus grados medio a máximo (541 días a 5 años).

------------------------------------------------------------------------------------------------

### Artículo 6: Receptación de Datos Informáticos
#### Descripción legal:
Almacenar, transportar, adquirir o comercializar datos informáticos a sabiendas de su origen ilícito.

#### Conducta en SUNBURST:
Los atacantes extrajeron datos de clientes de alto valor (estrategias de seguridad nacional de EE.UU., información comercial confidencial, datos personales de funcionarios, etc.). Cualquier persona o entidad que, fuera del grupo atacante original, hubiera almacenado, adquirido o comercializado posteriormente con esos datos (por ejemplo, a través de mercados clandestinos en la dark web) sería responsable por este delito.

#### Encaje penal: 
El artículo 6 remite a la pena del delito base (artículo 2), rebajada en un grado.

------------------------------------------------------------------------------------------------

### Artículo 7: Fraude Informático
#### Descripción legal:
Manipular un sistema informático o sus datos para obtener un beneficio económico indebido para sí o para otro, causando perjuicio a un tercero. Este delito se conecta con el artículo 468 del Código Penal.

#### Conducta en SUNBURST:
El engaño a los clientes de SolarWinds (aproximadamente 18.000) haciéndoles instalar una actualización maliciosa que aparentaba ser legítima constituye un fraude informático. Los atacantes se beneficiaron económicamente (indirectamente) al obtener información que luego podría ser utilizada para extorsión o venta en mercados ilegales.

#### Encaje penal:
Se configura el artículo 7, cuya pena remite al artículo 468 del Código Penal, estableciendo presidio menor en sus grados medio a máximo (541 días a 5 años).

------------------------------------------------------------------------------------------------

### Artículo 8: Abuso de Dispositivos
#### Descripción legal: 
Producir, vender, importar, distribuir o adquirir dispositivos, herramientas o programas informáticos diseñados específicamente para cometer delitos informáticos.

#### Conducta en SUNBURST:
Los atacantes utilizaron código malicioso altamente sofisticado para infiltrarse, permanecer ocultos y exfiltrar datos. La producción y utilización de ese código configura el artículo 8.

#### Encaje penal:
Sancionado con presidio menor en su grado mínimo o multa de 11 a 20 UTM
------------------------------------------------------------------------------------------------