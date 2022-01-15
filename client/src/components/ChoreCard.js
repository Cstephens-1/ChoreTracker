import { useEffect, useState } from "react"
import styled from "styled-components"

function ChoreCard({eachChore, deleteThisChore}){

    const [userSelect, setUserSelect] = useState([])

    useEffect(()=> fetch("http://127.0.0.1:3000/children")
    .then(resp => resp.json())
    .then(eachUser => setUserSelect(eachUser)), [userSelect])


    function deleteChore(){
        deleteThisChore(eachChore)
    }

    return(
        <ChoreCardStyler>
            <h1>
                <select>
                    {userSelect.map(eachUserSelect => {
                        return(
                            <option>{eachUserSelect.name}</option>
                        )
                    })}
                </select>
                {eachChore.name} and you will earn {eachChore.value} point(s) 
                <button>Mark as finished</button>
                <button onClick={deleteChore}>Delete</button>
            </h1>
        </ChoreCardStyler>
    )
}

export default ChoreCard

const ChoreCardStyler= styled.div`
    border-style: solid;
    border-width: 5px;
    border-color: black;
    border-radius: 50px;
    width: 800px;
    margin-bottom: 15px;
    margin-left: 25%;
    
`