import {useEffect, useState} from "react"
import styled from "styled-components"
import Rewards from "./Rewards"
import UserCard from "./UserCard"

function Wallet(){

    const [users, setUsers] = useState([])
    const [newUserName, setNewUserName] = useState("")
    const [newUserValue, setNewUserValue] = useState("")

    //fetch all children to access their wallets
    function fetchUsers(){
        fetch("http://127.0.0.1:3000/children")
        .then(resp => resp.json())
        .then(eachChild => setUsers(eachChild))
    }

    function addNewUser(synthEvent){
        synthEvent.preventDefault()
        const newUser = {
            name: newUserName,
            wallet: newUserValue
        }
        fetch("http://127.0.0.1:3000/children", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(newUser)})
            .then(resp=> resp.json())
            .then(newUser =>{
                setUsers([...users, newUser])
            })
        }
    

    useEffect(fetchUsers, [users])

    function deleteThisUser(user){
        fetch(`http://127.0.0.1:3000/children/${user.id}`,
        {
            method: "DELETE"
        });
        let usersRemaining = users.filter(eachUser=> eachUser.id !== user.id)
        setUsers([...usersRemaining])
    }

    return(
        <WalletBox>
            <H1Styler>Wallet</H1Styler>
            {users.map(eachUser => {
                return(
                    <>
                    
                        <UserCard eachUser={eachUser} deleteThisUser={deleteThisUser}/>
                    </>
                )
            })}
            <form>
                <input placeholder="new name" value={newUserName} onChange={e=> setNewUserName(e.target.value)}></input>
                <input placeholder="wallet value" value={newUserValue} onChange={e=> setNewUserValue(e.target.value)}></input>
                <button onClick={addNewUser}>Add a new user</button>
            </form>
            <button>Rewards</button>
        </WalletBox>
    )
}

export default Wallet

const WalletBox = styled.div`
    background-color: aqua;
    border-style: solid;
    border-color: black;
    border-width: 5px;
    width: 200px;
    right: 10px;
    position: absolute;
    border-radius: 15px;
`

const H1Styler = styled.h1`
    text-decoration: underline
`