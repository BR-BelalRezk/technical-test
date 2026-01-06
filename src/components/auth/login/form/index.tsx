"use client";
import { Form } from "@/components/ui/shadcn/form";

import { Card, CardContent } from "@/components/ui/shadcn/card";

import FormHeader from "@/components/ui/form-header";
import FormFooter from "@/components/ui/form-footer";
import useLoginLogic from "./use-login-logic";
import EmailField from "./email-field";
import PasswordField from "./password-field";

export default function LoginForm() {
  const { form, onSubmit, isLoading } = useLoginLogic();

  return (
    <Card className="w-full max-w-md mx-5  border-pink border-2">
      <FormHeader
        title="Welcome Back"
        description="Sign in to your account to continue"
      />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <EmailField control={form.control} />
            <PasswordField control={form.control} />

            <FormFooter isLoading={isLoading} type="login" />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
