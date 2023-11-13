document.addEventListener("DOMContentLoaded", function() {
    var colors = ["#7752FE", "5D12D2", "#7752FE"]; // Ganti dengan warna yang diinginkan
    var currentColorIndex = 0;
    var backgroundContainer = document.getElementById("container");

    function changeBackgroundColor() {
        backgroundContainer.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Panggil fungsi untuk mengubah warna latar belakang setiap beberapa detik
    setInterval(changeBackgroundColor, 1000); // Ganti angka 2000 dengan interval yang diinginkan (dalam milidetik)
});


