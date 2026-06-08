# Rangkuman Dasar CSS Vanilla (Web Responsif & Modern)

Catatan ringkas ini berisi poin-poin penting CSS Vanilla yang telah kita pelajari selama membangun Hero Section portfolio. Catatan ini berfungsi sebagai panduan referensi cepat sebelum melangkah ke CSS Framework.

---

## 1. CSS Variables (Custom Properties)
Digunakan untuk menyimpan nilai yang sering digunakan (warna, ukuran, font) di satu tempat agar mudah dikelola.
* **Cara Deklarasi** (biasanya di `:root` agar bisa diakses di semua elemen):
  ```css
  :root {
      --primary-color: #282828;
      --nav-height: 5rem;
  }
  ```
* **Cara Penggunaan**:
  ```css
  main {
      background-color: var(--primary-color);
  }
  ```

---

## 2. Flexbox (Tata Letak 1 Dimensi)
Digunakan untuk mengatur susunan elemen anak secara vertikal atau horizontal di dalam satu baris/kolom.
* **Properti Utama**:
  * `display: flex;` -> Mengaktifkan mode flex pada elemen pembungkus (parent).
  * `flex-direction` -> Menentukan arah (`row` = horizontal, `column` = vertikal).
  * `justify-content` -> Mengatur jarak horizontal (`space-between`, `center`, `flex-start`, dll).
  * `align-items` -> Mengatur posisi vertikal elemen (`center`, `stretch`, dll).
  * `gap` -> Memberikan jarak antar elemen anak secara otomatis tanpa margin manual.

---

## 3. Media Queries (Desain Responsif)
Kunci utama untuk membuat tampilan web menyesuaikan diri dengan berbagai resolusi layar (HP, tablet, desktop).
* **Contoh Target HP/Tablet (Breakpoint 768px)**:
  ```css
  @media (max-width: 768px) {
      /* Gaya CSS di sini hanya aktif jika lebar layar <= 768px */
      main .about-me {
          flex-direction: column-reverse; /* Menyusun ke bawah (vertikal) */
      }
  }
  ```

---

## 4. Standar Selector CSS (ID vs Class)
* **Class (`.`)**: Digunakan untuk gaya visual (styling) yang bisa digunakan berulang kali pada banyak elemen (contoh: `.btn-primary`). **Sangat direkomendasikan untuk styling.**
* **ID (`#`)**: Digunakan untuk elemen yang unik di halaman web (hanya boleh ada 1 ID dengan nama yang sama per halaman). Biasanya digunakan untuk jangkar halaman (anchor links seperti `href="#about"`) atau JavaScript. **Hindari ID untuk styling.**

---

## 5. Animasi Mikro & Interaksi (Hover & Transition)
Membuat website terasa dinamis dan premium dengan animasi halus saat kursor didekatkan.
* **Kombinasi Sederhana**:
  ```css
  .btn-primary {
      transition: all 0.3s ease; /* Mengatur durasi & kehalusan animasi */
  }

  .btn-primary:hover {
      transform: scale(1.02); /* Sedikit membesar */
      box-shadow: 0px 5px 15px rgba(0,0,0,0.2); /* Efek bayangan melayang */
  }
  ```

---

## 6. Jalur File (Relative Path) pada CSS
Jika menulis CSS di dalam sub-folder (seperti `css/style.css`), jalur pemanggilan aset harus keluar satu folder terlebih dahulu:
* ❌ Salah: `url('assets/image.png')` -> Mencari di `css/assets/image.png`.
*  Benar: `url('../assets/image.png')` -> Keluar dari folder `css`, lalu masuk ke `assets/image.png`.
