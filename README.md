# Portofolio Website - Tugas Slicing Web

## Tentang Website Ini

Website ini terdiri dari beberapa bagian: Home (hero section), About Me, Skills, Education Background, Projects, dan Contact. Navigasinya menggunakan smooth scroll ke masing-masing section, dan untuk tampilan mobile saya buat menu hamburger yang bisa dibuka tutup.

## Tech Stack

- HTML
- CSS (Flexbox, Grid, Media Query)
- JavaScript (DOM Manipulation)

## Penerapan JavaScript & DOM

Beberapa bagian di website ini menggunakan manipulasi DOM, di antaranya:

1. **Menu hamburger mobile** : toggle class `active` pada menu navigasi menggunakan `classList.toggle()`, dan menu otomatis menutup saat salah satu link diklik.
2. **Render project secara dinamis** : data project disimpan dalam array JavaScript, lalu ditampilkan ke halaman menggunakan `document.createElement()` dan `appendChild()`, jika ingin menambah project baru bisa langsung mengedit array, tidak perlu menulis ulang HTML.
## Responsive Design

Website ini sudah disesuaikan untuk 3 ukuran layar menggunakan media query:
- Desktop (default)
- Tablet (max-width: 900px)
- Mobile (max-width: 600px)

## Screenshot


**Tampilan Desktop**

<img width="1364" height="721" alt="Screenshot 2026-09-24 052520" src="https://github.com/user-attachments/assets/b7a57f09-bdff-4b59-b0be-a6670d6405f9" />


**Tampilan Tablet**

<img width="714" height="640" alt="Screenshot 2026-09-24 052735" src="https://github.com/user-attachments/assets/13ef42e6-190d-41f1-b6db-dbffc98577e4" />


**Tampilan Mobile**

<img width="716" height="642" alt="Screenshot 2026-09-24 052845" src="https://github.com/user-attachments/assets/b0ec71da-ce02-4c7a-bb19-072d703875e9" />


## Live Demo

https://slicing-web-portofolio.netlify.app
