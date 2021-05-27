import {useParams} from 'react-router-dom'
import HeroDetails from '../components/HeroDetails/HeroDetails';
const Hero = ()=>{
    let {heroId} = useParams()
    return(
        <div className="Hero">
            <HeroDetails id={heroId}/>
        </div>
    )
}
export default Hero