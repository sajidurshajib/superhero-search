import classes from './Menu.module.css'
import style from '../../assets/css/style.module.css'

const Menu = ()=> {
    return(
        <div className={classes.Menu}>
            <div className={style.Container}>
                <span className={classes.Logo}>
                    SuperHero <span>Search</span>
                </span>
                <ul>
                    <li><a href="/404">About</a></li>
                    <li><a href="/404">API</a></li>
                    <li><a href="/404">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu