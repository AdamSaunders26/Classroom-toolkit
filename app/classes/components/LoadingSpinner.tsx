import Image from "next/image";
import CTLogo from "../../icon.svg";

export default function LoadingSpinner() {
  return (
    <div className="text-xl p-4 place-self-center col-span-4 animate-spin-slow">
      <Image
        priority
        className="h-32 w-32"
        src={CTLogo}
        alt="Classroom Toolkit logo"
      />
    </div>
  );
}
