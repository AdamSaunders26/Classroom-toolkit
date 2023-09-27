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

const formSchema = z.object({
  name: z.string(),
  yearGroup: z.union([z.number(), z.string()]),
});
interface Props {
  setAllClasses: Dispatch<SetStateAction<CTClass[] | null>>;
}
export default function AddClassForm({ setAllClasses }) {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      yearGroup: "",
    },
  });

  async function submitHandler(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { name, yearGroup } = values;
    const classToPost = await fetch("http://localhost:3000/api/classes", {
      method: "POST",
      body: JSON.stringify({ name, yearGroup, email: session?.user?.email }),
    });

    const classList = await classToPost.json();
    setAllClasses(classList.CTClasses);
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
              <FormControl>
                <Input placeholder="5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create new class</Button>
      </form>
    </Form>
  );
}
