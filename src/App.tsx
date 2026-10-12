import { Apps } from './components/Apps'
import { Contact } from './components/Contact'
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
        <Contact />
      </main>
    </>
  )
}

export default App
