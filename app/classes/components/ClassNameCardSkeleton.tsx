import { Skeleton } from "@/components/ui/skeleton";

export function ClassNameCardSkeleton() {
  const skeletonArray = [0, 1, 2, 3];

  return skeletonArray.map((key) => {
    return (
      //   <Skeleton
      //     key={key}
      //     className=" m-2 h-12 rounded-md  bg-neutral border-4 border-red   w-full p-2"
      //   />

      <Skeleton className="h-12 m-2 " />
    );
  });
}
