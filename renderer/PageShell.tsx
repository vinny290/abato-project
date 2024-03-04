import React from 'react'
import { Page } from '../src/pages/index/+Page'
// import './PageShell.css'
// import './index.css'

export { PageShell }

function PageShell() {
	return (
		<React.StrictMode>
			<Page />
		</React.StrictMode>
	)
}
