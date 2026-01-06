import { login } from "@/services/api/auth";
import { useState } from "react";
import { toast } from "sonner";
import { LoginFormData, loginSchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/auth";
import { usePageTransitionRouter } from "@/components/animation/functions";

export default function useLoginLogic() {
  const router = usePageTransitionRouter();
  const { setAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await login(data);

      if (response.data.status) {
        const { token, ...user } = response.data.data;

        if (!user.email_verified_at) {
          if (typeof window !== "undefined") {
            sessionStorage.setItem("pendingToken", token);
            sessionStorage.setItem("pendingUser", JSON.stringify(user));
          }

          toast.success("Please verify your email to continue");
          router("/verify");
        } else {
          await setAuth(token, user);
          toast.success("Logged in successfully");
          router("/");
        }
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
        toast.error(error.response?.data?.message || "Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
}
