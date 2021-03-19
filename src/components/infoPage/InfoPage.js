import React, {useEffect} from 'react'
import {connect} from "react-redux";
import s from './infoPage.module.css'
import {addPost, like, updatePost} from "../../store/actions/posts";
import usePageBottom from "../../utils/usePageBottom";
import Loader from "../Loader/Loader";

const InfoPage = ({postsList, like, addPost, firstPost, updatePost, loading}) => {

    const [post, setPost] = React.useState('')
    const [isLike, setIsLike] = React.useState(true)

    const isPageBottom = usePageBottom()
    const newPosts = postsList.slice(1, 5)

    useEffect(() => {

        if (!isPageBottom || !postsList) return;

        updatePost(newPosts)


    }, [isPageBottom])

    const renderPosts = React.useMemo(() => {
        return (
            <>
                {firstPost.map((item, index) => (
                    <div key={index} className={s.Post}>
                        <p>
                            {item.text}
                        </p>
                        <div className={s.SomeImage}>
                            <div className={s.Like}>
                                {item.likes}
                                <button
                                    onClick={() => likeClickHandler(item.id)}
                                >&hearts;</button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }, [firstPost.length])

    const onChangePostHandler = (event) => {
        event.preventDefault()
        setPost(event.target.value)
    }

    const likeClickHandler = (postId) => {
        like(postId, isLike)
        setIsLike(!isLike)
    }

    return (
        <div className={s.InfoPage}>
            <h1>InfoPage</h1>
            <form onSubmit={event => event.preventDefault()}>
                <label htmlFor="post">Create post</label>
                <input
                    type="text"
                    id={'post'}
                    value={post}
                    onChange={onChangePostHandler}
                />
            </form>
            <button onClick={() => addPost(post, postsList.length + 1)}>add post</button>
            {renderPosts}
            {loading ? null : <Loader/> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        postsList: state.posts.postsList,
        firstPost: state.posts.firstPost,
        loading: state.posts.loading
    }
}

export default connect(mapStateToProps, {like, addPost, updatePost})(InfoPage)