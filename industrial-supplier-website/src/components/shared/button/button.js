import './button.css'

const Button =({ classname, children, clickHandler })=>{
    return(
        <button className={classname} onClick={clickHandler}>{children}</button>
    )
}

export default Button