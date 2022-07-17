/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _ from 'lodash'
import TableTemplate from './Table'
import { setUser } from '../store/users';
import { loadPost } from '../store/posts';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

const labels = [
  { id: 'name', label: 'Name', style: { minWidth: 300, width: '25%' } },
  { id: 'email', label: 'Email', style: { minWidth: 100, width: '25%' } },
  { id: 'city', label: 'City', style: { minWidth: 100, width: '25%' } },
  { id: 'company', label: 'Company', style: { minWidth: 100, align: 'right', width: '25%' } },
]
const fields = ['name', 'email', 'address.city', 'company.name']

const UserList = (props) => {
  const { users, user, handleClicked, loadPostToStore, setUser, needFilter } = props;
  const classes = useStyles()

  const selectedUsers = user ? users.filter(u => u.name === user) : users;
  useEffect(() => {

  }, [users])

  const handleClick = (id) => {
    loadPostToStore(id)
    const user = users.find(u => u.id === id)
    const userName = _.get(user, 'name', '')
    setUser(userName)
    handleClicked()

  }
  return (
    <div className={classes.root}>
      <TableTemplate data={needFilter ? selectedUsers : users} labels={labels} fields={fields} handleClick={handleClick} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
  loadPostToStore: (id) => dispatch(loadPost(id)),
  setUser: (user) => dispatch(setUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList);