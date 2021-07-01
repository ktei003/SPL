import React from 'react'
import './Btt.css';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';

const myStyles = makeStyles({
    ButtonNohover:{
        '&:hover':{
            background: "none",
        }
    }
})


export default function Btt(){
    const styles = myStyles();
    return(
        <div className="just-button">
            <Button className={styles.ButtonNohover} style={{color:"white",minWidth:"100px",
             backgroundColor:"#E5AB2C",minHeight:"10px",float:"right",
              marginRight:"150px",marginTop:"100px"}}>BACK TO TOP</Button>
        </div>
    )
}