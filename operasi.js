function hasilkan() {
    var himpunan1 = document.getElementById('himp1').value;
    let a = himpunan1.split('');
    var himpunan2 = document.getElementById('himp2').value;
    let b = himpunan2.split('');
    var operasi = document.getElementById('op').value;

    if (operasi=="INTERSECT") {
        hasil = a.filter(x => b.includes(x));
    }
    else if ((operasi=="UNION")) {
        
        hasil = [...new Set([...a,...b])];
    }
    else if ((operasi=="DIFFERENCE")) {

        hasil = a.filter(x => !b.includes(x));
    }
    document.getElementById('hasil').innerHTML=hasil;
}