import React, {Component} from 'react';
import './App.css';
import FilterContainer from './components/filter-container/filter-container.component';
import Header from './components/header/header.component';
import ImagesList from './components/images-list/images-list.component';
import {nanoid} from 'nanoid';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';
import Modal from './components/modal/modal.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFilterValue: '',
      imagesList: [],
      loading: false
    }
  }

  setDateFilter = (date) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    if(new Date(date) >= today) {
      alert("Date selected should be before today's date");
      return;
      }
    let newDateFormat;
    if(date) {
      newDateFormat = new Date(date).toISOString().slice(0, 10);
    } else {
      newDateFormat = ''
    }
    this.setState({
      dateFilterValue: date
    },() => {
      console.log(this.state)
      this.initiateImagesList(newDateFormat)
    });
  }
  componentDidMount() {
    this.initiateImagesList()
}

  initiateImagesList = async (date = null) => {
    this.setState({
      loading: true
    })
    let url = '';
    if(date && date !== null) {
       url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    } else {
       url = `https://api.nasa.gov/planetary/apod?count=15&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    }
    const resp = await fetch(url)
    const images = await resp.json()
    console.log(images)
    let updatedImagesList;
    if(date) {
      updatedImagesList = [{
        id: `${nanoid()}`, 
        favorite: false, 
        ...images
      }]
    } else {
      updatedImagesList = images.map(image =>  ({ 
        id: `${nanoid()}`, 
        favorite: false, 
        ...image
      }));
    }
        
        this.setState({
        imagesList: updatedImagesList,
        loading: false
      })
  }


  render() {
  const {dateFilterValue, imagesList, loading} = this.state;
  return (
    <div className="App">
      <Header/>
      <FilterContainer dateFilterValue={dateFilterValue} setDateFilter={this.setDateFilter} />
      {loading ? <LoadingSpinner /> : <ImagesList imagesList={imagesList} />}
      <Modal />
    </div>
  );
  }
}

export default App;
