import styled from "@emotion/styled";

export const ImageGalleryCss = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    justify-content: space-between;
    row-gap: 15px;
`;
export const ImageGalleryItemCss = styled.li`
    width: calc((100% - 4 * 15px) / 4);
`;