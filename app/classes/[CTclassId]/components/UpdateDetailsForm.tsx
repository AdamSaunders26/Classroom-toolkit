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
  updatePupil,
} from "@/app/(app)/fetchFunctions/fetchFunctions";
import { RxPlus } from "react-icons/rx";
import { useEffect, useMemo, useState } from "react";
import PupilNameCard from "./PupilNameCard";

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
  pupil: Pupil;
  setCurrentPupil: React.Dispatch<React.SetStateAction<Pupil | null>>;
  updatingPupils: boolean;
  setUpdatingPupils: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function UpdateDetailsForm({
  pupil,
  setCurrentPupil,
  updatingPupils,
  setUpdatingPupils,
  setCurrentClass,
}: Props) {
  const defaultValues = useMemo(() => {
    return {
      first_name: pupil.first_name,
      last_name_initials: pupil.last_name_initials,
    };
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [pupil, defaultValues, form]);

  async function submitHandler(values: z.infer<typeof formSchema>) {
    const { first_name, last_name_initials } = values;
    const updatedClass = await updatePupil(
      pupil.id,
      first_name,
      last_name_initials
    );
    setCurrentClass(updatedClass);
    setUpdatingPupils(false);
    setCurrentPupil((curr) => {
      const newPupil = updatedClass.pupils.filter((updatedPupil) => {
        return curr?.id === updatedPupil.id;
      });

      return newPupil[0];
    });

    form.reset(defaultValues);
  }

  return updatingPupils ? (
    <Form {...form}>
      <form className="w-full  " onSubmit={form.handleSubmit(submitHandler)}>
        <section className=" flex gap-2 items-center ">
          <h3 className="">Name:</h3>
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="text-black">
                {/* <div className="flex justify-between items-center">
                  <FormLabel className="hidden">First Name</FormLabel>
                  <FormMessage className="text-ctred" />
                </div> */}
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name_initials"
            render={({ field }) => (
              <FormItem className="w-14 text-black">
                {/* <div className="flex justify-between items-center">
                  <FormLabel className="hidden">Initial</FormLabel>
                  <FormMessage className="text-ctred" />
                </div> */}
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="bg-ctyellow  text-black  hover:bg-ctyellow-400"
            size="icon"
            type="submit"
          >
            <RxPlus />
          </Button>
        </section>
      </form>
    </Form>
  ) : (
    // <p className="mt-2">
    //   Name: {tempPupil.first_name} {tempPupil.last_name_initials}
    // </p>
    <PupilNameCard pupil={pupil} />
  );
}
