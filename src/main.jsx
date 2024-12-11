import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import { QuestionProvider } from './components/questionContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionProvider>
    <App />
   </QuestionProvider>
  </StrictMode>
)
