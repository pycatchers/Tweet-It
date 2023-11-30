function Reddit(){

    // call https://www.reddit.com/r/react.json
    //get response and pass the required data to each component as props and received in respective component
    return(
        <>
            <Likes />
            <Pinned />
            <PostedBy />
            <Title />
            <Comment />
            <Share />
            <Save />
            <More />
        </>
    )
}

export default Reddit;