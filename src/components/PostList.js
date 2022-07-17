import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TableTemplate from './Table'
import TextBox from './TextBox'

const labels = [
    { id: 'title', label: 'Title', style: { minWidth: 300, width: '50%' } },
    { id: 'body', label: 'Body', style: { minWidth: 100, align: 'right', width: '50%' } },
]
const fields = ['title', 'body']


const PostList = (props) => {
    const { posts, user } = props
    useEffect(() => {

    }, [user])
    const handleClick = () => {}
    return (
        <div>
            <TextBox data={`${user} 's Posts:`}/>
            <TableTemplate data={posts} labels={labels} fields={fields} handleClick={handleClick}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    user: state.user,
})
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(PostList);