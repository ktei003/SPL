import React from 'react'
import './body.css';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import Checkbox from '@material-ui/core/Checkbox';

const myStyles = makeStyles({
    ButtonNohover:{
        '&:hover':{
            background: "none",
        }
    }
})




export default function Body(){
    const styles = myStyles();
    return(
        <div className="body-container">
            <div className="filters-column">
                <div className="filter-major">SUBSCRIPTION</div>
                <div className="filter-minor"><Checkbox></Checkbox>Free</div>
                <div className="filter-minor"><Checkbox></Checkbox>Premium</div>
                <div className="filter-major">ACTIVITY TYPE</div>
                <div className="filter-minor"><Checkbox></Checkbox>Animation</div>
                <div className="filter-minor"><Checkbox></Checkbox>Game</div>
                <div className="filter-minor"><Checkbox></Checkbox>Chatbot</div>
                <div className="filter-minor"><Checkbox></Checkbox>Augmented Reality</div>
                <div className="filter-major">YEAR LEVEL</div>
                <div className="filter-minor"><Checkbox></Checkbox>1-4</div>
                <div className="filter-minor"><Checkbox></Checkbox>5-6</div>
                <div className="filter-minor"><Checkbox></Checkbox>7-8</div>
                <div className="filter-minor"><Checkbox></Checkbox>9-13</div>
                <div className="filter-major">SUBJECT MATTER</div>
                <div className="filter-minor"><Checkbox></Checkbox>Computer Science</div>
                <div className="filter-minor"><Checkbox></Checkbox>Maths</div>
                <div className="filter-minor"><Checkbox></Checkbox>Science</div>
                <div className="filter-minor"><Checkbox></Checkbox>Language</div>
                <div className="filter-minor"><Checkbox></Checkbox>Art</div>
                <div className="filter-minor"><Checkbox></Checkbox>Music</div>
                
                
            </div>
            <div className="kids-projects">
                <div className="topper">
            <h1>PROJECTS</h1>
            <p>Welcome to the project library. 
                You can use the filters on the right to help
                 you search for specific projects.</p>
            </div>
            <div className="top-buttons">
                <div className="left-side-buttons">
                    <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"21px", fontSize:"13px",
                     border:"grey solid 1px",minWidth:"110px",padding:"0px 0px",border:"none",}}>BEGINNER</Button>
                    <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"21px", fontSize:"13px",
                     border:"grey solid 1px",minWidth:"110px",padding:"0px 0px",border:"none"}}>INTERMEDIATE</Button>
                    <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"21px", fontSize:"13px",
                     border:"grey solid 1px",minWidth:"110px",padding:"0px 0px",border:"none"}}>ADVANCED</Button>
                </div>
                <div className="middle-text">SHOW</div>
                <div className="buttons-right">
                   
                <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"25px", fontSize:"13px",
                 border:"grey solid 1px",minWidth:"56px", fontFamily: "open sans",border:"none"}}>25</Button>
                <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"25px", fontSize:"13px",
                 border:"grey solid 1px",minWidth:"56px", fontFamily: "open sans",border:"none"}}>50</Button>
                <Button variant="contained" style={{ backgroundColor:"#dbdad7", height:"25px", fontSize:"13px",
                 border:"grey solid 1px",minWidth:"56px", fontFamily: "open sans",border:"none"}}>100</Button>
                </div>
                
            </div>
            <div className="projects">
                    <Button className={styles.ButtonNohover} style={{padding:"0px 0px"}}><div className="grid-item"><img src="P-01@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major">Introduction</div><div className="projects-minor">BEGINNER | Animation</div></div></Button>
                    <div className="grid-item"><img src="P-02@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">My Birthday</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item2"><img src="P-03@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">10 Block Challenge</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-04@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major">Build A Band</div><div className="projects-minor">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-05@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">The Bear And The <br/>Monkey</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item2"><img src="P-06@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">Debugging</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-07@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major">About Me</div><div className="projects-minor">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-08@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">I Am Here!</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item2"><img src="P-09@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">Funny Faces</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-10@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major">It Tickles</div><div className="projects-minor">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-11@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">Penguin In A Desert</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item2"><img src="P-12@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">Time Travel</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-13@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major">Birthday Card</div><div className="projects-minor">BEGINNER | Animation</div></div>
                    <div className="grid-item"><img src="P-14@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">The Lion And The <br/>Mouse Part 1</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                    <div className="grid-item2"><img src="P-15@2x.png" className="projects-pics" alt=""/>
                    <div className="projects-major2">The Lion And The</div><div className="projects-minor2">BEGINNER | Animation</div></div>
                </div>
            </div>
        </div>
    )
}