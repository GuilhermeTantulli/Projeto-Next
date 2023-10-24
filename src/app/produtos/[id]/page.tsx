import Link from 'next/link'

export default function Produtos({ params: { id }}) {
  return (
    <div>
        <h1>Produtos</h1>
        <h2>{id}</h2>
        <Link href='/'>Home</Link>
    </div>
  )
}