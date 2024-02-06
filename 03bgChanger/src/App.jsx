import { useState } from 'react'

function App() {

  const [color, setColor] = useState('#313131')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-lg px-2 py-2'>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'olive'}} onClick={() => setColor('olive')}>olive</button>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'gray'}} onClick={() => setColor('gray')}>Gray</button>
          <button className='outline-none px-4 py-2 text-black rounded-full' style={{backgroundColor: 'yellow'}} onClick={() => setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 py-2 text-black rounded-full' style={{backgroundColor: 'pink'}} onClick={() => setColor('pink')}>Pink</button>
          <button className='outline-none px-4 py-2 text-black rounded-full' style={{backgroundColor: 'white'}} onClick={() => setColor('white')}>White</button>
          <button className='outline-none px-4 py-2 text-white rounded-full' style={{backgroundColor: 'black'}} onClick={() => setColor('black')}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
