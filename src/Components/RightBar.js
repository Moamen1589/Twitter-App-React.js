import Trend from "./Trend"
import '../Styles/RightBar.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Subscribe from "./Subscribe";
import CloseIcon from '@mui/icons-material/Close';
function RightBar() {
    const handleClose = ()=>{
        let RightBar = document.querySelector('.right-bar')
        RightBar.classList.remove('appear')
    }
    return (
        <div className=" right-bar p-2   h-60 flex flex-col justify-around gap-7 sticky top-0 ">
              <CloseIcon className=" closeTrent cursor-pointer" onClick={handleClose} />
            <TextField className=""
                variant="outlined"
                placeholder="Search..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon  className=" text-slate-600"/>
                        </InputAdornment>
                    ),
                    style: {
                        backgroundColor: '#222222', // Background color for the input
                        color: '#fff', // Text color for better contrast
                        borderRadius:'30px'
                    },
                }}

            />
            <Subscribe/>
        
            <Trend />
        </div>
    )
}
export default RightBar