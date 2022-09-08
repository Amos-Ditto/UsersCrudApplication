import { styled } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { TopBar } from './components/TopBar'
import './index.css'


const Main = styled('main')({
  width: '100%',
  height: '100%',
  padding: '0%'
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main>
      <TopBar />
      <section className='body-section'>
        <App />
      </section>
    </Main>
  </React.StrictMode>
)
