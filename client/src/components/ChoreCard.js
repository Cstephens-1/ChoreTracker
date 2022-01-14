import styled from "styled-components"

function ChoreCard({eachChore, deleteThisChore}){

    function deleteChore(){
        deleteThisChore(eachChore)
    }


    return(
        <ChoreCardStyler>
            <h1>{eachChore.name} and you will earn {eachChore.value} point(s) <button onClick={deleteChore}>Delete</button></h1>
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