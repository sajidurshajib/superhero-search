import React, {useState} from 'react'
import classes from './Body.module.css'
import style from '../../assets/css/style.module.css'
import SingleHero from './SingleHero/SingleHero'

const Body = ()=> {

    const [num, setNum] = useState(70)

    let allHero = []

    let i = num
    let j
    if(i>=730){
        j=i+(733-i)
    }
    else{
        j=i+10
    }
    while(i<j){
        allHero.push(i)
        i++
    }


    const plus = (e)=>{
        e.preventDefault()
        let a
        if(num>730){
            a = num + (730-num)
        }
        else{
            a = num + 10
        }
        
        setNum(a)
    }

    const minus = (e)=>{
        e.preventDefault()
        let a = 1
        if(num>10){
            a = num-10
        }
        
        setNum(a)
    }

    return (
        <div className={classes.Body}>
            <div className={style.Container}>
                <div className={classes.Wrapper}>
                    
                    {   
                        allHero.map((v,i)=>{
                            return <SingleHero key={i} id={`${v}`} />
                        })
                    }
                    
                </div>
                
                <div className={classes.btnSection}>
                    <button onClick={minus}>-</button>
                    <span>{num} - {j}</span>
                    <button onClick={plus}>+</button>
                </div>

            </div>
        </div>
    )
}

export default Body