import Post from "./Post"
let get = () => {
    if (window.localStorage.getItem('post')) {

        let post = JSON.parse(window.localStorage.getItem('post'))
        let data = JSON.parse(window.localStorage.getItem('data'))
        return post.map((post, index) => {
            return <Post key={index} date={'25 December 2024'} username={data['username']} avatar={data['photo']} media={post.media} type={'image'} content={post.postContent} />
        })
    }
}
function GetPosts() {

    return (
        <>
            {get()}
        </>
    )



}
export default GetPosts