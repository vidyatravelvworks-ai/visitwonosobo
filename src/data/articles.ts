
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
  // SEE & DO (Destinations)
  {
    slug: 'bukit-sikunir-sunrise',
    title: 'Golden Sunrise Bukit Sikunir',
    excerpt: 'Menikmati fenomena matahari terbit terbaik se-Asia Tenggara dari puncak Sikunir.',
    category: 'Alam',
    type: 'destination',
    date: '12 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || '',
    content: 'Bukit Sikunir merupakan primadona wisata alam di Wonosobo. Terletak di Desa Sembungan, desa tertinggi di Pulau Jawa. Pengunjung perlu melakukan trekking ringan selama 15-30 menit untuk mencapai puncak. Waktu terbaik adalah sebelum fajar menyingsing untuk mendapatkan pemandangan Golden Sunrise yang ikonik.'
  },
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kemegahan Kompleks Candi Arjuna',
    excerpt: 'Menelusuri jejak peradaban Hindu tertua di Jawa yang berada di ketinggian 2000 mdpl.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    content: 'Kompleks Candi Arjuna merupakan peninggalan bersejarah dari abad ke-8. Terdiri dari lima candi utama yang berdiri megah di tengah lembah Dieng. Selain nilai sejarahnya, lokasinya yang dikelilingi pegunungan membuatnya sangat fotogenik.'
  },
  {
    slug: 'kuliner-mie-ongklok',
    title: 'Kelezatan Otentik Mie Ongklok',
    excerpt: 'Mie Ongklok bukan sekadar mie rebus biasa. Pelajari sejarah dan resep rahasia di balik hidangan legendaris ini.',
    category: 'Kuliner',
    type: 'destination',
    date: '15 Mei 2024',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    content: 'Mie Ongklok disajikan dengan kuah kental gurih, sate sapi, dan tempe kemul. Nama ongklok berasal dari alat bambu yang digunakan untuk merebus mie. Ini adalah pengalaman kuliner wajib bagi siapapun yang menginjakkan kaki di Wonosobo.'
  },

  // STORIES (Insights)
  {
    slug: 'asal-usul-wonosobo',
    title: 'Sejarah: Dari Lembah Menjadi Kota',
    excerpt: 'Menelusuri sejarah terbentuknya Wonosobo dari masa kolonial hingga sekarang.',
    category: 'Sejarah',
    type: 'story',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1590059392683-9b8893ccf971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZ Heritage|ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Nama Wonosobo berasal dari bahasa Sansekerta, "Wana" yang berarti hutan dan "Saba" yang berarti tempat berkumpul. Dahulu merupakan wilayah penting bagi penyebaran agama dan perdagangan di Jawa Tengah.'
  },
  {
    slug: 'keajaiban-geografis-dieng',
    title: 'Geografis: Di Atas Awan Jawa',
    excerpt: 'Mengapa Wonosobo memiliki karakteristik geografis yang sangat unik dibandingkan daerah lain?',
    category: 'Geografis',
    type: 'story',
    date: '08 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'dieng-fog')?.imageUrl || '',
    content: 'Terletak di jantung Jawa Tengah, Wonosobo didominasi oleh dataran tinggi dan pegunungan vulkanik. Fenomena vulkanik aktif di Dieng menciptakan lanskap yang dramatis dengan kawah, telaga warna-warni, dan tanah yang sangat subur.'
  },
  {
    slug: 'sosial-masyarakat-pegunungan',
    title: 'Sosial: Kehangatan di Tengah Dingin',
    excerpt: 'Melihat lebih dekat kehidupan sosial masyarakat Wonosobo yang ramah dan menjunjung gotong royong.',
    category: 'Sosial',
    type: 'story',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZW9wbGUlMjBzbWlsaW5nfGVufDB8fHx8MTc3NDE1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Keseharian warga Wonosobo kental dengan nilai agraris dan spiritual. Budaya "nyangkruk" atau berkumpul sambil minum kopi menjadi medium komunikasi sosial yang penting di desa-desa.'
  },
  {
    slug: 'tips-cuaca-dieng',
    title: 'Tips: Menghadapi Cuaca Ekstrem',
    excerpt: 'Dari fenomena bun upas (embun es) hingga persiapan pakaian. Pastikan liburan Anda tetap nyaman.',
    category: 'Tips',
    type: 'story',
    date: '10 Juli 2024',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmb2dneSUyMG1vdW50YWlufGVufDB8fHx8MTc3MDExNTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Suhu di Dieng bisa mencapai minus derajat celsius saat musim kemarau. Persiapkan jaket tebal, sarung tangan, dan pelembab kulit agar perjalanan Anda tetap menyenangkan.'
  }
];
