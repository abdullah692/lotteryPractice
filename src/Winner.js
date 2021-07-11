import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Link} from 'react-router-dom'
import fire from './Components/fire';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background: '#607d8b'
  },
  title: {
    flexGrow: 1,
  },
}));


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Winner #01',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Winner #02',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Winner #03',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  
];

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    color:'blue',
      textAlign: ' center',
    height: 20,
    paddingLeft: theme.spacing(80),
    backgroundColor: 'lightblue'
  },
  img: {
    height: 200,
    display: 'block',
    width:'100%',
    overflow: 'hidden',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 
}));

function SwipeableTextMobileStepper({handleLogout}) {

  const classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const link={ textDecoration:'none'}
  
  // const [buttonPopUp,setPopUp]=useState(false);
  const maxSteps = tutorialSteps.length;
const btn={margin:'30px  40%' , padding: '10px' , fontSize:'30px' ,
 fontFamily:'sans-serif', width:'20%', }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Details
          </Typography>
          {/* <Link to='/Login' > */}
          <Button color="inherit" onClick={handleLogout} >LogOut</Button> 
          {/* </Link> */}
         
        </Toolbar>
      </AppBar>
      <Paper square elevation={0} className={classes2.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes2.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        // steps={maxSteps}
        // position="static"
        // variant="text"
        // activeStep={activeStep}
        variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      className={classes1.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <Link  to='/Live' style={link}>
      <Button style={btn} variant="outlined" color="primary" >
  LIVE
</Button> </Link>
<br>
</br>
<Link  to='/WinMonth' style={link}>
<Button  style={btn} variant="outlined" color="Secondary">
  WINNER
</Button></Link>

<div></div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
