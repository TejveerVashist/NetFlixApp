import React, { Component } from 'react';
import Item from '../item';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';  
configure({ adapter: new Adapter() });


/**
 * @render react
 * @name TitleList
 * @description List titles by different categories and filters
 * @example
 * <TitleList
 *    title="Trending now"
 *    url="discover/movie?sort_by=popularity.desc&page=1"
 * />
 */
export default class TitleList extends Component {
  apiKey = '87dfa1c669eea853da609d4968d294be';

  static defaultProps = {
    title: "Trending now",
    url: 'discover/movie?sort_by=popularity.desc&page=1'
  }

  static propTypes = {
    /**
     * @property {string} url API URL from themoviedb.com
     */
    url: PropTypes.string,

    /**
     * @property {string} title List's title
     */
    title: PropTypes.string
  }

  state = {
    data: [],
    mounted: false,
    imdbRating:'',
    url:'https://www.youtube-nocookie.com/embed/NTzycsqxYJ0?rel=0&amp;amp;controls=0&amp;amp;showinfo=0'
  };

 

  componentWillReceiveProps(nextProps) {
  
  }

  componentDidMount() {
      this.setState({ mounted: true });
  }
  setTrailerURL=(e)=>{
    var newUrl='https://www.youtube-nocookie.com/embed/'+e+'?rel=0&amp;amp;controls=0&amp;amp;showinfo=0';
    this.setState({url:newUrl})
   console.log(e);
  }

  render() {
    var titles = '';
    var MovieItem='';
  {/**   if (this.state.data.results) {
      titles = this.state.data.results.map(function (title, i) {
        if (i < 5) {
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );

        } else {
          return (<div key={title.id}></div>);
        }
      });
    } */}
    if(this.props.shows.length>0){
          MovieItem= this.props.shows.map((movie,i)=>{
                return (
                  <Item  show={movie} key={movie.trailer}  rating={this.state.imdbRating} loadTrailer={()=>this.setTrailerURL(movie.trailer)}/>
            );
          });
    }
    var modal=<div className="container">
  
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            
          </div>
          <div className="modal-body">
          <iframe width='100%' height='450px' src={this.state.url} frameborder="0" allowfullscreen=""></iframe>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    return (
      <div >
      <div 
        ref={(r) => { this.titleCategory = r; }}
        className={style.TitleList} data-loaded={this.state.mounted}>
        <div className={style.Title} >
          <h1>{this.props.title}</h1>
          <div className={style['titles-wrapper']} >
            {MovieItem}
            
          </div>
        </div>
        
      </div>
            {modal}
      </div>
    );
  }
}
