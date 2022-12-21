import { Component } from "react";
import Modal from 'components/Modal';


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    error: null,
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  componentDidMount() {
    const images = localStorage.getItem('images');
    const parsedImages = JSON.parse(images);
    if (parsedImages) {
      this.setState({ images: parsedImages });
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
    const nextImages = this.state.images;
    const prevImages = prevState.images;
    if (nextImages !== prevImages) {
      localStorage.setItem('images', JSON.stringify(this.state.images));
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

render() {
  const { images, query, showModal } = this.state;

    return (
      < >
        <button type="button" onClick={this.toggleModal}>
        open Modal 
        </button>
        
        {showModal && (
          <Modal onClose = {this.toggleModal}>
            <h1>Hello</h1>
            <p>OOO</p>
            <button type="button" onClick={this.toggleModal}>Close</button>
            </Modal>
          )}
       
      </>
    );
  }
  
}
