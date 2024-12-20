
import { Link } from "react-router-dom";
import '../Styles/SideBarLink.css'
function SideBarLink(props) {
    return (
        <div className="link">

            <Link to={'profile'} className="">{<props.Icon/>}{props.text}</Link>
        </div>
    );
}
export default SideBarLink;