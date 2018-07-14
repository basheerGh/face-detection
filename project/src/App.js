import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/imagelinkform/imagelinkform'
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import FaceRecognition from './components/faceRecognition/faceRecognition'
import Signin from './components/signin/signin'
import Register from './components/register/register'

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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol : clarifiFace.left_col * width,
      topRow : clarifiFace.top_row * height,
      rightCol : width - (clarifiFace.right_col * width),
      bottomRow : height - (clarifiFace.bottom_row * height)
    } 
  }

  displayFaceBox = (box) => {
    console.log(box);
    
    this.setState({box : box})
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

      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))

      .catch (err =>  console.log(err) );

  }


onRouteChange = (route) => {
  if(route === 'signout') {
    this.setState({isSignIn: false})
    }else if (route === 'home') {
      this.setState({isSignIn : 'true'})
  }
  this.setState({route: route});
}


  render() {
    return (

      <div className='app'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
       ?  <div>
       <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition box={this.state.box}imageUrl={this.state.imageUrl} />
        </div> 
       : (
         this.state.route === 'signin'
         ? <Signin onRouteChange={this.onRouteChange}/>
         : <Register onRouteChange={this.onRouteChange}/>
        )

       
        }
      </div>
    );
  }
}

export default App;
