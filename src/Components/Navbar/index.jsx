import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'

function Navbar() {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
  return (
    <nav className=" flex justify-between items-center fixed z-10 top-0 w-full py-5 px-6 text-md font-light">
        <ul className="flex items-center gap-4">
            <li className=" text-xl font-semibold ">
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/all' className={({isActive}) => 
                isActive ? activeStyle : undefined} > 
                    All 
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/clothes' className={({isActive}) =>
                isActive ? activeStyle : undefined}  >  
                    Clothes
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/electronics' className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                Electronics
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/furnitures' className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                Furnitures
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/toys' className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                Toys
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/others' className={({isActive}) =>
                isActive ? activeStyle : undefined}> 
                Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-4'>
            <li className=" text-black/80">
               Juan Manuel Castaño
            </li>
            <li className='font-normal'>
                <NavLink to='/my-orders'> 
                My Orders
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/my-account'> 
                My Account 
                </NavLink>
            </li>
            <li className='font-normal'>
                <NavLink to='/sign-in'>
                Sign In
                </NavLink>
            </li>
            <li>
                🛒{context.count}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
