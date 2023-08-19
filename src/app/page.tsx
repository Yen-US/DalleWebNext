import NavBar from "./components/Navbar"
import InputComponent from "./components/InputComponent"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <NavBar />
        <InputComponent/>
      </div>
    </main>
  )
}
