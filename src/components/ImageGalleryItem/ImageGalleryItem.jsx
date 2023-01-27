import Modal from 'components/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';


class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    } 
    openModal = () => this.setState({isModalOpen: true})
    
    closeModal = (e) => {
        // if (e.target === e.currentTarget) {
            this.setState({ isModalOpen: false });
        // }

    }

    render() {
        const { item } = this.props;
        const { isModalOpen } = this.state;
        return (
          <>
            <img
              src={item.webformatURL}
              alt={item.tags}
              onClick={this.openModal}
              loading="lazy"
            />
            {isModalOpen && (<Modal item={item} closeModal={this.closeModal} />
            )}
          </>
        );
    }
}


ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })
}

export default ImageGalleryItem;