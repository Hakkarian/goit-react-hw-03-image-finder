import PropTypes from 'prop-types';

import ImageGalleryItem from "../ImageGalleryItem";
import { ImageGalleryCss, ImageGalleryItemCss } from './ImageGallery.styled';


const ImageGallery = ({ items, ...otherProps }) => <ImageGalleryCss>
    {items.map(item =>
        <ImageGalleryItemCss key={item.id}><ImageGalleryItem item={item} {...otherProps} />
        </ImageGalleryItemCss>)}
</ImageGalleryCss>

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    otherProps: PropTypes.node
}

export default ImageGallery;