 function hitung(op) {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      const hasilBox = document.getElementById("hasil");

      // Validasi input
      if (isNaN(angka1) || isNaN(angka2)) {
        hasilBox.innerHTML = "<span class='error'>⚠️ Harap isi kedua angka dengan benar!</span>";
        return;
      }

      let hasil;

      switch (op) {
        case '+':
          hasil = angka1 + angka2;
          break;
        case '-':
          hasil = angka1 - angka2;
          break;
        case '*':
          hasil = angka1 * angka2;
          break;
        case '/':
          if (angka2 === 0) {
            hasilBox.innerHTML = "<span class='error'>❌ Tidak bisa dibagi dengan nol!</span>";
            return;
          }
          hasil = angka1 / angka2;
          break;
      }

      hasilBox.innerHTML = `✅ Hasil: <strong>${hasil}</strong>`;
      hasilBox.style.animation = "pop 0.3s ease";
      setTimeout(() => hasilBox.style.animation = "", 300);
    }