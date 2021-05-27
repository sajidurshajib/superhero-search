import React, {useEffect, useState} from 'react'
import classes from './HeroDetails.module.css'
import loading from '../../assets/img/loading.gif'

const HeroDetails = (props)=>{

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

    console.log(hero)
    return(
        <div className={classes.HeroDetails}>
            {Object.keys(hero).length!==0 ?
                <div className={classes.wrapper}>

                    <div className={classes.upper}>
                        <div className={classes.img} style={{backgroundImage:`url(${hero.image?.url})`}}>
                            <span>
                                <div className={classes.name}>
                                    <h2>{hero.name}</h2>
                                    <p>Real/Full name : <span>{hero.biography?.['full-name']}</span></p>
                                </div>

                                <div className={classes.appearance}>
                                    <h2>Appearance</h2>
                                    <p>Gender <span>: {hero.appearance?.gender}</span></p>
                                    <p>Race <span>: {hero.appearance?.race}</span> </p>
                                    <p>Hair-color <span>: {hero.appearance?.['hair-color']}</span></p>
                                    <p>Eye-color <span>: {hero.appearance?.['eye-color']}</span></p>
                                    <p>Height <span>: {hero.appearance?.height[0]}</span></p>
                                    <p>Weight <span>: {hero.appearance?.weight[1]}</span></p>
                                </div>
                                
                                <div className={classes.powerstats}>
                                    <h2>Powerstats</h2>

                                    <p>Durability 
                                        <span className={classes.outer} style={{
                                            width:`${hero.powerstats?.durability*2}px`
                                        }}>
                                            <span className={classes.inner}></span>
                                        </span> 
                                    </p>

                                    <p>Intelligence 
                                        <span className={classes.outer} style={{
                                            width:`${hero.powerstats?.intelligence*2}px`
                                        }}>
                                            <span className={classes.inner}></span>
                                        </span> 
                                    </p>

                                    <p>Power 
                                        <span className={classes.outer} style={{
                                            width:`${hero.powerstats?.power*2}px`
                                        }}>
                                            <span className={classes.inner}></span>
                                        </span> 
                                    </p>
                                    
                                    <p>Speed 
                                        <span className={classes.outer} style={{
                                            width:`${hero.powerstats?.speed*2}px`
                                        }}>
                                            <span className={classes.inner}></span>
                                        </span> 
                                    </p>

                                    <p>Strength 
                                        <span className={classes.outer} style={{
                                            width:`${hero.powerstats?.strength*2}px`
                                        }}>
                                            <span className={classes.inner}></span>
                                        </span> 
                                    </p>
                                </div>

                            </span>
                        </div>
                    </div>
                    <div className={classes.down}>
                        <div className={classes.section}>
                            <div className={classes.bio}>
                                <h2>Biography</h2>
                                <p>Aliases : {hero.biography?.aliases.join(', ')}</p>
                                <p>Alignment : {hero.biography?.alignment}</p>
                                <p><b>Alter-ego</b> : {hero.biography?.['alter-egos']}</p>
                                <p>First-appearance : {hero.biography?.['first-appearance']}</p>
                                
                                <p>{hero.biography?.['place-of-birth']}</p>
                                <p>{hero.biography?.publisher}</p>
                            </div>

                            <div className={classes.work}>
                                <h2>Work</h2>
                                <p>{hero.work?.base}</p>
                                <p>{hero.work?.occupation}</p>
                            </div>
                        </div>
                        <h2>Connections</h2>
                        <p>{hero.connections?.['group-affiliation']}</p>
                        <p>{hero.biography?.relatives}</p>
                    </div>
                </div>
            :
            <div className={classes.wrapper}>
                <img src={loading} alt="loading" />
            </div>
            }
        </div>
    )
}

export default HeroDetails