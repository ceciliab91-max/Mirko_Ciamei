import { z } from "zod";
export const contactSchema = z.object({
    name: z.string().min(1, "Il nome è obbligatorio").max(100),
    phone: z
        .string()
        .min(7, "Il numero di telefono è troppo corto")
        .max(20, "Il numero di telefono è troppo lungo")
        .regex(/^[\+]?[0-9\s\-]{7,15}$/, "Formato numero di telefono non valido"),
    service: z.string().min(1, "Seleziona un servizio"),
    message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri").max(2000),
});
