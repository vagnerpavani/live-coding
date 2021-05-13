import Feed from "./Feed"
import NavBar from "./NavBar"
import NavMobile from "./NavMobile"
import SideBar from "./SideBar"

export default function App() {

    return (
        <>
            <NavBar />

            <div className="corpo">
                <Feed />
                <SideBar />
            </div>

            <NavMobile />
        </>)

}