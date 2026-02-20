import { z } from "zod";

export const loginSchema = z.object({
  user: z.string().min(1, "Insira um usuário válido"),
  password: z
    .string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial"),
});

export type loginFormData = z.infer<typeof loginSchema>;
