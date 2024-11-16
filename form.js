document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah reload halaman setelah submit form

    // Ambil data dari formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Membuat objek untuk menyimpan data
    const formData = {
        name,
        email,
        phone,
        address
    };

    // Ambil data yang sudah ada di localStorage atau buat array kosong
    let storedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Menambahkan data baru ke dalam array
    storedData.push(formData);

    // Simpan kembali data yang sudah diperbarui ke localStorage
    localStorage.setItem('formData', JSON.stringify(storedData));

    // Menampilkan pesan konfirmasi kepada pengguna
    alert("Data berhasil disimpan!");

    // Reset form setelah submit
    document.getElementById('registerForm').reset();
});