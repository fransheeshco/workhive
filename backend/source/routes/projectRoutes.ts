import { Request, Response, Router } from 'express'

const router: Router = Router()

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ Project retrieved!"}
    )
})

router.post("/create", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ Project created!"}
    )
})

router.patch("/update/:id", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ Project updated!"}
    )
})

router.delete("/delete/:id", (req: Request, res: Response) => {
    res.status(200).json({message: "✅ Project deleted!"}
    )
})

export default router