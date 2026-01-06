"use client";

import { Form } from "@/components/ui/shadcn/form";

import { Card, CardContent } from "@/components/ui/shadcn/card";

import FormHeader from "@/components/ui/form-header";
import useVerifyLogic from "./use-verify-logic";
import OTPField from "./otp-field";
import OTPFooter from "./otp-footer";

export default function VerifyForm() {
  const {
    form,
    onSubmit,
    isLoading,
    isResending,
    pendingData,
    handleResendCode,
  } = useVerifyLogic();

  if (!pendingData) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mx-5 max-w-md">
      <FormHeader
        title="Verify Your Email"
        description={`Enter the 6-digit code sent to`}
      >
        <strong>{pendingData.user.email}</strong>
      </FormHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <OTPField control={form.control} />

            <OTPFooter
              isLoading={isLoading}
              isResending={isResending}
              handleResendCode={handleResendCode}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
