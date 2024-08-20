import { findJob } from "@/orm/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')||'';
    const job = await findJob(id);
    if(!job){
        return NextResponse.json({
            msg:'Job is not Found'
        })
    }else{
        return NextResponse.json(job);
    }
}