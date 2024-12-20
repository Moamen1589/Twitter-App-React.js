import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat'; 
import AssessmentIcon from '@mui/icons-material/Assessment'; 
import CommentIcon from '@mui/icons-material/Comment'; 
import SaveIcon from '@mui/icons-material/Save'; 
import '../Styles/Post.css'
function PostStat() {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            className=' stat mx-auto mt-3 bg-black'
            sx={{ width: 500 }}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label='16k'
                icon={<CommentIcon />}
            />
            <BottomNavigationAction
                label="50k"
                value="favorites"
                icon={<RepeatIcon />}
            />
            <BottomNavigationAction
                label="25k"
                value="nearby"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="3.1M"
                value="folder"
                icon={<AssessmentIcon />}
            />
            <BottomNavigationAction
             label='Save'
                // labelPosition="start"
                icon={<SaveIcon />} // Twitter Blue Color
                sx={{
                    display: 'flex',
                    alignItems: 'center',  // Aligns the icon and label vertically
                    justifyContent: 'center' // Centers the icon and label horizontally
                }}
            />
        </BottomNavigation>
    );
}

export default PostStat;
