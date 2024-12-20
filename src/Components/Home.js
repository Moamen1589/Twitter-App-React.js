import PostsContainer from "./PostsContainer"
import RightBar from "./RightBar"
import '../Styles/Home.css'
import SideBar from "./SideBar"
function Home() {
    return (
        <div className="Home min-h-screen flex justify-center ">
            <SideBar />
            <PostsContainer />
            <RightBar />
        </div>
    )
}
export default Home