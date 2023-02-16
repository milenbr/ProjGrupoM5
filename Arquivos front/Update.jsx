import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () =>{
    const [skin, setSkin] = useState({
        name:"",
        edition:"",
        collection:"",
        weapon:"",
        price:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const SkinsId = location.pathname.split("/")[2]

    const formChange = (e) =>{
        setSkin((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const formBtnClick = async e =>{
        e.preventDefault()
        try {
           await axios.put("http://localhost:8800/skins/" + SkinsId, skin) 
            navigate("/skins")
        } catch (err) {
            console.log(err)
        }
    }
    console.log(skin)
    return(
        <div className='form'>
           <h1>Atualizar Skin</h1> 
           <input type="text" placeholder="name" onChange={formChange} name="nome"/>
           <input type="text" placeholder="edition" onChange={formChange} name="edição"/>
           <input type="text" placeholder="collection" onChange={formChange} name="coleção"/>
           <input type="text" placeholder="weapon" onChange={formChange} name="arma"/>
           <input type="text" placeholder="price" onChange={formChange} name="preco"/>
            <button onClick={formBtnClick}>ATUALIZAR</button>
        </div>
    )
}

export default Uptade