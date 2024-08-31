"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "@/components/shared/container"
import { submitPost } from "@/services/posts"
import { FormSchema } from "@/lib/schema"
import { useRouter } from "next/navigation"

 
export default function CreatePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        postName: "",
        postText: "",
        postImage: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
        submitPost(data).then(res=> router.push(`/post/${res.id}`))
    } catch (error) {
      console.error("Не удалось отправить пост:", error);
    }
  
  }
 
  return (
    <Container className="bg-zinc-50 p-8 ">
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6  mx-auto ">
        <FormField
          control={form.control}
          name="postName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input placeholder="Введите заголовок..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea className="resize-none h-[380px]" placeholder="Введите описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ссылка на изображение</FormLabel>
              <FormControl>
                <Input placeholder="Введите URL изображения..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
    </Container>
  )
}