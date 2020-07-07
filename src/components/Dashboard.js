import React, {Component} from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const Sound = (props) => {
    const [volume, setVolume] = React.useState(1);


    const onChange = (event) => {
        setVolume(event.target.value);
        props.soundCheck(event.target.value);

    };
   return <div className="cardContainer">
   <Card  className="card">
                    <CardContent className="text-gray">
                    Master Volume
                    Overrides all other sound settings in this application
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                    <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={volume}
                onChange={onChange}
                
                >
                <MenuItem value={1}>Normal</MenuItem>
                <MenuItem value={2}>Low</MenuItem>
                <MenuItem value={3}>High</MenuItem>
            </Select>
                    </CardActions>
   </Card>
   </div>;
    
}

const Master = (props) => {
    const onChange = (event, value) => {
     
        props.masterVol(value);
    };
   return <div className="cardContainer">
   <Card  className="card">
                    <CardContent className="text-gray">
                    Master Volume
                    Overrides all other sound settings in this application
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                    <Slider
                    onChange={onChange}
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                />
                    </CardActions>
   </Card>
   </div>;
    
}

const Online = (props) => {
    const [checked, setChecked] = React.useState(true);
    const onChange = (event ) => {
        setChecked(event.target.checked);
        props.onlineCheck(event.target.checked);
    };
   return <div className="cardContainer">
   <Card  className="card">
                    <CardContent className="text-gray">
                    Online
                    Is this application connected to the internet?
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                    <Switch
                    checked={checked}
                    onChange={onChange}
                    name="checkedIt"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                    </CardActions>
   </Card>
   </div>;
    
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      msgs: [],
      masterVolume: 0,
      online: false
    };
}

    
onlineCheck = (onlineChange) => {
    this.state = {
        online: onlineChange,
    };

    console.log("checked");

    let msg = "";
    if(!onlineChange){
        msg = "Your application is offline. You won't be able to share or stream music to other devices.";
    }

    this.setState(state => {
        const newList = this.state.msgs;
        newList[0] = msg;
        return {
            msgs: newList
        };
    });
}

soundCheck = (sound) => {
    this.state = {
        sound: sound,
    };

    console.log("sound");

    let msg = "";
    if(sound === 2){
        msg = "Music quality is degraded. Increase quality if your connection allows it.";
    }

    this.setState(state => {
        const newList = this.state.msgs;
        newList[2] = msg;
        return {
            msgs: newList
        };
    });
}

    masterVolume = (masterVol) => {
        this.state = {
            masterVolume: masterVol,
        };

       

        let msg = "";
        if(masterVol > 80){
            msg = "Listening to music at a high volume could cause long-term hearing loss.";
        }

        this.setState(state => {
            const newList = this.state.msgs;
            newList[1] = msg;

            return {
                msgs: newList
            };
        });
    }
    

    render() {
      return (
        <div>
            <div id="cardsContainer">
            <Master masterVol={this.masterVolume}/>
            <Online onlineCheck={this.onlineCheck}/>
            <Sound soundCheck={this.soundCheck}/>
            </div>

            <h4>Systems Notifications:</h4>
            {this.state.msgs.map((data, index) => (
                <div>{this.state.msgs[index]}</div>
            ))}


        </div>
            
      )
    }
  }

export default Dashboard;