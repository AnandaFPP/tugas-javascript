// jawaban nomor 1

let storedObjects = {};

// cara pertama

// const dataSaver = (key, value) => {
//   storedObjects[key] = value
// }

// // cara kedua

// const dataSaver = (key, value) => {
//   storedObjects = {
//     ...storedObjects,
//     [key]: value
//   }
// }

dataSaver('nama', 'Ananda');
dataSaver('kota', 'Makassar');

//jawaban nomor 2

let biodata = {
  namaLengkap: "Ananda Fadhilah Perkasa Putra",
  emailAddress: "perkasa.putra1404@gmail.com",
  noHandphone: "085998041679",
  umur: 22,
  tempatTanggalLahir: "Banjarmasin, 14 April 2001",
  alamat: "Jln. Sultan Alauddin komp. Graha Modern Jaya blok B no. 10",
  kota: "Makassar",
  provinsi: "Sulawesi Selatan",
  kodePos: "90221",
  programmingExperience: ["HTML", "CSS", "Javascript"],
  riwayatPendidikan: [{
    namaSekolah: "SD Muhammadiyah 10 Banjarmasin",
    tingkat: "Sekolah Dasar",
    tahunMulai: 2007,
    tahunBerakhir: 2012,
    jurusan: null,
    rekomendasiOrangLain: true,
    lokasi: {
      kota: "Banjarmasin",
      Provinsi: "Kalimantan Selatan"
    },
    pengajarFavorit: "Ibu Qadriyah",
    materiFavorit: [{
      namaMateri: "Pendidikan Kewarganegaraan",
      date: 2010,
      pengajar: "Pak Zul",
      alasan: ["Materinya menyenangkan", "Gurunya mengasikkan"],
      apakahSulit: false
    },
    {
      namaMateri: "Matematika",
      date: 2007,
      pengajar: "Pak Kahar",
      alasan: ["Pelajarannya menantang", "Belajar kesulitan dengan teman-teman"],
      apakahSulit: true
    },
    {
      namaMateri: "Sains",
      date: 2010,
      pengajar: "Ibu qadriyah",
      alasan: ["Belajar mengenai anggota tubuh yang ada", "Gurunya sering mengadakan games"],
      apakahSulit: false
    }]
  },
  {
    namaSekolah: "SMP Negeri 6 Banjarmasin",
    tingkat: "Sekolah Menengah Pertama",
    tahunMulai: 2012,
    tahunBerakhir: 2014,
    jurusan: "IPA",
    rekomendasiOrangLain: true,
    lokasi: {
      kota: "Banjarmasin",
      Provinsi: "Kalimantan Selatan"
    },
    pengajarFavorit: "Pak Gassing",
    materiFavorit: [{
      namaMateri: "Muatan Lokal",
      date: 2012,
      pengajar: "Pak Gassing",
      alasan: ["Dapat berkreasi membuat segala macam", "Gurunya menyenangkan"],
      apakahSulit: false
    },
    {
      namaMateri: "Kimia",
      date: 2012,
      pengajar: "Ibu Rosmini",
      alasan: ["Gurunya sangat friendly", "Jarang masuk hingga dianggap mata pelajarannya sebagai hari libur satu semester"],
      apakahSulit: true
    },
    {
      namaMateri: "Olahraga",
      date: 2012,
      pengajar: "Pak Rusdi",
      alasan: ["Dapat beraktivitas diluar sekolah", "Suka mengeluarkan banyak keringat"],
      apakahSulit: false
    }]
  },
  {
    namaSekolah: "SMA Negeri 2 Makassar",
    tingkat: "Sekolah Menengah Atas",
    tahunMulai: 2014,
    tahunBerakhir: 2017,
    jurusan: "IPA",
    rekomendasiOrangLain: false,
    lokasi: {
      kota: "Makassar",
      Provinsi: "Sulawesi Selatan"
    },
    pengajarFavorit: "Pak Romy",
    materiFavorit: [{
      namaMateri: "Teknologi Ilmu Komputer",
      date: 2014,
      pengajar: "Pak Romy",
      alasan: ["Pelajarannya mengenai bidang teknologi", "Kelas laboratoriumnya pake AC"],
      apakahSulit: true
    },
    {
      namaMateri: "Seni Budaya",
      date: 2014,
      pengajar: "Pak Iwan",
      alasan: ["Gurunya sangat friendly sekali", "Bisa membuat teman kelas dapat berkreasi bersama"],
      apakahSulit: false
    },
    {
      namaMateri: "Bahasa German",
      date: 2016,
      pengajar: "Frau Suliswati",
      alasan: ["Suatu hal yang baru saya pelajari", "Dapat berbicara dengan warga asing"],
      apakahSulit: true
    }]
  },
  {
    namaSekolah: "Universitas Muslim Indonesia",
    tingkat: "Universitas",
    tahunMulai: 2017,
    tahunBerakhir: 2022,
    jurusan: "Ilmu Hukum",
    rekomendasiOrangLain: true,
    lokasi: {
      kota: "Makassar",
      Provinsi: "Sulawesi Selatan"
    },
    pengajarFavorit: "Ibu Arianti",
    materiFavorit: [{
      namaMateri: "Hukum Internasional",
      date: 2018,
      pengajar: "Pak Zulkifli",
      alasan: ["Gurunya mengasikkan", "Bisa belajar secara online"],
      apakahSulit: true
    },
    {
      namaMateri: "Hak atas Kekayaan Intelektual",
      date: 2018,
      pengajar: "Ibu Arianti",
      alasan: ["Jam materinya sangat fleksibel", "Materinya mudah untuk dipahami"],
      apakahSulit: false
    },
    {
      namaMateri: "Hukum Laut",
      date: 2018,
      pengajar: "Ibu satrih",
      alasan: ["Gurunya sangat baik sekali", "Materinya mengenai batas batas laut serta hukumnya"],
      apakahSulit: true
    }]
  }],
  golonganDarah: "B",
  hobi: ["Bermain game", "Belajar", "Rekreasi"],
  makananFavorit: [{
    namaMakanan: "Nasi Padang",
    asal: "Minangkabau, Indonesia"
  },
  {
    namaMakanan: "Konro Bakar",
    asal: "Makassar, Indonesia"
  },
  {
    namamakanan: "Ikan Patin Bakar",
    asal: "Banjarmasin, Indonesia"
  }],
  //letak method nya
  printNama: function() {
    console.log('nama', biodata.namaLengkap)
  },
  printEmail: function() {
    console.log('email', biodata.emailAddress)
  },
  printNoHandphone: function() {
    console.log('no handphone', biodata.noHandphone)
  }
}

const dataSaver = (key, value) => {
  biodata = {
    ...biodata,
    [key]: value
  }
}

const printNama = () => {
  console.log(`${biodata.namaLengkap}`)
}

const printEmail = () => {
  console.log(`${biodata.emailAddress}`)
}

const printNoHandphone = () => {
  console.log(`${biodata.noHandphone}`)
}

dataSaver('nama', printNama);
dataSaver('email', printEmail);
dataSaver('No. Handphone', printNoHandphone);

// biodata.printNama();
// biodata.printEmail();
// biodata.printNoHandphone();


// // jawaban nomor 3 a

const returnFirstName = (fullName) => {
  let myArr = fullName.split(' ');
  let firstName = myArr[0]
  return firstName
}

// console.log(returnFirstName('Gatot Subroto'))

// //jawaban nomor 3 b
const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return 'Pagi'
  } else if (clock >= 12 && clock <= 15) {
    return 'Siang'
  } else if (clock >= 15 && clock <= 18) {
    return 'Sore'
  } else if ((clock >= 18 && clock <= 24) || (clock >= 0 && clock <= 5)) {
    return 'Malam'
  } else {
    return 'Jam yang dimasukkan tidak sesuai'
  }
}

// console.log(returnDay(25))

