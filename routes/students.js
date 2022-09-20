import { Router } from 'express'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()

/* GET students listing. */
router.get('/', studentsCtrl.index);

export {
  router
}
