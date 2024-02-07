import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNum, setAllowNums] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // password generator method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowNum) str += "0123456789"
    if (allowChar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char]
    }

    setPassword(pass)

  }, [length, allowNum, allowChar, setPassword])

  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  }
  
  useEffect(passwordGenerator, [length, allowNum, allowChar])



  return (
    <>
      <div className='w-full max-w-md m-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-2xl my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-5'>
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-5'>
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id='numberAllowed'
              onChange={() => {
                setAllowNums((prev) => !prev)
              }}
            />
            <label htmlFor="numberAllowed">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={allowChar}
              id='characterAllowed'
              onChange={() => {
                setAllowChar((prev) => !prev)
              }}
            />
            <label htmlFor="characterAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
