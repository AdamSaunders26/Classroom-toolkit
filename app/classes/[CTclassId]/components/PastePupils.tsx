// export default function PastePupils() {
//   return <div>pasty</div>;
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { detectPupils } from "@/app/(app)/utils/functions";
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  newPupils: z
    .string()
    .min(1, {
      message: "Required",
    })
    .max(500, {
      message: "Cannot exceed 500 characters",
    }),
});

export default function PastePupils() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    // console.log(data);
    console.log(detectPupils(data.newPupils));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full col-span-2 row-span-2 col-start-2 row-start-1 grid grid-rows-2 gap-4"
      >
        <FormField
          control={form.control}
          name="newPupils"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Paste in a class list or type names seperated by commas"
                  className="resize-none h-full focus-visible:ring-ctblue"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="bg-ctyellow hover:bg-ctyellow-400"
        >
          Import pupils
        </Button>
      </form>
    </Form>
  );
}
