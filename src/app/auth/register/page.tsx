'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from 'next/link'
import axios from 'axios'

const RegisterPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: {
        errors
    }} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (body) => {
        setIsLoading(true)
        try {
            const { data } = await axios.post("/api/register", body);
            router.push('/auth/login');
        } catch (error) {
            console.log(error);
            alert("해당 이메일은 가입이 되어있습니다.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='grid h-[calc(100vh_-_56px)] place-items-center'>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center gap-4 min-w-[350px]'
            >
                <h1 className='text-2xl'>Register</h1>
                <Input
                    id="email"
                    label="Email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required={{ value: true, message: "email은 필수 입력 사항입니다." }}
                    pattern={{
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                        message: "이메일 형식에 맞게 작성해주세요." 
                      }}
                />
                <Input
                    id="name"
                    label="Name"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required={{ value: true, message: "Name은 필수 입력 사항입니다." }}
                />
                <Input
                    id="password"
                    label="Password"
                    type="password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required={{ value: true, message: "비밀번호는 필수 입력 사항입니다." }}
                    pattern={{
                        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "비밀번호는 8자 이상, 대문자, 소문자, 숫자, 특수 문자를 포함해야 합니다."
                    }}
                />

                <Button 
                    label='Register'
                />
                <div className='text-center'>
                    <p className='text-gray-400'>
                        Already a member?{" "}
                        <Link 
                            href="/auth/login" 
                            className='text-black hover:underline'>
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default RegisterPage
