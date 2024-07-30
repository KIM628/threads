import * as z from 'zod';

export const ThreadValidation = z.object({
  // profile_photo: z.string().url().nonempty(),  nonempty is debrecated so we used min(1) instead 
  thread: z.string().min(3,{message:'Minimum 3 Characters'}),
  accountId: z.string(),
})
export const CommentValidation = z.object({
  thread: z.string().min(3,{message:'Minimum 3 Characters'}),
})