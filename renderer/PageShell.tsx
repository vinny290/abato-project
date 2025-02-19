import React from 'react'
import type { PageContext } from 'vike/types'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'

export { PageShell }

function PageShell({
	children,
	pageContext,
}: {
	children: React.ReactNode
	pageContext: PageContext
}) {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<Content>{children}</Content>
			</PageContextProvider>
		</React.StrictMode>
	)
}

function Content({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>
}
