import React, {  ReactElement, useEffect, useRef } from 'react'

interface Props {
  onClickOutside: () => void
  children: ReactElement
}

const ClickOutSide: React.FC<Props> = ({ onClickOutside, children }) => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        onClickOutside && onClickOutside()
      }
    };
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    };
  }, [onClickOutside])
  return (
    <div ref={ref}>
      {children}
    </div>)
}

export default ClickOutSide