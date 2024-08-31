import { z } from 'zod';

export const FormSchema = z.object({
  postName: z.string().min(3, {
    message: "Заголовок должен быть от 3 до 150 символов.",
  }).max(150, {
    message: "Заголовок должен быть от 3 до 150 символов.",
  }),
  postText: z.string().min(50, {
    message: "Описание должно быть от 50 до 2500 символов.",
  }).max(2500, {
    message: "Описание должно быть от 50 до 2500 символов.",
  }),
  postImage: z.string().url({ message: "Введите корректный URL." }),
});

export type FormData = z.infer<typeof FormSchema>;
