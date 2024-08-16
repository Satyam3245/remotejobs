"use client"
import axios from "axios"
import React, { useEffect, useState } from "react"
interface Job{
    id: string;
    company_name: string;
    role: string;
    location: string;
    createdAt: string;
    skill: string[];
    salary: number;
    Domain : string
    employment_type : string
}
export const Jobs:React.FC = ()=>{
    const [jobs , setBlogs] = useState<Job[]>([])
    const [loading , setLoading] = useState<boolean>(true);
    const [error , setError] = useState<string|null>(null);
    const skillShow = 2;
    const now = new Date();
    useEffect(()=>{
        axios.get('http://localhost:3000/api/jobs')
            .then(response=>{
                setBlogs(response.data);
                if(response.data.length === 0){
                    setError('Currently a Job is Not Available')
                }
            }) 
            .catch((error)=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })        
    },[])
    if(error){
        return <div className="text-white">
            {error}
        </div>
    }
    if(loading){
        return <div className="text-white">
            Loading...
        </div>
    }
    const daysAgo = (dateString: string): string => {
        const postDate = new Date(dateString);
        const differenceInMillis = now.getTime() - postDate.getTime();
        const differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
        return differenceInDays === 0 ? 'Today' : `${differenceInDays} day${differenceInDays > 1 ? 's' : ''} ago`;
    };
    return <div className="">
        {jobs.map(job=>(
            <div id={job.id} className="mx-[250px] mb-4 rounded-3xl flex justify-between bg-gray-800 text-white p-5 hover:bg-gray-900">
                <div className="flex flex-col gap-y-2">
                    <div className="text-2xl">{job.company_name}——{job.role}</div>
                    <div className="text-gray-300 text-sm">${job.salary}+,{job.Domain}, {job.employment_type}</div>
                </div>
                <div className="text-gray-300 flex flex-col gap-y-2">
                    <div className="flex gap-x-5">
                        <div>{job.location}</div>
                        <div> {daysAgo(job.createdAt)}</div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        {job.skill.slice(0,skillShow).map(skill =>(
                            <div>
                                <div className="rounded-xl p-2 bg-gray-900">{skill}</div>
                            </div>
                        ))}
                        <div className="rounded-xl p-2 bg-gray-900">+{job.skill.length - skillShow} More</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
}