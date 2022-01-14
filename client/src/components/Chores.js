import { useEffect, useState } from "react"
import styled from "styled-components"
import ChoreCard from "./ChoreCard"

function Chores(){

    const [chores, setChores] = useState([])
    const [newChoreName, setNewChoreName] = useState("")
    const [newChoreValue, setNewChoreValue] = useState("")

    //fetch all chores that need to be done
    function fetchChores(){
        fetch("http://127.0.0.1:3000/chores")
        .then(resp => resp.json())
        .then(eachChild => setChores(eachChild))
    }

    useEffect(fetchChores, [])

    //add a new chore to the chorelist
    function addAChore(synthEvent){
        synthEvent.preventDefault()
        const newChore = {
            name: newChoreName,
            value: newChoreValue,
            finished: false
        };
        fetch("http://127.0.0.1:3000/chores", {
            method: "POST", 
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(newChore)})
            .then(resp => resp.json())
            .then(choresFromDB => {
                setChores([...chores, choresFromDB])
            })
            fetchChores()
    }

    //delete a chore from the chore list
    function deleteThisChore(chore){
            fetch(`http://127.0.0.1:3000/chores/${chore.id}`,
            {
            method: "DELETE"
        });
        let choresRemaining = chores.filter(eachChore=> eachChore.id !== chore.id)
        setChores([...choresRemaining])
    }
    

    return(
        <>
            <FormStyler>
                <h1>Chores</h1>
                <form onSubmit={addAChore}>Add a new chore
                    <input type="text" value={newChoreName} placeholder="add a chore name" onChange={e=> setNewChoreName(e.target.value)}></input>
                    <input type="text" value={newChoreValue} placeholder="add a chore's worth" onChange={e=> setNewChoreValue(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </FormStyler>
            {chores.map(eachChore=> {
                return(
                    <>
                        <ChoreCard eachChore={eachChore} deleteThisChore={deleteThisChore}/>
                    </>
                )
                })
            }
        </>
    )
}

export default Chores

const FormStyler= styled.div`
    background-color: aqua;
    margin-bottom: 10px;
    border-style: solid;
    border-width: 7px;
    border-radius: 10px;
    width: 60%;
    margin-left: 20%;
    padding-bottom: 10px;
`