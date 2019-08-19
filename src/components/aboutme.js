import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import headshot2 from '../images/Headshot2.png';

class About extends Component {
	render() {
		return(
			<div className="aboutMe-grid">
				<Grid>
					<Cell className="banner-text" col={4}>
						<div style={{ textAlign: 'center'}}> 
							<h2 style={{ color:"white", paddingTop:'2em'}}>Jon Flanagan</h2>
							<h4 style={{ color:'grey'}}>Junior Web Developer</h4>
							<hr style={{ borderTop: '3px solid grey', width:'95%', marginLeft:'2.5%'}}/>
							<p>Currently working on Special Projects & Social Media team for Neato Robotics (concentrix). Looking to gain more experience in
								Web development.</p>
							<hr style={{ borderTop: '3px solid grey', width:'95%', marginLeft:'2.5%'}}/>
							<h5 style={{ color:'grey'}}>Location:</h5>
							<p>Dublin, Ireland</p>
							<h5 style={{ color:'grey'}}>Phone:</h5>
							<i className="fa fa-phone-square" aria-hidden="true"></i>
							<p>086-0494019</p>
							<h5 style={{ color:'grey'}}>Email:</h5>
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<p>jonflanagan.jf@gmail.com</p>
						</div>
					</Cell>
					<Cell className="banner-text" col={8}>
						<h2 style={{ color:"white", paddingTop:'2em', textAlign:'center'}}>About Me</h2>
						<hr style={{ borderTop: '3px solid grey', width:'95%', marginLeft:'2.5%'}}/>
						<h4 style={{ color:'grey', textAlign:'center'}}>Personal</h4>
						<p>Second year Computer Science student. I am hard working, determined and reliable. 
						I enjoy learning new things and putting them into practice. Extremely technical minded with a proficiency for time management and prioritisation.</p>
						<p>I have a keen and eclectic interest in all things technology based. Whether it's web programming, native programming, embedded systems or IoT, when I'm not working or studying I enjoy creating my own personal projects. Constantly upskilling my knowledge base to adapt with the meander of modern technologies.</p>
						<hr style={{ borderTop: '3px solid grey', width:'95%', marginLeft:'2.5%'}}/>
						<h4 style={{ color:'grey', textAlign:'center'}}>Technologies</h4>
						<h6 style={{ color:'grey', paddingLeft:'2%'}}>Web</h6>
						<p>HTML5 | CSS3 | JavaScript | Bootstrap | React | NodeJS | Angular </p>
						<h6 style={{ color:'grey', paddingLeft:'2%'}}>Languages</h6>
						<p>Java | C </p>
						<h6 style={{ color:'grey', paddingLeft:'2%'}}>Programmes</h6>
						<p>Premiere Pro | Photoshop | Illustrator | Audition | Microsoft Suite | SAP </p>
						<hr style={{ borderTop: '3px solid grey', width:'95%', marginLeft:'2.5%'}}/>
						<h4 style={{ color:'grey', textAlign:'center'}}>Experience Levels</h4>
						<p>HTML5</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={90}/>
						<p>CSS3</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={90}/>
						<p>JavaScript</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={70}/>
						<p>Bootstrap</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={60}/>
						<p>React</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={65}/>
						<p>NodeJS</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={40}/>
						<p>Angular</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={35}/>
						<p>Java</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={35}/>
						<p>C</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={25}/>
						<p>Adobe Suite</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={95}/>
						<p>Microsoft Suite</p>
						<ProgressBar style={{margin:'auto', width:'80%'}} progress={95}/>
						<br />
						<br />
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default About;