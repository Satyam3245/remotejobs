import { createUser, getJobs } from '@/orm/prisma';
import { NextRequest, NextResponse } from 'next/server';
interface JobInterface{
    company_name : string
    role : String
    location : String
    skill :String[]
}

export async function POST(req: NextRequest) {
    const body: JobInterface = await req.json();

    try {
        const response = await createUser(body);

        if (response === 'create') {
            return NextResponse.json({
                 msg: 'User is Successfully Entered' ,
                 status: 200 
        });
        } else {
            return NextResponse.json({
                 msg: 'Something went Wrong',
                 status: 500 
            });
        }
    } catch(error){
        console.error('Error:', error);
        return NextResponse.json({
            msg: 'Internal Server Error' ,
             status: 500 
        });
    }
}
export async function GET() {
    try {
        const Response = await getJobs(); 
        if(Response==null){
            NextResponse.json({
                msg:'Something Happened to our Database !',
                status : 500
            })
        }else{
            NextResponse.json({
                Response
            })
        }
    } catch(error){
        return NextResponse.json({
            msg: 'Internal Server Error' ,
             status: 500 
        });
    }
}