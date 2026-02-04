
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
  // --- DESTINATIONS: ALAM (8) ---
  {
    slug: 'bukit-sikunir-golden-sunrise',
    title: 'Bukit Sikunir: Berburu Golden Sunrise Terbaik Asia',
    excerpt: 'Menyaksikan fenomena matahari terbit yang memukau dari puncak bukit di desa tertinggi di Pulau Jawa.',
    category: 'Alam',
    type: 'destination',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Bukit Sikunir adalah magnet utama bagi wisatawan yang berkunjung ke Dieng. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini menawarkan pemandangan matahari terbit yang dijuluki "Golden Sunrise". Cahaya keemasan yang muncul di antara gunung-gunung besar seperti Sindoro, Sumbing, Merbabu, dan Merapi menciptakan pemandangan yang tak tertandingi. Perjalanan menuju puncak biasanya dimulai pada pukul 4 pagi, dengan jalur pendakian yang telah tertata rapi namun cukup menanjak. Ketinggian Bukit Sikunir mencapai sekitar 2.300 meter di atas permukaan laut, memberikan sudut pandang 360 derajat ke seluruh dataran tinggi Dieng. Selain matahari terbit, saat hari mulai terang, Anda bisa melihat hamparan awan yang menutupi lembah di bawahnya.'
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Keajaiban Danau Multikolor',
    excerpt: 'Danau vulkanik unik yang airnya bisa berubah warna karena kandungan sulfur yang tinggi.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Telaga Warna adalah salah satu ikon wisata Dieng yang paling misterius dan indah. Fenomena alam yang unik membuat air di danau ini sering berubah warna, mulai dari hijau, biru, hingga kuning kecokelatan. Hal ini disebabkan oleh tingginya kandungan belerang di dasar telaga yang membiaskan cahaya matahari. Wisatawan juga bisa naik ke Bukit Ratapan Angin untuk melihat pemandangan Telaga Warna dan Telaga Pengilon secara berdampingan dari ketinggian. Kontras warna antara kedua telaga ini sangat mencolok.'
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Eksplorasi Perut Bumi yang Dinamis',
    excerpt: 'Menjelajahi kawah aktif yang unik karena kolam lumpur mendidihnya yang sering berpindah tempat.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kawah Sikidang merupakan kawah vulkanik aktif yang paling mudah dijangkau di Dataran Tinggi Dieng. Dinamakan "Sikidang" (Kijang) karena kolam uap dan lumpur mendidihnya sering kali berpindah-pindah posisi seolah sedang melompat. Saat ini, pengelola telah membangun jembatan kayu yang sangat panjang (Boardwalk) yang mengelilingi area kawah. Bau belerang yang menyengat adalah ciri khas tempat ini, sehingga penggunaan masker sangat disarankan.'
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Jembatan Kaca Menuju Awan',
    excerpt: 'Destinasi modern dengan jembatan kaca yang menawarkan pemandangan 360 derajat pegunungan Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pintu Langit Sky View menawarkan pengalaman unik berjalan di atas jembatan kaca transparan yang seolah melayang di atas gumpalan awan. Berlokasi di jalur utama menuju Dieng, tempat ini menjadi titik favorit untuk menikmati pemandangan lembah. Pemandangan dari sini mencakup Gunung Sindoro yang berdiri gagah di depan mata, serta hamparan pertanian kentang yang tertata rapi di lereng bukit.'
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Puncak dengan Bukit Teletubbies',
    excerpt: 'Pendakian ramah pemula yang menawarkan pemandangan deretan gunung api Jawa Tengah yang spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunung Prau adalah salah satu gunung favorit di Indonesia. Dengan ketinggian 2.565 mdpl, gunung ini menawarkan pemandangan "Bukit Teletubbies" dan hamparan bunga daisy di puncaknya. Dari atas sini, Anda bisa melihat Sindoro, Sumbing, Merapi, dan Merbabu sekaligus. Jalur pendakiannya relatif ramah bagi pemula, terutama via Dieng atau Patakbanteng.'
  },
  {
    slug: 'batu-ratapan-angin-dieng',
    title: 'Batu Ratapan Angin: Memandang Telaga dari Ketinggian',
    excerpt: 'Spot pandang terbaik untuk melihat Telaga Warna dan Telaga Pengilon secara berdampingan.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Terletak di dekat Dieng Plateau Theater, Batu Ratapan Angin adalah formasi batuan andesit di puncak bukit. Dinamakan demikian karena suara angin yang menderu melewati celah batu terdengar seperti ratapan. Dari sini, gradasi warna Telaga Warna terlihat sangat jelas berbanding terbalik dengan Telaga Pengilon.'
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Keindahan Tersembunyi di Lereng Bukit',
    excerpt: 'Air terjun tinggi yang membelah tebing hijau subur, sering dijuluki Swiss-nya Wonosobo.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Curug Sikarim adalah salah satu air terjun paling dramatis di Wonosobo. Terletak di Desa Mlandi, air terjun ini jatuh dari tebing tinggi di antara hutan yang rimbun. Perjalanan menuju lokasi menawarkan pemandangan lembah yang sangat indah, mirip dengan lanskap di pegunungan Alpen di Swiss.'
  },
  {
    slug: 'kebun-teh-panama-wonosobo',
    title: 'Kebun Teh Panama: Hamparan Hijau yang Menenangkan',
    excerpt: 'Menikmati kesegaran udara di tengah perkebunan teh yang tertata rapi dengan latar belakang gunung.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kebun Teh Panama menawarkan suasana yang tenang dan udara yang sangat bersih. Terletak di jalur menuju Dieng via Telaga Menjer, tempat ini menjadi favorit wisatawan untuk jalan-jalan santai di atas jembatan kayu yang membelah rimbunnya tanaman teh. Pemandangan di sini sangat menyejukkan mata.'
  },

  // --- DESTINATIONS: BUDAYA (4) ---
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kompleks Candi Arjuna: Jejak Mataram Kuno',
    excerpt: 'Kelompok candi Hindu tertua di Jawa yang berdiri megah di tengah lembah berkabut.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kompleks Candi Arjuna adalah warisan peradaban Mataram Kuno dari abad ke-8. Terdiri dari lima bangunan candi yang berjejer rapi. Situs ini merupakan pusat spiritualitas Hindu pada masanya dan diyakini sebagai salah satu bangunan candi tertua di Pulau Jawa. Lokasinya yang berada di tengah lembah luas memberikan kesan mistis.'
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Menyimpan Rahasia Dieng',
    excerpt: 'Pusat informasi arkeologi dan kebudayaan yang menyimpan berbagai artefak penting dari masa lalu Dieng.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Museum Kaliasa menyimpan berbagai arca kuno, prasasti, serta penjelasan detail mengenai flora, fauna, dan geologi Dieng. Museum ini menyajikan narasi tentang bagaimana Dieng terbentuk secara geologis jutaan tahun lalu melalui aktivitas vulkanik yang dahsyat.'
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Arsitektur Unik dengan Pengaruh India',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap yang unik, menyerupai gaya arsitektur India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Candi Bima memiliki bentuk yang berbeda dari candi-candi lain di kompleks Dieng. Arsitekturnya menunjukkan pengaruh kuat dari gaya Shikara (India Utara). Atapnya yang bertingkat-tingkat dengan hiasan kepala manusia (Kudu) di setiap sisinya memberikan detail yang sangat eksotis.'
  },
  {
    slug: 'tuk-bimo-lukat-suci',
    title: 'Tuk Bimo Lukat: Mata Air Keabadian',
    excerpt: 'Mata air purba yang dianggap suci, dipercaya dapat memberikan awet muda bagi siapa pun yang membasuh muka di sini.',
    category: 'Budaya',
    type: 'destination',
    date: '08 Mar 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tuk Bimo Lukat merupakan hulu dari Sungai Serayu. Dalam kepercayaan lokal, mata air ini adalah tempat Bima (tokoh pewayangan) menyucikan diri. Hingga kini, banyak wisatawan yang datang untuk ritual membasuh muka.'
  },

  // --- DESTINATIONS: KULINER (4) ---
  {
    slug: 'mie-ongklok-legenda-kuliner',
    title: 'Mie Ongklok: Mahakarya Kuliner Khas Wonosobo',
    excerpt: 'Mie rebus khas dengan kuah kental yang gurih, disajikan dengan sate sapi dan tempe kemul panas.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Mie Ongklok adalah kuliner wajib saat berkunjung ke Wonosobo. Keunikannya terletak pada kuah kental berwarna cokelat yang disebut "lo". Mie-nya diolah dengan cara dikocok (di-ongklok) di dalam keranjang bambu bersama kol dan daun kucai segar.'
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Buah Eksotis dari Pegunungan Dieng',
    excerpt: 'Buah khas yang hanya tumbuh di dataran tinggi tertentu, diolah menjadi manisan segar yang ikonik.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Carica adalah kerabat dekat pepaya namun dengan ukuran yang jauh lebih kecil dan hanya bisa tumbuh optimal di ketinggian di atas 1.500 mdpl. Di Dieng, buah ini diolah menjadi manisan dalam sirup yang sangat menyegarkan.'
  },
  {
    slug: 'tempe-kemul-panas',
    title: 'Tempe Kemul: Camilan Renyah Pendamping Udara Dingin',
    excerpt: 'Tempe goreng tepung lebar dengan kunyit dan daun kucai yang melimpah, disajikan panas.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tempe Kemul adalah camilan ikonik Wonosobo. "Kemul" berarti selimut, merujuk pada lapisan tepung tebal yang membungkus tempe. Tepungnya dicampur dengan kunyit yang memberikan warna kuning cerah dan daun kucai yang melimpah.'
  },
  {
    slug: 'purwaceng-dieng-herbal',
    title: 'Purwaceng: Ginseng Alami dari Dataran Tinggi',
    excerpt: 'Minuman herbal legendaris yang hanya tumbuh di Dieng, dikenal berkhasiat untuk stamina.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Purwaceng adalah tanaman herbal endemik Dieng yang sangat langka. Akarnya diolah menjadi bubuk minuman yang dipercaya memiliki khasiat luar biasa untuk meningkatkan stamina dan menghangatkan tubuh.'
  },

  // --- STORIES: SEJARAH, SOSIAL, GEOGRAFIS, TIPS (45 Total) ---
  // Menambahkan placeholder untuk sisa 45 artikel agar data sinkronisasi lengkap
  ...Array.from({ length: 45 }).map((_, i) => ({
    slug: `story-detail-${i + 1}`,
    title: `Cerita Mendalam Wonosobo Bagian ${i + 1}`,
    excerpt: `Narasi mendalam mengenai aspek ${['Sejarah', 'Sosial', 'Geografis', 'Tips'][i % 4]} yang memberikan wawasan baru bagi pengunjung Wonosobo.`,
    category: ['Sejarah', 'Sosial', 'Geografis', 'Tips'][i % 4],
    type: 'story',
    date: '2025-03-01',
    image: 'https://picsum.photos/seed/' + (i + 50) + '/1080/720',
    content: 'Ini adalah konten narasi yang sangat panjang. '.repeat(500)
  })) as Article[]
];
