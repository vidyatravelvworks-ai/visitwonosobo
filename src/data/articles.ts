
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export const articles: Article[] = [
  // --- STORIES: TIPS & PANDUAN (15 ARTICLES) ---
  {
    slug: 'panduan-mendaki-gunung-prau-pemula',
    title: 'Panduan Lengkap Mendaki Gunung Prau untuk Pemula',
    excerpt: 'Segala hal yang perlu Anda ketahui sebelum menaklukkan puncak 2.565 mdpl, dari rute hingga etika.',
    category: 'Tips',
    type: 'story',
    date: '10 June 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah primadona bagi pendaki pemula maupun profesional di Pulau Jawa. Dengan ketinggian 2.565 mdpl, gunung ini menawarkan salah satu panorama matahari terbit (sunrise) terbaik di Indonesia tanpa menuntut pendakian yang terlalu ekstrem. Namun, meskipun dikategorikan sebagai gunung yang "ramah", persiapan yang matang tetap menjadi kunci keselamatan dan kenyamanan. Panduan ini akan mengupas tuntas segala aspek pendakian Gunung Prau agar perjalanan Anda menjadi momen yang tak terlupakan... [Narasi panjang minimal 2000 kata mencakup persiapan fisik, perlengkapan, rute pendakian, regulasi basecamp, etika pendakian, manajemen logistik, hingga tips mengabadikan momen di puncak.]`
  },
  {
    slug: 'tips-menghadapi-cuaca-dingin-dieng',
    title: 'Rahasia Bertahan di Cuaca Ekstrem: Panduan Berpakaian di Dieng',
    excerpt: 'Tips profesional tentang teknik layering dan perlengkapan wajib untuk menghadapi suhu titik beku di dataran tinggi.',
    category: 'Tips',
    type: 'story',
    date: '12 June 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dataran Tinggi Dieng memiliki karakteristik iklim yang unik dan sering kali mengejutkan wisatawan yang berasal dari daerah pesisir atau dataran rendah. Persiapan pakaian yang tepat adalah kunci utama agar perjalanan Anda tidak terganggu oleh rasa kedinginan yang menusuk tulang. Mengandalkan satu jaket tebal saja sering kali tidak cukup; Anda perlu memahami konsep "Layering System" yang efektif... [Narasi panjang minimal 2000 kata mencakup detail base layer, insulation layer, outer shell, perlengkapan aksesori seperti kupluk dan sarung tangan, hingga tips nutrisi untuk menjaga suhu tubuh tetap hangat.]`
  },
  {
    slug: 'tips-fotografi-lanskap-wonosobo',
    title: 'Rahasia Fotografi Lanskap: Menangkap Keajaiban Wonosobo',
    excerpt: 'Panduan gear, waktu terbaik, dan komposisi untuk menghasilkan foto profesional di destinasi ikonik Dieng.',
    category: 'Tips',
    type: 'story',
    date: '15 June 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Wonosobo, dengan lanskapnya yang dramatis, adalah surga bagi para pecinta fotografi. Namun, untuk menghasilkan foto yang benar-benar berbicara dan memiliki kualitas profesional, diperlukan lebih dari sekadar menekan tombol shutter. Fotografi lanskap di daerah pegunungan seperti Wonosobo menuntut pemahaman mendalam tentang cahaya, gear, dan kesabaran... [Narasi panjang minimal 2000 kata mencakup pemilihan lensa, penggunaan filter, manajemen baterai di udara dingin, teknik komposisi, hingga etika memotret subjek manusia lokal.]`
  },
  {
    slug: 'panduan-wisata-kuliner-wonosobo-otentik',
    title: 'Wisata Kuliner: Cara Menemukan Rasa Otentik Wonosobo',
    excerpt: 'Panduan bagi pecinta kuliner untuk menjelajahi rasa lokal, dari etika makan hingga lokasi tersembunyi.',
    category: 'Tips',
    type: 'story',
    date: '18 June 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Menjelajahi Wonosobo tidak akan lengkap tanpa memanjakan lidah dengan berbagai kekayaan kuliner lokalnya. Menemukan rasa yang benar-benar otentik membutuhkan sedikit riset dan keberanian untuk mencoba tempat-tempat yang mungkin tidak tampak mewah namun menjadi langganan warga lokal selama puluhan tahun... [Narasi panjang minimal 2000 kata mencakup detail Mie Ongklok, Tempe Kemul, Nasi Megono, Purwaceng, etika makan di warung tradisional, hingga tips memilih oleh-oleh yang tahan lama.]`
  },
  {
    slug: 'tips-transportasi-dan-akomodasi-wonosobo',
    title: 'Navigasi Wonosobo: Panduan Transportasi dan Akomodasi',
    excerpt: 'Tips praktis cara menuju Wonosobo, berkeliling antar destinasi, hingga memilih penginapan yang tepat.',
    category: 'Tips',
    type: 'story',
    date: '20 June 2025',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Merencanakan perjalanan ke Wonosobo dan Dataran Tinggi Dieng membutuhkan pemahaman logistik yang baik. Memahami opsi transportasi dan karakteristik akomodasi lokal akan membantu Anda menghemat waktu dan biaya... [Narasi panjang minimal 2000 kata mencakup rute dari bandara/stasiun terdekat, moda transportasi lokal, tips menyewa kendaraan, perbedaan menginap di pusat kota vs di Dieng, hingga estimasi anggaran transportasi.]`
  },
  {
    slug: 'tips-berwisata-aman-di-kawasan-vulkanik',
    title: 'Keamanan di Tanah Berapi: Tips Wisata Aman di Kawasan Vulkanik Dieng',
    excerpt: 'Panduan keselamatan khusus untuk menjelajahi kawah aktif dan memahami risiko gas vulkanik di dataran tinggi.',
    category: 'Tips',
    type: 'story',
    date: '22 June 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dataran Tinggi Dieng adalah kompleks vulkanik aktif yang mempesona sekaligus menuntut rasa hormat terhadap kekuatan alam. Menjelajahi kawah-kawah seperti Sikidang atau Sileri menuntut pengetahuan keselamatan yang memadai... [Narasi panjang minimal 2000 kata mencakup pemahaman gas vulkanik CO2/H2S, batas aman melangkah, manajemen perlengkapan pelindung pernapasan, hingga prosedur darurat saat terjadi aktivitas kawah mendadak.]`
  },
  {
    slug: 'panduan-wisata-ramah-keluarga-wonosobo',
    title: 'Wonosobo untuk Semua: Panduan Wisata Ramah Keluarga',
    excerpt: 'Tips praktis merencanakan liburan nyaman bersama anak-anak dan lansia di destinasi pegunungan Wonosobo.',
    category: 'Tips',
    type: 'story',
    date: '25 June 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Merencanakan liburan keluarga ke daerah pegunungan seringkali dianggap menantang. Namun, dengan pemilihan destinasi yang tepat, Wonosobo bisa menjadi tempat yang sangat menyenangkan dan edukatif bagi seluruh anggota keluarga... [Narasi panjang minimal 2000 kata mencakup pemilihan destinasi rendah hambatan, manajemen suhu tubuh anak/lansia, logistik makanan khusus keluarga, hingga tips memilih penginapan dengan akses mudah.]`
  },
  {
    slug: 'tips-belanja-oleh-oleh-wonosobo',
    title: 'Cinderamata dari Awan: Tips Belanja Oleh-oleh Berkualitas di Wonosobo',
    excerpt: 'Panduan memilih Carica, Purwaceng, Batik, hingga kerajinan lokal untuk dibawa pulang sebagai buah tangan terbaik.',
    category: 'Tips',
    type: 'story',
    date: '28 June 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Membawa pulang sepotong kebahagiaan dari Wonosobo melalui oleh-oleh adalah ritual yang tidak boleh terlewatkan. Agar mendapatkan kualitas terbaik dengan harga jujur, diperlukan sedikit pengetahuan produk... [Narasi panjang minimal 2000 kata mencakup ciri Carica gula murni, membedakan Purwaceng asli, filosofi motif Batik Wonosobo, hingga tips pengemasan agar aman selama perjalanan jauh.]`
  },
  {
    slug: 'panduan-etika-dan-budaya-lokal-wonosobo',
    title: 'Menjadi Tamu yang Bijak: Panduan Etika dan Budaya Lokal Wonosobo',
    excerpt: 'Memahami nilai-nilai kesopanan, tata krama, dan hal-hal tabu saat berinteraksi dengan masyarakat pegunungan.',
    category: 'Tips',
    type: 'story',
    date: '30 June 2025',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Wonosobo adalah daerah yang kental dengan nilai tradisional dan kesopanan khas Jawa pegunungan. Sebagai wisatawan, menghormati etika lokal adalah cara terbaik untuk mendapatkan pengalaman yang lebih bermakna... [Narasi panjang minimal 2000 kata mencakup tata krama berpakaian, bahasa sapaan dasar, etika bertamu di homestay, hingga hal-hal yang tabu dilakukan di area sakral candi.]`
  },
  {
    slug: 'tips-perjalanan-low-budget-wonosobo',
    title: 'Wonosobo Hemat: Tips Perjalanan Low Budget yang Tetap Seru',
    excerpt: 'Cara pintar menjelajahi keindahan Dieng dan Wonosobo dengan biaya minimal namun pengalaman maksimal.',
    category: 'Tips',
    type: 'story',
    date: '02 July 2025',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Menikmati keajaiban "Negeri di Atas Awan" tidak harus menguras kantong. Dengan pemilihan moda transportasi yang tepat dan strategi akomodasi cerdas, Anda bisa berpetualang secara ekonomis... [Narasi panjang minimal 2000 kata mencakup penggunaan bus mikro rakyat, berburu homestay di gang pemukiman, mencari warung makan langganan warga, hingga daftar objek wisata gratis atau berbiaya rendah.]`
  },
  {
    slug: 'panduan-memilih-penginapan-wonosobo',
    title: 'Homestay vs Hotel: Panduan Memilih Penginapan Terbaik di Wonosobo',
    excerpt: 'Analisis perbandingan antara menginap di pemukiman warga Dieng atau di kenyamanan hotel pusat kota.',
    category: 'Tips',
    type: 'story',
    date: '05 July 2025',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Memutuskan tempat untuk beristirahat di Wonosobo adalah bagian krusial dari strategi perjalanan Anda. Pilihan antara homestay di Dieng atau hotel di kota bukan sekadar soal harga, tetapi soal jenis pengalaman yang ingin Anda dapatkan... [Narasi panjang minimal 2000 kata mencakup perbandingan fasilitas, kedekatan dengan objek wisata sunrise, interaksi budaya di homestay, aksesibilitas fasilitas publik di kota, hingga tips melakukan reservasi aman.]`
  },
  {
    slug: 'tips-kesehatan-di-dataran-tinggi',
    title: 'Tetap Bugar di Ketinggian: Panduan Kesehatan Wisatawan Dieng',
    excerpt: 'Mengenali gejala mabuk ketinggian (AMS) dan cara menjaga kebugaran di lingkungan udara tipis.',
    category: 'Tips',
    type: 'story',
    date: '08 July 2025',
    image: 'https://images.unsplash.com/photo-1491553141410-0925e011406e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Berada di ketinggian lebih dari 2.000 mdpl memberikan tantangan tersendiri bagi tubuh manusia. Udara yang lebih tipis dan tekanan oksigen yang lebih rendah bisa memicu berbagai reaksi fisik bagi mereka yang tidak terbiasa... [Narasi panjang minimal 2000 kata mencakup penjelasan Altitude Sickness, tips hidrasi, manajemen pola makan sebelum pendakian, pentingnya aklimatisasi, hingga daftar obat-obatan darurat yang wajib dibawa.]`
  },
  {
    slug: 'panduan-vlog-dan-videografi-dieng',
    title: 'Lensa di Atas Awan: Panduan Videografi dan Vlogging di Dieng',
    excerpt: 'Tips teknis dan kreatif untuk menghasilkan konten video sinematik di lanskap pegunungan yang berkabut.',
    category: 'Tips',
    type: 'story',
    date: '12 July 2025',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bagi kreator konten, Dieng adalah panggung visual yang tak ada habisnya. Namun, tantangan teknis seperti kelembapan tinggi, cahaya yang berubah cepat, dan kabut tebal menuntut persiapan khusus... [Narasi panjang minimal 2000 kata mencakup pemilihan gear video, teknik pengambilan gambar 'timelapse' sunrise, manajemen audio di tengah angin kencang, penggunaan drone di area pegunungan, hingga alur cerita untuk vlog perjalanan yang menarik.]`
  },
  {
    slug: 'tips-menghadiri-dieng-culture-festival',
    title: 'Panduan Bertahan di Keramaian: Tips Menghadiri Dieng Culture Festival (DCF)',
    excerpt: 'Strategi cerdas untuk menikmati festival budaya terbesar tanpa terjebak macet dan kehabisan penginapan.',
    category: 'Tips',
    type: 'story',
    date: '15 July 2025',
    image: 'https://images.unsplash.com/photo-1514525253361-b83a85f0d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dieng Culture Festival (DCF) adalah magnet bagi puluhan ribu orang setiap tahunnya. Menghadiri acara sebesar ini di desa kecil menuntut perencanaan yang sangat matang... [Narasi panjang minimal 2000 kata mencakup jadwal booking penginapan (H-6 bulan), strategi transportasi saat jalanan macet total, persiapan fisik untuk acara Jazz di Atas Awan, tips mendapatkan tiket resmi, hingga etika saat prosesi pencukuran rambut gimbal massal.]`
  },
  {
    slug: 'panduan-wisata-berkelanjutan-dieng',
    title: 'Jejak Hijau: Panduan Wisata Berkelanjutan (Eco-Tourism) di Dieng',
    excerpt: 'Cara berkontribusi menjaga kelestarian alam dan ekonomi lokal selama berpetualang di Wonosobo.',
    category: 'Tips',
    type: 'story',
    date: '18 July 2025',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Sebagai penjelajah, kita memiliki tanggung jawab untuk memastikan keindahan Wonosobo tetap bisa dinikmati oleh generasi mendatang. Wisata berkelanjutan bukan sekadar tren, melainkan kebutuhan mendesak... [Narasi panjang minimal 2000 kata mencakup manajemen sampah pribadi, dukungan terhadap produk UMKM lokal, penghormatan terhadap flora dan fauna endemik, penggunaan air yang bijak di daerah pegunungan, hingga cara memilih agen wisata yang memiliki komitmen lingkungan.]`
  },

  // --- STORIES: GEOGRAFIS (10 ARTICLES) ---
  {
    slug: 'geologi-dieng-jejak-purba',
    title: 'Geologi Dieng: Jejak Kaldera Purba yang Megah',
    excerpt: 'Memahami proses tektonik dan vulkanik jutaan tahun yang membentuk dataran tinggi Dieng.',
    category: 'Geografis',
    type: 'story',
    date: '10 May 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dataran Tinggi Dieng bukan sekadar pemandangan indah; ia adalah laboratorium geologi raksasa... [Narasi panjang minimal 2000 kata mencakup sejarah letusan Gunung Dieng Purba, pembentukan kawah-kawah, sistem hidrotermal, hingga analisis batuan vulkanik.]`
  },
  {
    slug: 'sindoro-sumbing-dualisme-tektonik',
    title: 'Sindoro-Sumbing: Dualisme Tektonik di Jantung Jawa',
    excerpt: 'Analisis geografis tentang dua gunung kembar yang mendefinisikan lanskap dan iklim Wonosobo.',
    category: 'Geografis',
    type: 'story',
    date: '12 May 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Sindoro dan Gunung Sumbing adalah dua pilar raksasa yang mendefinisikan identitas geografis Wonosobo... [Narasi panjang minimal 2000 kata mencakup perbandingan morfologi, pengaruh terhadap pola angin dan hujan, kesuburan tanah vulkanik, hingga peran hidrologisnya.]`
  },
  {
    slug: 'fenomena-embun-upas-dieng',
    title: 'Embun Upas: Rahasia Musim Dingin Tropis di Dieng',
    excerpt: 'Penjelasan meteorologis tentang fenomena embun beku yang mengubah Dieng menjadi Eropa sesaat.',
    category: 'Geografis',
    type: 'story',
    date: '15 May 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Setiap tahun, biasanya antara bulan Juli hingga Agustus, Dataran Tinggi Dieng mengalami fenomena Embun Upas... [Narasi panjang minimal 2000 kata mencakup penjelasan ilmiah Radiation Cooling, dampak terhadap pertanian kentang, hingga panduan bagi wisatawan yang ingin menyaksikan fenomena ini.]`
  },
  {
    slug: 'hidrologi-sungai-serayu-wonosobo',
    title: 'Urat Nadi Serayu: Geografi Air dari Puncak ke Lembah',
    excerpt: 'Menelusuri jalur Sungai Serayu yang berhulu di Dieng dan menjadi sumber kehidupan bagi Jawa Tengah.',
    category: 'Geografis',
    type: 'story',
    date: '18 May 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Sungai Serayu adalah urat nadi hidrologi yang paling vital di wilayah Jawa Tengah bagian barat... [Narasi panjang minimal 2000 kata mencakup sejarah geologis DAS Serayu, pemanfaatan energi terbarukan, ekosistem sungai pegunungan, hingga peran sosiokulturalnya.]`
  },
  {
    slug: 'morfologi-terasering-arsitektur-tanah',
    title: 'Morfologi Terasering: Arsitektur Tanah di Lereng Curam',
    excerpt: 'Bagaimana modifikasi lanskap oleh petani Wonosobo menciptakan pola geografis yang ikonik dan fungsional.',
    category: 'Geografis',
    type: 'story',
    date: '20 May 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Salah satu ciri visual yang paling mencolok dari geografi Wonosobo adalah pola terasering yang membungkus hampir seluruh lereng pegunungannya... [Narasi panjang minimal 2000 kata mencakup teknik rekayasa tanah tradisional, mitigasi erosi, estetika lanskap agraris, hingga tantangan perubahan iklim terhadap kestabilan lereng.]`
  },
  {
    slug: 'mikroklimat-lembah-kledung',
    title: 'Mikroklimat Lembah Kledung: Rahasia Kesuburan Tanah Wonosobo',
    excerpt: 'Analisis mendalam tentang bagaimana posisi geografis di antara dua raksasa gunung menciptakan iklim mikro yang unik.',
    category: 'Geografis',
    type: 'story',
    date: '22 May 2025',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Lembah Kledung, yang terjepit di antara kegagahan Gunung Sindoro dan Gunung Sumbing, merupakan salah satu wilayah dengan mikroklimat paling menarik... [Narasi panjang minimal 2000 kata mencakup efek koridor angin, perbedaan suhu diurnal yang ekstrem, kualitas tanah Andosol, hingga pengaruhnya terhadap citarasa tembakau Kemloko.]`
  },
  {
    slug: 'geodiversitas-kawah-aktif-dieng',
    title: 'Geodiversitas Kawah Aktif Dieng: Dari Sileri hingga Candradimuka',
    excerpt: 'Eksplorasi ragam fenomena vulkanik permukaan yang menunjukkan dinamika dapur magma di bawah Dieng.',
    category: 'Geografis',
    type: 'story',
    date: '25 May 2025',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dataran Tinggi Dieng adalah wilayah dengan geodiversitas vulkanik terkaya di dunia... [Narasi panjang minimal 2000 kata mencakup profil kawah Sileri, Candradimuka, ulasan letusan freatik masa lalu, pemantauan gas vulkanik, hingga potensi energi panas bumi.]`
  },
  {
    slug: 'ekosistem-hutan-pegunungan-dieng',
    title: 'Benteng Hijau: Ekosistem Hutan Pegunungan Terakhir di Dieng',
    excerpt: 'Menelaah peran vital hutan pegunungan sebagai pelindung ekologis dan pengatur siklus hidrologi.',
    category: 'Geografis',
    type: 'story',
    date: '28 May 2025',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Hutan pegunungan di sekitar Dataran Tinggi Dieng adalah benteng pertahanan ekologis terakhir... [Narasi panjang minimal 2000 kata mencakup flora endemik seperti kantong semar, fauna langka Elang Jawa, peran penyerapan air, hingga tantangan deforestasi akibat perluasan lahan kentang.]`
  },
  {
    slug: 'geomorfologi-lembah-serayu-purba',
    title: 'Jejak Waktu: Geomorfologi Lembah Serayu dari Puncak ke Lembah',
    excerpt: 'Menelusuri sejarah pembentukan lembah sungai terbesar di Jawa Tengah melalui perspektif geomorfologi.',
    category: 'Geografis',
    type: 'story',
    date: '01 June 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Lembah Sungai Serayu di wilayah Wonosobo adalah salah satu fitur geomorfologi yang paling mengesankan... [Narasi panjang minimal 2000 kata mencakup proses pengangkatan tektonik, erosi sungai jutaan tahun, pembentukan dataran banjir, hingga pengaruhnya terhadap pola pemukiman warga.]`
  },
  {
    slug: 'geografi-pertanian-tembakau-wonosobo',
    title: 'Emas Hijau: Geografi Pertanian Tembakau di Lereng Pegunungan',
    excerpt: 'Bagaimana kombinasi tanah vulkanik, ketinggian, dan angin menciptakan kualitas tembakau terbaik di dunia.',
    category: 'Geografis',
    type: 'story',
    date: '05 June 2025',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pertanian tembakau di Wonosobo adalah contoh sempurna adaptasi manusia terhadap geografi lingkungan... [Narasi panjang minimal 2000 kata mencakup analisis tanah untuk tembakau Srintil, pengaruh paparan sinar matahari di lereng timur vs barat, teknik pemanenan tradisional, hingga dinamika ekonomi pasar tembakau dunia.]`
  },

  // --- STORIES: SEJARAH (10 ARTICLES) ---
  {
    slug: 'gedung-papak-landmark-sejarah',
    title: 'Gedung Papak: Saksi Bisu Arsitektur Kolonial Wonosobo',
    excerpt: 'Menelusuri sejarah gedung ikonik beratap datar yang menjadi pusat pemerintahan sejak era Belanda.',
    category: 'Sejarah',
    type: 'story',
    date: '01 Mar 2025',
    image: 'https://images.unsplash.com/photo-1577493321623-e180026e6802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gedung Papak berdiri megah di jantung kota Wonosobo sebagai monumen arsitektur kolonial... [Narasi panjang minimal 2000 kata mencakup detail arsitektur modern awal abad 20, peran administratif masa Belanda, restorasi bangunan, hingga fungsinya sebagai identitas kota modern.]`
  },
  {
    slug: 'kyai-walik-pendiri-wonosobo',
    title: 'Kyai Walik: Sang Ulama dan Legenda Pendiri Wonosobo',
    excerpt: 'Kisah tentang tiga tokoh ulama yang membabat alas hingga menjadi pemukiman subur yang kini dikenal sebagai Wonosobo.',
    category: 'Sejarah',
    type: 'story',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Sejarah berdirinya Wonosobo tidak dapat dipisahkan dari sosok Kyai Walik, Kyai Kolodete, dan Kyai Karim... [Narasi panjang minimal 2000 kata mencakup asal-usul etimologis Wonosobo, perjuangan pembukaan lahan hutan (mbabat alas), penyebaran nilai spiritual, hingga tradisi ziarah makam pendiri kota.]`
  },
  {
    slug: 'kereta-api-wonosobo-kejayaan-masa-lalu',
    title: 'Urat Nadi yang Hilang: Sejarah Jalur Kereta Api Wonosobo',
    excerpt: 'Mengenang masa keemasan transportasi kereta api uap yang pernah menghubungkan Wonosobo dengan dunia luar melalui jalur SDS.',
    category: 'Sejarah',
    type: 'story',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pernahkah Anda membayangkan suara peluit lokomotif uap menggema di lembah Sindoro-Sumbing? Jalur SDS (Serajoedal Stoomtram Maatschappij) pernah menjadi tulang punggung ekonomi... [Narasi panjang minimal 2000 kata mencakup pembangunan jalur rel di medan ekstrem, pengangkutan komoditas teh/tembakau, kenangan stasiun lama, hingga alasan penutupan jalur legendaris ini.]`
  },
  {
    slug: 'sejarah-teh-tambi-warisan-kolonial',
    title: 'Teh Tambi: Jejak Wangi Perkebunan Kolonial di Kaki Sindoro',
    excerpt: 'Menelusuri sejarah panjang perkebunan teh tertua di Wonosobo yang berawal dari kepemilikan NV Bagelen Thee Cultuur Maatschappij.',
    category: 'Sejarah',
    type: 'story',
    date: '15 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Hijaunya hamparan kebun teh Tambi adalah warisan industri yang telah berusia lebih dari satu abad... [Narasi panjang minimal 2000 kata mencakup pendirian tahun 1865, proses nasionalisasi aset Belanda, teknologi pengolahan teh hitam tradisional, hingga transformasi menjadi objek agrowisata internasional.]`
  },
  {
    slug: 'misteri-candi-dieng-sejarah-yang-hilang',
    title: 'Misteri Candi Dieng: Fragmen Sejarah Peradaban Kuno yang Hilang',
    excerpt: 'Menguak tabir misteri pembangunan kompleks candi tertua di Pulau Jawa dan teka-teki hilangnya prasasti-prasasti penting.',
    category: 'Sejarah',
    type: 'story',
    date: '20 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dieng sering disebut sebagai "Kediaman Para Dewa" karena kompleks candi Hindu tertua di Jawa... [Narasi panjang minimal 2000 kata mencakup analisis teknik konstruksi batu andesit tanpa semen, hubungan dengan kerajaan Mataram Kuno, hilangnya naskah-naskah kuno, hingga penemuan arkeologis terbaru.]`
  },
  {
    slug: 'perlawanan-diponegoro-di-wonosobo',
    title: 'Jejak Perlawanan Diponegoro di Bumi Wonosobo',
    excerpt: 'Menelusuri lokasi-lokasi pertempuran dan strategi gerilya Pangeran Diponegoro yang didukung kuat oleh ulama lokal Wonosobo.',
    category: 'Sejarah',
    type: 'story',
    date: '25 Mar 2025',
    image: 'https://images.unsplash.com/photo-1577493321623-e180026e6802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Perang Jawa (1825-1830) meninggalkan jejak heroisme di Wonosobo yang menjadi basis gerilya strategis... [Narasi panjang minimal 2000 kata mencakup peran panglima perang lokal, penggunaan gua-gua Dieng sebagai persembunyian, dukungan logistik petani lereng gunung, hingga dampak perang terhadap demografi wilayah.]`
  },
  {
    slug: 'masjid-jami-wonosobo-pusat-spiritualitas',
    title: 'Masjid Jami Wonosobo: Simbol Spiritualitas dan Kebudayaan',
    excerpt: 'Sejarah pembangunan Masjid Agung Jami yang menjadi pusat syiar Islam dan integrasi budaya di pusat kota Wonosobo.',
    category: 'Sejarah',
    type: 'story',
    date: '30 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Masjid Jami Wonosobo di sebelah barat alun-alun adalah simbol integrasi budaya dan agama... [Narasi panjang minimal 2000 kata mencakup arsitektur atap tumpang khas Jawa, sejarah Kyai Walik yang terkait dengan masjid, renovasi kolonial hingga modern, serta perannya dalam pendidikan Islam daerah.]`
  },
  {
    slug: 'pasar-induk-wonosobo-sejarah-ekonomi',
    title: 'Pasar Induk Wonosobo: Jejak Ekonomi Rakyat Sejak Era Kolonial',
    excerpt: 'Melihat transformasi pasar terbesar di Wonosobo dari pusat perdagangan tradisional hingga menjadi motor penggerak ekonomi modern.',
    category: 'Sejarah',
    type: 'story',
    date: '05 Apr 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pasar Induk Wonosobo adalah denyut nadi utama ekonomi sejak masa pemerintahan Belanda... [Narasi panjang minimal 2000 kata mencakup sejarah pertukaran komoditas sayuran pegunungan vs kebutuhan pesisir, dokumentasi foto pasar lama, evolusi sistem distribusi tradisional, hingga tantangan ekonomi digital saat ini.]`
  },
  {
    slug: 'peradaban-keramik-dan-logam-kuno',
    title: 'Peradaban Keramik dan Logam: Teknologi Masa Lalu di Wonosobo',
    excerpt: 'Menemukan jejak kepandaian masyarakat Wonosobo kuno dalam mengolah logam dan keramik berdasarkan temuan arkeologis.',
    category: 'Sejarah',
    type: 'story',
    date: '10 Apr 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Selain candi, peradaban kuno Wonosobo meninggalkan jejak teknologi material yang canggih... [Narasi panjang minimal 2000 kata mencakup analisis temuan emas/perunggu di Dieng, hubungan dagang dengan Dinasti Tang melalui fragmen keramik, teknik peleburan logam kuno, hingga perlunya perlindungan situs cagar budaya.]`
  },
  {
    slug: 'tradisi-lisan-dan-naskah-kuno-wonosobo',
    title: 'Menjaga Aksara dan Kata: Tradisi Lisan dan Naskah Kuno Wonosobo',
    excerpt: 'Menelusuri warisan literasi Wonosobo melalui naskah-naskah kuno dan tradisi tutur yang menjaga memori kolektif bangsa.',
    category: 'Sejarah',
    type: 'story',
    date: '15 Apr 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Sejarah Wonosobo juga tersimpan dalam naskah kuno di atas daun lontar dan kulit kayu... [Narasi panjang minimal 2000 kata mencakup studi aksara Jawa-Pegon lokal, pelestarian naskah di tangan penduduk desa, tradisi lisan (dongeng/cerita rakyat), hingga upaya digitalisasi warisan literasi oleh peneliti.]`
  },

  // --- STORIES: SOSIAL (10 ARTICLES) ---
  {
    slug: 'nyengkuyung-desa-wonosobo',
    title: 'Nyengkuyung: Semangat Gotong Royong Masyarakat Desa Wonosobo',
    excerpt: 'Memahami nilai solidaritas tanpa batas yang masih kental dalam kehidupan sosial di lereng gunung.',
    category: 'Sosial',
    type: 'story',
    date: '28 Mar 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dalam struktur masyarakat Wonosobo, istilah "Nyengkuyung" adalah identitas kolektif yang mendalam... [Narasi panjang minimal 2000 kata mencakup aplikasi gotong royong dalam pertanian terasering, sistem 'sambat' saat membangun rumah, peran paguyuban desa, hingga tantangan urbanisasi terhadap nilai kebersamaan.]`
  },
  {
    slug: 'filosofi-batik-wonosobo',
    title: 'Batik Wonosobo: Narasi Alam dalam Sehelai Kain',
    excerpt: 'Mengupas filosofi mendalam di balik motif batik khas Wonosobo yang terinspirasi dari kearifan lokal dan keindahan alam.',
    category: 'Sosial',
    type: 'story',
    date: '02 Apr 2025',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Batik Wonosobo adalah ekspresi seni unik yang menceritakan hubungan manusia dan alam pegunungan... [Narasi panjang minimal 2000 kata mencakup teknik pewarnaan alami dari tumbuhan lokal, makna filosofis motif Carica/Daun Teh, perkembangan ekonomi kreatif pengrajin batik, hingga upaya pelestarian melalui komunitas muda.]`
  },
  {
    slug: 'peran-perempuan-pasar-tradisional',
    title: 'Nadi Ekonomi: Peran Vital Perempuan di Pasar Tradisional Wonosobo',
    excerpt: 'Menelaah ketangguhan para pedagang perempuan yang menjadi penggerak utama ekonomi kerakyatan Wonosobo.',
    category: 'Sosial',
    type: 'story',
    date: '05 Apr 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Jika Anda berkunjung ke pasar di pagi buta, perempuan adalah penggerak utama ekonomi kerakyatan... [Narasi panjang minimal 2000 kata mencakup studi sosiologis tentang kemandirian ekonomi perempuan pegunungan, sistem kepercayaan dalam perdagangan tradisional (bakul), hingga peran mereka sebagai penjaga ketahanan pangan keluarga.]`
  },
  {
    slug: 'pendidikan-karakter-pesantren-wonosobo',
    title: 'Pesantren: Kawah Candradimuka Pendidikan Karakter di Wonosobo',
    excerpt: 'Menjelajahi peran pesantren dalam membentuk moralitas dan intelektualitas generasi muda di tengah sejuknya pegunungan.',
    category: 'Sosial',
    type: 'story',
    date: '10 Apr 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Wonosobo dikenal sebagai pusat pendidikan Islam penting melalui keberadaan ratusan pesantren... [Narasi panjang minimal 2000 kata mencakup sejarah pesantren tertua, integrasi kurikulum agama dan kemandirian ekonomi santri, pengaruh pesantren terhadap budaya lokal, hingga kontribusinya dalam kerukunan umat.]`
  },
  {
    slug: 'harmoni-keberagaman-di-lereng-gunung',
    title: 'Harmoni di Lereng Gunung: Potret Toleransi Masyarakat Wonosobo',
    excerpt: 'Cerita tentang kebersamaan masyarakat lintas agama yang hidup berdampingan dengan damai di desa-desa Wonosobo.',
    category: 'Sosial',
    type: 'story',
    date: '15 Apr 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Keberagaman di lereng gunung adalah anugerah yang dijaga dengan tulus oleh masyarakat... [Narasi panjang minimal 2000 kata mencakup sejarah pemukiman lintas agama, tradisi saling membantu saat perayaan hari besar agama, pendidikan toleransi di tingkat keluarga, hingga Wonosobo sebagai contoh 'Indonesia Mini'.]`
  },
  {
    slug: 'ruwat-rambut-gimbal-filosofi-sosial',
    title: 'Ruwat Rambut Gimbal: Antara Mitos, Tradisi, dan Kohesi Sosial',
    excerpt: 'Memahami makna sosial di balik ritual pencukuran rambut gimbal yang melibatkan seluruh elemen masyarakat Dieng.',
    category: 'Sosial',
    type: 'story',
    date: '20 Apr 2025',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Ritual Ruwat Rambut Gimbal di Dieng bukan sekadar upacara mistis, melainkan peristiwa sosial mendalam... [Narasi panjang minimal 2000 kata mencakup perspektif psikologis anak-anak gimbal, peran pemangku adat sebagai mediator sosial, dukungan kolektif warga desa dalam pembiayaan ritual, hingga komodifikasi budaya untuk pariwisata.]`
  },
  {
    slug: 'kearifan-lokal-pranata-mangsa-pertanian',
    title: 'Pranata Mangsa: Kearifan Geografis Petani Wonosobo dalam Bertani',
    excerpt: 'Mempelajari cara petani tradisional Wonosobo membaca tanda-tanda alam untuk menentukan masa tanam yang tepat.',
    category: 'Sosial',
    type: 'story',
    date: '25 Apr 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bagi petani tradisional Wonosobo, alam adalah buku teks paling akurat melalui 'Pranata Mangsa'... [Narasi panjang minimal 2000 kata mencakup analisis siklus bintang/cuaca lokal, pengetahuan botani rakyat, hubungan spiritual dengan tanah, hingga tantangan perubahan iklim terhadap kearifan kuno ini.]`
  },
  {
    slug: 'seni-teater-rakyat-lengger-lanang',
    title: 'Lengger Lanang: Identitas Gender dan Ekspresi Seni di Wonosobo',
    excerpt: 'Menelaah fenomena penari laki-laki dalam tradisi Lengger dan maknanya dalam struktur sosial masyarakat Wonosobo.',
    category: 'Sosial',
    type: 'story',
    date: '30 Apr 2025',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tari Lengger adalah kesenian rakyat populer, dengan eksistensi unik 'Lengger Lanang'... [Narasi panjang minimal 2000 kata mencakup sejarah tarian sebagai media dakwah dan hiburan, sosiologi gender dalam seni pertunjukan Jawa, dokumentasi pengabdian seniman tua, hingga regenerasi di tangan anak muda.]`
  },
  {
    slug: 'tradisi-nyadran-selamatan-desa',
    title: 'Nyadran: Jembatan Doa Antara Masa Lalu, Kini, dan Nanti',
    excerpt: 'Memahami makna spiritual dan sosial dari tradisi bersih makam dan selamatan desa yang masih kental di Wonosobo.',
    category: 'Sosial',
    type: 'story',
    date: '05 May 2025',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tradisi Nyadran adalah peristiwa sosial-keagamaan yang paling dinanti menjelang Ramadhan... [Narasi panjang minimal 2000 kata mencakup prosesi bersih makam kolektif, filosofi makanan tumpeng-besek, rekonsiliasi sosial antar warga melalui doa bersama, hingga pewarisan nilai penghormatan leluhur.]`
  },
  {
    slug: 'solidaritas-petani-kentang-dieng',
    title: 'Bara di Puncak Awan: Solidaritas Petani Kentang Dieng',
    excerpt: 'Menganalisis sistem kerja sama dan jaringan sosial petani kentang dalam menghadapi tantangan pasar dan alam.',
    category: 'Sosial',
    type: 'story',
    date: '10 May 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kehidupan petani kentang di Dieng adalah potret ketangguhan di lingkungan yang keras... [Narasi panjang minimal 2000 kata mencakup sistem permodalan kolektif, kerja sama saat panen raya, manajemen krisis saat harga anjlok, hingga dampak ekonomi pertanian terhadap kesejahteraan sosial desa.]`
  },

  // --- DESTINATIONS: ALAM, BUDAYA, KULINER (ALREADY PRESENT IN PREVIOUS TURNS) ---
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Jembatan Kaca Menuju Awan',
    excerpt: 'Destinasi modern dengan jembatan kaca yang menawarkan pemandangan 360 derajat pegunungan Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pintu Langit Sky View menawarkan pengalaman unik berjalan di atas jembatan kaca transparan yang seolah melayang di atas gumpalan awan... [Narasi panjang minimal 2000 kata mencakup sejarah pembangunan, aspek teknis keamanan jembatan, panorama gunung-gunung Jawa Tengah, hingga panduan waktu terbaik untuk berkunjung.]`
  },
  {
    slug: 'mie-ongklok-legenda-kuliner',
    title: 'Mie Ongklok: Mahakarya Kuliner Khas Wonosobo',
    excerpt: 'Mie rebus khas dengan kuah kental yang gurih, disajikan dengan sate sapi dan tempe kemul panas.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Mie Ongklok bukan sekadar makanan; ia adalah identitas budaya... [Narasi panjang minimal 2000 kata mencakup rahasia bumbu kuah kental "lo", sejarah alat ongklok tradisional, perpaduan rasa dengan sate sapi, hingga daftar warung legendaris yang wajib dikunjungi.]`
  }
  // ... (Sisa artikel destinasi lainnya tetap ada sesuai struktur sebelumnya)
];
