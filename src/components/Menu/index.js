import './index.css';
import React, { useState } from "react"
import {Link} from '@reach/router'; 

function Menu() {

    const [hamOpen, setHamOpen] = useState(false)
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setHamOpen(!hamOpen)
        setNavbarOpen(!navbarOpen)
    }

    return (
        <header className="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-white py-6 px-6 relative bg-gray-200">
            <a href="/"><p>Logo</p></a>
            <button onClick={handleToggle} className="inline-block md:hidden w-8 h-8 text-gray-600 p-1">
                { hamOpen ?
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.60023 4.25431L10.0001 8.65376L14.4 4.26764C14.4866 4.1795 14.5906 4.1103 14.7053 4.0644C14.8201 4.01851 14.9431 3.99692 15.0666 4.00101C15.309 4.01669 15.5374 4.12005 15.7091 4.29178C15.8809 4.46351 15.9843 4.69187 15.9999 4.93422C16.0012 5.05338 15.9781 5.17155 15.9323 5.28155C15.8865 5.39155 15.8188 5.49109 15.7333 5.57414L11.3201 10.0003L15.7333 14.4264C15.9066 14.5944 16.0026 14.8263 15.9999 15.0663C15.9843 15.3087 15.8809 15.537 15.7091 15.7087C15.5374 15.8805 15.309 15.9838 15.0666 15.9995C14.9431 16.0036 14.8201 15.982 14.7053 15.9361C14.5906 15.8902 14.4866 15.821 14.4 15.7329L10.0001 11.3468L5.61356 15.7329C5.52693 15.821 5.42296 15.8902 5.30821 15.9361C5.19346 15.982 5.07043 16.0036 4.94691 15.9995C4.70001 15.9867 4.46663 15.8828 4.29181 15.708C4.11699 15.5332 4.01312 15.2998 4.00027 15.053C3.99907 14.9338 4.02208 14.8156 4.06792 14.7056C4.11376 14.5956 4.18146 14.4961 4.26693 14.413L8.68015 10.0003L4.2536 5.57414C4.17054 5.48997 4.10529 5.38992 4.06177 5.27998C4.01824 5.17003 3.99733 5.05244 4.00027 4.93422C4.01596 4.69187 4.11932 4.46351 4.29107 4.29178C4.46282 4.12005 4.6912 4.01669 4.93358 4.00101C5.05614 3.99519 5.17859 4.01467 5.29328 4.05825C5.40798 4.10183 5.51246 4.16857 5.60023 4.25431V4.25431Z"/></svg>
                  : 
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> 
                }
            </button>
            <nav className={`${navbarOpen ?  "flex" : "hidden"} md:flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}>
                <Link className="text-indigo-600 hover:underline" to="/" >Home</Link>
                <Link className="text-gray-600 hover:underline" to="/something" >Something</Link>
            </nav>
        </header>
    )
}

export default Menu;





