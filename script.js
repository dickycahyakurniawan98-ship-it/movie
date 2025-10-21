// Pastikan MOVIES_PER_PAGE didefinisikan di data.js
const MOVIES_PER_PAGE = 12; // Tetapkan batas per halaman jika data.js tidak ada
let currentPage = 1;
let filteredMovies = [...movies]; // Kumpulan film yang sedang difilter/ditampilkan

// --- 1. DOM Elements ---
const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const yearFilter = document.getElementById('year-filter');
const sortByFilter = document.getElementById('sort-by');
const loadMoreButton = document.getElementById('load-more-button');
const noResultsMessage = document.getElementById('no-results');
const navMenuLinks = document.querySelectorAll('.nav-menu a');

// Modal Elements
const modalOverlay = document.getElementById('movie-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title');
const modalPoster = document.getElementById('modal-poster');
const modalSynopsis = document.getElementById('modal-synopsis');
const modalYear = document.getElementById('modal-year');
const modalType = document.getElementById('modal-type');
const modalRating = document.getElementById('modal-rating');
const modalViews = document.getElementById('modal-views');
const modalGenres = document.getElementById('modal-genres');
const modalWatchLink = document.getElementById('modal-watch-link');
const modalDownloadLink = document.getElementById('modal-download-link');
const episodeSelectorContainer = document.getElementById('episode-selector-container');
const episodeSelector = document.getElementById('episode-selector');

// --- 2. Fungsi Pembantu (Helpers) ---

// Mengonversi angka tampilan menjadi format yang mudah dibaca (e.g., 1.5M)
function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + ' Juta';
    }
    if (views >= 1000) {
        return (views / 1000).toFixed(0) + ' Ribu';
    }
    return views;
}

// Membuat URL embed video
function getEmbedUrl(embedData) {
    if (embedData.youtube) {
        // Dummy link YouTube, ganti dengan logic player real
        return `https://www.youtube.com/embed/${embedData.youtube}?autoplay=1`;
    }
    if (embedData.dailymotion) {
        return `https://www.dailymotion.com/embed/video/${embedData.dailymotion}`;
    }
    return '#'; // Fallback
}

// --- 3. Fungsi Rendering Film ---

// Membuat HTML untuk satu kartu film
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.setAttribute('data-id', movie.id);
    card.innerHTML = `
        <img src="${movie.imageUrl}" alt="${movie.title}" class="poster-image" loading="lazy" 
             onerror="this.onerror=null;this.src='https://placehold.co/300x450/1a1a1a/cccccc?text=Poster+Missing';">
        <span class="movie-rating">${movie.rating.toFixed(1)}</span>
        ${(movie.type === 'Series' || movie.type === 'Anime' || movie.type === 'Donghua') && movie.latestEpisode ? 
          `<span class="movie-episode-badge">Eps ${movie.latestEpisode} / ${movie.totalEpisodes || '?'}</span>` : ''}
        <div class="card-overlay">
            <div class="movie-info-top">
                <div class="movie-type">${movie.type}</div>
            </div>
            <h4 class="movie-title" title="${movie.title}">${movie.title}</h4>
            <p class="movie-views">${formatViews(movie.views)} views</p>
        </div>
    `;

    // Tambahkan event listener untuk menampilkan modal
    card.addEventListener('click', () => showDetailsPopup(movie.id));
    return card;
}

// Merender film ke grid
function renderMovies(moviesToRender, append = false) {
    if (!append) {
        movieGrid.innerHTML = '';
        window.scrollTo(0, 0); // Gulir ke atas saat filter baru diterapkan
    }

    if (moviesToRender.length === 0) {
        noResultsMessage.style.display = 'block';
        loadMoreButton.style.display = 'none';
        return;
    } else {
        noResultsMessage.style.display = 'none';
    }

    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    const endIndex = startIndex + MOVIES_PER_PAGE;
    const batch = moviesToRender.slice(startIndex, endIndex);

    batch.forEach(movie => {
        movieGrid.appendChild(createMovieCard(movie));
    });

    // Perbarui tombol Load More
    if (endIndex < moviesToRender.length) {
        loadMoreButton.style.display = 'block';
    } else {
        loadMoreButton.style.display = 'none';
    }
}

// --- 4. Fungsi Filter, Search, dan Sort ---

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;
    const sortBy = sortByFilter.value;

    // 1. Filter
    let result = movies.filter(movie => {
        // Filter Pencarian Judul
        const titleMatch = movie.title.toLowerCase().includes(searchTerm);
        
        // Filter Genre
        const genreMatch = selectedGenre === "" || movie.genre.includes(selectedGenre);
        
        // Filter Tahun
        const yearMatch = selectedYear === "" || movie.year.toString() === selectedYear;

        return titleMatch && genreMatch && yearMatch;
    });

    // 2. Sorting
    result.sort((a, b) => {
        if (sortBy === 'rating') {
            return b.rating - a.rating;
        } else if (sortBy === 'views') {
            return b.views - a.views;
        } else if (sortBy === 'id') {
            return b.id - a.id; // Terbaru (berdasarkan ID yang lebih besar)
        } else if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    filteredMovies = result;
    currentPage = 1;
    renderMovies(filteredMovies);
}

// --- 5. Fungsi Popup Detail ---

function showDetailsPopup(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    // Isi Konten Modal
    modalTitle.textContent = movie.title;
    modalPoster.src = movie.imageUrl;
    modalSynopsis.textContent = movie.synopsis;
    modalYear.textContent = movie.year;
    modalType.textContent = movie.type;
    modalRating.textContent = movie.rating.toFixed(1);
    modalViews.textContent = formatViews(movie.views);
    modalDownloadLink.href = movie.downloadLink;

    // Genre Tags
    modalGenres.innerHTML = movie.genre.map(g => `<span>${g}</span>`).join('');

    // Logic Episode Selector (Untuk Series/Anime/Donghua)
    if (movie.type === 'Series' || movie.type === 'Anime' || movie.type === 'Donghua') {
        episodeSelectorContainer.style.display = 'block';
        episodeSelector.innerHTML = ''; // Reset episode selector
        
        movie.episodesData.forEach(ep => {
            const option = document.createElement('option');
            option.value = getEmbedUrl(ep.embed);
            option.textContent = `Episode ${ep.episode}`;
            episodeSelector.appendChild(option);
        });

        // Tautkan link tonton ke episode pertama atau yang dipilih
        modalWatchLink.href = episodeSelector.value;
        episodeSelector.onchange = () => {
            modalWatchLink.href = episodeSelector.value;
        };

    } else {
        // Untuk Movie
        episodeSelectorContainer.style.display = 'none';
        modalWatchLink.href = getEmbedUrl(movie.embed);
    }

    // Tampilkan Modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Nonaktifkan scroll body
}

function closeDetailsPopup() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Aktifkan kembali scroll body
}

// --- 6. Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Filter Tahun
    const years = [...new Set(movies.map(m => m.year))].sort((a, b) => b - a);
    const yearOptionsHtml = years.map(y => `<option value="${y}">${y}</option>`).join('');
    yearFilter.insertAdjacentHTML('beforeend', yearOptionsHtml);
    
    // 2. Terapkan Filter Awal (render pertama)
    applyFilters();
});

// Event listener untuk Search, Filter, dan Sort
searchInput.addEventListener('keyup', applyFilters);
genreFilter.addEventListener('change', applyFilters);
yearFilter.addEventListener('change', applyFilters);
sortByFilter.addEventListener('change', applyFilters);

// Event listener untuk menu genre di header (cepat filter)
navMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const genre = e.target.getAttribute('data-filter-genre');
        
        // Atur filter genre dropdown
        genreFilter.value = genre;
        
        // Hapus kelas 'active' dari semua link
        navMenuLinks.forEach(l => l.classList.remove('active'));
        // Tambahkan kelas 'active' ke link yang diklik
        e.target.classList.add('active');

        applyFilters();
    });
});

// Event listener Load More
loadMoreButton.addEventListener('click', () => {
    currentPage++;
    renderMovies(filteredMovies, true); // Append = true
});

// Event listener untuk menutup modal
modalCloseBtn.addEventListener('click', closeDetailsPopup);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeDetailsPopup();
    }
});

// Menutup modal dengan tombol ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeDetailsPopup();
    }
});
