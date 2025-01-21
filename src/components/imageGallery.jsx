import * as React from 'react';

export default function ImageGallery() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {itemData.map((item) => (
          <div key={item.img} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-2 text-white text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const itemData = [
  { img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110', title: 'Bed' },
  { img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31', title: 'Books' },
  { img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6', title: 'Sink' },
  { img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3', title: 'Kitchen' },
  { img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3', title: 'Blinds' },
  { img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622', title: 'Chairs' },
  { img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77', title: 'Laptop' },
  { img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61', title: 'Doors' },
  { img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7', title: 'Coffee' },
  { img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee', title: 'Storage' },
  { img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62', title: 'Candle' },
  { img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4', title: 'Coffee table' },
];
