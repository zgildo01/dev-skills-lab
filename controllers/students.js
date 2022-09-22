import { Student } from "../models/student.js";

function index(req, res) {
  Student.find({})
  .then(students => {
    res.render('students/index', {
      students: students,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/');
  })
}

function newStudent(req, res) {
  res.render('students/new')
}

function create(req, res) {
  Student.create(req.body)
  .then(student => {
    console.log(student)
    res.redirect('/students')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Student.findById(req.params.id)
  .then(student => {
    res.render('students/show', {
      student: student
    })
  })
}

export {
  index,
  newStudent as new,
  create,
  show,
}