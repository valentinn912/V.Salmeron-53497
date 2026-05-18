# Analizador Sintáctico - Proyecto "Tareas" 

Alumno:Valentin Salmeron    Legajo:53497
 
Este proyecto consiste en un analizador léxico, sintáctico y un intérprete funcional desarrollado para la asignatura de Autómatas y Lenguajes Formales. El sistema procesa un lenguaje propio definido mediante una gramática EBNF, permitiendo la asignación de variables, el uso de condicionales y la impresión de resultados.



## Requisitos previos

Para ejecutar esta aplicación, debe tener instalado:
* [Node.js](https://nodejs.org/) (versión 16 o superior recomendada).
* El gestor de paquetes `npm` (incluido con Node.js).

## Instrucciones de Ejecución

Siga estos pasos para poner en marcha el analizador:

1. **Instalar dependencias:**
   Abra una terminal en la carpeta raíz del proyecto y ejecute: "npm install"

   
2. **Preparar el código de entrada:**
El programa lee el código fuente desde el archivo input.txt. Puede copiar el contenido de cualquiera de los archivos de la carpeta /ejemplos y pegarlo dentro de input.txt.


3. **Ejecutar el analizador:**
En la terminal, ejecute el comando: npm start


## ¿Qué hace el analizador? (Funcionalidad)
Al ejecutar el comando npm start, el programa realiza las siguientes acciones de forma secuencial:
Análisis Léxico y Sintáctico: Verifica que el código en input.txt no tenga errores de escritura o de estructura. Si el código es correcto, muestra un mensaje de éxito ✅.

Generación del Árbol Sintáctico: Muestra en la terminal la estructura jerárquica (Parse Tree) que ANTLR4 generó para representar tu código.

Traducción a JavaScript: El componente Translator convierte el código fuente de "Tareas" a código JavaScript estándar.

Ejecución (Interpreter): El componente Visitor ejecuta la lógica del programa en tiempo real, procesando las variables y evaluando las condiciones.

Reporte de Memoria: Al finalizar, el sistema imprime el estado final de las variables (memoria) para verificar los valores calculados.

