
import { useContext } from 'react'
import {UserLoginContext} from '../../contexts/UserLoginContext'
import {Link, Outlet, useNavigate} from "react-router-dom"
import { AiFillProduct } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";



function UserProfile() {

  let {currentUser} = useContext(UserLoginContext)
  let navigate = useNavigate()
  function onEditUser(){
    navigate("../edit-user")
  }
  return (
    <div>
      <div className='text-end p-3'>
        <img src={currentUser.propic} width="80px"  className='rounded-circle'/>
        <p className='fs-3'>{currentUser.username} <FaRegEdit onClick={onEditUser}/></p>
      </div>
      <ul className='nav fs-5 p-3 justify-content-around my-2 '>
        <li className="nav-item ">
            <Link to='products' className='nav-link profile'> <AiFillProduct className='icons'/>Products </Link>
        </li>

        <li className="nav-item ">
            <Link to='cart' className='nav-link profile'> <FiShoppingCart className='icons'/>Cart</Link>
            {/* <button className='btn p-1' id='bt' >{currentUser.products.length}</button> */}
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default UserProfile;