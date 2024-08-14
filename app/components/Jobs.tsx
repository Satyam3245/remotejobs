"use client"
import axios from "axios"
import React, { useEffect, useState } from "react"
interface Job{
    id: string;
    company_name: string;
    role: string;
    location: string;
    createdAt: Date;
    skill: string[];
}
export const Jobs:React.FC = ()=>{
    const [jobs , setBlogs] = useState<Job[]>([])
    const [loading , setLoading] = useState<boolean>(true);
    const [error , setError] = useState<string|null>(null);
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
        return <div>
            {error}
        </div>
    }
    if(loading){
        return <div>
            Loading...
        </div>
    }

    return <div>
        {jobs.map(job=>(
            <div id={job.id} className="">
                
            </div>
        ))}
    </div>
}