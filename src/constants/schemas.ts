import z from "zod";

export const registerFormSchema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .refine(
        (password) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password),
        "Password must contain at least one symbol.",
      ),
    /* TODO: Add support for email validation (server-side)
      .refine(async (e) => {
          // Where checkIfEmailIsValid makes a request to the backend to see if the email is valid.
          return await checkIfEmailIsValid(e);
          }, "This email is not in our database.") */
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match.",
        path: ["confirmPassword"],
      });
    }
  });

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
