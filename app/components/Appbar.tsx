import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"
import { PremiumButton } from "./Premium/Premium"
export const AppBar = ()=>{
    return <div className="bg-black">
        <div className="flex justify-between items-center mx-10 p-7 ">
            <div className="flex gap-x-1">
                <div className="font-bold text-4xl text-white">100x</div>
                <div className="font-bold text-2xl text-white mt-2">Remote Jobs</div>  
            </div>
            <div className="flex gap-x-7 items-center">
                <div className="text-white text-xl">
                    <PremiumButton />
                </div>
                <div>
                    <Button className="bg-white text-black">Login</Button>
                </div>
                <div>
                    <Button className="bg-white text-black">Post a Job</Button>
                </div>
            </div>
        </div>
    </div>
}