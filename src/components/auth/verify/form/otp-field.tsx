import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import {
  InputOTPGroup,
  InputOTPSlot,
  InputOTP,
} from "@/components/ui/shadcn/input-otp";
import { verifyControl } from "./schema";

type props = {
  control: verifyControl;
};

export default function OTPField({ control }: props) {
  return (
    <FormField
      control={control}
      name="code"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Verification Code</FormLabel>
          <FormControl>
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }, (_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormDescription>
            For testing, use code: <strong>123456</strong>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
