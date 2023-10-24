"use client"

import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(1)

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}