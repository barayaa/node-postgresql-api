const pool = require('../../db')
const queries = require ('./queries')


const getStudents = (req, res) => {
    pool.query(queries.getStudent, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id], (err, results)=>{
        if(err) throw err;
        res.status(200).json(results.rows)
    })
}

const addStudent = (req, res)=>{
    const {id , name , firstname, phone, email, birthday} = req.body;
    pool.query(queries.checkEmailExists, [email], (error , results) => {
        if(results.rows.length){
            res.send('Email already exist');
        }

        pool.query(queries.addStudent, [id , name , firstname, phone, email, birthday], (err, results)=>{
            if(error) throw error;
            res.status(201).send("Student Created Successfuly!");
            console.log("Student created");
        })
    })
}


const removeStudents = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send ("Student doesn exist in the database");
        }

    pool.query(queries.removeStudents, [id], (err, results)=>{
        if(err) throw err;
        res.status(200).send("Student removed successfuly");
    })
 })

};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
 
    pool.query(queries.getStudentById, [id], (err, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student doesn't exist in database")
        }

        pool.query(queries.updateStudent, [name, id], (error, results)=>{
            if(error)throw error; 
            res.status(200).send("Student update successfuly");
        })
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudents,
    updateStudent
}