import * as React from "react"
import './style.css'

const Button = ({...props}) => {
    const { backgroundColor, btnText } = props

    return <button
            type='button'
            className='btn'
            style={{
                backgroundColor: backgroundColor
            }}>
                <span className='btn-text'>
                    {btnText}
                </span>
            </button>
}

export default Button