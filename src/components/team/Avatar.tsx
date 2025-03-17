import { AvatarProps } from '@/types/team'
import React from 'react'

// Avatar components
const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => {
    return (
      <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ""}`} {...props}>
        {children}
      </div>
    )
}

export default Avatar