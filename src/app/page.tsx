import layout from '@/app/layout.module.css'
// import styles from './page.module.css'

export default function Home() {
  return (
    <div className={layout.page}>
      <main className={layout.main}>
        <div className={layout.intro}>
          <h1>Trivia Quiz</h1>
          <p>
            Get as many answers as you can. Select number of questions and level
            of difficulty.
          </p>
        </div>
        <form action="/quiz" method="get">
          <label htmlFor="amount">Number of questions</label>
          <select name="amount" id="amount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty">
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button type="submit">Start Quiz</button>
        </form>
      </main>
    </div>
  )
}
