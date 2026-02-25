'use client'

import React, { useMemo, useState } from 'react'

interface CalculatorState {
  price: number
  downpayment: number
  interestRate: number
  loanTermYears: number
}

export function LoanCalculator() {
  const [state, setState] = useState<CalculatorState>({
    price: 2400000,
    downpayment: 20,
    interestRate: 7,
    loanTermYears: 20
  })

  const defaults = {
    price: 2400000,
    downpayment: 20,
    interestRate: 7,
    loanTermYears: 20
  }

  // Pure calculation function
  const calculatePayment = (
    price: number,
    downpaymentPercent: number,
    interestRatePercent: number,
    years: number
  ): { monthlyPayment: number; totalLoan: number; downpaymentAmount: number; totalInterest: number } => {
    // Validate inputs
    if (price <= 0 || downpaymentPercent < 0 || downpaymentPercent > 100 || interestRatePercent < 0 || years <= 0) {
      return {
        monthlyPayment: 0,
        totalLoan: 0,
        downpaymentAmount: 0,
        totalInterest: 0
      }
    }

    const downpaymentAmount = (price * downpaymentPercent) / 100
    const loanAmount = price - downpaymentAmount
    const monthlyRate = interestRatePercent / 100 / 12
    const numberOfMonths = years * 12

    let monthlyPayment = 0

    // Handle zero interest
    if (interestRatePercent === 0) {
      monthlyPayment = loanAmount / numberOfMonths
    } else {
      // Standard loan payment formula
      monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfMonths))
    }

    const totalPayment = monthlyPayment * numberOfMonths
    const totalInterest = totalPayment - loanAmount

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalLoan: loanAmount,
      downpaymentAmount,
      totalInterest: totalInterest > 0 ? totalInterest : 0
    }
  }

  const calculation = useMemo(() => {
    return calculatePayment(state.price, state.downpayment, state.interestRate, state.loanTermYears)
  }, [state])

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    setState({ ...state, price: Math.max(0, value) })
  }

  const handleDownpaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    setState({ ...state, downpayment: Math.max(0, Math.min(100, value)) })
  }

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    setState({ ...state, interestRate: Math.max(0, value) })
  }

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0
    setState({ ...state, loanTermYears: Math.max(1, value) })
  }

  const resetToDefaults = () => {
    setState(defaults)
  }

  const inputClass = 'w-full px-4 py-3 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors'
  const labelClass = 'block text-sm font-semibold text-neutral-700 mb-1.5'

  return (
    <section id="calculator" className="section bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="section-heading">
          <span className="section-eyebrow">Pag-IBIG Financing</span>
          <h2 className="section-title">Loan Calculator</h2>
          <p className="section-subtitle">
            Estimate your monthly payment and see what you can afford
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-8 space-y-5">
            <div>
              <label htmlFor="price" className={labelClass}>Property Price</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-primary-500 text-sm">₱</span>
                <input id="price" type="number" value={state.price} onChange={handlePriceChange} min="0" step="100000"
                  className={`${inputClass} pl-8`} />
              </div>
              <p className="text-xs text-neutral-400 mt-1">Enter the total property price</p>
            </div>

            <div>
              <label htmlFor="downpayment" className={labelClass}>Down Payment — {state.downpayment}%</label>
              <input id="downpayment" type="range" min="0" max="100" step="1" value={state.downpayment}
                onChange={handleDownpaymentChange}
                className="w-full h-2 rounded-full bg-neutral-200 appearance-none cursor-pointer accent-primary-500" />
              <div className="flex justify-between text-xs text-neutral-400 mt-1.5">
                <span>₱{((state.price * state.downpayment) / 100).toLocaleString('en-PH', { maximumFractionDigits: 0 })}</span>
                <span>{state.downpayment}%</span>
              </div>
            </div>

            <div>
              <label htmlFor="interest" className={labelClass}>Annual Interest Rate — {state.interestRate}%</label>
              <input id="interest" type="number" value={state.interestRate} onChange={handleInterestChange} min="0" step="0.1"
                className={inputClass} />
              <p className="text-xs text-neutral-400 mt-1">Typical Pag-IBIG rates: 4–7%</p>
            </div>

            <div>
              <label htmlFor="term" className={labelClass}>Loan Term — {state.loanTermYears} years</label>
              <input id="term" type="number" value={state.loanTermYears} onChange={handleTermChange} min="1" max="30" step="1"
                className={inputClass} />
              <p className="text-xs text-neutral-400 mt-1">Typical range: 10–20 years</p>
            </div>

            <button onClick={resetToDefaults}
              className="w-full py-2.5 text-sm font-semibold text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-xl hover:bg-neutral-200 transition-colors">
              Reset to Defaults
            </button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-lg shadow-primary-500/20">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-100 mb-2">Monthly Payment</p>
              <p className="text-5xl font-black mb-1">
                ₱{calculation.monthlyPayment.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-primary-200 text-sm">Based on your inputs</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Down Payment',   value: calculation.downpaymentAmount },
                { label: 'Loan Amount',    value: calculation.totalLoan },
                { label: 'Total Interest', value: calculation.totalInterest },
                { label: 'Total Paid',     value: calculation.totalLoan + calculation.totalInterest },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-neutral-200 shadow-card">
                  <p className="text-xs font-semibold text-neutral-500 mb-1">{label}</p>
                  <p className="text-lg font-black text-neutral-900">
                    ₱{value.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-5 bg-blue-50 border border-blue-200 rounded-2xl">
              <span className="text-xl leading-none flex-shrink-0 mt-0.5">💡</span>
              <p className="text-sm text-blue-800">
                You need <strong>₱{calculation.downpaymentAmount.toLocaleString('en-PH', { maximumFractionDigits: 0 })}</strong> upfront
                and <strong>₱{calculation.monthlyPayment.toLocaleString('en-PH', { maximumFractionDigits: 0 })}/mo</strong> for {state.loanTermYears} years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
