import React, {useState, useEffect} from 'react'
import classes from './Results.module.css'
import Result from './Result/Result'

const Results = (props)=> {

    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`/search/${props.srch}`)
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
                console.log(data)
                setSearch(data)            
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [props.srch])



    console.log(search)

    return(
        <div className={classes.Results}>
            {Object.keys(search).length!==0 ? (
                search.results?.map((v,i)=>{
                    console.log(v.id)
                    return <Result key={i} id={v.id} />
                })
                ):null
            }
        </div>
    )
}

export default Results