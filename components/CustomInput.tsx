import { Input } from './ui/input'
import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Control , FieldPath} from 'react-hook-form'
import {z} from 'zod'
import { authFormSchema, cn } from '@/lib/utils'

const formSchema=authFormSchema('sign-up');

interface CustomInput{
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder:string,
    invalidCredentials:boolean
}

const CustomInput = ({control,name,label,placeholder,invalidCredentials}: CustomInput) => {
return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className={cn('form-label text-gray-700',{'text-red-500': invalidCredentials})}>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                            placeholder={placeholder} 
                            className={cn('input-class',{invalidCredentials:'text-red-500'})}
                            type={name==='password' ? 'password':'text'}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className='form-message mt-2' />
                </div>
            </div>
        )}
    />
)
}

export default CustomInput