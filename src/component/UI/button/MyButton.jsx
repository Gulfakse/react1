import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
  return(
    <button {...props} className={classes.myBtn}>
     {children}
    </button>
  )
} //функц компонетн

 /*class MyButtonClass extends React.Component{
  render(){
    return(
      <button {...this.props} className={classes.myBtn}>
     {children}
    </button>
    )
  }
 } --- классовый компонент*/
export default MyButton;