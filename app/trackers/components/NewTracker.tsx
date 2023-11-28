import { Button } from "@/components/ui/button";

export default function NewTracker() {
  return (
    <section className="flex flex-col gap-4  items-center justify-center ">
      <Button
        variant="secondary"
        className="bg-ctyellow w-full h-full shadow-md hover:bg-ctyellow-400"
      >
        New from template
      </Button>
      <Button
        variant="secondary"
        className="bg-ctblue text-white w-full h-full shadow-md hover:bg-ctblue-400"
      >
        Custom tracker
      </Button>
    </section>
  );
}
