import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';
import Modal from 'react-awesome-modal';
import { Slide } from 'react-slideshow-image';
import Slideshow from './slideshow';
import JSMTBackground from '../images/JSMTImage.jpg';
import LairBackground from '../images/lairImage.png';
import MCTVBackground from '../images/mctvImage.png';
import PortfolioBackground from '../images/portfolioImage.png';
import youtubeAdBackground from '../images/youtubeLair.png';
import NCIAnimatedAdBackground from '../images/nciAnimatedBanner.png';
import BannerAd1Background from '../images/banerAd1.png';
import BannerAd2Background from '../images/BannerAd2.png';
import BannerAd3Background from '../images/BannerAd3.png';
import BannerAnimated from '../assets/media/adBanners/nciBanner.swf';
import Banner1 from '../assets/media/adBanners/web-banner-start.jpg';
import Banner2 from '../assets/media/adBanners/sofa_banner(web_version).jpg';
import Banner3 from '../assets/media/adBanners/NCI-banner(Web_Version).jpg';
import LairAd from '../assets/media/youtubeAdvert/Lair(Animated_Ad_complete).swf';
import ForestFightBackground from '../images/forestfightImage.png';
import PullBackground from '../images/pullImage.png';
import GuitarBackground from '../images/guitarImage.png';
import AllInBackground from '../images/allInImage.png';
import NCIAdBackground from '../images/nciAdImage.png';
import GuitarVideo from '../assets/media/videoProductions/Guitar.mp4';
import ForestFight from '../assets/media/videoProductions/ForestFight.mp4';
import Pull from '../assets/media/videoProductions/Pull(compressed).mp4';
import AllIn from '../assets/media/videoProductions/GoingAllIn.mp4';
import NciAd from '../assets/media/videoProductions/NCI1.mp4';
import RaspberryPiBackground from '../images/raspberryPiImage.png';
import MirrorVid from '../assets/media/pi/IMG_3873.MOV';


class Projects extends Component {
	constructor(props){
		super(props);
		this.state ={ 
			activeTab: 0,
			visible : false,
		};
	}

	

	openModal1() {
        this.setState({
        	popUp:0,
            visible : true
        });
    }

    openModal2() {
        this.setState({
        	popUp:1,
            visible : true
        });
    }

    openModal3() {
        this.setState({
        	popUp:2,
            visible : true
        });
    }

    openModal4() {
        this.setState({
        	popUp:3,
            visible : true
        });
    }

    openModal5() {
        this.setState({
        	popUp:4,
            visible : true
        });
    }

    openModal6() {
        this.setState({
        	popUp:5,
            visible : true
        });
    }

    openModal7() {
        this.setState({
        	popUp:6,
            visible : true
        });
    }

    openModal8() {
        this.setState({
        	popUp:7,
            visible : true
        });
    }

    openModal9() {
        this.setState({
        	popUp:8,
            visible : true
        });
    }

    openModal10() {
        this.setState({
        	popUp:9,
            visible : true
        });
    }

    openModal11() {
        this.setState({
        	popUp:10,
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false,
            popUp:11
        });
    }

    toggleModals(){
    	if(this.state.popUp === 0){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="45%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<img src={Banner1} alt="Banner" className="BannerAd1" style={{display:"flex",width:"90%", height:"30%", margin:"auto", paddingTop:"2%"}}/>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 1){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="45%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<img src={Banner2} alt="Banner" className="BannerAd1" style={{display:"flex",width:"90%", height:"30%", margin:"auto", paddingTop:"2%"}}/>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 2){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="45%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<img src={Banner3} alt="Banner" className="BannerAd1" style={{display:"flex",width:"90%", height:"30%", margin:"auto", paddingTop:"2%"}}/>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 3){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<embed src={LairAd} alt="Banner" className="BannerAd" />
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 4){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video width="100%" height="100%" controls>
                  	 		<source src={ForestFight} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 5){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video width="100%" height="100%" controls>
                  	 		<source src={Pull} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 6){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video width="100%" height="100%" controls>
                  	 		<source src={GuitarVideo} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 7){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video width="100%" height="100%" controls>
                  	 		<source src={AllIn} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 8){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video width="100%" height="100%" controls>
                  	 		<source src={NciAd} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}else if(this.state.popUp === 9){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<Slideshow></Slideshow>
                    </div>
                </Modal>
    			)
    	}
    	else if(this.state.popUp === 10){
    		return(
    			<Modal 
                    visible={this.state.visible}
                    width="80%"
                    height="60%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                   	 	<video controls style={{display:"flex",width:"250px", height:"500px", margin:"auto", paddingTop:"2%"}}>
                  	 		<source src={MirrorVid} type="video/mp4"/>
                     		Your browser does not support the video tag.
                		</video>
                    </div>
                </Modal>
    			)
    	}
    }

	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<Grid>
				<Cell col={12} row={6}>
				<div className="projects-grid">
				
				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px',background:"url(" + JSMTBackground + ") center / cover" }}></CardTitle>
				<CardText>Created using ReactJS, GatsbyJS, HTML5 and CSS3
				</CardText>
				<CardActions border>
					<Button colored href="https://github.com/Jon-Flan/JSMT-website" target="_blank">Github</Button>
					<Button colored>Live link</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + PortfolioBackground + ") center / cover" }}></CardTitle>
				<CardText>Created using ReactJS, HTML5 and CSS3
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
				</CardActions>
				</Card>
			{/*
				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:'url(https://phraseapp.com/blog/wp-content/uploads/2016/05/angular-768x403.jpg) center / cover' }}>Angular Site</CardTitle>
				<CardText>Created using AngularJS, HTML5 and CSS3.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Live link</Button>
				</CardActions>
				</Card>
			*/}
				</div>
				</Cell>

				<Cell col = {12} row={6}>
				<div className="projects-grid">
				<Card shadow={5} style={{minimumWidth: '450',  marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" +  MCTVBackground +") center / cover" }}></CardTitle>
				<CardText>Created  using BootstrapJS, HTML5 and CSS3.
				</CardText>
				<CardActions border>
					<Button colored href="https://github.com/Jon-Flan/MCTV-Project-" target="_blank">Github</Button>
					<Button colored href=" https://mctv-project2019.000webhostapp.com/" target="_blank">Live link</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450',  marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + LairBackground + ") center / cover" }}></CardTitle>
				<CardText>Created using fullPageJS, HTML5 and CSS3
				</CardText>
				<CardActions border>
					<Button colored href="https://github.com/Jon-Flan/lairWebsite" target="_blank">Github</Button>
					<Button colored href="http://lair.ie" target="_blank">Live link</Button>
				</CardActions>
				</Card>
				</div>
				</Cell>
				</Grid>
				)
		}else if(this.state.activeTab === 1){
			return(
				<Grid>
				<Cell col={12} row={6}>
				<div className="projects-grid">

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + BannerAd1Background + ") center / cover"  }}>Banner Ad #1</CardTitle>
				<CardText>Created using Photoshop
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal1()}>View</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + BannerAd2Background + ") center / cover"  }}>Banner Ad #2</CardTitle>
				<CardText>Created using Photoshop
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal2()}>View</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450',  marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + BannerAd3Background + ") center / cover" }}>Banner Ad #3</CardTitle>
				<CardText>Created using Photoshop
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal3()}>View</Button>
				</CardActions>
				</Card>
				</div>
				</Cell>

				<Cell col = {12} row={6}>
				<div className="projects-grid">
				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + youtubeAdBackground + ") center / cover" }}>Youtube Animated Ad</CardTitle>
				<CardText>Created using Animate, Photoshop and Audtition
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal4()}>View</Button>
				</CardActions>
				</Card>
				</div>
				</Cell>
				</Grid>
				)
		}else if(this.state.activeTab === 2){
			return(
				<div className="projects-grid">
				
				<Card shadow={5} style={{minimumWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color:'black', height:'176px', background:'url(https://thamesdistribution.com/wp-content/uploads/2017/01/Neato-logo.png) center / cover' }}></CardTitle>
				<CardText>Metrics Graphing tool. Created using HTML5, CSS3, Vanilla JavaScript, D3js, DimpleJS, NodeJS and Electron.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
				</CardActions>
				</Card>
				</div>
				)
		}else if(this.state.activeTab === 3){
			return(
						<Grid>
				<Cell col={12} row={6}>
				<div className="projects-grid">
				
				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + ForestFightBackground + ") center / cover"  }}>Forest Action Fight</CardTitle>
				<CardText>Created using Premiere Pro and Audtition. Writer, Director, Film/Sound Editor, Camera and Cinematography.
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal5()}>Watch</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + PullBackground + ") center / cover" }}>Pull (Short Film)</CardTitle>
				<CardText>Created using Premiere Pro and Audtition. Writer, Director, Film Editor, Camera and Cinematography.
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal6()}>Watch</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + GuitarBackground + ") center / cover" }}>Guitar Advert</CardTitle>
				<CardText>Created using Premiere Pro and Audtition. Writer, Director, Film/Sound Editor, Camera and Cinematography.
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal7()}>Watch</Button>
				</CardActions>
				</Card>
				</div>
				</Cell>

				<Cell col = {12} row={6}>
				<div className="projects-grid">
				<Card shadow={5} style={{minimumWidth: '450',  marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + AllInBackground + ") center / cover"}}>All In (Documentary)</CardTitle>
				<CardText>Created using Premiere Pro and Audtition. Writer, Director, Film/Sound Editor, Camera and Cinematography.
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal8()}>Watch</Button>
				</CardActions>
				</Card>

				<Card shadow={5} style={{minimumWidth: '450', marginLeft:'5%', marginBottom:'2%'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + NCIAdBackground + ") center / cover" }}>NCI Advert</CardTitle>
				<CardText>Created using Premiere Pro and Audtition. Film/Sound Editor.
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal9()}>Watch</Button>
				</CardActions>
				</Card>
				</div>
				</Cell>
				</Grid>
				)
		}else if(this.state.activeTab === 4){
			return(
				<Card shadow={5} style={{minimumWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color:'#fff', height:'176px', background:"url(" + RaspberryPiBackground + ") center / cover" }}>Magic Mirror</CardTitle>
				<CardText>Created using Raspberry Pi 3+b, NodeJS, MagicMirror2
				</CardText>
				<CardActions border>
					<Button colored value="Open" onClick={() => this.openModal10()}>Photos</Button>
					<Button colored value="Open" onClick={() => this.openModal11()}>Video</Button>
				</CardActions>
				</Card>
				)
		}
	}

	render() {
		return(
			<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple style={{marginLeft:"20px"}}>
			<Tab style={{paddingLeft:"15px", paddingRight:"15px"}}>Web</Tab>
			<Tab style={{paddingLeft:"15px", paddingRight:"15px"}}>Web Ads</Tab>
			<Tab style={{paddingLeft:"15px", paddingRight:"15px"}}>Apps</Tab>
			<Tab style={{paddingLeft:"15px", paddingRight:"15px"}}>Video</Tab>
			<Tab style={{paddingLeft:"10px", paddingRight:"25px"}}>Pi</Tab>
			</Tabs>
				<Grid>
				<Cell col={12}>
				<div className="content">{this.toggleCategories()}</div>
				</Cell>
				</Grid>
				<section>{this.toggleModals()}</section>
			</div>
		)
	}
}

export default Projects;