const getStudent = "SELECT *  FROM eleve";
const getStudentById = "SELECT *  FROM eleve WHERE id = $1";
const checkEmailExists = "SELECT e FROM eleve e WHERE e.email = $1";
const addStudent = "INSERT INTO eleve(id, name, firstname, phone, email, birthday) VALUES($1, $2, $3, $4, $5, $6)";
const removeStudents = "DELETE FROM eleve WHERE id = $1";
const updateStudent = "UPDATE eleve SET name = $1 WHERE id = $2"


module.exports = {
    getStudent,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudents,
    updateStudent
};