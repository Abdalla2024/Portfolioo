import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { useReveal } from './useReveal'

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
      </main>
    </>
  )
}

export default App
