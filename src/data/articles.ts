
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  type: 'destination' | 'story';
}

/**
 * DATABASE ARTIKEL UTAMA
 * Menghapus pengulangan teks (repeat) dan menggantinya dengan konten yang unik dan berkualitas.
 */
export const articles: Article[] = [
  // --- DESTINASI: ALAM ---
  {
    slug: 'bukit-sikunir-wonosobo',
    title: 'Bukit Sikunir: Menikmati Golden Sunrise di Desa Tertinggi Jawa',
    excerpt: 'Bukit Sikunir menawarkan fenomena matahari terbit keemasan yang mempesona di ketinggian 2.263 mdpl.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bukit Sikunir merupakan primadona wisata di Dataran Tinggi Dieng yang tidak pernah sepi pengunjung, terutama bagi mereka yang ingin menyaksikan fajar menyingsing. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini memberikan akses mudah bagi siapa pun untuk menikmati panorama alam yang luar biasa. 

Perjalanan dimulai saat hari masih gelap, biasanya sekitar pukul 04.00 pagi, di mana suhu udara bisa mencapai di bawah 10 derajat Celcius. Para wisatawan akan menapaki anak tangga yang tertata rapi selama kurang lebih 30 hingga 45 menit untuk mencapai puncak. Sesampainya di atas, rasa lelah akan terbayar lunas saat semburat warna emas mulai memecah kegelapan di ufuk timur. 

Gunung Sindoro yang berdiri gagah di seberang lembah menjadi latar belakang yang sempurna untuk mengabadikan momen ini. Fenomena Golden Sunrise di Sikunir dinobatkan sebagai salah satu yang terbaik di Asia Tenggara karena kejernihan udaranya dan komposisi alamnya yang simetris. Selain sunrise, dari puncak ini kita juga bisa melihat deretan gunung lain seperti Sumbing, Merapi, dan Merbabu jika cuaca cerah. Keindahan alam ini adalah pengingat akan kebesaran Sang Pencipta yang telah menganugerahkan kekayaan alam tak ternilai bagi Wonosobo.`
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Rahasia Geologis di Balik Keindahan Air Tiga Warna',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Alam',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah kanvas alam yang paling dramatis di Dieng, di mana mineral belerang dan cahaya matahari berkolaborasi menciptakan gradasi warna yang menakjubkan. Danau vulkanik ini memiliki kemampuan unik untuk berubah warna dari hijau toska yang pekat menjadi biru, hingga kuning keemasan, tergantung pada posisi matahari dan konsentrasi belerang di dasarnya. 

Terletak berdampingan dengan Telaga Pengilon yang airnya justru jernih seperti cermin, kedua telaga ini menciptakan kontras alam yang luar biasa. Suasana di sekitar telaga sangat tenang, dikelilingi oleh perbukitan hijau yang sering tertutup kabut tipis, menjadikannya tempat yang nyaman untuk bersantai. 

Bagi para fotografer, setiap sudut telaga ini menawarkan komposisi visual yang sempurna, terutama jika dilihat dari ketinggian Batu Ratapan Angin. Eksplorasi di sini adalah perjalanan memahami bagaimana sisa-sisa aktivitas vulkanik purba masih terus memberikan keindahan bagi tanah Wonosobo.`
  },
  {
    slug: 'purwaceng-herbal',
    title: 'Purwaceng: Mengenal Tanaman Herbal Stamina dari Lereng Gunung',
    excerpt: 'Minuman herbal berkhasiat tinggi yang berasal dari tanaman endemik langka di Dataran Tinggi Dieng.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Purwaceng (Pimpinella pruatjan) adalah tanaman herbal legendaris yang hanya ditemukan di tanah vulkanik Dataran Tinggi Dieng. Dikenal secara luas sebagai "Ginseng Jawa", tanaman ini telah lama digunakan oleh masyarakat lokal sebagai rahasia vitalitas dan stamina alami bagi para pria dan wanita.

Secara botani, Purwaceng merupakan tanaman langka yang sangat sensitif terhadap perubahan lingkungan. Ia hanya mampu tumbuh subur pada ketinggian di atas 2.000 meter di atas permukaan laut dengan suhu udara yang senantiasa dingin. Akar purwaceng mengandung senyawa kimia aktif seperti koumarin, saponin, dan alkaloid yang terbukti secara ilmiah mampu meningkatkan sirkulasi darah dan menghangatkan tubuh.

Kini, Purwaceng telah diolah secara modern menjadi berbagai produk praktis seperti kopi purwaceng, teh celup, hingga suplemen herbal. Wisatawan yang berkunjung ke Wonosobo seringkali mencari minuman ini untuk mengatasi rasa dingin pegunungan. Keberadaan Purwaceng bukan hanya soal khasiat kesehatan, melainkan juga simbol kearifan lokal masyarakat Dieng dalam memanfaatkan kekayaan hayati pegunungan untuk kesejahteraan.`
  },
  {
    slug: 'mie-ongklok-legenda',
    title: 'Mie Ongklok: Mengenal Kuliner Paling Legendaris di Wonosobo',
    excerpt: 'Menikmati sajian mie legendaris dengan kuah kental gurih yang menghangatkan tubuh di tengah dinginnya Wonosobo.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Mie Ongklok adalah identitas kuliner yang telah menghangatkan masyarakat Wonosobo selama puluhan tahun. Keunikan utamanya terletak pada penggunaan keranjang bambu atau "ongklok" untuk merebus mie secara bergantian dengan sayuran segar seperti kucai dan kol.

Ciri khas Mie Ongklok yang paling menonjol adalah kuahnya yang kental, berwarna cokelat keemasan, dengan rasa gurih manis yang didapat dari campuran pati singkong dan rempah-rempah pilihan. Penyajiannya biasanya ditemani oleh sate sapi bumbu kacang dan tempe kemul (tempe goreng tepung) yang renyah.

Setiap suapan Mie Ongklok membawa narasi tentang sejarah kuliner lokal yang diwariskan dengan dedikasi tinggi. Bagi wisatawan, mencicipi Mie Ongklok adalah ritual wajib yang memberikan pemahaman tentang cara masyarakat lokal beradaptasi dengan lingkungan dingin mereka melalui kreativitas dapur yang otentik.`
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Menjelajahi Lapangan Vulkanik Paling Aktif di Dieng',
    excerpt: 'Menjelajahi kawah aktif paling dinamis di Dieng dengan jembatan kayu estetik dan fenomena lumpur mendidih.',
    category: 'Alam',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kawah Sikidang adalah bukti kekuatan bumi yang tak pernah tidur, sebuah lapangan solfatara yang luas di mana uap panas dan lumpur mendidih muncul langsung dari perut bumi. Nama "Sikidang" mencerminkan karakter kawah utamanya yang sering berpindah-pindah posisi, melompat-lompat seperti kijang (Kidang dalam bahasa Jawa).

Dengan pembangunan jembatan kayu yang membentang panjang, pengunjung kini dapat menikmati panorama kawah dengan lebih aman dan nyaman. Berjalan di atas jembatan ini memberikan sensasi melayang di atas asap putih yang membubung tinggi, sementara pemandangan tanah putih yang eksotis menciptakan atmosfer planet lain.

Kawah ini bukan hanya objek wisata, melainkan laboratorium alam yang hidup bagi para peneliti dan wisatawan. Pengunjung disarankan menggunakan masker karena aroma belerang yang cukup pekat, namun pengalaman menyaksikan gejolak energi panas bumi secara dekat adalah sesuatu yang tak terlupakan.`
  },
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kompleks Candi Arjuna: Jejak Spiritual Hindu Tertua di Tanah Jawa',
    excerpt: 'Menelusuri situs candi Hindu tertua di Jawa yang tetap berdiri kokoh di tengah lembah berkabut yang sakral.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kompleks Candi Arjuna adalah saksi bisu keagungan peradaban masa lalu yang telah berdiri di lembah Dieng selama lebih dari seribu tahun. Sebagai situs candi Hindu tertua di Jawa, kompleks ini merupakan representasi penting dari sejarah spiritualitas Nusantara yang dibangun sekitar abad ke-8.

Terdiri dari lima bangunan candi utama—Arjuna, Srikandi, Puntadewa, Sembadra, dan Semar—kompleks ini menampilkan detail arsitektur yang sangat halus. Letaknya yang berada di tengah lembah luas yang sering diselimuti kabut memberikan aura mistis dan tenang bagi siapa pun yang berkunjung.

Dieng yang berarti "Tempat Bersemayam Dewa" benar-benar terasa nyata di sini. Mengunjungi Candi Arjuna bukan hanya soal melihat tumpukan batu kuno, tapi soal menghormati sejarah panjang bangsa yang telah melahirkan peradaban yang mampu harmonis dengan alam pegunungan yang ekstrem.`
  }
];
