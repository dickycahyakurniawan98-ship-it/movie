import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Mengambil elemen-elemen dari DOM
const movieForm = document.getElementById('movie-form');
const authStatus = document.getElementById('auth-status');
const messageElem = document.getElementById('message');

// Inisialisasi Firebase
let app;
let db;
let auth;

async function initializeAppWithAuth() {
    if (Object.keys(firebaseConfig).length > 0 && initialAuthToken) {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);

        try {
            const userCredential = await signInWithCustomToken(auth, initialAuthToken);
            console.log("Authenticated successfully.");
            authStatus.classList.add('hidden');
            movieForm.classList.remove('hidden');
        } catch (error) {
            console.error("Authentication failed:", error);
            authStatus.classList.remove('hidden');
            movieForm.classList.add('hidden');
        }
    } else {
        authStatus.classList.remove('hidden');
        movieForm.classList.add('hidden');
        if (!initialAuthToken) {
            authStatus.querySelector('h1').textContent = "Akses Ditolak";
            authStatus.querySelector('p').textContent = "Kunci otentikasi tidak ditemukan.";
        } else {
            authStatus.querySelector('h1').textContent = "Gagal Menginisialisasi Firebase";
            authStatus.querySelector('p').textContent = "Pastikan konfigurasi Firebase sudah benar.";
        }
    }
}

// Fungsi untuk mengunggah data film
async function uploadMovie(movie) {
    try {
        const moviesRef = collection(db, `/artifacts/${appId}/public/data/movies`);
        await addDoc(moviesRef, movie);
        showMessage("Movie berhasil diunggah!", "text-green-500");
    } catch (e) {
        console.error("Error adding document: ", e);
        showMessage("Gagal mengunggah movie: " + e.message, "text-red-500");
    }
}

// Fungsi untuk menampilkan pesan status
function showMessage(text, colorClass) {
    messageElem.textContent = text;
    messageElem.className = `mt-4 text-center ${colorClass}`;
}

// Event listener saat formulir dikirim
movieForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const poster = document.getElementById('poster').value;
    const genre = document.getElementById('genre').value;
    const year = parseInt(document.getElementById('year').value);
    const rating = parseFloat(document.getElementById('rating').value);
    const description = document.getElementById('description').value;
    const serversJson = document.getElementById('servers').value;

    if (!title || !poster || !genre || !year || !rating || !serversJson) {
        showMessage("Semua field harus diisi.", "text-red-500");
        return;
    }

    try {
        const servers = JSON.parse(serversJson);
        const newMovie = {
            title,
            poster,
            genre,
            year,
            rating,
            description,
            servers
        };
        await uploadMovie(newMovie);
        movieForm.reset();
    } catch (error) {
        showMessage("Format Server JSON salah. Periksa kembali.", "text-red-500");
        console.error("Error parsing servers JSON:", error);
    }
});

// Jalankan inisialisasi aplikasi
initializeAppWithAuth();
