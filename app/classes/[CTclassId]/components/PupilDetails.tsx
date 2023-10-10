import { formatName } from "@/app/(app)/utils/functions";
import UpdatePupilButton from "./UpdatePupilButton";
import { useState } from "react";
import UpdateDetailsForm from "./UpdateDetailsForm";

interface Props {
  pupil: Pupil | null;
  CTClass: CTClass | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function PupilDetails({
  pupil,
  CTClass,
  setCurrentClass,
}: Props) {
  const [updatingPupils, setUpdatingPupils] = useState<boolean>(false);
  return (
    <section className="m-4 rounded-md bg-ctblue p-4 text-white">
      <div className="flex justify-between">
        <h2 className="text-2xl text-ctyellow">
          {CTClass?.name} - Year {CTClass?.yearGroup}
        </h2>
        <UpdatePupilButton
          updatingPupils={updatingPupils}
          setUpdatingPupils={setUpdatingPupils}
        />
      </div>
      <div className="text-xl">
        {pupil ? (
          <UpdateDetailsForm
            pupil={pupil}
            updatingPupils={updatingPupils}
            setUpdatingPupils={setUpdatingPupils}
            setCurrentClass={setCurrentClass}
          />
        ) : (
          <p>No child selected</p>
        )}

        <p className="mt-4">
          Other things will go here once implemented, such as sections of
          reward/homework trackers
        </p>
      </div>
    </section>
  );
}
