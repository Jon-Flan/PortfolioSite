import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import headshot from '../images/Jonathan.png';

class Landing extends Component {
	render() {
		return(
			<div style={{width:'100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src={headshot} alt="headshot" className="headshot-image"/>
						<div className="banner-text-landing">
						<h1>Web Developer in the making</h1>

						<hr/>

						<p>HTML5 | CSS3 | JavaScript | Bootstrap | React | NodeJS </p>
							<div className="social-links">
							{/*LinkedIn*/}
							<a href="https://linkedin.com/in/jon-flanagan" target="_blank">
							<i class="fab fa-linkedin"></i>
							</a>
							{/*GitHub*/}
							<a href="https://github.com/Jon-Flan" target="_blank">
							<i class="fab fa-github"></i>
							</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;