/**
 * Input Component
 * Demonstrates input field styling
 */

import React from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  required?: boolean
  helpText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled = false,
  size = 'md',
  className = '',
  required = false,
  helpText,
}) => {
  const sizeClass = size !== 'md' ? `input-${size}` : ''
  const errorClass = error ? 'border-pueblo-danger focus:ring-pueblo-danger' : ''

  return (
    <div className="w-full">
      {label && (
        <label className="label">
          {label}
          {required && <span className="text-pueblo-danger ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input ${sizeClass} ${errorClass} ${className}`}
        required={required}
      />
      {error && <p className="mt-1 text-sm text-pueblo-danger">{error}</p>}
      {helpText && !error && <p className="mt-1 text-sm text-pueblo-500">{helpText}</p>}
    </div>
  )
}

export default Input
