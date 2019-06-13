const express = require('express');
const router = express.Router();
const db = require('../../config/database')
const Student = require('../models/student')


router.get('/', (req, res, next) => {
    Student.findAll()
        .then(student => {
            console.log(student)
            res.status(200).json({ student })
        })
        .catch(err => console.log("error", err))
})


router.post('/addStudent', (req, res, next) => {
    // const data = {
    //     firstName: 'Martha',
    //     lastName: 'Smith'
    // }
    // let { firstName, lastName } = data
    firstName = req.body.firstName;
    lastName = req.body.lastName

    Student.create({
        firstName,
        lastName
    })
        .then(student => {
            res.status(200).json(student)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ message: 'Error at addStudent route' })
        })



})

router.get('/:id', (req, res, next) => {

    res.status(200).json({ firstName: 'abimael', lastName: 'espinal' })


})


router.post('/student', (req, res, next) => {

    res.status(200).json({ message: 'Added student successfully', student: req.body })


})

router.delete('/:studentId', (req, res, next) => {
    const studentID = req.params.studentId
    Student.destroy({
        where: {
            id: studentID
        }
    }).then(studentID => res.status(200).json(studentID))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})

router.patch('/editStudent', (req, res, next) => {

    const newStudent = req.body
    const studentID = newStudent.id
    const firstname = newStudent.firstName
    const lastname = newStudent.lastName
    // console.log("BACKENNNNNNNNND", newStudent)
    Student.update(
        {
            firstName: firstname,
            lastName: lastname
        },

        { where: { id: studentID } }
    ).then((student) => res.status(200).json(student))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})


module.exports = router