import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
       <header className={cn('border border-b bg-zinc-50', className)}>
            <Container className="flex items-center justify-between py-8">
            <Link href={`/`}>
                <h1 className="text-2xl uppercase font-black">Next Blog</h1>
            </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="bg-sky-100">Создать пост</Button>
                    </div>
            </Container>
       </header>
    )
}