import { Apps } from './components/Apps'
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
        <Apps />
      </main>
    </>
  )
}

export default App
