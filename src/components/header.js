import React from 'react'
import './header.css';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';

const myStyles = makeStyles({
    ButtonNohover:{
        '&:hover':{
            background: "none",
        }
    }
})

export default function Header(){
    const styles = myStyles();
    return(
        <div className="navbar">
        <div className="left-side"><Button className={styles.ButtonNohover} 
        style={{maxWidth:"80px", maxHeight:"35px",marginLeft: "200px"}}>
            <img src="lvl-logo.png" className="lvl-Logo"  alt=""/></Button>
        </div>
        <div className="middle">
        <div className="middle-font1">HOME</div>
        <div className="middle-font2">PROJECTS</div>
        <div className="middle-font3">TEACHERS</div>
        </div>
        <div className="right-side">
            <div className="flags">
                <img src="LANG@2x.png" className="flagsPic" alt=""/>
                <img src="NZ Flag@2x.png" className="flagsPic" alt=""/>
                <img src="Maori flag@2x.png" className="flagsPic" alt=""/>
                </div>
            <div className="right-side-font"><Button className={styles.ButtonNohover} style={{maxWidth:"200px", maxHeight:"35px",color: "white",fontWeight: "bold",
            fontSize: "16px",textAlign: "center"}}><img src="Rawiri-pic@2x.png" className="rawiriPic" alt=""/>RAWIRI FLETCHER</Button></div>
            </div>
        </div>

    )
}