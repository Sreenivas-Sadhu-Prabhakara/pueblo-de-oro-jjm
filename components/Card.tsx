/**
 * Card Component
 * Demonstrates card styling with customizable content
 */

import React from 'react'

interface CardProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  size = 'md',
  className = '',
  hoverable = true,
}) => {
  const baseClass = 'card'
  const sizeClass = size !== 'md' ? `card-${size}` : ''
  const hoverClass = hoverable ? 'hover:shadow-lg cursor-pointer' : ''

  return (
    <div className={`${baseClass} ${sizeClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-pueblo-200 ${className}`}>
    {children}
  </div>
)

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 bg-pueblo-50 border-t border-pueblo-200 ${className}`}>
    {children}
  </div>
)

export default Card
