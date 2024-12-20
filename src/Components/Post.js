import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

import '../Styles/Post.css';
import PostStat from './PostStat';

function Post(props) {
    const [expanded, setExpanded] = useState(true);  // القيمة الأولية يجب أن تكون false لتجنب أن يكون القسم الموسع افتراضيًا

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  className='post'>
            <CardHeader
                avatar={
                    props.avatar ? (
                        <Avatar src={props.avatar} alt="User Avatar" sx={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    ) : (
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                            {props.userName ? props.userName[0] : 'U'}  {/* عرض أول حرف من اسم المستخدم */}
                        </Avatar>
                    )
                }
                title={props.username || "Unknown User"}
                subheader={props.date}
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2,fontSize:'27px'}}>
                        {props.content}  {/* عرض المحتوى الذي يتم تمريره من المكون الأب */}
                    </Typography>
                </CardContent>
            </Collapse>
            {props.type === 'image' && (
                <CardMedia
                    component="img"
                    height="194"
                    image={props.media}
                    alt="Post media"
                   
                />
            )}
            {props.type === 'video' && (
                <CardMedia
                    component="div"
                    sx={{ position: 'relative', height: '500px' }}
                >
                    <video
                        src={props.media}
                        controls
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '4px',
                        }}
                    />
                </CardMedia>
            )}

            {/* قسم القابل للتوسيع (Collapse) */}


            {/* زر لتوسيع/طي المحتوى */}
            <PostStat handleExpandClick={handleExpandClick} expanded={expanded} />

        </Card>
    );
}

export default Post;
