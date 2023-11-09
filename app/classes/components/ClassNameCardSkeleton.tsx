import { Skeleton } from "@/components/ui/skeleton";

export function ClassNameCardSkeleton() {
  const skeletonArray = [0, 1, 2, 3];

  return skeletonArray.map((key) => {
    return <Skeleton key={key} className="h-10 m-2 " />;
  });
}
