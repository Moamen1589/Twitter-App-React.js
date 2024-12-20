import Post from "./Post";
import image1 from '../Images/Ge_KQbgWkAAUefX.jpeg';
import video2 from '../Images/6M-22PCLi-50Owf1.mp4';
import NewPostPart from "./NewPostPart";
import Video1 from "../Images/R_lhKE5FzdXvxKly.mp4";
import avatar1 from '../Images/Avatar1.avif';
import avatar2 from '../Images/istockphoto-1059661424-612x612.jpg';
import video from '../Images/Ru7SDOlLTMPoibGX.mp4'
import GetPosts from "./GetPosts";
import '../Styles/PostContainer.css'

function PostsContainer() {

    return (
        <div className=" post-container flex flex-col min-h-screen gap-2 basis-2/5 border-r border-l border-gray-500">
            <NewPostPart />
            <> <GetPosts /></>
            <Post media={video} type={'video'} date={'March 6, 2024'} avatar={avatar1}  content={"ابن مصر 🇪🇬 لا يتوقف عن كتابة التاريخ! عمر مرموش هو لاعب الشهر في الدوري الألماني ❤️👑"}/>
            <Post media={image1} type={'image'} date={'September 14, 2024'} avatar={avatar1} content={'hello'} username={'Marco loyes'} />
            <Post media={Video1} type={'video'} date={'October 9, 2024'} avatar={avatar2} username={'maline loyes'} />
            <Post media={video2} type={'video'} date={'October 9, 2024'} avatar={avatar2} username={'marco'} />

            {/* <Post media={video2} type={'video'} date={'June 7, 2024'} avatar={avatar3} /> */}

        </div>
    );
}

export default PostsContainer;
