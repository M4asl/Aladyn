export const offerListData = [
  {
    id: "1",
    name: "Pranie dywanow i wykladzin",
    description:
      "Kompleksowy, 5-cio etapowy proces czyszczenia ręcznego z użyciem profesjonalnych narzędzi.",
    image: "/Slider/Slide2.jpg",
    blobFirstAnimate: {
      x: [0, 400, 100],
      y: [0, -20, 100],
      rotate: [0, -90],
    },
    blobFirstTransition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
    },
    blobSecondAnimation: {
      x: [0, 200],
      y: [0, -20, 0],
      rotate: [0, -90],
    },
    blobSecondTransition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  {
    id: "2",
    name: "Pranie tapicerki samochodowej i meblowej",
    description:
      "Dokładny zabieg prania powierzchni tapicerowanych z wykorzystaniem sprzętu najwyższej rynkowej klasy.",
    image: "/Slider/Slide9.jpg",
    blobThirdAnimate: {
      opacity: [0, 0.7],
    },
    blobThirdTransition: {
      duration: 3,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
    blobFourthAnimation: {
      opacity: [0, 0.7],
    },
    blobFourthTransition: {
      duration: 3,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
  {
    id: "3",
    name: "Usuwanie uporczywych zapachow",
    description:
      "Skuteczne zwalczanie uciążliwych zapachów z wykorzystaniem specjalistycznej chemii bakterio i grzybobójczej wzbogaconej o skutecznie maskujący czynnik zapachowy.",
    image: "/Slider/Slide5.jpg",
    waveImage: "/Wave/wave4.png",
  },
  {
    id: "4",
    name: "Dezynfekcja i czyszczenie para",
    description:
      "Dezynfekcja i czyszczenie powierzchni z wykorzystaniem pary wodnej generowanej wysokiej klasy parownicą.",
    image: "/Slider/Vapor.jpg",
    waveImage: "/Wave/wave5.png",
  },
  {
    id: "5",
    name: "Usuwanie siersci",
    description:
      "Szczegółowe usuwanie sierści/włosów z powierzchni przy zastosowaniu wybitnie skutecznej, specjalistycznej rakli z gumą.",
    image: "/Slider/Dog.jpg",
    blobFifthAnimate: {
      x: [0, 400, 100],
      y: [0, -20, 100],
      rotate: [0, -90],
    },
    blobFifthTransition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
    },
    waveImage: "/Wave/wave6.png",
  },
];
