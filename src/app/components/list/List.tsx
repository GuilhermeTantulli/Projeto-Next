export const List = async () => {
    const response = await fetch("http://localhost:8000/payment/options")
    const list = await response.json()
    return (
        <ul>
            {list.map(({ id, value, text }) => (
                <li key={id}>
                    {value}, {text}
                </li>
            ))}
        </ul>
    )
}