import { Router } from 'express'
import { empControllerCreate, empControllerDelete, empControllerList, empControllerUpdate } from '../controller/empController.js'



const appRouter = Router()
appRouter.get('/', empControllerList)
appRouter.post('/', empControllerCreate)
appRouter.patch('/:id', empControllerUpdate)
appRouter.delete('/:id', empControllerDelete)

export default appRouter