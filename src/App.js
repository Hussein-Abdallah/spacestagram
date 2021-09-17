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
    this.setState({
      dateFilterValue: date
    });
  }
  componentDidMount() {
    this.setState({loading: true})
    this.initiateImagesList()
}

  initiateImagesList = async () => {
    const resp = await fetch(`https://api.nasa.gov/planetary/apod?count=20&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    const images = await resp.json()
        const updatedImagesList = images.map(image =>  ({ 
          id: `${nanoid()}`, 
          favorite: false, 
          ...image
        }));
        console.log(updatedImagesList)
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
