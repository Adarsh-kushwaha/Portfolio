import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <svg width="200" height="61" viewBox="0 0 491 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.8968 60.28L31.0008 52.216C29.8968 52.408 28.6248 52.504 27.1848 52.504C22.3848 52.504 17.9688 51.376 13.9368 49.12C9.95284 46.864 6.78484 43.744 4.43284 39.76C2.08084 35.776 0.904843 31.288 0.904843 26.296C0.904843 21.304 2.08084 16.816 4.43284 12.832C6.78484 8.848 9.95284 5.752 13.9368 3.544C17.9688 1.288 22.3848 0.159998 27.1848 0.159998C31.9848 0.159998 36.3768 1.288 40.3608 3.544C44.3448 5.752 47.4888 8.848 49.7928 12.832C52.1448 16.816 53.3208 21.304 53.3208 26.296C53.3208 30.376 52.5288 34.144 50.9448 37.6C49.3608 41.008 47.1768 43.912 44.3928 46.312L54.7608 60.28H35.8968ZM17.1768 26.296C17.1768 29.752 18.0408 32.512 19.7688 34.576C21.4968 36.592 23.9688 37.6 27.1848 37.6C30.3528 37.6 32.8008 36.592 34.5288 34.576C36.2568 32.512 37.1208 29.752 37.1208 26.296C37.1208 22.792 36.2568 20.032 34.5288 18.016C32.8008 15.952 30.3528 14.92 27.1848 14.92C23.9688 14.92 21.4968 15.952 19.7688 18.016C18.0408 20.032 17.1768 22.792 17.1768 26.296ZM74.711 1.024V29.752C74.711 32.104 75.215 33.976 76.223 35.368C77.279 36.712 78.959 37.384 81.263 37.384C83.567 37.384 85.271 36.712 86.375 35.368C87.479 33.976 88.031 32.104 88.031 29.752V1.024H103.943V29.752C103.943 34.6 102.935 38.752 100.919 42.208C98.903 45.616 96.143 48.184 92.639 49.912C89.135 51.64 85.223 52.504 80.903 52.504C76.583 52.504 72.743 51.64 69.383 49.912C66.071 48.184 63.479 45.616 61.607 42.208C59.735 38.8 58.799 34.648 58.799 29.752V1.024H74.711ZM126.821 1.024V52H110.837V1.024H126.821ZM182.928 52H166.944L150.024 26.368V52H134.04V1.024H150.024L166.944 27.088V1.024H182.928V52ZM207.862 39.256H228.31V52H190.15V39.976L210.31 13.696H190.15V1.024H228.31V13.048L207.862 39.256ZM260.341 52.504C255.541 52.504 251.125 51.376 247.093 49.12C243.109 46.864 239.941 43.744 237.589 39.76C235.237 35.776 234.061 31.288 234.061 26.296C234.061 21.304 235.237 16.816 237.589 12.832C239.941 8.848 243.109 5.752 247.093 3.544C251.125 1.288 255.541 0.159998 260.341 0.159998C265.141 0.159998 269.533 1.288 273.517 3.544C277.501 5.752 280.645 8.848 282.949 12.832C285.301 16.816 286.477 21.304 286.477 26.296C286.477 31.288 285.301 35.776 282.949 39.76C280.645 43.744 277.477 46.864 273.445 49.12C269.461 51.376 265.093 52.504 260.341 52.504ZM260.341 37.6C263.509 37.6 265.957 36.592 267.685 34.576C269.413 32.512 270.277 29.752 270.277 26.296C270.277 22.792 269.413 20.032 267.685 18.016C265.957 15.952 263.509 14.92 260.341 14.92C257.125 14.92 254.653 15.952 252.925 18.016C251.197 20.032 250.333 22.792 250.333 26.296C250.333 29.752 251.197 32.512 252.925 34.576C254.653 36.592 257.125 37.6 260.341 37.6ZM344.51 1.024V13.696H330.974V52H314.99V13.696H301.598V1.024H344.51ZM364.829 13.768V20.032H380.669V32.056H364.829V39.256H382.829V52H348.845V1.024H382.829V13.768H364.829ZM387.413 26.44C387.413 21.4 388.421 16.912 390.437 12.976C392.501 9.04 395.429 5.992 399.221 3.832C403.013 1.624 407.477 0.519998 412.613 0.519998C417.029 0.519998 420.965 1.36 424.421 3.04C427.925 4.672 430.757 7 432.917 10.024C435.125 13.048 436.589 16.576 437.309 20.608H420.461C419.693 18.928 418.589 17.632 417.149 16.72C415.757 15.76 414.149 15.28 412.325 15.28C409.637 15.28 407.501 16.288 405.917 18.304C404.381 20.32 403.613 23.032 403.613 26.44C403.613 29.848 404.381 32.56 405.917 34.576C407.501 36.592 409.637 37.6 412.325 37.6C414.149 37.6 415.757 37.144 417.149 36.232C418.589 35.272 419.693 33.952 420.461 32.272H437.309C436.589 36.304 435.125 39.832 432.917 42.856C430.757 45.88 427.925 48.232 424.421 49.912C420.965 51.544 417.029 52.36 412.613 52.36C407.477 52.36 403.013 51.28 399.221 49.12C395.429 46.912 392.501 43.84 390.437 39.904C388.421 35.968 387.413 31.48 387.413 26.44ZM490.224 1.024V52H474.24V32.128H459.048V52H443.064V1.024H459.048V19.384H474.24V1.024H490.224Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="21.8592" y1="19.5" x2="496.498" y2="56.7948" gradientUnits="userSpaceOnUse">
<stop stop-color="#3794F0"/>
<stop offset="1" stop-color="#050505" stop-opacity="0.5"/>
</linearGradient>
</defs>
</svg>

              
              {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg> */}
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to="" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"></Link>
              </li> */}
              <li>
                <Link to="" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Schedule Meet</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
