
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { loadUsers, setUser } from '../store/users';
import PostList from './PostList'
import UserList from './UserList'
import AutocompleteBox from './AutoComplete'


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
}));

function Home(props) {

    const classes = useStyles()
    const { users, loadUsers, setUser, user } = props
    const [ openPosts, setOpenPosts ] = useState(false)
    const [ needFilter, setNeedFilter ] = useState(false)

    useEffect(() => {
        loadUsers()
    }, [loadUsers, user])

    const handleSelected = (value) => {
        setUser(value)
        setNeedFilter(true)
    }

    const handleClicked = () => {
        setOpenPosts(true)
    }

    const options = users && users.map(i => ({
        title: i.name
    }))

    return (
        <div className={classes.root} id="home">
            <AutocompleteBox options={options} handleSelected={handleSelected} />
            <UserList handleClicked={handleClicked} needFilter={needFilter}/>
            {openPosts ? <PostList/> : null}
        </div>
    );
}

const mapStateToProps = (state) => ({
    users: state.users,
    user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(loadUsers()),
    setUser: (data) => dispatch(setUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
