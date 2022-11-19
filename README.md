El proyecto maneja una estructura SRP, estaría compuesto por:

1. ## Index pincipal
* Controla el número de puerto.
* Importa el index del router que permite manejar rutas.

2. ## Estructura de SRP

### mutantService 
* Controla las posibilidades entre filtrar, crear, actualizar o borrar. 

### mutantRouter
* Controla las rutas y endpoints de cada tipo de petición http para los mutantes.


Estos tienen principalmente 3 endpoints
1. Traer todos los mutantes
> Trae todos los mutantes de la base de datos 
2. Buscar 1 mutante
> Filtra un mutante por medio del id que se pasa en el endpoint, funciona para actualizar los datos con patch
3. Crear nuevo mutante que se añade al API

# Pendientes
* En cuanto la conexión con la base de datos funciona bien para extraer todos los mutantes de la base de datos, pero hace falta generar las consultas SQL necesarias para actualizar y crear nuevos mutantes.
Por el momento solo funciona para data quemada.



