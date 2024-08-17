"use client"
import { useRouter } from 'next/navigation'; 
export const SignUpButton = ()=>{
    const router = useRouter();
    const fun = ()=>{
        router.push('/signup')
    }    
    return <button className='bg-white text-black p-2 rounded-lg hover:bg-blue-500' onClick={fun}> 
        Join Us
    </button>
}