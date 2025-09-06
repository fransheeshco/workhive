import { Request, Response, Router } from 'express'

import { registerUser, loginUser } from '../controller/userController'

const router: Router = Router()

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/logout", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ User logged out!"})
})

router.delete("/delete/:id", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ User deleted!"})
})

router.patch("/update/:id", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ User updated!"})
})

export default router