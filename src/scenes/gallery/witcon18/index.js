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
const album = rootDirectoryLink + "/witcon18/";
const album_number_of_images = 47;

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
        _ => ({src:"", width: 3, height: 2})
    );

    for (let i = photos.length - 1; i >= 0; i--) {
        //image number in the s3 bucket
        let imageNumber = i+1;
        let image = photos[i];
        switch (imageNumber) {
            //images that have a different size ratio

            //fall through for 2:3 images
            case 2:
            case 5:
            case 32:
            case 33:
            case 41:
            case 45:
            {
                image.width=2;
                image.height=3;
                break;
            }

            //fall through
            case 35:
            case 36:
            case 27:
            {
                image.width=16;
                image.height=9;
                break;
            }

            default:
            // nothing
        }

        let filename = "witcon18-" + imageNumber + ".jpg";
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
        <title>WITcon 2018 - VUW Women in Tech</title>
      </MetaTags>
          <div className="main">
              <PhotoGallery photos={photos}/>
          </div>
      </main>
    );
  }
}

export default Gallery_page;
