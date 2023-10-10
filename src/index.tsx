import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import App from './App'
import reportWebVitals from './reportWebVitals'

import { Global } from '@emotion/react'
import globalStyles from '@styles/globalStyles'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
