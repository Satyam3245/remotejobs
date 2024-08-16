import { NewsletterIcon } from "../Newsletter"
import { TickIcon } from "../Tickmark"

export const EmailInput = ()=>{
    return <div className="my-10 text-white p-7 mx-[250px] bg-gray-800 rounded-[60px] flex flex-col items-center gap-y-5">
        <div>
            <NewsletterIcon/>
        </div>
        <div className="text-4xl my-2">
            Join over 30,000 + readers
        </div>
        <div className="my-5 flex gap-x-5">
            <input type="email" placeholder="Email Address" className="p-3 bg-black text-white focus:outline-none rounded-xl w-[260px]"/>
            <button className="text-black bg-white p-2 rounded-2xl">Subscribe</button>
        </div>
        <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-1">
                <TickIcon/>
                The Week's Latest Jobs
            </div>
            <div className="flex gap-x-1">
                <TickIcon/>
                Remote News and Trends
            </div>
            <div className="flex gap-x-1">
                <TickIcon/>
                Exclusive Job Invitations
            </div>
        </div>
    </div>
}