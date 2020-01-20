import React, { Component } from 'react';
import TitleList from './components/title-list';
import Hero from './components/hero';
import Logo from './components/logo';
import UserProfile from './components/user-profile';
import Navigation from './components/navigation';
import style from './App.scss';
import './global.css';
class App extends Component {

 
  state = {
    searchTerm: '',
    ResultsToShow: this.props.shows,
    searching:false

  };

  handleKeyUp=(e)=> {
    this.setState({ searchTerm: e.target.value });
  }

  handleChange=(e)=> {
     if(e.target.value==''){
      window.location.reload(false);
    }
    this.setState({ searchTerm: e.target.value });
    const searchResult=this.state.ResultsToShow.filter((item)=>{
               var res=item.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())
               if(res>=0){
                 console.log(item.title+" "+res);
               }
               return res>=0
    
    });
    var search=true;
    this.setState({ResultsToShow:searchResult,searching:search});
   
    
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
        {(this.state.searching)?null:<Hero slider={this.state.ResultsToShow[0]} />}
        <TitleList title="Top Movies List" shows={this.state.ResultsToShow} />
      </div>
    );
  }
}

export default App;

