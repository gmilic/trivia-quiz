import Link from 'next/link'

import layout from '@/app/layout.module.css'
import styles from './quiz.module.css'

type QuizPageProps = {
  searchParams: Promise<{
    amount?: string
    difficulty?: string
  }>
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const params = await searchParams

  const amount = params.amount || '10'
  const difficulty = params.difficulty || 'Any'

  return (
    <div className={layout.page}>
      <main className={layout.main}>
        <h1>Trivia Quiz</h1>
        <p>Questions: {amount}</p>
        <p>Difficulty: {difficulty}</p>

        <Link href="/" className={styles.homeLink}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v11h14V9" />
            <path d="M9 20v-6h6v6" />
          </svg>
          Home
        </Link>
      </main>
    </div>
  )
}
