import React from "react";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui/button";

interface Props {
    id: number;
    name: string;
    text: string;
    imageUrl: string;
    className?: string;
}

export const PostCard: React.FC<Props> = ({ id, name, text, imageUrl, className }) => {
    return (
       <div className='bg-zinc-50 p-8 mb-8'>
            <Link href={`/post/${id}`}>
                <Title text={name} size="sm" className="mb-5 font-bold hover:text-sky-800"/>
            </Link>
            <div className="mx-auto md:h-[480px] md:w-[640px]">
                <img className=' object-cover md:min-h-[480px] md:min-w-[640px]' src={imageUrl} alt={name} />
            </div>
            <p className="text-sm text-gray-400 line-clamp-5 mt-5">{text}</p>
            <Link href={`/post/${id}`}>
                <Button variant="default" className="text-base mt-5">Читать далее</Button>
            </Link>
       </div>
    )
}