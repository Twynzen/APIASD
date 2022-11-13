El proyecto maneja una estructura SRP, estaría compuesto por:

1. ## Index pincipal
* Controla el número de puerto.
* Importa el index del router que permite manejar rutas.

2. ## Estructura de SRP

### mutantService 
* Controla las posibilidades entre filtrar, crear, actualizar o borrar. 

### mutantRouter
* Controla las rutas y endpoints de cada tipo de petición http para los mutantes.

