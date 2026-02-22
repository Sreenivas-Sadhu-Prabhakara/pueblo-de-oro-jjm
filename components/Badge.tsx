/**
 * Badge Component
 * Demonstrates badge styling for status indicators
 */

import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  className?: string
  icon?: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const variantClass = `badge-${variant}`

  return (
    <span className={`badge ${variantClass} ${className}`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  )
}

export default Badge
