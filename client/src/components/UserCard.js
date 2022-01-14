function UserCard({eachUser, deleteThisUser}){

    function deleteUser(){
        deleteThisUser(eachUser)
    }
    return(
        <h1><button onClick={deleteUser}>X</button>{eachUser.name} {eachUser.wallet}</h1>
    )
}
export default UserCard