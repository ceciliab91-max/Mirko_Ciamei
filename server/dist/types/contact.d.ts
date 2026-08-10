import { z } from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    phone: string;
    service: string;
    message: string;
}, {
    name: string;
    phone: string;
    service: string;
    message: string;
}>;
export type ContactFormData = z.infer<typeof contactSchema>;
