import { Request, Response, Router } from 'express'

const router: Router = Router()

router.post("/register", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ User registered!"})
})

router.post("/login", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ User login!"})
})

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