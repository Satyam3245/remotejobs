import { AppBar } from "../components/Appbar"
import { Content } from "../components/Content"
import { Footer } from "../components/Footer"

export const Landing = ()=>{
    return <div className="bg-black">
        <AppBar/>
        <Content/>
        <Footer/>
    </div>
}