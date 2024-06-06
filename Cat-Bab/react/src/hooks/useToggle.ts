import {useState,React} from 'react'

const useToggle = (initialValue:bolean=false) => {
  const [state , setState] = useState(initialValue);
  const toggle = () => setState((state) =>!state);
    return [state, toggle] as const;  
}

export default useToggle