import { ImageItemStyled } from "./ImageItem.Styled";

export const ImageItem = ({ alt, images }) => {
    return (
        <ImageItemStyled>
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={alt} />
                </div>
            ))}
        </ImageItemStyled>
    );
};