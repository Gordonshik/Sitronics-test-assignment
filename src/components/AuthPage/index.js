import Authorization from '../Authorization';
import Header from '../Header'
import './style.css'
import ocean from '../../images/ocean.svg'

export default function AuthPage() {
    return (
        <div className='authorization-page'>
            <div className='auth-menu'>
                <Header />
                <Authorization />
            </div>
            <div>
                <img 
                    src={ocean}
                    alt="ocean"
                    className='auth-img' />
            </div>
        </div>
    )
}

//1440 868