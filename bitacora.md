Bitácora Técnica – Simulador de Batalla Pokémon



Línea de tiempo

\- Día 1 → Diseño conceptual e identificación de clases

\- Día 2 → Implementación de clases base Element y Pokemon

\- Día 3 → Implementación de herencia Agua/Fuego/Planta

\- Día 4 → Construcción de ataques derivados

\- Día 5 → Implementación de lógica de combate en Batalla

\- Día 6 → Pruebas de ejecución y corrección de errores

\- Día 7 → Documentación y diagramas UML



Decisiones de diseño

\- Implementar tipos de ataque como clases para permitir polimorfismo

\- Mantener el daño elemental en la clase `Element`

\- Composición → un Pokémon contiene ataques

\- Separar responsabilidades (Single Responsibility Principle), es decir cada clase debe encargarse de una sola cosa



Problemas encontrados

\- Error de sintaxis `{` `}`

\- Falta de instalación de Node.js

\- "node no se reconoce como comando"

\- Nombre de archivo `estudiantes.json.txt` — extensión errónea

\- HP negativo no controlado inicialmente



Soluciones aplicadas

\- Revisión manual del código

\- Corrección de verifyElement

\- Ajuste de condiciones en atacarHastaDerrotar

\- Modificación de condiciones de victoria



Pruebas realizadas

\- Simulación completa del combate

\- Verificación de ventaja elemental

\- Verificación de desventaja elemental

\- Validación de estructuras de clases



Resultado

El simulador funciona correctamente mostrando:

\- ataques por turno

\- variación del HP

\- efecto elemental

\- sobrevivientes

\- equipo ganador



Conclusiones técnicas

Este sistema demuestra la correcta aplicación de Programación Orientada a Objetos, especialmente en herencia y polimorfismo. La estructura del código permite ampliar el sistema con nuevos tipos, ataques o reglas sin modificar lo ya existente.



