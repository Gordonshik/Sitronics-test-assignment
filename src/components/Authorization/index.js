import './style.css'
import lock from '../../images/lock.svg'
import dog from '../../images/dog.svg'

export default function Authorization() {

    const inputsInfo = [
        {
            placeholder: 'Логин',
            svg: lock,
            type: 'text'
        },
        {
            placeholder: 'Пароль',
            svg: dog,
            type: 'password'
        },
    ]

    const getInputs = arr => arr.map(item => 
        <input 
            className='authorization-input'
            placeholder={item.placeholder} 
            key={item.placeholder} 
            type={item.type}
            style={{
                backgroundImage: `url(${item.svg})`,
                backgroundRepeat: 'no-repeat',
                alignText: 'right'
            }}/>
    )

    const inputs = getInputs(inputsInfo)

    return (
        <div className='authorization-box'>
            <h2 className='authorization-h2'>Авторизация</h2>
            <div className='inputs-box'>
                {inputs}
            </div>
            <button className='authorization-button'>Войти</button>
            <p className='support-text'>Не получается войти в систему? 
                <a className='support-link'>Написать в тех поддержку</a>
            </p>
        </div>
    )
}
