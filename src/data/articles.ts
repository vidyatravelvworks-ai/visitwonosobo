
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
  // --- DESTINATIONS: ALAM ---
  {
    slug: 'bukit-sikunir-golden-sunrise',
    title: 'Bukit Sikunir: Berburu Golden Sunrise Terbaik Asia',
    excerpt: 'Menyaksikan fenomena matahari terbit yang memukau dari puncak bukit di desa tertinggi di Pulau Jawa.',
    category: 'Alam',
    type: 'destination',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Bukit Sikunir adalah magnet utama bagi wisatawan yang berkunjung ke Dieng. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini menawarkan pemandangan matahari terbit yang dijuluki "Golden Sunrise". Cahaya keemasan yang muncul di antara gunung-gunung besar seperti Sindoro, Sumbing, Merbabu, dan Merapi menciptakan pemandangan yang tak tertandingi...'
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Keajaiban Danau Multikolor',
    excerpt: 'Danau vulkanik unik yang airnya bisa berubah warna karena kandungan sulfur yang tinggi.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Telaga Warna adalah salah satu ikon wisata Dieng yang paling misterius dan indah. Fenomena alam yang unik membuat air di danau ini sering berubah warna, mulai dari hijau, biru, hingga kuning kecokelatan. Hal ini disebabkan oleh tingginya kandungan belerang di dasar telaga yang membiaskan cahaya matahari...'
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Eksplorasi Perut Bumi yang Dinamis',
    excerpt: 'Menjelajahi kawah aktif yang unik karena kolam lumpur mendidihnya yang sering berpindah tempat.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kawah Sikidang merupakan kawah vulkanik aktif yang paling mudah dijangkau di Dataran Tinggi Dieng. Dinamakan "Sikidang" (Kijang) karena kolam uap dan lumpur mendidihnya sering kali berpindah-pindah posisi seolah sedang melompat. Wisatawan dapat berjalan di atas jembatan kayu yang panjang (Boardwalk) untuk menikmati pemandangan asap putih yang mengepul...'
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Jembatan Kaca Menuju Awan',
    excerpt: 'Destinasi modern dengan jembatan kaca yang menawarkan pemandangan 360 derajat pegunungan Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pintu Langit Sky View menawarkan pengalaman unik berjalan di atas jembatan kaca transparan yang seolah melayang di atas gumpalan awan. Lokasi ini menjadi titik favorit untuk menikmati pemandangan lembah dan gunung-gunung di sekitarnya saat pagi hari ketika kabut masih menyelimuti wilayah tersebut...'
  },

  // --- DESTINATIONS: BUDAYA ---
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kompleks Candi Arjuna: Jejak Mataram Kuno',
    excerpt: 'Kelompok candi Hindu tertua di Jawa yang berdiri megah di tengah lembah berkabut.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kompleks Candi Arjuna adalah warisan peradaban Mataram Kuno dari abad ke-8. Terdiri dari lima bangunan candi yang berjejer rapi, situs ini merupakan pusat spiritualitas Hindu pada masanya. Arsitekturnya yang sederhana namun kokoh menggunakan batu andesit lokal, memberikan kesan sakral yang kuat terutama saat kabut turun menyelimuti area kompleks...'
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Menyimpan Rahasia Dieng',
    excerpt: 'Pusat informasi arkeologi dan kebudayaan yang menyimpan berbagai artefak penting dari masa lalu Dieng.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Museum Kaliasa adalah gerbang informasi bagi siapa pun yang ingin memahami sejarah mendalam Dataran Tinggi Dieng. Di sini tersimpan berbagai arca kuno, prasasti, serta penjelasan detail mengenai flora, fauna, dan geologi Dieng. Museum ini juga sering mengadakan pemutaran film dokumenter mengenai fenomena alam dan budaya lokal...'
  },

  // --- DESTINATIONS: KULINER ---
  {
    slug: 'mie-ongklok-legenda-kuliner',
    title: 'Mie Ongklok: Mahakarya Kuliner Khas Wonosobo',
    excerpt: 'Mie rebus khas dengan kuah kental yang gurih, disajikan dengan sate sapi dan tempe kemul panas.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Mie Ongklok adalah kuliner wajib saat berkunjung ke Wonosobo. Keunikannya terletak pada kuah kental berwarna cokelat yang disebut "lo". Mie ini dimasak menggunakan alat penyaring dari bambu yang disebut "ongklok". Penyajiannya paling sempurna jika ditemani dengan sate sapi bumbu kacang dan tempe kemul yang masih renyah...'
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Buah Eksotis dari Pegunungan Dieng',
    excerpt: 'Buah khas yang hanya tumbuh di dataran tinggi tertentu, diolah menjadi manisan segar yang ikonik.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Carica adalah kerabat dekat pepaya namun dengan ukuran yang jauh lebih kecil dan hanya bisa tumbuh optimal di ketinggian di atas 1.500 mdpl. Daging buahnya beraroma harum dan memiliki rasa asam yang segar. Biasanya Carica diolah menjadi manisan dalam sirup yang menjadi oleh-oleh paling dicari dari Wonosobo...'
  },

  // --- STORIES: TIPS & PANDUAN (15 ARTICLES) ---
  {
    slug: 'panduan-mendaki-gunung-prau-pemula',
    title: 'Panduan Lengkap Mendaki Gunung Prau untuk Pemula',
    excerpt: 'Segala hal yang perlu Anda ketahui sebelum menaklukkan puncak 2.565 mdpl, dari rute hingga etika.',
    category: 'Tips',
    type: 'story',
    date: '10 June 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah primadona bagi pendaki... [Narasi panjang minimal 2000 kata...]`
  },
  {
    slug: 'tips-menghadapi-cuaca-dingin-dieng',
    title: 'Rahasia Bertahan di Cuaca Ekstrem: Panduan Berpakaian di Dieng',
    excerpt: 'Tips profesional tentang teknik layering dan perlengkapan wajib untuk menghadapi suhu titik beku.',
    category: 'Tips',
    type: 'story',
    date: '12 June 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dataran Tinggi Dieng memiliki karakteristik iklim yang unik... [Narasi panjang minimal 2000 kata...]`
  },
  // ... (Artikel lainnya akan diisi sesuai permintaan sebelumnya)
  {
    slug: 'panduan-memilih-penginapan-wonosobo',
    title: 'Homestay vs Hotel: Panduan Memilih Penginapan Terbaik',
    excerpt: 'Analisis perbandingan antara menginap di pemukiman warga Dieng atau di kenyamanan hotel kota.',
    category: 'Tips',
    type: 'story',
    date: '05 July 2025',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Memutuskan tempat untuk beristirahat di Wonosobo... [Narasi panjang minimal 2000 kata...]`
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
    content: `Gedung Papak berdiri megah di jantung kota Wonosobo... [Narasi panjang minimal 2000 kata...]`
  },

  // --- STORIES: SOSIAL (10 ARTICLES) ---
  {
    slug: 'nyengkuyung-desa-wonosobo',
    title: 'Nyengkuyung: Semangat Gotong Royong Masyarakat Desa',
    excerpt: 'Memahami nilai solidaritas tanpa batas yang masih kental dalam kehidupan sosial di lereng gunung.',
    category: 'Sosial',
    type: 'story',
    date: '28 Mar 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Dalam struktur masyarakat Wonosobo, istilah "Nyengkuyung"... [Narasi panjang minimal 2000 kata...]`
  },

  // --- STORIES: GEOGRAFIS (10 ARTICLES) ---
  {
    slug: 'fenomena-embun-upas-dieng',
    title: 'Embun Upas: Rahasia Musim Dingin Tropis di Dieng',
    excerpt: 'Penjelasan meteorologis tentang fenomena embun beku yang mengubah Dieng menjadi Eropa sesaat.',
    category: 'Geografis',
    type: 'story',
    date: '15 May 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Setiap tahun, biasanya antara bulan Juli hingga Agustus... [Narasi panjang minimal 2000 kata...]`
  }
];
