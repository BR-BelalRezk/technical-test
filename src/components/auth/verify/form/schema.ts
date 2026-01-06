import { Control } from "react-hook-form";
import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
});

export type VerifyFormData = z.infer<typeof verifySchema>;
export type verifyControl = Control<VerifyFormData>;
