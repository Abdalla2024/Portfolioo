import { Apps } from './components/Apps'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { useReveal } from './useReveal'

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Apps />
        <Projects />
      </main>
    </>
  )
}

export default App
