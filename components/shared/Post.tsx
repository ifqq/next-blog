import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui/button";

interface Props {
    name: string;
    text: string;
    imageUrl: string;
    className?: string;
}

export const Post: React.FC<Props> = ({ name, text, imageUrl, className }) => {
    return (
       <div className={cn('bg-zinc-50 p-8', className)}>
            <Title text={name} size="md" className="my-5 font-bold"/>
            <img className='mx-auto' src={imageUrl} alt={name} />
            <p className="text-md text-black my-5">{text}</p>

       </div>
    )
}