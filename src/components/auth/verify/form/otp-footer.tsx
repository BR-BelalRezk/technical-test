import { Button } from "@/components/ui/shadcn/button";

type props = {
  isLoading: boolean;
  isResending: boolean;
  handleResendCode: () => Promise<void>;
};

export default function OTPFooter({
  isLoading,
  isResending,
  handleResendCode,
}: props) {
  return (
    <>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Verifying..." : "Verify Email"}
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="ghost"
          onClick={handleResendCode}
          disabled={isResending}
          className="text-sm"
        >
          {isResending ? "Sending..." : "Resend verification code"}
        </Button>
      </div>
    </>
  );
}
