// Data film dipindahkan langsung ke sini untuk menghindari masalah CORS
const allMovies = [
    {
        title: "The Sword Emperor of Eternity",
        poster: "https://seaty24.com/wp-content/uploads/2023/12/Poster-The-Sword-Emperor-of-Eternity.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 7.5,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "I Am The Blade",
        poster: "https://seaty24.com/wp-content/uploads/2023/12/Poster-I-Am-The-Blade-1.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 8.2,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Tales of Demons and Gods",
        poster: "https://seaty24.com/wp-content/uploads/2023/07/Poster-Tales-of-Demons-and-Gods-S7.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 9.1,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "My Senior Brother Is Too Steady",
        poster: "https://seaty24.com/wp-content/uploads/2022/01/my-senior-brother-is-too-steady-donghua-poster.jpg",
        genre: "Donghua",
        year: 2022,
        label: "Donghua",
        rating: 7.8,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Twin Martial Spirits",
        poster: "https://seaty24.com/wp-content/uploads/2022/06/Twin-Martial-Spirits-S2-Poster.jpg",
        genre: "Donghua",
        year: 2022,
        label: "Donghua",
        rating: 8.5,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Jade Dynasty",
        poster: "https://seaty24.com/wp-content/uploads/2023/02/Poster-Jade-Dynasty.jpg",
        genre: "Movie",
        year: 2023,
        label: "Movie",
        rating: 6.9,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Battle Through the Heavens",
        poster: "https://seaty24.com/wp-content/uploads/2022/07/Battle-Through-The-Heavens-Poster.jpg",
        genre: "Donghua",
        year: 2022,
        label: "Donghua",
        rating: 9.0,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Perfect World",
        poster: "https://seaty24.com/wp-content/uploads/2023/12/Perfect-World.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 8.8,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Legend of the Dragon King",
        poster: "https://seaty24.com/wp-content/uploads/2023/12/Poster-Legend-of-the-Dragon-King.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 8.1,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Renegade Immortal",
        poster: "https://seaty24.com/wp-content/uploads/2023/12/Poster-Renegade-Immortal.jpg",
        genre: "Donghua",
        year: 2023,
        label: "Donghua",
        rating: 8.4,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Martial Universe",
        poster: "https://seaty24.com/wp-content/uploads/2022/08/Martial-Universe-S3-Poster.jpg",
        genre: "Donghua",
        year: 2022,
        label: "Donghua",
        rating: 8.9,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "A Will Eternal",
        poster: "https://seaty24.com/wp-content/uploads/2022/08/A-Will-Eternal-Poster.jpg",
        genre: "Donghua",
        year: 2022,
        label: "Donghua",
        rating: 8.7,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Kungfu Hustle",
        poster: "https://images.alphacoders.com/463/thumb-1920-463870.jpg",
        genre: "Movie",
        year: 2004,
        label: "Movie",
        rating: 6.5,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Spirited Away",
        poster: "https://www.themoviedb.org/t/p/original/3G59JtGqj05yP8UjFh6M6TjJvCg.jpg",
        genre: "Movie",
        year: 2001,
        label: "Movie",
        rating: 8.6,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        title: "Your Name",
        poster: "https://www.themoviedb.org/t/p/original/qZqXp1uGfSjJk0X7sI7kXm9dYhI.jpg",
        genre: "Movie",
        year: 2016,
        label: "Movie",
        rating: 9.3,
        servers: [
            { name: "Server 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // Data untuk slider (diambil dari movies.js)
    const heroSlides = allMovies.slice(-3).map(movie => ({
        title: movie.title,
        subtitle: `Tahun: ${movie.year} | ${movie.genre}`,
        background: movie.poster,
        videoUrl: movie.servers[0].url // Mengambil URL dari server pertama
    }));

    const mainPage = document.getElementById('main-page');
    const mainContent = document.getElementById('main-content');
    const detailPage = document.getElementById('detail-page');
    const backBtn = document.getElementById('back-btn');
    const detailPoster = document.getElementById('detail-poster');
    const detailTitle = document.getElementById('detail-title');
    const detailVideoPlayer = document.getElementById('detail-video-player');
    const sectionTitle = document.getElementById('section-title');
    const yearToggleBtn = document.getElementById('year-toggle');
    const yearDropdown = document.getElementById('year-dropdown');
    const serverButtonsContainer = document.getElementById('server-buttons');
    const detailRatingContainer = document.getElementById('detail-rating');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // Kontrol untuk slider
    const sliderWrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const sliderDotsContainer = document.getElementById('slider-dots');
    let currentSlide = 0;
    let slideInterval;

    // Fungsi untuk merender slider
    function renderHeroSlides() {
        sliderWrapper.innerHTML = '';
        sliderDotsContainer.innerHTML = '';
        heroSlides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slider-slide');
            slideElement.style.backgroundImage = `url('${slide.background}')`;
            slideElement.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div class="absolute bottom-10 left-10 p-4">
                    <h2 class="text-xl md:text-3xl font-bold mb-2">${slide.title}</h2>
                    <p class="text-sm md:text-base text-gray-300">${slide.subtitle}</p>
                    <a href="#" data-movie-index="${allMovies.findIndex(m => m.title === slide.title)}" class="play-btn mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors">Tonton Sekarang</a>
                </div>
            `;
            sliderWrapper.appendChild(slideElement);

            const dot = document.createElement('span');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => showSlide(index));
            sliderDotsContainer.appendChild(dot);
        });
        showSlide(currentSlide);
        startAutoSlide();
    }

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
        currentSlide = index;
        const slides = document.querySelectorAll('.slider-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const offset = -currentSlide * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Fungsi untuk slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk slide sebelumnya
    function prevSlide() {
        currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk memulai geser otomatis
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listener untuk tombol navigasi slider
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });

    // Delegasi event untuk tombol "Tonton Sekarang" pada slider
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('play-btn')) {
            event.preventDefault();
            const movieIndex = event.target.getAttribute('data-movie-index');
            const movie = allMovies[movieIndex];
            if (movie) {
                showMovieDetail(movie);
            }
        }
    });

    // Fungsi untuk merender daftar film ke container tertentu
    function renderMovies(moviesArray) {
        const container = document.getElementById('movie-list-container');
        container.innerHTML = '';
        moviesArray.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card', 'bg-gray-800', 'rounded-lg', 'overflow-hidden', 'cursor-pointer', 'transform', 'transition-transform', 'duration-200', 'hover:scale-105', 'shadow-md');

            const posterImg = document.createElement('img');
            posterImg.src = movie.poster;
            posterImg.alt = movie.title;
            posterImg.classList.add('w-full', 'h-auto', 'object-cover', 'rounded-t-lg');
            
            const titleElement = document.createElement('h3');
            titleElement.textContent = movie.title;
            titleElement.classList.add('p-3', 'text-sm', 'md:text-base', 'text-center', 'truncate');
            
            if (movie.label) {
                const genreLabel = document.createElement('span');
                genreLabel.classList.add('label-genre');
                genreLabel.textContent = movie.label;
                movieCard.appendChild(genreLabel);
            }

            if (movie.rating) {
                const ratingLabel = document.createElement('span');
                ratingLabel.classList.add('rating-label');
                ratingLabel.textContent = movie.rating.toFixed(1);
                movieCard.appendChild(ratingLabel);
            }

            movieCard.addEventListener('click', () => {
                showMovieDetail(movie);
            });

            movieCard.appendChild(posterImg);
            movieCard.appendChild(titleElement);
            container.appendChild(movieCard);
        });
    }

    // Fungsi untuk menampilkan tampilan detail film
    function showMovieDetail(movie) {
        mainPage.classList.add('hidden');
        mainContent.classList.add('hidden');
        detailPage.classList.remove('hidden');

        detailPoster.src = movie.poster;
        detailTitle.textContent = movie.title;
        detailVideoPlayer.src = movie.servers[0].url; // Default to the first server

        renderRating(movie.rating);
        renderServerButtons(movie.servers);
    }
    
    // Fungsi untuk merender rating bintang
    function renderRating(rating) {
        detailRatingContainer.innerHTML = '';
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star');
            detailRatingContainer.appendChild(star);
        }
        
        if (halfStar) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star-half-alt');
            detailRatingContainer.appendChild(star);
        }
        
        for (let i = 0; i < emptyStars; i++) {
            const star = document.createElement('i');
            star.classList.add('far', 'fa-star');
            detailRatingContainer.appendChild(star);
        }
    }
    
    // Fungsi untuk merender tombol server
    function renderServerButtons(servers) {
        serverButtonsContainer.innerHTML = '';
        servers.forEach(server => {
            const button = document.createElement('button');
            button.classList.add('bg-gray-700', 'text-white', 'px-4', 'py-2', 'rounded-full', 'font-semibold', 'hover:bg-gray-600', 'transition-colors');
            button.textContent = server.name;
            button.addEventListener('click', () => {
                detailVideoPlayer.src = server.url;
            });
            serverButtonsContainer.appendChild(button);
        });
    }

    // Fungsi untuk kembali ke halaman utama
    function backToMainPage() {
        mainPage.classList.remove('hidden');
        mainContent.classList.remove('hidden');
        detailPage.classList.add('hidden');
        detailVideoPlayer.src = '';
        renderMovies(allMovies);
        sectionTitle.textContent = "Semua Film";
    }

    backBtn.addEventListener('click', backToMainPage);

    // Fungsionalitas Year dropdown
    const uniqueYears = [];
    for (let year = 2025; year >= 2001; year--) {
        uniqueYears.push(year);
    }

    yearToggleBtn.addEventListener('click', (event) => {
        event.preventDefault();
        yearDropdown.classList.toggle('hidden');
    });
    
    function renderYearDropdown() {
        yearDropdown.innerHTML = '';
        uniqueYears.forEach(year => {
            const yearLink = document.createElement('a');
            yearLink.href = '#';
            yearLink.textContent = year;
            yearLink.classList.add('block', 'px-4', 'py-2', 'hover:bg-gray-600', 'transition-colors');
            yearLink.addEventListener('click', (event) => {
                event.preventDefault();
                const filteredMovies = allMovies.filter(movie => movie.year === year);
                renderMovies(filteredMovies);
                sectionTitle.textContent = `Tahun ${year}`;
                mainPage.classList.remove('hidden');
                mainContent.classList.add('hidden');
                detailPage.classList.add('hidden');
                yearDropdown.classList.add('hidden');
            });
            yearDropdown.appendChild(yearLink);
        });
    }
    renderYearDropdown();
    
    // Fungsionalitas menu mobile
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
    
    // Menjadikan tombol navigasi berfungsi
    const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const filterType = event.target.getAttribute('data-filter-type');
            const filterValue = event.target.getAttribute('data-filter-value');
            
            if (filterType === 'all') {
                backToMainPage();
            } else if (filterType === 'genre') {
                const filteredMovies = allMovies.filter(movie => movie.genre === filterValue);
                renderMovies(filteredMovies);
                sectionTitle.textContent = `${filterValue} List`;
                mainPage.classList.remove('hidden');
                mainContent.classList.add('hidden');
                detailPage.classList.add('hidden');
            }
            // Tutup menu mobile jika terbuka
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    // Panggil fungsi untuk merender film di setiap bagian
    renderHeroSlides();
    renderMovies(allMovies);
});
