// src/data/fichas.js
export const FICHAS = [
  {
    id: "pxcarne",
    titulo: "PX CARNE C15",
    cover: "/img/ganado.jpeg",                       // :contentReference[oaicite:5]{index=5}
    avatar: "/img/pxcarnesc15.svg",                  // :contentReference[oaicite:6]{index=6}
    imagenes: [
      "/fichastecnicas/ficha mard PX CARNE C-15.jpg",
      "/img/montaje productos mard-05.jpg"
    ],                                              // :contentReference[oaicite:7]{index=7}
    audio: "/audios/PX CARNE C15.mp3",              // :contentReference[oaicite:8]{index=8}
    telefono: "8008311220",
  },
  {
    id: "lecheras",
    titulo: "PX LECHERAS",
    cover: "/img/ganadolechero.png",                // :contentReference[oaicite:9]{index=9}
    avatar: "/img/pxlecheras.svg",                  // :contentReference[oaicite:10]{index=10}
    imagenes: [
      "/fichastecnicas/FICHA MARD PX LECHERAS.jpg",
      "/img/montaje productos mard-02.jpg"
    ],                                              // :contentReference[oaicite:11]{index=11}
    audio: "/audios/PX LECHERAS AUDIO.mp3",         // :contentReference[oaicite:12]{index=12}
    telefono: "8008311220",
  },
  {
    id: "equinos",
    titulo: "PREMIX EQUINOS",
    cover: "/img/ganado equino.jpg",                // ojo: espacio en nombre (igual que tu HTML) :contentReference[oaicite:13]{index=13}
    avatar: "/img/equinos.svg",                     // :contentReference[oaicite:14]{index=14}
    imagenes: [
      "/fichastecnicas/ficha mard premix equinos.jpg",
      "/img/montaje productos mard-01.jpg"
    ],                                              // :contentReference[oaicite:15]{index=15}
    audio: "/audios/premix equinos.mp3",            // :contentReference[oaicite:16]{index=16}
    telefono: "8008311220",
  },
  {
    id: "ovinos",
    titulo: "NÚCLEO MINERAL PARA OVINOS",
    cover: "/img/fondo-ovino.jpg",                  // :contentReference[oaicite:17]{index=17}
    avatar: "/img/ovinos.svg",                      // :contentReference[oaicite:18]{index=18}
    imagenes: [
      "/fichastecnicas/ficha mard NUCLEO MINERAL PARA OVINOS-01.jpg",
      "/img/montaje productos mard-03.jpg"
    ],                                              // :contentReference[oaicite:19]{index=19}
    audio: "/audios/nucleo mineral .mp3",           // (incluye espacio) :contentReference[oaicite:20]{index=20}
    telefono: "8008311220",
  },
  {
    id: "byways",
    titulo: "BYWAYS",
    cover: "/img/levadura.jpg",                     // :contentReference[oaicite:21]{index=21}
    avatar: "/img/byways.svg",                      // :contentReference[oaicite:22]{index=22}
    imagenes: [
      "/fichastecnicas/ficha mard BY WAYS.jpg",
      "/img/montaje productos mard-04.jpg"
    ],                                              // :contentReference[oaicite:23]{index=23}
    audio: "/audios/bways.mp3",                     // :contentReference[oaicite:24]{index=24}
    telefono: "8008311220",
  },
];

// util
export const getFicha = (id) => FICHAS.find(f => f.id === id);
