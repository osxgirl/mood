import React, { Component } from 'react'
 
import Mood from 'react-background-slideshow'
 
import image1 from '../assets/artistic #FFDE59.svg'
import image2 from '../assets/blessed #7ED957.svg'
import image3 from '../assets/cheerful 5271FF.svg'
import image4 from '../assets/excited #8C52FF.svg'
import image5 from '../assets/frisky #EB00FF.svg'
import image6 from '../assets/happy #5E17EB.svg'
import image7 from '../assets/inspired #FF914D.svg'
import image8 from '../assets/lively 5CE1E6.svg'
import image9 from '../assets/wild #FF5757.svg'


export default class App extends Component {
  render () {
    return (
      <div>
        <Mood images={[ image1, image2, image3, image4, image5, image6, image7, image8, image9 ]} />
      </div>
    )
  }
}
