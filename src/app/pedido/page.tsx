import Link from 'next/link'
import { List } from '../components/list/List'
import { Counter } from '../components/counter/Counter'
import { Button } from '../components/button/Button'

export default async function Pedido() {
  const response = await fetch('http://localhost:8000/pizza/sizes')
  const data = await response.json()

  const handleClick = () => {}

  return (
    <div>
        <h1>Pedido</h1>
        <div>
          {data.map(({ id, flavours, size, slices, text}) => (
            <p key={id}>
              {flavours}, {size}, {slices}, {text}
            </p>
          ))}
        </div>
        <div>
        <List />
        </div>
        <div>
        <Counter />
        </div>
        <div>
        <Link href='/'>Home</Link>
        </div>
        <div>
          <Button onClick={handleClick}>Adicionar</Button>
        </div>
    </div>
  )
}