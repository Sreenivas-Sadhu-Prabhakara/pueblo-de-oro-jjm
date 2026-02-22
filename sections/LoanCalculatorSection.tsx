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

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loan Calculator
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Estimate your monthly payment and see what you can afford
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Property Price */}
            <div>
              <label htmlFor="price" className="block text-lg font-semibold text-gray-900 mb-2">
                Property Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-pueblo-600">₱</span>
                <input
                  id="price"
                  type="number"
                  value={state.price}
                  onChange={handlePriceChange}
                  min="0"
                  step="100000"
                  className="w-full pl-10 pr-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-pueblo-600 focus:outline-none transition-colors duration-200"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">Enter the total property price</p>
            </div>

            {/* Down Payment Percentage */}
            <div>
              <label htmlFor="downpayment" className="block text-lg font-semibold text-gray-900 mb-2">
                Down Payment ({state.downpayment}%)
              </label>
              <input
                id="downpayment"
                type="range"
                min="0"
                max="100"
                step="1"
                value={state.downpayment}
                onChange={handleDownpaymentChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pueblo-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₱{((state.price * state.downpayment) / 100).toLocaleString('en-PH', { maximumFractionDigits: 0 })}</span>
                <span>{state.downpayment}%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label htmlFor="interest" className="block text-lg font-semibold text-gray-900 mb-2">
                Annual Interest Rate ({state.interestRate}%)
              </label>
              <input
                id="interest"
                type="number"
                value={state.interestRate}
                onChange={handleInterestChange}
                min="0"
                step="0.1"
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-pueblo-600 focus:outline-none transition-colors duration-200"
              />
              <p className="text-sm text-gray-500 mt-2">Typical Pag-IBIG rates: 4-7%</p>
            </div>

            {/* Loan Term */}
            <div>
              <label htmlFor="term" className="block text-lg font-semibold text-gray-900 mb-2">
                Loan Term ({state.loanTermYears} years)
              </label>
              <input
                id="term"
                type="number"
                value={state.loanTermYears}
                onChange={handleTermChange}
                min="1"
                max="30"
                step="1"
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-pueblo-600 focus:outline-none transition-colors duration-200"
              />
              <p className="text-sm text-gray-500 mt-2">Typical range: 10-20 years</p>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetToDefaults}
              className="w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 active:bg-gray-400 transition-colors duration-200 min-h-[44px]"
            >
              Reset to Defaults
            </button>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Monthly Payment Result */}
            <div className="bg-gradient-to-br from-pueblo-500 to-pueblo-700 rounded-2xl p-8 text-white shadow-lg">
              <p className="text-sm font-semibold text-pueblo-100 uppercase tracking-wide mb-2">Monthly Payment</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                ₱{calculation.monthlyPayment.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
              </h3>
              <p className="text-pueblo-100">Based on your inputs</p>
            </div>

            {/* Loan Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Down Payment */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold mb-2">Down Payment</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₱{calculation.downpaymentAmount.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Loan Amount */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold mb-2">Loan Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₱{calculation.totalLoan.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Total Interest */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold mb-2">Total Interest</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₱{calculation.totalInterest.toLocaleString('en-PH', { maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Total Payment */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 text-sm font-semibold mb-2">Total Paid</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₱{(calculation.totalLoan + calculation.totalInterest).toLocaleString('en-PH', { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-blue-900 font-semibold mb-2">💡 Payment Summary</p>
              <p className="text-blue-800 text-sm">
                You need ₱{calculation.downpaymentAmount.toLocaleString('en-PH', { maximumFractionDigits: 0 })} upfront and ₱{calculation.monthlyPayment.toLocaleString('en-PH', { maximumFractionDigits: 0 })} per month for {state.loanTermYears} years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
