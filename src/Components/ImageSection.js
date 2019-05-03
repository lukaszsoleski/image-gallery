import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Forest from '../img/forest.jpg'
import Beach from '../img/beach-vacation-water-summer.jpg'
import Hammock from '../img/hammock-on-beach-vacation-philippines.jpg'
import Mountains from '../img/mountains.jpg'
import Panda from '../img/panda-animals-wild.jpg'
import Sky from '../img/sky-lights.jpg'
export const Image = (props) => (
   <img src={props.link} className='image rounded' alt="" />
)

export default class ImageSection extends Component {
  constructor(props){
      super(props)
      // mock images
      this.state = {
          images:[
            {key:'beach-vacation-water-summer.jpg',value:Beach},
            {key:'forest.jpg',value:Forest},
            {key:'hammock-on-beach-vacation-philippines.jpg', value:Hammock},
            {key:'mountains.jpg', value:Mountains},
            {key:'panda-animals-wild.jpg',value:Panda},
            {key:'sky-lights.jpg',value:Sky}
          ] 
      }
  }
  GetImages (name) {
    if (!name) {
      return this.state.images
    }
    let images = this.state.images;
    return images.filter(el => el.key.includes(name))
  }

  render () {
    let currImages = this.GetImages(this.props.name)
    return (
        currImages.map( (x,i) => (
          <div key={i} className='pb-4'>
            <Image link={x.value} />
          </div>
        ))
    )
  }
}
ImageSection.propTypes = {
  name: PropTypes.string.isRequired
}
