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
import { postManyPupils } from "@/app/(app)/fetchFunctions/fetchFunctions";
import { useContext, useEffect } from "react";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { pasteGuestPupils } from "@/app/(app)/utils/guestFunctions";
import { useToast } from "@/components/ui/use-toast";
import { RxCheckCircled } from "react-icons/rx";

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

interface Props {
  CTClassId: number;
  currentClass: CTClass | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function PastePupils({
  CTClassId,
  currentClass,
  setCurrentClass,
}: Props) {
  const { currentCTClass, setCurrentCTClass, currentTeacher } =
    useContext(CTClassContext);
  const { toast } = useToast();

  const defaultValues = { newPupils: "" };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [currentClass]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (currentTeacher?.id === "guest" && currentCTClass) {
      pasteGuestPupils(currentCTClass, data, setCurrentCTClass);
    } else {
      const updatedClass = await postManyPupils(
        CTClassId,
        detectPupils(data.newPupils)
      );
      setCurrentClass(updatedClass);
      toast({
        title: "Pupils added successfully.",
        action: <RxCheckCircled />,
      });
    }
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
