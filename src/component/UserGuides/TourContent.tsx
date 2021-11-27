// @ts-nocheck
import React  from 'react'
import { TourNavigation } from './TourNavigation'

interface TourContentProps {
  step: number
  total: number
  inDOM: boolean
  goTo: (step: number) => void
  close: () => void
  style: any
  className: string
}

export const TourContent: React.FC<TourContentProps> = ({
  close,
  goTo,
  inDOM,
  step,
  total,
  children,
  style,
  className,
}) => {
  return (
    <>
      <div className="tourContent-box">
      <div className={className}  style={{ ...style }}>
      {children}
      <TourNavigation step={step} goTo={goTo} total={total} close={close} />
     </div>
     <div className="out">
          {/* <div className="in"></div> */}
    </div>
    </div>
      <div className="pointer-nav" onClick={() => goTo(step)}>
        <div className='round-point'></div>
    </div>
    </>
  )
}
