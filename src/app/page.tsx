import NavBar from "./components/Navbar"
import InputComponent from "./components/InputComponent"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="w-5/6 font-mono">
        <NavBar />
        <InputComponent/>
      </div>
    </main>
  )
}
