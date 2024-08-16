import { createUser } from "@/orm/prisma";
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt';
interface User {
    email : string
    password : string
    name : string
}
export async function POST(req:NextRequest){
    const body:User = await req.json();
    const hashPassword:string = await bcrypt.hash(body.password,10)
    const newBody = {...body, password : hashPassword } 
    
    try {
        const Response = await createUser(newBody);
        if(!Response){
            return NextResponse.json({
                msg :'Invalid credentials',
                status : 400
            })
        }else{
            return NextResponse.json({
                msg : 'User is Successfully Created',
                status : 201
            })
        }
    } catch (error) {
        return NextResponse.json({
            msg : 'Internal server error !',
            status : 500
        })
    }
}