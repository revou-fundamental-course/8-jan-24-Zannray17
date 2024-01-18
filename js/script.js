function hitung() {
    // Get the side length from the input
    const sideLength = parseFloat(document.getElementById('sideLength').value);

    // Validate if the input is a positive number
    if (isNaN(sideLength) || sideLength <= 0) {
        alert('Panjang sisi harus merupakan angka positif.');
        return;
    }

    // Calculate Luas & Keliling
    const luas = sideLength * sideLength;
    const keliling = 4 * sideLength;

    // Display the results
    document.getElementById('luas-value').innerText = luas.toFixed(2);
    document.getElementById('keliling-value').innerText = keliling.toFixed(2);
}
