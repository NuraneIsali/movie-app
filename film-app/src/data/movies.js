const movies = [
  // ================= TRENDING =================
  {
    id: 1,
    title: "Interstellar",
    rating: 8.9,
    category: "trending",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 2,
    title: "Joker",
    rating: 8.4,
    category: "trending",
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
  },
  {
    id: 3,
    title: "Avengers Endgame",
    rating: 8.7,
    category: "trending",
    image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: 4,
    title: "John Wick",
    rating: 8.1,
    category: "trending",
    image:
      "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
  },
  {
    id: 5,
    title: "Oppenheimer",
    rating: 8.6,
    category: "trending",
    image:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
  id: 30,
  title: "Se7en",
  rating: 8.6,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
},

{
  id: 31,
  title: "Gladiator",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
},

{
  id: 32,
  title: "Whiplash",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
},

{
  id: 33,
  title: "The Prestige",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
},

  // ================= POPULAR =================
  {
    id: 6,
    title: "Avatar",
    rating: 7.9,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
  },
  {
    id: 7,
    title: "Titanic",
    rating: 8.0,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
  },
  {
    id: 8,
    title: "Spider-Man No Way Home",
    rating: 8.3,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
  },
  {
    id: 9,
    title: "Black Panther",
    rating: 7.8,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
  },
  {
    id: 10,
    title: "Doctor Strange",
    rating: 7.5,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    trailer: "https://www.youtube.com/embed/HSzx-zryEgM",
  },
  {
    id: 11,
    title: "Thor Ragnarok",
    rating: 7.9,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  },
  {
    id: 12,
    title: "Iron Man",
    rating: 7.8,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    id: 13,
    title: "Black Widow",
    rating: 6.9,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
  },
  {
    id: 14,
    title: "Doctor Strange 2",
    rating: 7.2,
    category: "popular",
    image:
      "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
  },

  // ================= TOP RATED =================
  {
    id: 15,
    title: "The Dark Knight",
    rating: 9.0,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 16,
    title: "Inception",
    rating: 8.8,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 17,
    title: "Fight Club",
    rating: 8.8,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    trailer: "https://www.youtube.com/embed/qtRKdVHc-cE",
  },
  {
    id: 18,
    title: "The Godfather",
    rating: 9.2,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
  },
  {
    id: 19,
    title: "The Shawshank Redemption",
    rating: 9.3,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
  },
  {
    id: 20,
    title: "Se7en",
    rating: 8.6,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    id: 21,
    title: "Gladiator",
    rating: 8.5,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 22,
    title: "Whiplash",
    rating: 8.5,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
  {
    id: 23,
    title: "The Prestige",
    rating: 8.5,
    category: "top",
    image:
      "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
  },
  {
  id: 24,
  title: "Se7en",
  rating: 8.6,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
},

{
  id: 25,
  title: "Gladiator",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
},

{
  id: 26,
  title: "Whiplash",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
},

{
  id: 27,
  title: "The Prestige",
  rating: 8.5,
  category: "top",
  image:
    "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
},
];

export default movies;