function hitungData() {
  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  // Validasi input
  if (!nama || !tinggi || !berat) {
    alert("Mohon isi semua data yang diperlukan!");
    return;
  }

  // Hitung IMT
  const tinggiMeter = tinggi / 100;
  const imt = berat / (tinggiMeter * tinggiMeter);

  // Hitung berat badan ideal (Broca)
  const beratIdeal = tinggi - 100 - (tinggi - 100) * 0.1;

  // Hitung berat minimal dan maksimal
  const beratMinimal = 18.5 * (tinggiMeter * tinggiMeter);
  const beratMaksimal = 25 * (tinggiMeter * tinggiMeter);

  // Tentukan status gizi
  let statusGizi = "";
  if (imt < 17.0) statusGizi = "Sangat Kurus";
  else if (imt < 18.5) statusGizi = "Kurus";
  else if (imt < 25.0) statusGizi = "Normal";
  else if (imt < 27.0) statusGizi = "Gemuk (Overweight)";
  else statusGizi = "Obesitas";

  // Hitung kebutuhan air (30ml per kg berat badan)
  const kebutuhanAir = (berat * 30) / 1000; // konversi ke liter

  // Tampilkan hasil
  document.getElementById("bbi").innerText = beratIdeal.toFixed(2);
  document.getElementById("imt").innerText = imt.toFixed(2);
  document.getElementById("status_gizi").innerText = statusGizi;
  document.getElementById("min_bb").innerText = beratMinimal.toFixed(2);
  document.getElementById("max_bb").innerText = beratMaksimal.toFixed(2);
  document.getElementById("kebutuhan_air").innerText = kebutuhanAir.toFixed(1);
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("berat").value = "";
  document.getElementById("bbi").innerText = "";
  document.getElementById("imt").innerText = "";
  document.getElementById("status_gizi").innerText = "";
  document.getElementById("min_bb").innerText = "";
  document.getElementById("max_bb").innerText = "";
  document.getElementById("kebutuhan_air").innerText = "";
}
