import { SignInComp } from "../components/SignInComp"

export default function Signin(){
    return <div>
        <div className="flex justify-center p-8 bg-gradient-to-r from-primary to-secondary text-white text-2xl">
            Be a Part of Remote Jobs! Sign Up Quickly
        </div>
        <div>
            <SignInComp/>
        </div>
    </div>
}