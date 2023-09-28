"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import YearGroupSelect from "./YearGroupSelect";

const formSchema = z.object({
  name: z.string().min(1, "Class name is required").max(20, {
    message: "Class name must be less than 20 characters",
  }),
  yearGroup: z.number().min(1, "Please select a year group"),
});
interface Props {
  setAllClasses: Dispatch<SetStateAction<CTClass[] | null>>;
}
export default function AddClassForm({ setAllClasses }: Props) {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      yearGroup: 0,
    },
  });

  async function submitHandler(values: z.infer<typeof formSchema>) {
    const { name, yearGroup } = values;
    const classToPost = await fetch("http://localhost:3000/api/classes", {
      method: "POST",
      body: JSON.stringify({ name, yearGroup, email: session?.user?.email }),
    });

    const classList = await classToPost.json();
    setAllClasses(classList.CTClasses);
    form.reset({ name: "", yearGroup: 0 });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class name</FormLabel>
              <FormControl>
                <Input placeholder="Kestrel Class" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="yearGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year group</FormLabel>
              <Select
                onValueChange={field?.onChange}
                defaultValue={field?.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Year Group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={0}>EYFS</SelectItem>
                  <SelectItem value={1}>1</SelectItem>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create new class</Button>
      </form>
    </Form>
  );
}
