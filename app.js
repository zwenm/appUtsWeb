function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "masuken.com" && password == "233307081") {
      window.location.assign("order.html");
      alert("Berhasil login sebagai seller")
  } else {
      alert("Informasi Akun Salah");
      return;
  }
}

function calculateTotal() {
  let total = 0;
  document.querySelectorAll('#items li').forEach(function(item) {
    const quantity = parseInt(item.querySelector('input').value);
    const price = parseFloat(item.querySelector('input').getAttribute('data-price'));
    total += quantity * price;
  });
  document.getElementById('total-price').textContent = formatCurrency(total);
}

document.querySelectorAll('#items input').forEach(function(input) {
  input.addEventListener('change', calculateTotal);
});

calculateTotal();

function formatCurrency(amount) {
  return 'Rp. ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function resetTotal() {
  document.getElementById('total-price').textContent = formatCurrency(0);
  document.querySelectorAll('#items input').forEach(function(input) {
    input.value = 0;
  });
}

document.getElementById('order-button').addEventListener('click', function() {
  calculateTotal();
  resetTotal();
  alert('Terima kasih! Pesanan Anda telah diterima.');
});