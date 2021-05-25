import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    
    imgPath:
      'https://cdn0.scrvt.com/f0e142eb6dd378b2ac2282da098e0a1e/ad9a85ac95cbe87c/0cb5f8e1668c/v/2535eaa438a4/corporateeventplanner.jpg',
  },
  {
    
    imgPath:
      'https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Luxury+Wedding+Planner+Boston',
  },
  {
    
    imgPath:
      'http://www.yesbola88.com/wp-content/uploads/2020/03/n3..jpg',
  },
  {
    
    imgPath:
      'https://i.ndtvimg.com/i/2016-03/food-catering-625_625x350_71458554920.jpg',
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1300,
    flexGrow: 1,
    height: 400
  },
  img: {
    height:"100%",
    maxWidth: "100%",
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));
export default function BannerSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath} 
        />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            
          </Button>
        }
      />
    </div>
  );
}
