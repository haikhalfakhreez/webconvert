import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Converter() {
  const [selectedUnit, setSelectedUnit] = useState('px')
  const [baseSize, setBaseSize] = useState(16)
  const [rem, setRem] = useState('')
  const [px, setPx] = useState('')

  function handleBaseSizeChange(e) {
    setBaseSize(() => e.target.value)
    setPx(e.target.value * rem)
  }

  function handlePxChange(value) {
    if (value) {
      setPx(value)
      setRem(value / baseSize)
    } else {
      setPx('')
      setRem('')
    }
  }

  function handleRemChange(value) {
    if (value) {
      setPx(baseSize * value)
      setRem(value)
    } else {
      setPx('')
      setRem('')
    }
  }

  function swapUnit() {
    const temp = selectedUnit === 'px' ? px : rem
    setSelectedUnit((prev) => {
      if (prev === 'px') return 'rem'
      return 'px'
    })
    setPx(() => {
      if (selectedUnit === 'rem') return temp
      return baseSize * temp
    })
    setRem(() => {
      if (selectedUnit === 'px') return temp
      return temp / baseSize
    })
  }

  return (
    <div className="prose mx-6 w-full max-w-full py-10 md:mx-0">
      <h1 className="text-xl font-semibold">PX to REM Converter</h1>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {selectedUnit === 'px' ? (
          <>
            <ConvertInput unit="px" onChange={(e) => handlePxChange(e.target.value)} value={px} />

            <button onClick={swapUnit}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-slate-500 hover:text-slate-700" />
            </button>

            <ConvertInput unit="rem" onChange={(e) => handleRemChange(e.target.value)} value={rem} />
          </>
        ) : (
          <>
            <ConvertInput unit="rem" onChange={(e) => handleRemChange(e.target.value)} value={rem} />

            <button onClick={swapUnit}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-slate-500 hover:text-slate-700" />
            </button>

            <ConvertInput unit="px" onChange={(e) => handlePxChange(e.target.value)} value={px} />
          </>
        )}
      </div>

      <p className="text-sm text-gray-500">
        1 rem = <BaseSizeInput onChange={handleBaseSizeChange} value={baseSize} /> px.
      </p>
    </div>
  )
}

function ConvertInput({ unit, onChange, value }) {
  return (
    <div className="relative w-full overflow-hidden rounded-md border border-gray-300">
      <input
        className="h-full w-full p-2 text-center text-3xl font-semibold text-blue caret-slate-700 outline-none"
        type="number"
        onChange={onChange}
        value={value}
      />
      <span className="absolute right-3 top-2/4 -translate-y-2/4 font-semibold leading-none text-gray-600/50">
        {unit}
      </span>
    </div>
  )
}

function BaseSizeInput({ onChange, value }) {
  return (
    <input
      type="number"
      className="rounded border border-gray-200 px-1 text-center font-medium text-slate-700 outline-none"
      style={{ width: '3rem' }}
      onChange={onChange}
      value={value}
    />
  )
}
