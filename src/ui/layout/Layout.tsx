import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            {/* Header/Nav could go here later */}
            <main className="main-content">
                {children}
            </main>
            {/* Footer could go here later */}
        </div>
    )
}
