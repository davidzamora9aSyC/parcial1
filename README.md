Parcial 1 WEB David Zamora 202113407


Pasos para ejecutar este proyecto:

instalar node
react
npm install react-scripts
tener react bootstrap instalado
react intl
font awesome



Para comprobar la funcionalidad del  idioma, cambiando el idioma principal en las configuraciones de chrome y recargando la paina hace que
se velva a mostrar pero en el idioma configurado

Proceso de desarrollo del parcial 

Durante el parcial senti que me quede demasiado corto de tiempo. Durante el desarrollo del parcial tuve algunos problemas qeu resolvi con los monitores.
Inicialmente para la disposicion de las cosas dentro del perfil escogi una plantilla que usaba MDB pero luego la cambie.
La informacion que se muestra que no esta fija, viene de un json que subi a github. Esa informacion del json se carga con un 
useEffect apenas se carga la pagina, se pone en un estado y luego dentro del retorno de la funcion de Profile.js (el html) accedo a esa informacion como data.atributo que vaya acceder.

Debo decir qu ese me dificulto al inicio poner el boton en la imagen para poder navegar al formulario, sin embargo al final quedo configurado.

Para el formulario utilicé uno que ya habiamos desarrollado en un tutorial, y como no me dio el tiempo, quedaron varias funciones y variables definidas con js sin borrar pertenecientes al otro compoente.
Es por eso que tenia el titulo de ejemplo de formulario y tenia un boton arriba para volver, sin embargo al final quedo organizado. 

Al cargar la pagina de modificar perfil, se utiliza un useEffect para cargar la informacion del json que esta en github, definir si los campos se van a mostrar para poder cambiarlos o como texto fijo.
Defini una funcion que se llama renderField que se encarga de mostrar los campos. Esa funicon verifica si el estado de editar esta en un estado u otro. Ese estado se define al inicio en el useEffect.
Dependiendo del estado, se meustran los campos como input o como <p>


En cuanto al detalle de la imagen, al inicio cuando se le daba click a una imagen se mostraba un texto arriba que decia que ahi iba la imagen. Eso lo hice poniendo un boton en cada imagen y
cambiando un estado que al ponerse en true se muestra esa parte del html.
Para el modal se usa Modal de react y se muestra la imagen.

En cuanto a la internacionalizacion, cree unos json que contienen los mensajes que se van a mostrar en la pagina. 
Mis json son en ingles y en espaniol. En index se detecta el lenguaje del navegador y dependiendo de eso se muestran los mensajes del idioma correspondiente.
Eso se hace con IntlProvider de react intl. EL locale y los mensajes se pasan como props desde el index hacia lo que esta wrappeado dentro de IntlProvider.
Bootstrap se utilizo en el proyecto apra definir cosas graficas como el margen o el padding.

Debo decir que los nombres de los componentes me quedaron un poco mal asignados respecto a las rutas. Inicialmente se muestra el perfil, que la ruta es "/" pero que el archivo de js se llama Profile.js
Luego cuando se presiona en la imagen lo dirije a ModificarPerfil, que en la ruta se llama "/perfil". Las rutas se definieron en App.js usando Router Browser.
