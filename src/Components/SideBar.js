import "../Styles/SideBar.css";
import SideBarLink from "./SideBarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from '@mui/material/Avatar';
import X_icon from '../Images/x.png'
import MenuIcon from '@mui/icons-material/Menu';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { CardHeader } from "@mui/material";
function SideBar(props) {
    let data = JSON.parse(window.localStorage.getItem('data'))
    console.log(data)
    const handleButton = () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.classList.add('show')
    }
    const handleClose = () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.classList.remove('show')
    }
    return (
        <>
            <MenuIcon className="menu" onClick={handleButton} />
            <div className="sidebar flex flex-col justify-around ">
                <CloseIcon className=" close  cursor-pointer" onClick={handleClose} />
                <img className=" w-8" src={X_icon} alt="" />
                <SideBarLink text="Home" active={true} Icon={HomeIcon} />
                <SideBarLink text="Explore" Icon={SearchIcon} />
                <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
                <SideBarLink text="Messages" Icon={MailOutlineIcon} />
                <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
                <SideBarLink text="Lists" Icon={ListAltIcon} />
                <SideBarLink text="Profile" Icon={PermIdentityIcon} />
                <SideBarLink text="More" Icon={MoreHorizIcon} />
                <button className=" bg-white rounded-full p-2 text-black text-2xl font-bold">Post</button>


                <div className=" flex items-center gap-2 text-base ">


                    <Avatar sx={{ bgcolor: blue[500], textAlign: 'center' }} aria-label="recipe" className="avatar">
                        <img  className =' w-full h-full' src={data['photo']} alt="/" />
                    </Avatar>
                    <CardHeader title={data['username']} sx={{ fontSize: '10px', padding: '0', }} />
                </div>


            </div>
        </>
    );
}

export default SideBar;