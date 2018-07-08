import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/imagelinkform/imagelinkform'
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import FaceRecognition from './components/faceRecognition/faceRecognition'


/* App Component contains componoents which I will working on it*/

const app = new Clarifai.App({
  apiKey: 'b1bd9a5fffb04acebb5c4e2b3de35410'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}




class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ' ',
      imageUrl: ''

    }
  }
  onInputChange = (e) => {
    this.setState({ input: e.target.value });

  }
  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input })

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
      .then(response => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
    )
      .then(err => {
        console.log(err);
        
      }
      );

  }





  render() {
    return (
      <div className='app'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />

      </div>
    );
  }
}

export default App;
