import React from 'react'
import './login.scss'
import useForm from '../../hooks/useForm'
import { getUser } from '../../servises/usersServices'
import Swal from 'sweetalert2'
const Login = ({signIn}) => {
    const [dataForm, handleChange, resetForm ] = useForm()
const handleSubmit = async(event) =>{
    event.preventDefault()
    const loggedUser = await getUser(dataForm)
    if(loggedUser){
      Swal.fire(
       `Excelente ${loggedUser.name}`,
        'Has iniciado sesion con exito!',
        `success`
      )
      .then(()=>{
        signIn(true)
      })
    }else{
      Swal.fire(
        `Ups`,
         'Usuario no encontrado',
         `error`
       )
    }
    console.log(loggedUser);
    resetForm()
}

  return (
    
    <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input onChange={handleChange} name='email' value={dataForm?.email || ''} type="text" />
        <label >Contraseña:</label>
        <input  onChange={handleChange} name='password' value={dataForm?.password || ''} type="password" />
        <button type="submit">Iniciar sesión</button>
    </form>
  )
}

export default Login