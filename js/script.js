function hesapla() {

    let dolum = parseInt(document.getElementById("dolduran_musluk").value);
    let bosaltim = parseInt(document.getElementById("bosaltan_musluk").value);
    let sure = parseInt(document.getElementById("saat").value);
    
    let sonuc = (dolum - bosaltim) * sure / 10;

    document.getElementById("oran").value = sonuc;
}