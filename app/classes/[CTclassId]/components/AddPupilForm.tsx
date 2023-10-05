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

import {
  postClass,
  postPupil,
} from "@/app/(app)/fetchFunctions/fetchFunctions";

const formSchema = z.object({
  first_name: z.string().min(1, "Required").max(30, {
    message: "Too long",
  }),
  last_name_initials: z.optional(
    z.string().max(3, {
      message: "This should only contain initials",
    })
  ),
});
interface Props {
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  CTClassId: number;
}
export default function AddPupilForm({ setCurrentClass, CTClassId }: Props) {
  const { data: session } = useSession();
  const defaultValues = {
    first_name: "",
    last_name_initials: "",
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function submitHandler(values: z.infer<typeof formSchema>) {
    const { first_name, last_name_initials } = values;

    const updatedClassList = await postPupil(
      CTClassId,
      first_name,
      last_name_initials
    );

    setCurrentClass(updatedClassList);
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className=" flex gap-2 "
      >
        <Button
          className="border-ctyellow border-2 mt-4"
          variant="outline"
          type="submit"
        >
          Add new pupil
        </Button>
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="">First Name</FormLabel>
                <FormMessage className="text-ctyellow" />
              </div>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name_initials"
          render={({ field }) => (
            <FormItem className="w-10">
              <div className="flex justify-between items-center">
                <FormLabel className="">Initial</FormLabel>
                <FormMessage className="text-ctyellow" />
              </div>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
