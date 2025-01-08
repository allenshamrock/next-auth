import { z } from "zod";
export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be atleast two characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(2, { message: "Name must be atleast two characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  password: z
    .string()
    .min(5, { message: "Password must have atleast 5 characters" })
    .max(15, { message: "Password cannot exceed 15 characters long" }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
