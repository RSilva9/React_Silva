# *Funkify - Tienda Online*
E-Commerce ficticio que ofrece figuras coleccionables llamadas "Funko POPS".
Este proyecto fue realizado con fines de aprendizaje durante el curso de ReactJS de Coderhousem dictado por Santiago Salkin.

**Realizado con ReactJS**

### En el directorio del proyecto, se puede utilizar lo siguiente:

`npm start`
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios.
También puedes ver cualquier error de lint en la consola.

`npm test`
Lanza el corredor de pruebas en el modo interactivo de watch.
Consulta la sección sobre cómo ejecutar pruebas para obtener más información.

`npm run build`
Construye la aplicación para producción en la carpeta de compilación.
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen hash.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre despliegue para obtener más información.

`npm run eject`
Nota: esta es una operación de un solo sentido. ¡Una vez que te hayas expulsado, no puedes volver atrás!

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes expulsarte en cualquier momento. Este comando eliminará la única dependencia de compilación de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas un control total sobre ellos. Todos los comandos excepto eject seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

No tienes que usar eject nunca. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debes sentirte obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para hacerlo.

## Updates:

**08/02/23**
  - Proyecto inicializado (create-react-app)

**17/02/23** PRIMERA PREENTREGA
  - Elementos CartWidget, Navbar e ItemListContainer creados.

**02/03/23**
  - Prototipo de carousel de imágenes.
  
**04/03/23**
  - Cambios generales a los colores.
  - Carousel actualizado.
  - Franja con imagen agregada.
  
**05/03/23** SEGUNDA PREENTREGA
  - ItemListContainer actualizado (ahora contiene todos los productos).
  - ItemDetailContainer agregado.
  - Carousel terminado.
  
**23/03/23**
  - Implementación de cartContext para manejo de productos en la aplicación.
  - itemCount agregado a ItemDetailContainer para insertar productos en carrito.
  - Barra de navegación de categorías para filtrar productos del catálogo.
  
**24/03/23**
  - Carrito funcional terminado
  - cartRender implementado con la funcion de mostrar los productos agregados.
  - Cambios a css.
  
**26/03/23** ENTREGA FINAL
  - Json de productos eliminado.
  - Firebase implementado al proyecto.
    + Productos cargados a Firestore.
    + Funciones que permiten la lectura de múltiples datos, datos en específico según id y creación y carga de órdenes de compra.
  - Form agregado en cartRender con la función de recopilar datos del comprador.
