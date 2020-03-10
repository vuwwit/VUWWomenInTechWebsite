import React, { Component } from "react";
import "./index.scss";
import PhotoGallery from 'react-photo-gallery';
import MetaTags from 'react-meta-tags';

//s3 bucket with all images
const bucket = "https://s3-ap-southeast-2.amazonaws.com/vuwwit-photo-gallery";

//gallery sub directory
const gallery = "/gallery";
const rootDirectoryLink = bucket+gallery;

//album
const album = rootDirectoryLink + "/witcon19/";
const album_number_of_images = 84;

const photos =  shuffle(Photos());

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Photos(){
    const photos = Array.from(
        {length: album_number_of_images},
        _ => ({src:"", width: 16, height: 9})
    );

    for (let i = photos.length - 1; i >= 0; i--) {
        //image number in the s3 bucket
        let imageNumber = i+1;
        let image = photos[i];
        switch (imageNumber) {
            //images that have a different size ratio

            //fall through for 4:3 images
            case 1:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 25:
            case 27: 
            case 29:
            case 32: 
            case 33: 
            case 34: 
            case 58: 
            case 59: 
            case 60: 
            case 61: 
            case 62: 
            case 63: 
            case 64: 
            case 65:
            case 66: 
            case 67: 
            case 68: 
            case 69: 
            case 70:
            case 71: 
            case 72: 
            case 73: 
            case 74: 
            case 75: 
            case 76: 
            case 77: 
            case 78: 
            case 79: 
            case 80: 
            case 81:
            case 82:
            case 84:
            {
                image.width=4;
                image.height=3;
                break;
            }

            //fall through
            case 83:
            {
                image.width=3;
                image.height=4;
                break;
            }

            default:
            // nothing
        }

        let filename = "witcon19-" + imageNumber + ".JPG";
        let fileLink = album + filename;
        image.src = fileLink;
    }
    return photos;
}

class Gallery_page extends Component {
  render() {
    return (
      <main className="Gallery">
      <MetaTags>
        <title>WITcon 2019 - VUW Women in Tech</title>
      </MetaTags>
          <div className="main">
              <PhotoGallery photos={photos}/>
          </div>
      </main>
    );
  }
}

export default Gallery_page;
