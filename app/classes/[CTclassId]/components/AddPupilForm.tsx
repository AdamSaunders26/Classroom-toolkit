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
import { RxCheckCircled, RxPlus } from "react-icons/rx";
import { useContext, useEffect } from "react";
import { CTClassContext } from "@/app/(app)/context/CTClassProvider";
import { addGuestPupil } from "@/app/(app)/utils/guestFunctions";
import { useToast } from "@/components/ui/use-toast";

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
  const {
    currentCTClass,
    setCurrentCTClass,
    setAllCTClasses,
    allCTClasses,
    currentTeacher,
  } = useContext(CTClassContext);
  const { toast } = useToast();

  const defaultValues = {
    first_name: "",
    last_name_initials: "",
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    setAllCTClasses((curr) => {
      if (curr) {
        const ejectArray: boolean[] = [];
        curr.forEach((CTClass) => {
          ejectArray.push(CTClass.pupils.length === 0);
        });

        if (
          !ejectArray.includes(false) &&
          currentCTClass?.pupils.length === 0
        ) {
          return curr;
        }
      }
      if (curr && currentCTClass) {
        const copyClasses = [...curr];
        const masterList = copyClasses;
        const updatedClasses = masterList.map((CTClass) => {
          return CTClass.name === currentCTClass.name
            ? currentCTClass
            : CTClass;
        });
        return updatedClasses;
      } else {
        return null;
      }
    });
  }, [currentCTClass]);

  async function submitHandler(values: z.infer<typeof formSchema>) {
    const { first_name, last_name_initials } = values;
    if (currentTeacher?.id === "guest" && currentCTClass) {
      addGuestPupil(
        first_name,
        last_name_initials,
        currentCTClass,
        setCurrentCTClass
      );
    } else {
      const updatedClassList = await postPupil(
        CTClassId,
        first_name,
        last_name_initials
      );
      setCurrentClass(updatedClassList);
    }
    toast({
      title: "Pupil added successfully.",
      action: <RxCheckCircled />,
    });
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form
        className="bg-ctblue rounded-md w-full  p-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <h3 className="text-xl text-ctyellow">Add pupil to class:</h3>
        <section className=" flex gap-2  items-end ">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel className="text-white text-lg">
                    First Name
                  </FormLabel>
                  <FormMessage className="text-ctred" />
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
              <FormItem className="w-14">
                <div className="flex justify-between items-center">
                  <FormLabel className="text-white text-lg">Initial</FormLabel>
                  <FormMessage className="text-ctred" />
                </div>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="bg-ctyellow mt-4 text-black hover:bg-ctyellow-400"
            size="icon"
            type="submit"
          >
            <RxPlus />
          </Button>
        </section>
      </form>
    </Form>
  );
}
