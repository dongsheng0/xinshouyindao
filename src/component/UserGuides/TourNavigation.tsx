// @ts-nocheck
import React from 'react'

interface TourNavigationProps {
  total: number
  step: number
  goTo: (step: number) => void
  close: () => void
}

export const TourNavigation: React.FC<TourNavigationProps> = ({
  step,
  total,
  goTo,
  close,
}) => (
  <div className="buttons">
    {step > 1 && (
      <div className="button" onClick={() => goTo(step - 2)}>
        上一步
      </div>
    )}
    {step < total && (
      <div className="button" onClick={() => goTo(step)}>
        下一步
      </div>
    )}
    {step === total && (
      <div className="button" onClick={close}>
        完成
      </div>
    )}
  </div>
)
