const pool = require("./bdConfig");

//Ver a todos los estudiantes como un arreglo.
const consultarArray = async () => {
    //conexion a la base de datos
    const estudiante = await pool.connect();
    try {
        const SQLQuery = {
            rowMode: "array",
            text: "SELECT * FROM estudiantes",
        };
        const res = await pool.query(SQLQuery);
        console.log("Todos los registros: ", res.rows);
    } catch (error) {
        console.error("Error al consultar por todos los registros: ", error)
    } finally {
        // Liberamos la conexión
        estudiante.release();
    }
}

// Función para insertar un usuario
const insertarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const text = "INSERT INTO estudiantes(nombre, rut, curso, nivel)  VALUES ($1, $2, $3, $4)";
        const values = [nombre, rut, curso, nivel];
        const res = await pool.query(text, values);
        console.log(`Registro de ${nombre} se agrego correctamente `, res.rows);
    } catch (error) {
        console.error(`Error al agregrar registro`,error)
    }
};

// Funcion para consultar estudiante por rut 
const consultaRut = async (rut) => {
    try {
        const text = "SELECT * FROM estudiantes WHERE rut = $1"
        const values = [rut];
        const res = await pool.query(text, values);
        console.log(`El estudiante registrado con el rut ${rut} es:`, res.rows[0]);
    } catch (error) {
        console.error(`Error al consultar el registro por Rut`, error);
    }
};

// Función para eliminar un usuario
const eliminarEstudiante = async (id) => {
    try {
        const text = "DELETE FROM estudiantes WHERE id = $1";
        const values = [id];
        const res = await pool.query(text, values);
        console.log(`Estudiante con ID: ${id} se elimino correctamente `,res.rows);
    } catch (error) {
        console.error(`Error al eliminar usuario`,error)
    }
};

// Función para actualizar un usuario
const editarEstudiante = async (id, nivel) => {
    try {
        const text = "UPDATE estudiantes SET nivel = $2 WHERE id = $1";
        const values = [id, nivel];
        const res = await pool.query(text, values);
        console.log(`Estudiante con el ID: ${id} se actualizo su nivel a: ${nivel}`,res.rows);
    } catch (error) {
        console.error(`Error al modificar registro`, error)
    }
};

module.exports = { consultarArray, consultaRut, insertarEstudiante, eliminarEstudiante, editarEstudiante };
