import React, { Component } from 'react';
import ListToggle from '../list-toggle';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';
import axios from 'axios';
import hoc from '../../assets/img/posters/hoc.jpg'
export default class Item extends Component {
 
  constructor(props){
      super(props);
      this.state={
        imdbRating:''
      }
      
  }

  loadContent() {
    var url="http://omdbapi.com/?i="+this.props.show.imdbID+"&apikey=b7dff512";
    axios.get(url)
    .then(res => {
     var rating= res.data;
     this.setState({imdbRating:res.data.imdbRating});
      console.log(rating.imdbRating)
    }).catch(e=>{
      console.log(e)
    });
  }

  componentWillReceiveProps(nextProps) {
        this.loadContent();
    }
  

  componentDidMount() {
    this.loadContent();
  }


  render() {
    const imgPath=require('../../assets/img/posters/'+this.props.show.poster);
     var rating='';
   
    return (
      <div className={style.Item} style={{ backgroundImage: 'url('+imgPath+')' }}  data-toggle="modal" data-target="#myModal" onClick={this.props.loadTrailer}>
        <div className={style.overlay}>
          <div className={style.title}>{this.props.show.title}</div>
          <div className={style.rating}>{this.state.imdbRating} /10</div>
          <div className={style.plot}>{this.props.show.description}</div>
          <ListToggle />
        </div>
      </div>
      
    );
  } 
}
