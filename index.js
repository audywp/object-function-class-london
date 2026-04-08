console.log("test branch");
// // Object
// // Cara tulis Object

// // variable declaration
// const person = {
//   name: 'audy',
//   age: 18,
//   hobby: ['tidur', 'makan', 'repeat'],
// };

// // person.hobby = ['gym', 'lari', 'workout'];

// console.log(person.age);
// console.log(person.hobby);

// // lexical
// // instance / scope variable nya itu di baca saat di deklarasi, bukan ketika di panggil
// // function
// // suatu baris kode yang di peruntukan untuk menjalankan suatu proses dalam ruang lingkup yang terpisah

// function perkalian2(angka) {
//   return angka * 2;
// }

// function mesinCuci(deterjen, pakaian, air, pewangi) {
//   const prosesMencuci = deterjen + ' ' + pakaian + ' ' + air + ' ' + pewangi;

//   return prosesMencuci;
// }

// const hasilMesinCuci = mesinCuci('Daia', 'Baju 5 pieces', '5 liter', 'Downy');
// console.log(hasilMesinCuci, 'hasil mesin cuci nya');

// function atmTransfer(totalUang, nomorRekening) {
//   console.log(totalUang + ' sudah berhasil di kirim ke ' + nomorRekening);
// }

// atmTransfer(2000000, 4564878931234597878996454);

// // Buat function yang menerima 1 paramater angka, untuk mereturn paramater tersebut itu ganjil atau genap (hint: bisa gunakan modulus {%})

// function ganjilGenap(angka) {
//   if (angka % 2 === 0) {
//     return 'genap';
//   } else {
//     return 'ganjil';
//   }
// }

// console.log(ganjilGenap(11));
// console.log(ganjilGenap(6));

// // Buat function yang menerima 2 paramater angka, lalu jumlahkan kedua paramaternya, lalu di kali dua

// function JumlahDanKali(angka1, angka2) {
//   let hasilX = angka1 + angka2;
//   console.log(hasilX, 'hasil x');
//   let hasilY = hasilX * 2;
//   return hasilY;
// }

// let hasilFinal = JumlahDanKali(8, 9);
// let hasilFinal2 = JumlahDanKali(20, 40);
// console.log(hasilFinal);
// console.log(hasilFinal2);

// // function itu adalah object
// JumlahDanKali.nama = 'audy';
// JumlahDanKali.age = 18;
// console.log(JumlahDanKali.age);

// hati hati jika ingin assign value ke function jangan sampai merubah behavior default dari function itu sendiri

// setTimeout dan setInterval

// setTimeout akan mendelai kode sesuai dengan waktu yang kita berikan
// setTimeout(function () {
//   console.log('tunggu aku selama 2 detik');
// }, 10000);

// setInterval code akan di jalankan terus menerus dengan jeda waktu yang kita berikan
// let countdown = 10;
// const currentInterval = setInterval(function () {
//   countdown = countdown - 1;
//   console.log('akan di mulai pada ' + countdown);
//   if (countdown === 0) {
//     clearInterval(currentInterval);
//   }
// }, 2000);

// Class
class Users {
  // Private properties
  #saldo = 0;
  constructor(paramsName, paramsAge, saldo) {
    this.name = paramsName;
    this.age = paramsAge;
    this.#saldo = saldo;
  }

  // Method getter
  checkSaldo(password) {
    if (password === 'WPH') {
      return this.#saldo;
    } else {
      return 'Anda tidak boleh melihat saldo';
    }
  }

  //   method setter
  kerja() {
    this.#saldo = this.#saldo + 200000;
  }

  panggilan() {
    return 'hallo nama saya ' + this.name;
  }
}

const audy = new Users('audy', 30, 100000);
const bima = new Users('bima', 17, 50000);

console.log(audy.name);
console.log(audy.age);
audy.kerja();
audy.kerja();
audy.kerja();
audy.kerja();
audy.kerja();
console.log(audy.checkSaldo('WPH'));
console.log(audy.panggilan());

console.log(bima.name);
console.log(bima.age);
console.log(bima.panggilan());
console.log(bima.checkSaldo('WPH'));

// class Kendaran {
//   warna = 'merah';
//   constructor(type, jenis) {
//     this.type = type;
//     this.jenis = jenis;
//   }
// }

// const honda = new Kendaran('Motor', 'Matic');
// const newHonda = honda.jenis + ' Tahun 2020';
// const supra = new Kendaran('Mobil', 'Manual');

// instanceof
console.log(Users instanceof Object);
console.log(audy.checkSaldo instanceof Object);
console.log(audy instanceof Number);

// try catch error

function Menu(nama, harga, jenis) {
  return {
    message: 'Anda memesan ' + nama + ' seharga ' + harga,
    harga: harga,
  };
}

const pesanan1 = Menu('pasta', 80000, 'makanan');
const pesanan2 = Menu('Cappucino', 35000, 'minuman');

const totalHarga = pesanan1.harga + pesanan2.harga;
console.log(totalHarga);

function mesinKopi(bijiKopi) {
  if (bijiKopi === 'batu') {
    throw new Error('Tidak boleh memasukan batu');
  } else {
    return 'bubuk kopi';
  }
}

try {
  mesinKopi('bubuk kopi');
} catch (error) {
  console.log(error);
}
