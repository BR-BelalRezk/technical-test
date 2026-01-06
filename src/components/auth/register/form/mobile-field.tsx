import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { registerControl } from "./schema";

type props = {
  control: registerControl;
};

const countryCodes = [
  { value: "971", label: "+971" },
  { value: "966", label: "+966" },
  { value: "965", label: "+965" },
  { value: "20", label: "+20" },
];

export default function MobileField({ control }: props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <FormField
        control={control}
        name="mobile_country_code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Code</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="+" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countryCodes.map((code) => (
                  <SelectItem key={code.value} value={code.value}>
                    {code.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="mobile"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="501234567" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
