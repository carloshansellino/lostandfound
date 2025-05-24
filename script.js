document.getElementById('formFound').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form penemuan terkirim. Terima kasih!');
  // Bisa tambahkan logic simpan data atau kirim ke backend API di sini
  this.reset();
  showPage(homePage, foundForm);
});

document.getElementById('formLost').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form kehilangan terkirim. Terima kasih!');
  // Bisa tambah logic kirim data ke backend
  this.reset();
  showPage(homePage, lostForm);
});
