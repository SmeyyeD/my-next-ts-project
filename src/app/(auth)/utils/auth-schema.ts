'use client'
import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().email({message: "Invalid email address "}),
    password: z.string().min(8, {message: "Password must be at least 8 character long"})
});

// loginSchema adında bir şema oluşturuldu.Email string olmalı ve geçerli e-posta formatında olmalı değilse hata mesajını döndürür. Password en uzun 8 karakterden oluşmalı eğer koşul sağlanmazsa hata mesajını döndürür.

export const registerSchema = loginSchema.extend({
    name: z.string().min(3, { message: "Name must be at least 3 characters long"})
})

//loginSchema şemasını genişleterek "extend" yeni bir registerSchema oluşturuldu. Tüm doğrulama kurallarını içerir + olarak name karakterini ekler ve en az 3 karakter uzunluğunda olmalı. Koşul sağlanmazsa hata mesajını döndürür.

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>

// LoginSchema ve RegisterSchema string karşılığını typescript karşılığında veriyor. email:string | password: string