import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import kanji from './kanji.json';
// import Icon from '@material-ui/core/Icon';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pos: 0 }
  }

  handlePrev() {
    console.log('prev')
    let newPos = this.state.pos;
    if (newPos > 0) {
      newPos -= 1;
      this.setState( { pos: newPos } );
    }
  }

  handleNext() {
    console.log('next')
    let newPos = this.state.pos;
    if (newPos < 499) {
      newPos += 1;
      this.setState( { pos: newPos } );
    }
  }

  render() {
    const a = Object.keys(kanji)
    const pos = this.state.pos;
    
    // shufle array
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }  
    // console.log(a)

    const style1 = {
      fontSize: 200,
      textAlign: "center",
      fontFamily: "Meiryo, 'YU Gothic', sans-serif",
    }

    const style2 = {
      padding: 32,
    }
  
    const style3 = {
      paddingTop: 32,
      textAlign: "center",
    }
  
    const style4 = {
      marginRight: 32,
    }
  
    const onYomi = kanji[a[pos]].onyomi.join(', ');
    const kunYomi = kanji[a[pos]].kunyomi.join(', ');;

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={style1}>{kanji[a[pos]].symbol}</div>
          </Grid>
          <Grid item xs={6}>
            <div style={style2}>
              <Typography component="p">
                # {this.state.pos + 1}
                <br /><br />
                KUN: {kunYomi}<br />
                ON: {onYomi}<br />
                <br />
                RUS: {kanji[a[pos]].meaning.ru}<br />
                ENG: {kanji[a[pos]].meaning.en}<br />
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div style={style3}>
          <Button variant="contained" style={style4} onClick={this.handlePrev.bind(this)}>Prev</Button>
          <Button variant="contained" onClick={this.handleNext.bind(this)}>Next</Button>
        </div>
      </Container>
    );
  
  }
}

export default App;
