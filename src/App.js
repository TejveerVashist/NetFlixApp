import React, { Component } from 'react';
import TitleList from './components/title-list';
import Hero from './components/hero';
import Logo from './components/logo';
import UserProfile from './components/user-profile';
import Navigation from './components/navigation';
import style from './App.scss';
import './global.css';

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components.
 * @example
 * <App />
 */
class App extends Component {
  apiKey = '87dfa1c669eea853da609d4968d294be';
 
  state = {
    searchTerm: '',
    ResultsToShow: this.props.shows
  };

  handleKeyUp=(e)=> {
    this.setState({ searchTerm: e.target.value });
  }

  handleChange=(e)=> {
    this.setState({ searchTerm: e.target.value });
    const searchResult=this.state.ResultsToShow.filter((item)=>{
               var res=item.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())
               if(res>=0){
                 console.log(item.title+" "+res);
               }
               return res>=0
    
    });
    
  }
  render() {
    return (
      <div>
        <header className={style.Header}>
          <Logo />
          <Navigation />
          <div id="search" className={style.Search}>
            <input  onChange={this.handleChange} type="text" placeholder="Search for a title..." value={this.state.searchTerm} />
          </div>
          <UserProfile username={"Tejveer"}/>
        </header>
        <Hero slider={this.state.ResultsToShow[0]}/>
        <TitleList title="Top Movies List" shows={this.state.ResultsToShow} />
        {/*<TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
    <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />*/}
      </div>
    );
  }
}

export default App;

