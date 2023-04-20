import { useState } from "react";

export default function Main() {
    console.log('1')
    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
            <BedRoom/>{' '}            
        </>
    )
}

function LivingRoom() {
    console.log('2')
    const [isLight, setIsLight] = useState(false)
    let roomName = '거실'
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function RestRoom() {
    console.log('3')
    const [isLight, setIsLight] = useState(false)
    let roomName = '화장실'
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function BedRoom() {
    console.log('4')
    const [isLight, setIsLight] = useState(false)
    let roomName = '침실'
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}