import prisma from "../config/dbInit";
import { UserSchema } from "../generated/schemas"; 
import { Request, Response } from "express";
import { email, ZodError } from "zod";

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Validate body against Zod schema
    const data = UserSchema.pick({ email: true, password: true }).parse(req.body);

    // Create user in DB
    const user = await prisma.user.create({ data });

    return res.status(201).json({message: `✅ User created: ${user}`});
  } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ errors: err.issues });
      }

    console.error("Unexpected error:", err);
    return res.status(500).json({ message: "❌ Something went wrong" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const data = UserSchema.pick({email: true, password: true}).parse(req.body)

    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (!user) {
      return res.status(404).json({message: `❌ Something went wrong. User: ${data.email} does not exists`})
    }

    if (user.password !== data.password) {
      return res.status(401).json({message: `❌ Something went wrong. Password is incorrect.`})
    }
    return res.status(201).json({message: `✅ User logged in: ${user}`})
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({errors: err.issues})
    }
    console.error("Unexpected error:", err);
    return res.status(500).json({ message: "❌ Something went wrong" });
  }
}