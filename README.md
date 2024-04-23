
<h1>Sistema de Base de Datos de Estudiantes</h1>

<p>Este proyecto utiliza PostgreSQL y Node.js para interactuar con una base de datos que almacena información sobre estudiantes. Proporciona funciones para consultar, insertar, actualizar y eliminar registros de estudiantes en la base de datos.</p>

<h2>Configuración</h2>

<p>El archivo <code>bdConfig.js</code> contiene la configuración de la conexión a la base de datos PostgreSQL. Asegúrate de configurar correctamente las variables de entorno para la conexión.</p>

<h2>Consultas</h2>

<p>El archivo <code>consultas.js</code> contiene funciones para realizar consultas a la base de datos. Aquí se definen las siguientes funciones:</p>

<ul>
  <li><strong>consultarArray:</strong> Consulta todos los estudiantes y los muestra como un arreglo.</li>
  <li><strong>consultaRut:</strong> Consulta un estudiante por su rut.</li>
  <li><strong>insertarEstudiante:</strong> Inserta un nuevo estudiante en la base de datos.</li>
  <li><strong>eliminarEstudiante:</strong> Elimina un estudiante de la base de datos.</li>
  <li><strong>editarEstudiante:</strong> Actualiza el nivel de un estudiante en la base de datos.</li>
</ul>

<h2>Uso</h2>

<p>Para utilizar las funciones definidas en <code>consultas.js</code>, simplemente importa las funciones necesarias y llámalas con los argumentos adecuados. Por ejemplo:</p>

<pre><code>// Importar las funciones necesarias
const {
    consultarArray,
    consultaRut,
    insertarEstudiante,
    eliminarEstudiante,
    editarEstudiante,
} = require("./consultas");

// Llamar a la función para ejecutar la consulta
consultarArray();
insertarEstudiante("Alonso Gallegos", "95467432-1", "Bateria", 5);
consultaRut("12345678-9");
eliminarEstudiante(13);
editarEstudiante(3,6);
</code></pre>

<p>Asegúrate de comentar las funciones que no quieras ejecutar.</p>
