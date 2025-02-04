import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Avatar, Stack } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import '../Styles/Post.css'
import '../Styles/RightBar.css'
import '../Styles/NewPostPart.css'
import MenuIcon from '@mui/icons-material/Menu';
function NewPostPart() {
    let [postContent, setPostContent] = useState();
    let [media, setmedia] = useState();


    const handleContentChange = (event) => {
        setPostContent(event.target.value);

    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setmedia(URL.createObjectURL(file));
        }
    };

    const handlePost = () => {
        console.log({ media, postContent })
        if (window.localStorage.getItem('post')) {
            let posts = JSON.parse(window.localStorage.getItem('post'))
            posts.push({ media, postContent })
            window.localStorage.setItem('post', JSON.stringify(posts))
            window.location.reload()
        }
        if (!window.localStorage.getItem('post')) {
            let post = [{ media, postContent }]
            window.localStorage.setItem('post', JSON.stringify(post))

        }

        setPostContent('')
        setmedia(null)
    };
    const handleTrend = () => {
        let RightBar = document.querySelector('.right-bar')
        RightBar.classList.toggle('appear')
    }
    const handelSideBar= () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.classList.add('show')
    }
    let photo = JSON.parse(window.localStorage.getItem('data'))

    return (
        <>
            <div className=' h-14 flex justify-evenly items-center border-b border-gray-400 text-xl'>
                <MenuIcon className="menu2 cursor-pointer" onClick={handelSideBar} />
                <span className=' border-b-4 border-sky-500 text-xl cursor-pointer'>For You</span>
                <span className='cursor-pointer'>Following</span>
                <span onClick={handleTrend} className='trend cursor-pointer'>Trending</span>

            </div>
            <Box
                sx={{
                    width: '100%',
                    padding: 2,
                    borderRadius: '8px',
                    backgroundColor: 'black',
                    boxShadow: 2,
                }}
            >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                    {/* Profile Picture */}
                    <Avatar src={photo['photo']} alt='Moamen Adel' />

                    {/* Input and Preview */}
                    <Box sx={{ flex: 1 }}>
                        {/* Text Input */}
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="What's happening?"
                            variant="standard"
                            value={postContent}
                            onChange={handleContentChange}
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    color: 'white',
                                    fontSize: '25px',
                                    padding: '8px 0',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#fff',
                                },
                            }}
                            sx={{
                                backgroundColor: 'black',
                                padding: 2,
                            }}
                        />

                        {/* Image Preview */}
                        {media && (
                            <Box
                                component="img"
                                src={media}
                                alt="Uploaded preview"
                                sx={{
                                    width: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        )}

                        {/* Divider */}

                        {/* Action Buttons */}
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            {/* Media Icons */}
                            <Stack direction="row" spacing={1}>
                                <IconButton component="label" sx={{ color: '#fff' }} aria-label='upload'>
                                    <AddPhotoAlternateIcon />
                                    <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                                </IconButton>
                                <IconButton  sx={{ color: '#fff' }} aria-label='gif'>
                                    <GifBoxIcon />
                                </IconButton>
                                <IconButton sx={{ color: '#fff' }} aria-label='EmojiEmotionsIcon'>
                                    <EmojiEmotionsIcon />
                                </IconButton>
                                <IconButton sx={{ color: '#fff' }} aria-label='stat'>
                                    <InsertChartIcon />
                                </IconButton>
                            </Stack>

                            {/* Post Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#1da1f2',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#1a91da',
                                    },
                                }}
                                disabled={!postContent && !media}
                                onClick={handlePost}
                            >
                                Tweet
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default NewPostPart;
