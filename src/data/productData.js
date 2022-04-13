const products = [
  {
    id: 1,
    rating: 5,
    reviews: [],
    price: 1200,
    countInStock: 4,
    name: "Galaxy S22 Ultra",
    category: "Smartphones",
    image:
      "https://res.cloudinary.com/abidazad/image/upload/v1649754649/galaxy-s22-ultra_highlights_colors_burgundy_front_a75oct.jpg",
    description:
      " Upgrade to a new phone by buying the Samsung Galaxy S22 Ultra 5G that is available at the best prices online on Gadgets Now. Launched on February 9, 2022 (Official) in India, the mobile is available with striking features and adequate specifications at an introductory price of Rs 71,564. The camera of the phone helps you capture stunning pictures as it comes with a Single camera setup on the rear which has 108 MP + 12 MP + 10 MP + 10 MP cameras. While on the front, the mobile sports a 40 MP front camera so that you can click some amazing selfies and make video calls. You will indulge in an immersive way while watching movies or playing games on this phone as it features a 6.8 inches (17.27 cm) display that has a resolution of 1440 x 3080 Pixels..",
  },
  {
    id: 2,
    rating: 5,
    reviews: [],
    price: 15000,
    countInStock: 0,
    name: "Samsung Galaxy M51 ",
    category: "mobiles",
    image:
      "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins--304622793?$684_547_PNG$",
    description:
      "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) front camera 16.95 cm (6.7-inch) sAMOLED Plus - Infinity-O display, FHD+ capacitive touchscreen with 1080 x 2400 pixels resolution, Contrast Ratio: 78960:1 Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dedicated Memory slot Android v10.0 operating system with 2.2GHz+1.8GHz Qualcomm | SD730G octa core processor",
  },
  {
    id: 3,
    rating: 4.25,
    reviews: [],
    price: 48000,
    countInStock: 5,
    name: "New Inspiron 15 5509 Laptop",
    category: "electronics",
    image:
      "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5508_non-touch/in5508nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=668&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=668,402",
    description:
      "11th Generation Intel® Core™ i3-1115G4 Processor (6MB Cache, up to 4.1 GHz)  laptop Windows 10 Home Single Language, English  videocard Intel® UHD Graphics with shared graphics memory  memory 8GB, 1x8GB, DDR4, 3200MHz  harddrive 512GB M.2 PCIe NVMe Solid State Drive  color Pebble (Top cover is Pebble color, Base and Palmrest are Black color)",
  },
  {
    id: 4,
    rating: 4.5,
    reviews: [],
    price: 4800,
    countInStock: 5,
    name: "Pure Cotton Men",
    category: "fashion",
    image:
      "https://static.cilory.com/450690-thickbox_default/nologo-navy-casual-shirt.jpg",
    description:
      "Product Code 87781 Sleeves Full Sleeves Pattern Checks Neck Collar Fit Slim Fabric 100% Cotton Country of Origin India Color Navy Category Shirts",
  },
  {
    id: 5,
    rating: 5,
    reviews: [],
    price: 800,
    countInStock: 7,
    name: "Logitech M170 Wireless ",
    category: "electronics",
    image:
      "https://www.reliancedigital.in/medias/Logitech-WIRELESS-MOUSE-M170-491276865-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDI0NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE5L2hiNi85MjAwNjI5NTc5ODA2LmpwZ3xiNjA3ZTI3MDJjYzBmZWEwY2IzNzY0MTAyZTU1MjM3ZTE5ZTc3MzhlNTZhN2ZkOTFjMmNhNmY0MDVmY2FhNTU2",
    description:
      "2.4 GHz Wireless connection Shape of the mouse supports hand for comfortable use Wireless range of up to 33 feet",
  },
  {
    id: 6,
    rating: 5,
    reviews: [],
    price: 56000,
    countInStock: 6,
    name: "Apple iPhone XR ",
    category: "mobiles",
    image:
      "https://www.reliancedigital.in/medias/Apple-iPhone-XR-128GB-Blue-491488452-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NzY3NnxpbWFnZS9qcGVnfGltYWdlcy9oODMvaGIwLzkwNTE3MzU1NTYxMjYuanBnfDU4ZTdiOTljNWNhMjA0MDgyZjEyYzkxYzZkZmIzMGE2MTQ1MzVlNDAzOTc5ZjgwMmYyODNhYjhjNzM5ODg5ZDA",
    description:
      "ColourBlue Sub-brandiPhone ModelXR BrandApple Phone Hardware & Storage Internal Storage128 GB ProcessorA12 Bionic Chip Phone Build & Convenience Height15.09 cms Width7.57 cms Thickness0.83 cms Weight194 grams Water ResistantYes SensorsBarometer, Accelerometer, Proximity, Ambient Light",
  },
];
export default products;
