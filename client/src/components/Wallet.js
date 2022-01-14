import {useEffect, useState} from "react"
import styled from "styled-components"
import Rewards from "./Rewards"

function Wallet(){

    const [wallet, setWallet] = useState([])

    //fetch all children to access their wallets
    function fetchWallets(){
        fetch("http://127.0.0.1:3000/children")
        .then(resp => resp.json())
        .then(eachChild => setWallet(eachChild))
    }

    useEffect(fetchWallets, [])

    return(
        <WalletBox>
            <H1Styler>Wallet</H1Styler>
            {wallet.map(eachWallet => {
                return(
                    <h1>{eachWallet.name} {eachWallet.wallet}</h1>
                )
            })}
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