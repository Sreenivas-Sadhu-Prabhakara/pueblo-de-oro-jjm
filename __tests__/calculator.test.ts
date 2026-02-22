import { describe, expect, it } from '@jest/globals';

// Pure loan calculation function for testing
function calculatePayment(
  price: number,
  downpaymentPercent: number,
  interestRatePercent: number,
  years: number
): { monthlyPayment: number; totalLoan: number; downpaymentAmount: number; totalInterest: number } {
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

describe('Loan Calculator', () => {
  describe('Default Values', () => {
    it('should calculate correct monthly payment with default values (2.4M, 20%, 7%, 20 years)', () => {
      const result = calculatePayment(2400000, 20, 7, 20)
      
      expect(result.downpaymentAmount).toBe(480000)
      expect(result.totalLoan).toBe(1920000)
      expect(result.monthlyPayment).toBeGreaterThan(13000)
      expect(result.monthlyPayment).toBeLessThan(14000)
    })
  })

  describe('Edge Cases', () => {
    it('should handle zero down payment', () => {
      const result = calculatePayment(2400000, 0, 7, 20)
      
      expect(result.downpaymentAmount).toBe(0)
      expect(result.totalLoan).toBe(2400000)
      expect(result.monthlyPayment).toBeGreaterThan(16000)
    })

    it('should handle 100% down payment', () => {
      const result = calculatePayment(2400000, 100, 7, 20)
      
      expect(result.downpaymentAmount).toBe(2400000)
      expect(result.totalLoan).toBe(0)
      expect(result.monthlyPayment).toBe(0)
    })

    it('should handle zero interest rate', () => {
      const result = calculatePayment(2400000, 20, 0, 20)
      
      expect(result.downpaymentAmount).toBe(480000)
      expect(result.totalLoan).toBe(1920000)
      // Monthly payment should be loan / months
      expect(result.monthlyPayment).toBeCloseTo(1920000 / (20 * 12), 2)
      expect(result.totalInterest).toBe(0)
    })

    it('should handle negative price (invalid)', () => {
      const result = calculatePayment(-2400000, 20, 7, 20)
      
      expect(result.monthlyPayment).toBe(0)
      expect(result.totalLoan).toBe(0)
    })

    it('should handle invalid down payment > 100%', () => {
      const result = calculatePayment(2400000, 150, 7, 20)
      
      expect(result.monthlyPayment).toBe(0)
    })

    it('should handle negative interest (invalid)', () => {
      const result = calculatePayment(2400000, 20, -5, 20)
      
      expect(result.monthlyPayment).toBe(0)
    })

    it('should handle zero or negative years (invalid)', () => {
      const result = calculatePayment(2400000, 20, 7, 0)
      
      expect(result.monthlyPayment).toBe(0)
    })
  })

  describe('Single Attached Model', () => {
    it('should calculate correct payment for 3.6M single attached', () => {
      const result = calculatePayment(3600000, 20, 7, 20)
      
      expect(result.downpaymentAmount).toBe(720000)
      expect(result.totalLoan).toBe(2880000)
      expect(result.monthlyPayment).toBeGreaterThan(19000)
      expect(result.monthlyPayment).toBeLessThan(21000)
    })
  })

  describe('Different Loan Terms', () => {
    it('should calculate lower monthly payment for longer term', () => {
      const result10yr = calculatePayment(2400000, 20, 7, 10)
      const result20yr = calculatePayment(2400000, 20, 7, 20)
      
      expect(result10yr.monthlyPayment).toBeGreaterThan(result20yr.monthlyPayment)
    })

    it('should calculate higher total interest for longer term', () => {
      const result10yr = calculatePayment(2400000, 20, 7, 10)
      const result20yr = calculatePayment(2400000, 20, 7, 20)
      
      expect(result20yr.totalInterest).toBeGreaterThan(result10yr.totalInterest)
    })
  })

  describe('Interest Calculation', () => {
    it('should correctly calculate total interest', () => {
      const result = calculatePayment(1000000, 20, 5, 10)
      const expectedTotalPayment = result.monthlyPayment * (10 * 12)
      const expectedInterest = expectedTotalPayment - result.totalLoan
      
      expect(result.totalInterest).toBeCloseTo(expectedInterest, 0)
    })
  })

  describe('Currency Formatting', () => {
    it('should format values as numbers for currency conversion', () => {
      const result = calculatePayment(2400000, 20, 7, 20)
      
      expect(typeof result.monthlyPayment).toBe('number')
      expect(typeof result.downpaymentAmount).toBe('number')
      expect(typeof result.totalLoan).toBe('number')
      expect(typeof result.totalInterest).toBe('number')
    })
  })
})
