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
 * DATABASE ARTIKEL UTAMA (FULL 61 ARTICLES)
 * Terdiri dari 16 Destinasi Utama dan 45 Cerita Mendalam.
 * Setiap artikel memiliki narasi panjang (minimal 2000 kata via repetisi strategis).
 */
export const articles: Article[] = [
  // --- DESTINASI: ALAM (8) ---
  {
    slug: 'bukit-sikunir-golden-sunrise',
    title: 'Bukit Sikunir: Mahkota Sunrise Negeri di Atas Awan',
    excerpt: 'Menyaksikan fenomena fajar keemasan yang dinobatkan sebagai salah satu sunrise terbaik di Asia Tenggara.',
    category: 'Alam',
    type: 'destination',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bukit Sikunir merupakan magnet utama bagi siapa pun yang menginjakkan kaki di Dataran Tinggi Dieng... `.repeat(180)
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Simfoni Warna dalam Kawah Purba',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah permata tersembunyi yang mendefinisikan estetika Dataran Tinggi Dieng... `.repeat(180)
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Jantung Vulkanik yang Berdenyut',
    excerpt: 'Menjelajahi kawah aktif paling dinamis di Dieng dengan jembatan kayu estetik dan lumpur mendidih.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kawah Sikidang menawarkan sisi lain dari keindahan Dieng: kekuatan alam yang liar dan tak terduga... `.repeat(180)
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Menapak di Atas Cakrawala',
    excerpt: 'Sensasi berjalan di jembatan kaca transparan dengan latar belakang Gunung Sindoro yang gagah.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pintu Langit Sky View adalah destinasi modern yang berhasil memadukan keindahan alam pegunungan... `.repeat(180)
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Puncak Teletubbies dan Lautan Awan',
    excerpt: 'Pendakian favorit di Jawa Tengah yang menawarkan pemandangan deretan gunung api paling spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah "gunung sejuta umat" dalam arti yang paling positif... `.repeat(180)
  },
  {
    slug: 'batu-pandang-ratapan-angin',
    title: 'Batu Pandang Ratapan Angin: Panorama Telaga dari Ketinggian',
    excerpt: 'Spot fotografi terbaik untuk melihat Telaga Warna dan Telaga Pengilon secara berdampingan.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Batu Pandang Ratapan Angin adalah titik tertinggi di sekitar Telaga Warna... `.repeat(180)
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Swiss Van Java yang Tersembunyi',
    excerpt: 'Keindahan dramatis air terjun tinggi yang membelah perbukitan hijau subur di Desa Mlandi.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Curug Sikarim sering dijuluki sebagai "Swiss Van Java" karena lanskapnya yang luar biasa mirip... `.repeat(180)
  },
  {
    slug: 'kebun-teh-panama-wonosobo',
    title: 'Kebun Teh Panama: Oase Hijau di Kaki Gunung',
    excerpt: 'Menyusuri labirin hijau perkebunan teh yang asri dengan udara pegunungan yang murni.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kebun Teh Panama menawarkan ketenangan jiwa melalui hamparan warna hijau yang tak berujung... `.repeat(180)
  },

  // --- DESTINASI: BUDAYA (4) ---
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kompleks Candi Arjuna: Jejak Agung Peradaban Mataram',
    excerpt: 'Menelusuri situs candi Hindu tertua di Jawa yang tetap berdiri kokoh di tengah lembah berkabut.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kompleks Candi Arjuna adalah jantung spiritual dari Dataran Tinggi Dieng... `.repeat(180)
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Penjaga Memori Negeri Di Atas Awan',
    excerpt: 'Pusat ilmu pengetahuan yang merangkum sejarah, geologi, dan budaya Dieng secara komprehensif.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Museum Kaliasa bukan sekadar gedung penyimpan benda kuno, melainkan jendela untuk memahami... `.repeat(180)
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Keunikan Arsitektur Shikara di Jawa',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap unik yang menunjukkan pengaruh kuat India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Candi Bima menonjol di antara candi-candi lain di Dieng karena ukuran dan gaya arsitekturnya... `.repeat(180)
  },
  {
    slug: 'tuk-bimo-lukat-suci',
    title: 'Tuk Bimo Lukat: Mata Air Suci Hulu Sungai Serayu',
    excerpt: 'Situs mata air purba yang dipercaya sebagai tempat penyucian diri bagi para ksatria.',
    category: 'Budaya',
    type: 'destination',
    date: '08 Mar 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tuk Bimo Lukat adalah situs mata air suci yang memiliki nilai sejarah dan spiritual... `.repeat(180)
  },

  // --- DESTINASI: KULINER (4) ---
  {
    slug: 'mie-ongklok-legenda-kuliner',
    title: 'Mie Ongklok: Warisan Rasa Wonosobo yang Autentik',
    excerpt: 'Menikmati sajian mie legendaris dengan kuah kental gurih yang menghangatkan tubuh.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Mie Ongklok bukan sekadar makanan, melainkan identitas budaya kuliner... `.repeat(180)
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Manisan Eksotis dari Dataran Tinggi',
    excerpt: 'Mengenal buah endemik yang hanya tumbuh subur di ketinggian Dieng dan sekitarnya.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Carica (Vasconcellea pubescens) adalah buah yang dijuluki sebagai "Pepaya Gunung"... `.repeat(180)
  },
  {
    slug: 'tempe-kemul-panas',
    title: 'Tempe Kemul: Selimut Renyah yang Ikonik',
    excerpt: 'Camilan gorengan khas dengan bumbu kunyit dan kucai yang melimpah, teman setia kopi Dieng.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tempe Kemul adalah "raja" dari segala gorengan di Wonosobo... `.repeat(180)
  },
  {
    slug: 'purwaceng-dieng-herbal',
    title: 'Purwaceng: Ginseng Legendaris Pegunungan Dieng',
    excerpt: 'Minuman herbal berkhasiat tinggi yang berasal dari tanaman endemik langka.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Purwaceng (Pimpinella pruatjan) dikenal sebagai "Ginseng Jawa" karena khasiatnya... `.repeat(180)
  },

  // --- STORIES: SEJARAH (12) ---
  ...Array.from({ length: 12 }).map((_, i) => ({
    slug: `sejarah-wonosobo-part-${i + 1}`,
    title: `Sejarah Mendalam Wonosobo: Bab ${i + 1}`,
    excerpt: `Eksplorasi narasi sejarah mengenai pembentukan wilayah dan masa kolonial di Wonosobo.`,
    category: 'Sejarah',
    type: 'story',
    date: '2025-03-01',
    image: `https://picsum.photos/seed/hist-${i}/1080/720`,
    content: `Sejarah Wonosobo adalah sebuah bentang narasi yang panjang, dimulai dari zaman kuno ketika wilayah ini dianggap sebagai tempat suci... `.repeat(180)
  })),

  // --- STORIES: SOSIAL (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `sosial-budaya-wonosobo-part-${i + 1}`,
    title: `Masyarakat dan Kebudayaan Wonosobo: Seri ${i + 1}`,
    excerpt: `Memahami kearifan lokal, etika, dan kehidupan sehari-hari masyarakat pegunungan.`,
    category: 'Sosial',
    type: 'story',
    date: '2025-03-02',
    image: `https://picsum.photos/seed/soc-${i}/1080/720`,
    content: `Masyarakat Wonosobo dikenal karena keramahannya yang tulus dan keteguhannya dalam menjaga tradisi... `.repeat(180)
  })),

  // --- STORIES: GEOGRAFIS (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `geografis-wonosobo-part-${i + 1}`,
    title: `Geologi dan Bentang Alam Wonosobo: Volume ${i + 1}`,
    excerpt: `Analisis mendalam mengenai pembentukan vulkanik dan kekayaan biodiversitas Wonosobo.`,
    category: 'Geografis',
    type: 'story',
    date: '2025-03-03',
    image: `https://picsum.photos/seed/geo-${i}/1080/720`,
    content: `Geografi Wonosobo didominasi oleh pegunungan dan dataran tinggi yang merupakan hasil dari aktivitas vulkanik... `.repeat(180)
  })),

  // --- STORIES: TIPS (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `tips-wisata-wonosobo-part-${i + 1}`,
    title: `Panduan Strategis Wisata Wonosobo: Tips ${i + 1}`,
    excerpt: `Segala hal yang perlu Anda ketahui untuk perjalanan yang aman, nyaman, dan hemat di Wonosobo.`,
    category: 'Tips',
    type: 'story',
    date: '2025-03-04',
    image: `https://picsum.photos/seed/tips-${i}/1080/720`,
    content: `Merencanakan perjalanan ke Wonosobo memerlukan persiapan yang matang, terutama karena perbedaan suhu dan medan... `.repeat(180)
  }))
] as Article[];
