import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import classes from './SingleHero.module.css'
import load from '../../../assets/img/loading.gif'

const SingleHero = (props)=>{
    const [hero, setHero] = useState('')

    useEffect(() => {
        fetch(`https://superheroapi.com/api/2316762801789772/${props.id}`)
            .then((response)=>{
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setHero(data)            
            })
            .catch((err)=>{
                console.log(err)
            })
    },[props.id])

    return(
        <div className={classes.SingleHero} >
            <div 
                className={classes.forback} 
                style={{backgroundImage:`url('${hero.image?.url}')`}} >
                <Link to={`/hero/${props.id}`}>
                <span className={classes.text}>
                    <h2>{hero.name}</h2>
                    <p>{hero.work?.base}</p>
                </span>

                {Object.keys(hero).length===0 ? <img src={load} alt="loading"/>:null}
                </Link>    

            </div>
        </div>
    )
}

export default SingleHero