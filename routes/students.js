import { Router } from 'express'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()

/* GET students listing. */
router.get('/', studentsCtrl.index);
router.get('/new', studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create)

export {
  router
}
