function calculateBonus() {
    // Ambil input dari form
    var monthsWorked = document.getElementById("monthsWorked").value;
    var salary = document.getElementById("salary").value;

    // Validasi input
    if (monthsWorked === "" || salary === "") {
        document.getElementById("result").innerHTML = "Harap isi semua kolom dengan benar.";
        document.getElementById("result").style.color = "red";
        return;
    }

    // Hitung bonus berdasarkan rumus
    var bonus = (monthsWorked / 12) * salary;

    // Tampilkan hasil
    document.getElementById("result").innerHTML = "Bonus yang didapat: Rp " + bonus.toLocaleString();
    document.getElementById("result").style.color = "#4CAF50"; // Ubah warna hasil menjadi hijau
}
