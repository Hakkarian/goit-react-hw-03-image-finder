import Modal from 'components/Modal';
import PropTypes from 'prop-types';
import { Component, useEffect, useState } from 'react';


const ImageGalleryItem = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("keydown", this.closeEscape);
  // }, []);

  const openModal = () => setIsModalOpen(true);

    const close = () => {
      setIsModalOpen(false);
    }

    const closeModal = (e) => {
      if (e.target === e.currentTarget) close();
    };
    const closeEscape = (e) => {
      if (e.key === 'Escape') close();
  };
  
  return <>
         <img
           src={item.webformatURL}
           alt={item.tags}
           onClick={openModal}
           loading="lazy"
         />
         {isModalOpen && <Modal item={item} closeModal={closeModal} closeEscape={closeEscape} />}
       </>
}

// class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.closeEscape);
//   }
  
//   openModal = () => this.setState({ isModalOpen: true });

//   close = () => {
//     this.setState({ isModalOpen: false });
//   }

//   closeModal = (e) => {
//     if (e.target === e.currentTarget) this.close();
//   };
//   closeEscape = (e) => {
//     if (e.key === 'Escape') this.close();
//   };

//   render() {
//     const { item } = this.props;
//     const { isModalOpen } = this.state;
//     return (
//       <>
//         <img
//           src={item.webformatURL}
//           alt={item.tags}
//           onClick={this.openModal}
//           loading="lazy"
//         />
//         {isModalOpen && <Modal item={item} closeModal={this.closeModal} closeEscape={this.closeEscape} />}
//       </>
//     );
//   }
// }


ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })
}

export default ImageGalleryItem;