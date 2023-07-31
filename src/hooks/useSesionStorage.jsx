import { useEffect } from "react"
import { useState } from "react"


const useSesionStorage = (key) => {
    const [dataStorage, setDataStorage] = useState({})
    useEffect(()=>{
        if(!Object.entries(dataStorage).length){
        const response = sessionStorage.getItem(key)?JSON.parse(sessionStorage.getItem(key)):{}
        setDataStorage(response)}
    }, [dataStorae])
    const saveInfoSesion = (key, data) => {
        sessionStorage.setItem(key,JSON.stringify(data) )
        setDataStorage(data)
    }
    const deleteInfoSesion = (key) =>{
        sessionStorage.removeItem(key)
        setDataStorage({})
    }
  return {dataStorage, saveInfoSesion, deleteInfoSesion}
}
export default useSesionStorage