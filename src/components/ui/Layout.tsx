import React, { ReactNode } from 'react'

type LayoutProps = {
  className?: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-8 dark:bg-dark md:p-12 lg:p-8 xl:p-16 ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
