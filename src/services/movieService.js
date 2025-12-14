const mockMovies = [
  {
    id: 1,
    title: "Big Buck Bunny",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
    description: "Follow the adventures of Big Buck Bunny, a large and lovable rabbit who is the target of three forest bullies. This heartwarming tale shows how kindness and courage can overcome adversity.",
    year: 2024,
    rating: "PG",
    duration: "10m 34s",
    match: 98,
    genres: ["Animation", "Comedy", "Family"],
    cast: ["Sacha Goedegebure", "Ton Roosendaal"],
    category: "trending",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 2,
    title: "Elephant's Dream",
    thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop",
    description: "Two strange characters explore a capricious and seemingly infinite machine. The elder, Proog, acts as a tour guide and protector, while the younger, Emo, questions everything.",
    year: 2024,
    rating: "PG-13",
    duration: "10m 53s",
    match: 95,
    genres: ["Animation", "Sci-Fi", "Fantasy"],
    cast: ["Tygo Gernandt", "Cas Jansen"],
    category: "trending",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "For Bigger Blazes",
    thumbnail: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1920&h=1080&fit=crop",
    description: "Experience the thrill of high-speed action and intense firefighting operations. This documentary-style feature showcases the bravery and dedication of modern firefighters.",
    year: 2023,
    rating: "PG-13",
    duration: "15s",
    match: 92,
    genres: ["Documentary", "Action"],
    cast: ["Various Firefighters"],
    category: "popular",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 4,
    title: "For Bigger Escape",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    description: "Embark on an epic journey through stunning landscapes and breathtaking vistas. This visual masterpiece takes you on an unforgettable adventure around the world.",
    year: 2024,
    rating: "G",
    duration: "15s",
    match: 96,
    genres: ["Documentary", "Travel", "Adventure"],
    cast: ["Nature Documentary"],
    category: "trending",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 5,
    title: "For Bigger Fun",
    thumbnail: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&h=1080&fit=crop",
    description: "Get ready for non-stop entertainment and laughter! This comedy special brings together the best moments of fun, games, and hilarious situations.",
    year: 2023,
    rating: "PG",
    duration: "15s",
    match: 94,
    genres: ["Comedy", "Entertainment"],
    cast: ["Comedy Ensemble"],
    category: "action",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: 6,
    title: "For Bigger Joyrides",
    thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1920&h=1080&fit=crop",
    description: "Experience the thrill of the open road with stunning automotive cinematography. From classic cars to modern supercars, this is a celebration of automotive excellence.",
    year: 2024,
    rating: "PG",
    duration: "15s",
    match: 89,
    genres: ["Documentary", "Automotive"],
    cast: ["Automotive Enthusiasts"],
    category: "popular",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: 7,
    title: "For Bigger Meltdowns",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
    description: "Witness the most spectacular visual effects and explosive action sequences ever captured on film. This technical showcase pushes the boundaries of what's possible.",
    year: 2024,
    rating: "PG-13",
    duration: "15s",
    match: 97,
    genres: ["Action", "Sci-Fi"],
    cast: ["VFX Artists"],
    category: "trending",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: 8,
    title: "Sintel",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    description: "A young woman named Sintel searches for her lost dragon companion. This emotionally powerful animated short film showcases stunning visuals and a touching story.",
    year: 2023,
    rating: "PG-13",
    duration: "14m 48s",
    match: 91,
    genres: ["Animation", "Fantasy", "Adventure"],
    cast: ["Halina Reijn"],
    category: "adventure",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  {
    id: 9,
    title: "Subaru Outback",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    description: "Explore the capabilities and features of the legendary Subaru Outback. This automotive showcase highlights adventure, reliability, and innovation.",
    year: 2024,
    rating: "G",
    duration: "30s",
    match: 88,
    genres: ["Commercial", "Automotive"],
    cast: ["Subaru Team"],
    category: "drama",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  },
  {
    id: 10,
    title: "Tears of Steel",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=225&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop",
    description: "In a dystopian future, a group of scientists and warriors fight to save humanity. This sci-fi epic combines stunning visual effects with an engaging storyline.",
    year: 2024,
    rating: "PG-13",
    duration: "12m 14s",
    match: 93,
    genres: ["Sci-Fi", "Action", "Drama"],
    cast: ["Derek de Lint", "Sergio Hasselbaink"],
    category: "action",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  }
];

export const getMoviesByCategory = async () => {
  return [
    {
      id: 1,
      name: "Trending Now",
      movies: mockMovies.filter(m => m.category === "trending")
    },
    {
      id: 2,
      name: "Popular on Netflix",
      movies: mockMovies.filter(m => m.category === "popular")
    },
    {
      id: 3,
      name: "Action & Adventure",
      movies: mockMovies.filter(m => m.category === "action" || m.category === "adventure")
    },
    {
      id: 4,
      name: "Drama",
      movies: mockMovies.filter(m => m.category === "drama")
    },
    {
      id: 5,
      name: "Continue Watching",
      movies: mockMovies.slice(0, 5)
    }
  ];
};

export const getFeaturedMovie = async () => {
  return mockMovies[0];
};

export const getMovieById = async (id) => {
  return mockMovies.find(m => m.id === id) || mockMovies[0];
};

export const searchMovies = async (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.description.toLowerCase().includes(lowercaseQuery) ||
    movie.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery))
  );
};

export const getMyList = async () => {
  return mockMovies.slice(0, 6);
};
