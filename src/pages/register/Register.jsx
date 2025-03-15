import React from 'react'
import logo from '@shared/instagram-clipart-full-hd.png'
import { useNavigate } from 'react-router'

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
	 <div className='container__box'>
     <div>
            <div className='form_login'>
              <img style={{width: '50px'}} src={logo} alt="" />
              <div className='box__items'>
                <input type="text" name="" id="" placeholder='Username' />
              </div>
              <div className='box__items'>
                <input type="text" name="" id="" placeholder='Email' />
              </div>
              <div className='box__items'>
                <input type="text" name="" id="" placeholder='Password' />
              </div>
              <div className='box__items'>
                <input type="text" name="" id="" placeholder='Confim Password' />
              </div>
              <div>
                <button className='box__items__button'>Log in</button>
                <p onClick={()=> navigate('/')} style={{textAlign: 'center', cursor: 'pointer', fontWeight: 'bold'}}>Вернуться</p>
              </div>
            </div>
          </div>
   </div>
  )
}

export default RegisterPage