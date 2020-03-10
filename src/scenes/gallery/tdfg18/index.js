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
const album = rootDirectoryLink + "/tdfg18/";
const album_number_of_images = 29;

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
        _ => ({src:"", width: 4, height: 3})
    );
    for (let i = photos.length - 1; i >= 0; i--) {
        //image number in the s3 bucket
        let imageNumber = i+1;
        switch (imageNumber) {
            //images that have a different size ratio
            case 8:
            case 28:
            {
                photos[i].height=4;
                photos[i].width=3;
                break;
            }
            default:
            // nothing
        }
        let filename = "tdfg18-" + imageNumber + ".jpg";
        let fileLink = album + filename;
        photos[i].src = fileLink;
    }
    return photos;
}

class Gallery_page extends Component {
  render() {
    return (
      <main className="Gallery">
      <MetaTags>
        <title>Tech Day for Girls 2018 - VUW Women in Tech</title>
      </MetaTags>
          <div className="main">
              <PhotoGallery photos={photos}/>
          </div>
      </main>
    );
  }
}

export default Gallery_page;
