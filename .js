    // Ambil elemen navigasi dan daftar elemen sektion
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('.section');
    
    // Loop melalui setiap tautan navigasi
    nav.querySelectorAll('a').forEach((link) => {
      // Ketika pengguna mengklik tautan
      link.addEventListener('click', (event) => {
        // Batalkan tindakan default dari tautan
        event.preventDefault();
    
        // Dapatkan ID dari elemen tujuan
        const targetId = link.getAttribute('href');
    
        // Loop melalui setiap elemen sektion
        sections.forEach((section) => {
          // Jika elemen sektion memiliki ID yang sama dengan tujuan
          if (section.getAttribute('id') === targetId) {
            // Tampilkan elemen sektion tersebut dan sembunyikan yang lain
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
