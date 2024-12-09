import { ImageGalleryStyled } from "./ImageGallery.Styled";

import { ImageItem } from "../ImageItem/ImageItem";

import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";

const array = [image4 ,image1, image2, image3, image4 ,image1, image2, image3, image4];


export const ImageGallery = () => {
    return(
        <ImageGalleryStyled>
            <ImageItem images={array}></ImageItem>
        </ImageGalleryStyled>
    )
}