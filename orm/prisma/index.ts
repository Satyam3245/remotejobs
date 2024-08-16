import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();
interface Job{
    id: string;
    company_name: string;
    role: string;
    location: string;
    createdAt: Date;
    skill: string[];
    salary : number
}
export async function createUser({company_name, role,location,skill,salary,domain,employment_type}:any):Promise<string|null>{
    try{
        await prisma.$connect()
        await prisma.jobs.create({
            data:{
                company_name: company_name,
                role: role,
                location: location,
                skill: skill,
                salary : salary,
                Domain : domain,
                employment_type : employment_type
            }
        })
        return 'create'
    }catch{
        return null
    }finally{
        await prisma.$disconnect();
    }
}
export async function getJobs():Promise<Job[]|null>{
    try {
        await prisma.$connect()
        const jobs = await prisma.jobs.findMany();
        return jobs;
    } catch (error) {
        return null;
    }finally{
        await prisma.$disconnect();
    }
}