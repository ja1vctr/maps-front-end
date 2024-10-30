'use client'
import Sidebar from './Components/Sidebar'
import Mapa from './Components/Mapa'

export default function Home() {
  const onSubmit = () => {}

  return (
    <main className="bg-white flex flex-row justify-between">
      <Sidebar onSubmit={onSubmit} />
      <div className="flex w-full h-screem justify-center items-center">
        <Mapa latitude={0} longitude={0} zoom={2}></Mapa>
      </div>
    </main>
  )
}
