import React from "react";
import { Skeleton } from "../ui/skeleton";

interface Props {
    className?: string;
}

export const SkeletonCard: React.FC<Props> = ({ className }) => {
    return (
        <div className="flex flex-col space-y-3 mt-8">
        <Skeleton className="h-6 w-[640px]" />
        <Skeleton className="h-[250px] w-[500px] rounded-xl mx-auto" />
        <Skeleton className="h-6 w-[1280px]" />
        <Skeleton className="h-6 w-[640px]" />

        </div>
      )
    }