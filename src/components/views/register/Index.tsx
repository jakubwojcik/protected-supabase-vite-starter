import { Button } from "@/components/ui-library/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui-library/form.tsx";
import { Input } from "@/components/ui-library/input.tsx";
import { registerFormSchema } from "@/constants/schemas.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";
import { Tooltip } from "@/components/shared/Tooltip.tsx";

export const Index = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormSchema),
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // TODO: Implement registration logic
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your e-mail"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormControl>
                <Input
                  placeholder="Confirm your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Sign up
        </Button>
        <Tooltip
          className="w-full"
          content="This feature is not available yet."
        >
          <Button
            className="w-full"
            disabled={true}
            type="button"
            variant="outline"
          >
            Skip creating account
          </Button>
        </Tooltip>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?
          <Button onClick={() => navigate({ to: "/login" })} variant="link">
            Log in
          </Button>
        </p>
      </form>
    </Form>
  );
};
