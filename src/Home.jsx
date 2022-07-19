import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: 'https://mcdn.wallpapersafari.com/medium/16/26/34DNWP.jpg' },
  {
    url: 'https://github.com/dreamyvoice/resource/blob/main/1655693788666.jpg?raw=true',
  },
  { url: 'https://mcdn.wallpapersafari.com/medium/39/27/z17Aso.jpg' },
  { url: 'images/4.jpg' },
  { url: 'images/5.jpg' },
  { url: 'images/6.jpg' },
  { url: 'images/7.jpg' },
];

function Home() {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <div>오늘의 인기 TOP</div>
      <div class="card">card1</div>
      <div class="card">card2</div>
      <div class="card">card3</div>
    </div>
  );
}

export default Home;
