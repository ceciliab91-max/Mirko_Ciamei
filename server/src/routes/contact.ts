import { Router, Request, Response } from "express";
import { contactSchema } from "../types/contact.js";
import { validateRequest } from "../middleware/validate.js";
import { sendContactEmail } from "../services/mailer.js";

const router = Router();

router.post("/", validateRequest(contactSchema), async (req: Request, res: Response): Promise<void> => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({
      status: "success",
      message: "Richiesta inviata con successo. Verrai contattato a breve!",
    });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    res.status(500).json({
      status: "error",
      message: "Impossibile inviare la richiesta in questo momento. Riprova o chiama direttamente.",
    });
  }
});

export default router;
