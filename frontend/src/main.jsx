import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* this is sharjeel ahmed */}

    <App />
  </React.StrictMode>
)
// export async function getServerSideProps({ context }) {

//   const client = createClient({
//     projectId: "j8oujvy4",
//     dataset: "production",
//     useCdn: true
//   });
//   const query = `*[_type == "blog"]`;
//   const blogs = await client.fetch(query);
//   return {
//     props: {
//       blogs
//     }
//   }



// }