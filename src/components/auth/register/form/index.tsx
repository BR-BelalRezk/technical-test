"use client";
import { Form } from "@/components/ui/shadcn/form";

import { Card, CardContent } from "@/components/ui/shadcn/card";

import useRegisterLogic from "./use-register-logic";
import FormHeader from "@/components/ui/form-header";
import FormFooter from "@/components/ui/form-footer";
import NameField from "./name-field";
import EmailField from "./email-field";
import MobileField from "./mobile-field";
import PasswordField from "./password-field";

export default function RegisterForm() {
  const { form, onSubmit, isLoading } = useRegisterLogic();

  return (
    <Card className="w-full mx-5 max-w-md border-pink border-2">
      <FormHeader
        title="Create Account"
        description="Enter your details to create a new account"
      />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <NameField control={form.control} />
            <EmailField control={form.control} />
            <MobileField control={form.control} />
            <PasswordField control={form.control} />

            <FormFooter isLoading={isLoading} type="register" />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
