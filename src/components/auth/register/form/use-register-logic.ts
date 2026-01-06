import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { register } from "@/services/api/auth";
import { usePageTransitionRouter } from "@/components/animation/functions";

export default function useRegisterLogic() {
  const router = usePageTransitionRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      mobile_country_code: "971",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    try {
      const response = await register(data);

      if (response.data.status) {
        const { token, ...user } = response.data.data;
        if (typeof window !== "undefined") {
          sessionStorage.setItem("pendingToken", token);
          sessionStorage.setItem("pendingUser", JSON.stringify(user));
        }

        // Show success message
        toast.success(response.data.message || "Account created successfully");

        // Redirect to verify
        router("/verify");
      }
    } catch (error: any) {
      // Handle validation errors from API
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((key) => {
          form.setError(key as any, {
            message: errors[key][0],
          });
        });
      } else {
        toast.error(error.response?.data?.message || "Registration failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading, form };
}
