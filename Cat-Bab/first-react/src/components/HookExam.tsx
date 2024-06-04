import {useRef , React} from 'react'

const HookRefExp = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () =>{
        inputRef.current?.focus()
    }
    const playVideo = () =>{
       if (videoRef.current) {
        videoRef.current?.play()
       } 
    }

    const pauseVideo = () =>{
       if (videoRef.current) {
        videoRef.current?.pause()
       } 
    }

  return (
    <div className="p-4 flex gap-x-6 gap-y-6">
      <div>
      <input ref={inputRef} type="text" className="border p-2" placeholder="Focus me" />
        <button onClick={focusInput} className="bg-blue-500 text-white p-2 mt-2">Focus
        </button>
      </div>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <video
        ref={videoRef}
        className="w-full max-w-md mb-4"
        src="https://www.youtube.com/watch?v=lmnVP35uZFY&"
        controls
        />
        <div className="flex space-x-4">
          <button onClick={playVideo} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            play
          </button>
          <button onClick={pauseVideo} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            pause
          </button>
        </div>
       </div>
    </div>
  )
}

export default HookRefExp