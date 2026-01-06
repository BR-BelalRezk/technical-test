import { resendVerificationCode, verifyAccount } from "@/services/api/auth";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { VerifyFormData, verifySchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/auth";
import { usePageTransitionRouter } from "@/components/animation/functions";

export default function useVerifyLogic() {
  const router = usePageTransitionRouter();
  const { setAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [pendingData, setPendingData] = useState<{
    token: string;
    user: any;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("pendingToken");
      const userStr = sessionStorage.getItem("pendingUser");

      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          setPendingData({ token, user });

          localStorage.setItem("token", token);
        } catch (error) {
          console.error("Failed to parse pending user data");
          router("/login");
        }
      } else {
        toast.error("Session expired", {
          description: "Please login again",
        });
        router("/login");
      }
    }
  }, [router]);

  const form = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: VerifyFormData) => {
    if (!pendingData) return;

    setIsLoading(true);

    try {
      const response = await verifyAccount(data.code);

      if (response.data.status) {
        const updatedUser = {
          ...pendingData.user,
          email_verified_at: true,
        };

        await setAuth(pendingData.token, updatedUser);

        if (typeof window !== "undefined") {
          sessionStorage.removeItem("pendingToken");
          sessionStorage.removeItem("pendingUser");
        }

        toast.success("Email verified successfully", {
          description: response.data.message || "Email verified successfully",
        });

        router("/");
      }
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((key) => {
          form.setError(key as any, {
            message: errors[key][0],
          });
        });
      } else {
        toast.error(error.response?.data?.message || "Verification failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);

    try {
      const response = await resendVerificationCode();

      if (response.data.status) {
        toast.success("Verification code sent", {
          description: response.data.message || "Verification code sent",
        });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to resend code");
    } finally {
      setIsResending(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
    isResending,
    pendingData,
    handleResendCode,
  };
}
