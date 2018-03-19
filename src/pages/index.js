import React from 'react'
import Link from 'gatsby-link'
import '../assets/styles/page.css'
import cn from '../assets/text/cn'
import en from '../assets/text/en'
import Footer from '../components/Footer'
import QueueAnim from 'rc-queue-anim'
import { OverPack } from 'rc-scroll-anim'
import Banner from '../components/Banner'
import Grid from 'material-ui/Grid'
import Fotos from '../components/Foto'
import LazyLoad from 'react-lazyload'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Card from 'material-ui/Card'
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button'
import TweenOne from 'rc-tween-one'
import AppBar from 'material-ui/AppBar';
import enlist from '../components/foto/enlist.js'
import cnlist from '../components/foto/cnlist.js'
import Drawer from 'material-ui/Drawer';
import List,{ListItem, ListItemText} from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Divider from 'material-ui/Divider'
import createHistory from "history/createBrowserHistory"

const cnbg = {
  backgroundImage: 'url(' + require('../assets/imgs/banner.png') + ')'
}
const enbg= {
  backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')'
}
const ent = {
  backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')'
}
const cnt = {
  backgroundImage: 'url(' + require('../assets/imgs/aaa.jpg') + ')'  
}



class IndexPage extends React.Component{
  state = {
    lang: en,
    toLang: "中文",
    ttable: {  backgroundImage: 'url(' + require('../assets/imgs/table.jpg') + ')'},
    bg: { backgroundImage: 'url(' + require('../assets/imgs/banner-en.jpg') + ')'},
    list: enlist,
    right: false,
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render(){
    let arr = []
    for (var i =1; i<8; i++){ arr.push(i) }
    let arr2 = []
    for (var i =1; i<4; i++){ arr2.push(i) }
    let list = arr.map((i)=>{
      return(
        <TableRow key={i} >
          <TableCell style={{minWidth: '15vw',paddingRight:'0rem',}}>
            <p>{this.state.lang.overview[`head`+i]}</p></TableCell>
          <TableCell><p>{this.state.lang.overview[`p`+i]}</p></TableCell>
        </TableRow>
      )
    })
    let list2 = arr2.map((i)=>{
      return(
        <TableRow key={i} >
          <TableCell style={{ marginTop: `2rem`,
                              minWidth: '25vw',paddingRight:'0rem'}}>
            <p>{this.state.lang.star[`head`+i]}</p></TableCell>
          <TableCell><p>{this.state.lang.star[`p`+i]}</p></TableCell>
        </TableRow>
      )
    })
    const trans = () =>{
      if(this.state.lang === en){
        this.setState({
          lang:cn,toLang:"English",ttable:cnt, bg:cnbg, list:cnlist
        })
      }else{
        this.setState({
          lang:en,toLang:"中文", ttable:ent, bg:enbg, list:enlist
        })
      }

    }
    const sideList = () => (
      <List>
        <ListItem button>
          <p style={{color:'white'}}>hello</p>
        </ListItem>
      </List>
    )
    return(
      <div>
        <LazyLoad height={0}>
          <AppBar style={{backgroundColor:`rgba(9,12,36,0.3)`}} className="nav" position="fixed">
            <Toolbar className="nav">
              <Button disableRipple={true}  size="small"
                      disableFocusRipple={true}
                      onClick={trans} className="trans"
                      style={{color:'white',display:'flex'}}              
              >
                {this.state.toLang}
              </Button>
              <IconButton onClick={this.toggleDrawer('right', true)}>
                <MenuIcon style={{color:'white'}} />
              </IconButton>            
            </Toolbar>
          </AppBar>
        </LazyLoad>
        <LazyLoad><Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <List style={{width:'9rem',backgroundColor:'rgba(4,21,38,1)',height:'100vh'}}>
              <Link to="#introductin" style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[0]}</ListItem>
              </Link>
              <Link to="#speakers" style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[1]}</ListItem>
              </Link>
              <Link to="#host" style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[2]}</ListItem>
              </Link>
              <Link to="#sponsorship" style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[3]}</ListItem>
              </Link>
              <Link to="#contact" style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[4]}</ListItem>
              </Link>              
              <a href={this.state.lang.ticket} style={{textDecoration:'none'}}>
                <ListItem button style={{color:'white'}}>{this.state.lang.menu[5]}</ListItem>
              </a>
            </List>            
          </div>
        </Drawer></LazyLoad>
        <section className="bnwrap banner" style={this.state.bg}>
        </section>
        <LazyLoad height={200}><section className="bg1" id="introductin">
          <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
            <h2>{this.state.lang.intro.title}</h2>
            <div className="bar"/>
            <p className="para indent">{this.state.lang.intro.para1}</p>
            <p className="para indent">{this.state.lang.intro.para2}</p>
          </TweenOne>          
        </section></LazyLoad>
        <section >
          <LazyLoad height={100}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.lookback.title}</h2>
              <div className="bar"/>
              <p className="para indent">{this.state.lang.lookback.para}</p>
              <Banner />
            </TweenOne></LazyLoad>
        </section>
        <section  className="ctn bg1">
          <LazyLoad height={200}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>          
              <h2>{this.state.lang.overview.title}</h2>
              <div className="bar"/>
              <Table className="para" style={{marginTop:`1rem`}}><TableBody>{list}</TableBody></Table>
            </TweenOne></LazyLoad>
        </section>
        <section key="e" className="ctn">
          <LazyLoad height={200}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.star.title}</h2>
              <div className="bar" />
              <Table style={{marginTop:`1rem`}} className="para"><TableBody>{list2}</TableBody></Table>
            </TweenOne></LazyLoad>
        </section>
        <section key="g" className="ctn bg1" id="speakers">
          <LazyLoad height={1}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.vip.title}</h2>
              <div className="bar"/>            
              <Fotos list={this.state.list} style={{maxWidth:`80vw`}} />
            </TweenOne></LazyLoad>
        </section>
        <section key="i" className="ctn" id="sponsorship">
          <LazyLoad height={200}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.sponsor.title}</h2>
              <div className="bar"/>
              <Card>
                <div className="ttable" style={this.state.ttable}/>
              </Card>
            </TweenOne></LazyLoad>
        </section>
        <section id="host" className="ctn bg1" >
          <LazyLoad height={100} offset={100}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.host.title}</h2>
              <div className="bar"/>
              <Grid container alignItems="center" className="m1 gridm" justify="center">
                <Grid item xs={12} md={12} className="cctn">
                  <div className="blockgeek"/>
                </Grid>
                <Grid item xs={12} md={12} style={{maxWidth: `80vw`}} >
                  <p className="para indent">{this.state.lang.host.blockGeek}</p>
                </Grid>
              </Grid>
              <Grid container alignItems="center" className="gridm" justify="center">
                <Grid item xs={12} md={12} className="cctn"><div className="gdex" /></Grid>
                <Grid item xs={12} md={12} style={{maxWidth: `80vw`}}>
                  <Grid item xs={3} />                
                  <p className="para indent">{this.state.lang.host.gdex}</p></Grid>
              </Grid>
            </TweenOne>
          </LazyLoad>
        </section>
        <section key="j" className="ctn">
          <LazyLoad height={100} >
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.assist.title}</h2>
              <div className="bar"/>
              <Grid container alignItems="center" className="gridm" justify="center">
                <Grid item xs={12} md={12} className="cctn">
                  <div className="bcc" style={{marginTop:`3rem`}}/>
                </Grid>
                <Grid item xs={12} md={12} style={{maxWidth: `80vw`}}>
                  <p className="para indent">{this.state.lang.assist.para}</p></Grid>
              </Grid>
            </TweenOne></LazyLoad>
        </section>
        <section key="k" className="ctn">
          <LazyLoad height={100}>
            <TweenOne className="ctn" animation={{ x: -100, type: 'from',duration:720,opacity:0 }}>
              <h2>{this.state.lang.partner.title}</h2>
              <div className="bar" />
              <Grid container justify="space-around" alignItems="center" className="para" >
                <Grid item ><div className="cctn bs"/></Grid>
                <Grid item ><div className="cctn bbt" /></Grid>
                <Grid item ><div className="cctn ff" /></Grid>
                <Grid item ><div className="cctn bf" /></Grid>
              </Grid>
            </TweenOne></LazyLoad>
        </section>
        <section key="l" className="footer ctn" style={{color:'white', height:'auto'}} >
          <h5>{this.state.lang.footer.title}</h5>
          <div className="bar" style={{marginBottom:'1rem'}}></div>
          <Grid container >
            <Grid item sm={6} md={4} className="ftgrid">
              <div className=" sr">
                <div className="fticon ftcp"/>
                <div className="ftgrid">
                  <p>{this.state.lang.footer.cp}</p>
                  <p style={{fontSize:'1rem',marginTop:'0.7rem',marginBottom:'0.5rem'}}>Linda</p>
                  <p>{this.state.lang.footer.tel}</p>
                  <p>{this.state.lang.footer.email}</p>                                                
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4} className="ftgrid">
              <div className="sr">
                <div className="fticon ftchat"/>                     
                <div className="ftgrid">
                  <p>{this.state.lang.footer.consult}</p>
                  <p>{this.state.lang.footer.info}</p>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={2} className="ftgrid">
              <div className="sr">
                <div className="fticon weibo"/>                     
                <div className="ftgrid">
                  <p>{this.state.lang.footer.weibo}</p>
                  <div className="qr qrw" />                  
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={2} className="ftgrid">
              <div className="sr">
                <div className="fticon twitter"/>                     
                <div className="ftgrid">
                  <p>{this.state.lang.footer.twitter}</p>
                  <div className="qr qrt" />
                </div>
              </div>
            </Grid>            
          </Grid>
        </section>
      </div>
    )
  }
}

export default IndexPage
