import { AppBar } from "../components/Appbar"
import { Content } from "../components/Content"
import { Footer } from "../components/Footer"
import { EmailInput } from "../components/Premium/MainComp"

export const Landing = ()=>{
    return <div className="bg-black">
        <AppBar/>
        <Content/>
        <EmailInput/>
        <Footer/>
    </div>
}