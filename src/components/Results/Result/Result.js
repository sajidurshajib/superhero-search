import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import classes from './Result.module.css'

const Result = (props)=>{

    const [hero, setHero] = useState('')

    useEffect(() => {
        fetch(`/${props.id}`)
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
    }, [props.id])

    return(
        <div className={classes.Result}>
            {Object.keys(hero).length!==0 ? 
            <Fragment>
            <img src={hero.image?.url} alt={hero.name}/>
            <div className={classes.text}>
                <Link to={`/hero/${props.id}`}><h2>{hero?.name}</h2></Link>
                <h4>{hero.biography?.['full-name']}</h4>
                <p>{hero.work?.base}</p>
                <p>{hero.work?.occupation}</p>
                <br />
                <p>First-appearance : {hero.biography?.['first-appearance']}</p>
            </div>
            </Fragment>:null}
        </div>
    )
}

export default Result