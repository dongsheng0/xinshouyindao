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
    <div className={className} style={{ ...style }}>
      {children}
      <TourNavigation step={step} goTo={goTo} total={total} close={close} />
    </div>
  )
}
