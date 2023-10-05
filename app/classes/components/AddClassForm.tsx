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
import YearGroupSelect from "./YearGroupSelect";

const formSchema = z.object({
  name: z.string().min(1, "Required").max(20, {
    message: "Too long",
  }),
  yearGroup: z.union([
    z.string().regex(/^(?:[0-9]|1[0-3])$/),
    z.literal("EYFS"),
    z.literal("Other"),
  ]),
});
interface Props {
  setAllClasses: Dispatch<SetStateAction<CTClass[] | null>>;
}
export default function AddClassForm({ setAllClasses }: Props) {
  const { data: session } = useSession();
  const defaultValues = {
    name: "",
    yearGroup: "",
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function submitHandler(values: z.infer<typeof formSchema>) {
    const { name, yearGroup } = values;
    const classToPost = await fetch("http://localhost:3000/api/classes", {
      method: "POST",
      body: JSON.stringify({ name, yearGroup, email: session?.user?.email }),
    });

    const classList = await classToPost.json();
    setAllClasses(classList.CTClasses);
    // form.reset({ name: "", yearGroup: "Choose...." });
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="space-y-4 flex flex-col "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="text-white">Class name</FormLabel>
                <FormMessage className="text-ctyellow" />
              </div>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <YearGroupSelect form={form} />
        <Button
          className="border-ctyellow border-2 mt-4"
          variant="outline"
          type="submit"
        >
          Create new class
        </Button>
      </form>
    </Form>
  );
}
