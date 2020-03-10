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
const album = rootDirectoryLink + "/ball19/";
const album_number_of_images = 141;

const photos = split(shuffle(Photos()));
const photos2 = split2(shuffle(Photos()));

function shuffle(array)
{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Photos()
{
    const photos = Array.from(
        {length: album_number_of_images},
        _ => ({src:"", width: 3, height: 2})
    );
    for (let i = photos.length - 1; i >= 0; i--) {
        //image number in the s3 bucket
        let imageNumber = i+1;
        switch (imageNumber) {
            //Portrait Images

            case 1 :
            case 5   :
            case 10  :
            case 11  :
            case 23  :
            case 25  :
            case 26  :
            case 27  :
            case 31  :
            case 34  :
            case 38  :
            case 67  :
            case 78  :
            case 81  :
            case 93  :
            case 94  :
            case 98  :
            case 102 :
            case 105 :
            case 109 :
            case 110 :
            case 111 :
            case 112 :
            case 113 :
            case 169 :
            {
                photos[i].height = 3;
                photos[i].width = 2;
                break;
            }
            default:
            // nothing
        }
        let filename = "ball19-" + imageNumber + ".jpg";
        let fileLink = album + filename;
        photos[i].src = fileLink;
    }
    return photos;
}


function split(array) {
    return array.slice(0,10);
}


function split2(array) {
    return array.slice(10,array.size);
}

class Gallery_page extends Component {
  render()
  {
    return (
      <main className="Gallery">
      <MetaTags>
        <title>STEM Ball 2019 - VUW Women in Tech</title>
      </MetaTags>
          <div className="main">
              <PhotoGallery photos={photos}/>
              <PhotoGallery photos={photos2}/>
          </div>
      </main>
    );
  }
}

export default Gallery_page;
