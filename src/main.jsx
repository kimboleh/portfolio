import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'

// Restore path from GitHub Pages 404 redirect
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    //</React.StrictMode>,
)