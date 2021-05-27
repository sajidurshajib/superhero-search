import React, {useState} from 'react'
import classes from './Search.module.css'
import style from '../../assets/css/style.module.css'

const Search = (props)=> {

    const [v, setV] = useState('')
    
    const onChange = (e)=>{
        e.preventDefault()
        let a = e.target.value
        setV(a)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        props.ssd(v)
    }

    return (
        <div className={classes.Search}>
            <div className={style.Container}>
                <div className={classes.field}>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} type="text" autoComplete="off"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search