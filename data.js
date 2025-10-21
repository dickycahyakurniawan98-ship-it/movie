// Daftar film, series, anime, dan donghua dummy
// Properti: id, title, year, genre (Array), type, rating, views, imageUrl,
// latestEpisode (untuk series/anime), totalEpisodes, episodesData (untuk series/anime), embed (untuk movie), downloadLink
const movies = [
    // --- SERIES ---
    {
        id: 1,
        title: 'Stranger Things Season 4',
        year: 2022,
        genre: ['Sci-Fi', 'Horror', 'Drama'],
        type: 'Series',
        rating: 8.7,
        views: 1500000,
        imageUrl: 'https://placehold.co/300x450/451a4a/ffffff?text=Stranger+Things+S4',
        latestEpisode: 9,
        totalEpisodes: 9,
        episodesData: [
            { episode: 1, embed: { youtube: 'gC4gnTy6l9c' } },
            { episode: 9, embed: { youtube: 'gC4gnTy6l9c' } },
        ],
        downloadLink: 'link_download_series_st4'
    },
    {
        id: 2,
        title: 'Money Heist',
        year: 2021,
        genre: ['Action', 'Thriller', 'Crime'],
        type: 'Series',
        rating: 8.3,
        views: 1200000,
        imageUrl: 'https://placehold.co/300x450/1f2937/ffffff?text=Money+Heist',
        latestEpisode: 10,
        totalEpisodes: 10,
        episodesData: [{ episode: 1, embed: { youtube: 'gC4gnTy6l9c' } }],
        downloadLink: 'link_download_series_mh'
    },
    {
        id: 3,
        title: 'Battle Through the Heavens S5',
        year: 2022,
        genre: ['Animation', 'Action', 'Fantasy'],
        type: 'Donghua',
        rating: 8.8,
        views: 750000,
        imageUrl: 'https://placehold.co/300x450/dc2626/ffffff?text=BTTH+S5',
        latestEpisode: 5,
        totalEpisodes: 52,
        episodesData: [
            { episode: 1, embed: { youtube: 'ID_YOUTUBE_BTTH_EP1' } },
            { episode: 5, embed: { youtube: 'ID_YOUTUBE_BTTH_EP5' } },
        ],
        downloadLink: 'link_download_donghua_btth'
    },
    {
        id: 4,
        title: 'The Witcher',
        year: 2019,
        genre: ['Fantasy', 'Action', 'Adventure'],
        type: 'Series',
        rating: 8.2,
        views: 1100000,
        imageUrl: 'https://placehold.co/300x450/065f46/ffffff?text=The+Witcher',
        latestEpisode: 8,
        totalEpisodes: 8,
        episodesData: [
            { episode: 1, embed: { youtube: 'gC4gnTy6l9c' } },
            { episode: 8, embed: { youtube: 'gC4gnTy6l9c' } },
        ],
        downloadLink: 'link_download_series_witcher'
    },

    // --- MOVIES ---
    {
        id: 5,
        title: 'Spider-Man: No Way Home',
        year: 2021,
        genre: ['Action', 'Sci-Fi', 'Adventure'],
        type: 'Movie',
        rating: 7.8,
        views: 500000,
        imageUrl: 'https://placehold.co/300x450/1e3a8a/ffffff?text=Spider-Man',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'JfVOs4VSpmA' },
        downloadLink: 'link_download_movie_spiderman'
    },
    {
        id: 6,
        title: 'Jujutsu Kaisen Season 2',
        year: 2023,
        genre: ['Animation', 'Action', 'Fantasy'],
        type: 'Anime',
        rating: 9.0,
        views: 850000,
        imageUrl: 'https://placehold.co/300x450/f97316/ffffff?text=JJK+S2',
        latestEpisode: 1,
        totalEpisodes: 24,
        episodesData: [
            { episode: 1, embed: { dailymotion: 'x8f1t0p' } },
        ],
        downloadLink: 'link_download_series_jjk'
    },
    {
        id: 7,
        title: 'The Conjuring 3',
        year: 2021,
        genre: ['Horror', 'Mystery', 'Thriller'],
        type: 'Movie',
        rating: 6.3,
        views: 350000,
        imageUrl: 'https://placehold.co/300x450/374151/ffffff?text=Conjuring+3',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_conjuring3'
    },
    {
        id: 8,
        title: 'Crazy Rich Asians',
        year: 2018,
        genre: ['Romance', 'Comedy', 'Drama'],
        type: 'Movie',
        rating: 6.9,
        views: 400000,
        imageUrl: 'https://placehold.co/300x450/c2410c/ffffff?text=Crazy+Rich+Asians',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_cra'
    },
    {
        id: 9,
        title: 'Laskar Pelangi',
        year: 2008,
        genre: ['Drama', 'Family'],
        type: 'Movie',
        rating: 7.6,
        views: 200000,
        imageUrl: 'https://placehold.co/300x450/059669/ffffff?text=Laskar+Pelangi',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_lp'
    },
    {
        id: 10,
        title: 'Your Name',
        year: 2016,
        genre: ['Animation', 'Romance', 'Fantasy'],
        type: 'Anime',
        rating: 8.4,
        views: 600000,
        imageUrl: 'https://placehold.co/300x450/6d28d9/ffffff?text=Your+Name',
        latestEpisode: 1,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_yourname'
    },

    // --- TAMBAHAN DATA DUMMY ---
    {
        id: 11,
        title: 'Extraction 2',
        year: 2023,
        genre: ['Action', 'Thriller'],
        type: 'Movie',
        rating: 7.0,
        views: 550000,
        imageUrl: 'https://placehold.co/300x450/be123c/ffffff?text=Extraction+2',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_ext2'
    },
    {
        id: 12,
        title: 'The Last of Us S1',
        year: 2023,
        genre: ['Sci-Fi', 'Drama', 'Horror'],
        type: 'Series',
        rating: 9.2,
        views: 2000000,
        imageUrl: 'https://placehold.co/300x450/16a34a/ffffff?text=The+Last+of+Us+S1',
        latestEpisode: 9,
        totalEpisodes: 9,
        episodesData: [{ episode: 1, embed: { youtube: 'gC4gnTy6l9c' } }],
        downloadLink: 'link_download_series_tlou'
    },
    {
        id: 13,
        title: 'Suzume no Tojimari',
        year: 2022,
        genre: ['Animation', 'Adventure'],
        type: 'Anime',
        rating: 8.5,
        views: 450000,
        imageUrl: 'https://placehold.co/300x450/4f46e5/ffffff?text=Suzume',
        latestEpisode: 1,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_suzume'
    },
    {
        id: 14,
        title: 'Interstellar',
        year: 2014,
        genre: ['Sci-Fi', 'Adventure', 'Drama'],
        type: 'Movie',
        rating: 8.6,
        views: 950000,
        imageUrl: 'https://placehold.co/300x450/2563eb/ffffff?text=Interstellar',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_interstellar'
    },
    {
        id: 15,
        title: 'The Great Wall',
        year: 2016,
        genre: ['Action', 'Fantasy'],
        type: 'Movie',
        rating: 5.9,
        views: 150000,
        imageUrl: 'https://placehold.co/300x450/d97706/ffffff?text=The+Great+Wall',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_tgw'
    },
    {
        id: 16,
        title: 'Squid Game',
        year: 2021,
        genre: ['Thriller', 'Drama'],
        type: 'Series',
        rating: 8.0,
        views: 1800000,
        imageUrl: 'https://placehold.co/300x450/ef4444/ffffff?text=Squid+Game',
        latestEpisode: 9,
        totalEpisodes: 9,
        episodesData: [{ episode: 1, embed: { youtube: 'gC4gnTy6l9c' } }],
        downloadLink: 'link_download_series_sg'
    },
    {
        id: 17,
        title: 'Spirited Away',
        year: 2001,
        genre: ['Animation', 'Fantasy'],
        type: 'Anime',
        rating: 8.6,
        views: 300000,
        imageUrl: 'https://placehold.co/300x450/db2777/ffffff?text=Spirited+Away',
        latestEpisode: 1,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_sa'
    },
    {
        id: 18,
        title: 'Train to Busan',
        year: 2016,
        genre: ['Horror', 'Action', 'Thriller'],
        type: 'Movie',
        rating: 7.6,
        views: 480000,
        imageUrl: 'https://placehold.co/300x450/0e7490/ffffff?text=Train+to+Busan',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_ttb'
    },
    {
        id: 19,
        title: 'The Conjuring',
        year: 2013,
        genre: ['Horror', 'Mystery'],
        type: 'Movie',
        rating: 7.5,
        views: 650000,
        imageUrl: 'https://placehold.co/300x450/374151/ffffff?text=The+Conjuring',
        latestEpisode: null,
        totalEpisodes: 1,
        embed: { youtube: 'gC4gnTy6l9c' },
        downloadLink: 'link_download_movie_conjuring'
    },
    {
        id: 20,
        title: 'Demon Slayer: Kimetsu no Yaiba S3',
        year: 2023,
        genre: ['Animation', 'Action', 'Fantasy'],
        type: 'Anime',
        rating: 8.8,
        views: 900000,
        imageUrl: 'https://placehold.co/300x450/8b5cf6/ffffff?text=Demon+Slayer+S3',
        latestEpisode: 11,
        totalEpisodes: 11,
        episodesData: [{ episode: 1, embed: { youtube: 'gC4gnTy6l9c' } }],
        downloadLink: 'link_download_series_ds3'
    },
];

// Menambahkan sinopsis singkat dan properti genre string untuk kemudahan filter
movies.forEach(movie => {
    movie.synopsis = `Tonton sekarang! Film ${movie.title} (${movie.year}) adalah karya ${movie.genre.join(', ')} terbaik. Rating: ${movie.rating}.`;
    movie.genreString = movie.genre.join(' ');
});

// Variabel ini akan diakses oleh script.js
// Untuk simulasi, saya akan batasi hanya 12 item yang akan dirender pertama kali
const MOVIES_PER_PAGE = 12; // Tetapkan batas per halaman
