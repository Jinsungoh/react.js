import {useState} from 'react'//기본적으로 리액트에서 제공하는걸 hook이라고한다.

export default function Main() {
    const [count, setCount] = useState(0)//구조분해할당

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
}