/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './skin.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Skin() {
    const [skins,setSkins] = useState([])

    useEffect(()=>{
        const fetchAllSkins = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/skins")
                setSkins(res.data);

            }catch(err){
                console.log(err)
            }
        }
        fetchAllSkins()
    }, [])


    const delSkin = async (id)=>{
        try {
            await axios.delete("http://localhost:8800/skins/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
            
        }
    }


    return <div className='cards'>
        <div className='principal'>
        <h1>
            Skins
        </h1>

        <button>
            <Link to="/Skins" >
            +
            </Link>
        </button>

        </div>

        <div className='main'>

            {skins.map((skin) => (
                <div className="skin" key={skins.id}>
                <h2>
                {skins.name}
            </h2>
            <img src={skin.img} />

            <ul>
                <li>
                    Nome: {skins.name}
                </li>
                <li>
                    Edição: {skins.edition}
                </li>
                <li>
                    Coleção: {skins.colection}
                </li>
                <li>
                    Arma: {skins.weapon}
                </li>
                <li>
                    Preço: {skins.price}
                </li>
            </ul>
            <div className='button'>
            <button className='deleteButton' onClick={()=>delSkin(skins.id)}>Deletar</button>
            <button className='updateButton'>Atualizar</button>
            </div>
        </div>
            ))}

        

        </div>
    </div>
}