import PropTypes from 'prop-types'

const Button = ({color,text,onclick}) => {
  return (
    <button className="btn" style = {{background: color}} onClick ={onclick}>{text}</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes ={
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func
}


export default Button
