import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next</h1>
      <Link href='/pedido'>Pedido</Link>
    </main>
  )
}