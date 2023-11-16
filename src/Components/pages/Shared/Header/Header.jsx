import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import logo from '../../../../All-iamges/Images/logo.png'
import logo2 from '../../../../All-iamges/logo.png'
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../../Providers/AuthProvider';
import SearchCard from '../SearchBar/SearchCard';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();
    const [searchText, setSearchText] = useState('')
    const [searchData, setSearchData] = useState([])
    const [openSignOutBtn, setOpenSignOutBtn] = useState(false)
    // const homePath = location.pathname === '/'
    // const aboutPath = location.pathname === '/destination/about'
    console.log(location.pathname);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/search-destination/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchData(data)
                console.log(data);
            })
    }, [searchText])

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleUser = () => {
        return  <button onClick={handleSignOut} className='py-2 px-5 text-black rounded bg-btn-color' >Sign Out</button>
    }
    return (
        <header className="relative w-11/12 py-5 bg-opacity-100 mx-auto">
            <div className="flex justify-between items-center">
                <Link to='/'>
                    {
                       location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname === '/about' ? <img className="w-40 h-16" src={logo} alt="Logo" /> : <img className="w-40 h-16" src={logo2} alt="Logo" /> 
                    //  <img className="w-40 h-16" src={logo} alt="Logo" /> || homePath || location.pathname.startsWith(destinationPath) ?  : <img className="w-40 h-16" src={logo2} alt="Logo" /> ? location.pathname.startsWith(bookingPath) ? <img className="w-40 h-16" src={logo} alt="Logo" /> 
                    }
                </Link>
                <div className='relative w-1/3 cursor-pointer'>
                <SearchBar setSearchText={setSearchText} />
                {
                    searchText.length > 0 && (
                        <div className={`absolute z-10 m-auto w-full bg-white p-3 ${searchData.length > 2 ? 'overflow-y-auto h-80' : '' }`}>
                            {
                                searchData.map(sd => <Link onClick={()=> setSearchText('')} to={`/destination/${sd.id}`}><SearchCard searchData={sd}/></Link> )
                            }
                        </div>
                    )
                }
                    {/* {
                        destinationPath || location.pathname.startsWith('/destination/') ? <SearchBar setSearchText={setSearchText} /> : null

                    } */}
                </div>
                <nav className={`flex items-center space-x-8 ${location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname === '/about' ? 'text-white' : 'text-black'} font-bold`}>
                    <Link  className={`${location.pathname === '/' ? 'text-[#F9A51A]' : ''} duration-200  hover:text-btn-color`} to="/">Home</Link>
                    <Link  className={`${location.pathname === '/about' ? 'text-[#F9A51A]' : ''} duration-200  hover:text-btn-color`} to="/about">About</Link>
                    {
                        user ? <div className='flex items-center'>
                            <UserCircleIcon className='h-8 w-8 mx-3'  onClick={()=> setOpenSignOutBtn(!openSignOutBtn)}/>
                            {
                                openSignOutBtn && <button onClick={handleSignOut} className='py-2 px-5 text-black rounded bg-btn-color' >Sign Out</button>
                            }
                        </div> : <Link to='/login'><button className='py-2 px-5 text-black rounded bg-btn-color' >Login</button></Link>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;