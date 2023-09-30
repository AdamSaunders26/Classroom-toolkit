import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<
    {
      name: string;
      yearGroup: string;
    },
    any,
    undefined
  >;
}

export default function YearGroupSelect({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="yearGroup"
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center">
            <FormLabel className="text-white">Year group</FormLabel>
            <FormMessage className="text-ctyellow" />
          </div>
          <Select onValueChange={field?.onChange} defaultValue={field?.value}>
            <FormControl>
              <SelectTrigger className="">
                <SelectValue placeholder="Choose..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="EYFS">EYFS</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="11">11</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="13">13</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
