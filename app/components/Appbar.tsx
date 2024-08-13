import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"

export const AppBar = ()=>{
    return <div className="bg-gray-800">
        <div className="flex justify-between items-center mx-10 p-5 ">
            <div className="flex gap-x-1">
                <div className="font-bold text-4xl text-white">100x</div>
                <div className="font-bold text-2xl text-white mt-2">Remote Jobs</div>  
            </div>
            <div className="flex gap-x-4 items-center">
                <div>
                    <Button className="bg-white text-black"><Moon/></Button>
                </div>
                <div>
                    <Button className="bg-white text-black rounded-xl p-6 text-base">Post a Job</Button>
                </div>
            </div>
        </div>
    </div>
}