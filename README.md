Simulador de Batalla Pokémon - Proyecto de Programación Orientada a Objetos



Este proyecto implementa un simulador de combate Pokémon mediante Programación Orientada a Objetos. El sistema modela Pokémon con puntos de vida, ataques y tipos elementales, ejecutando una batalla por turnos entre dos equipos.



Ejecutar el programa:



1\. Abrir terminal en la carpeta del proyecto

2\. Ejecutar:

node pokemon.js





Arquitectura basada en POO



\- Clase `Pokemon` → representa a cada Pokémon

\- Clase `Element` → clase padre abstracta para calcular daño elemental

\- Clases `Agua`, `Fuego`, `Planta` → heredan de `Element`

\- Ataques → clases como `Lanzallamas`, `Cascada`, etc., que heredan del tipo elemental

\- Clase `Batalla` → controla el combate entre dos equipos de Pokémon





Equipo de desarrollo:

\- Julian Alexis Sánchez Sánchez



Conceptos aplicados:

✔ Herencia  

✔ Polimorfismo  

✔ Composición  

✔ Encapsulamiento  

✔ Objetos  

✔ Métodos  



Mejoras previstas:

\- Interfaz visual

\- Selección manual de ataques

\- Más elementos (eléctrico, roca, hielo)

\- Estados alterados (parálisis, quemadura)



Créditos

Este proyecto se basó en el tutorial de YouTube:

“Simulador de lucha Pokémon (JavaScript / Object-Oriented)”  

Video original por "Hack Foundry", publicado en YouTube.  

URL: https://www.youtube.com/watch?v=dYuacYTH1EM\&t=457s



Se modificó y adaptó el código para cumplir con los requisitos de la práctica (estructura de equipos, turnos, documentación, UML, mejoras, etc.).  

El uso es para fines académicos y no comerciales.





