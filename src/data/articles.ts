
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
    content: 'Bukit Sikunir adalah magnet utama bagi wisatawan yang berkunjung ke Dieng. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini menawarkan pemandangan matahari terbit yang dijuluki "Golden Sunrise". Cahaya keemasan yang muncul di antara gunung-gunung besar seperti Sindoro, Sumbing, Merbabu, dan Merapi menciptakan pemandangan yang tak tertandingi. Perjalanan menuju puncak biasanya dimulai pada pukul 4 pagi, dengan jalur pendakian yang telah tertata rapi namun cukup menanjak. Sepanjang perjalanan, udara dingin yang menusuk tulang akan menemani langkah Anda, namun semua lelah akan terbayar saat ufuk timur mulai memerah dan menyajikan gradasi warna yang luar biasa indah...'
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Keajaiban Danau Multikolor',
    excerpt: 'Danau vulkanik unik yang airnya bisa berubah warna karena kandungan sulfur yang tinggi.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Telaga Warna adalah salah satu ikon wisata Dieng yang paling misterius dan indah. Fenomena alam yang unik membuat air di danau ini sering berubah warna, mulai dari hijau, biru, hingga kuning kecokelatan. Hal ini disebabkan oleh tingginya kandungan belerang di dasar telaga yang membiaskan cahaya matahari. Danau ini dikelilingi oleh pepohonan rimbun dan perbukitan yang sering tertutup kabut, menciptakan suasana magis. Selain menikmati keindahan dari bibir telaga, wisatawan juga bisa naik ke Bukit Ratapan Angin untuk melihat pemandangan Telaga Warna dan Telaga Pengilon secara berdampingan dari ketinggian. Kontras warna antara kedua telaga ini sangat mencolok dan menjadi spot foto favorit para fotografer lanskap.'
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Eksplorasi Perut Bumi yang Dinamis',
    excerpt: 'Menjelajahi kawah aktif yang unik karena kolam lumpur mendidihnya yang sering berpindah tempat.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kawah Sikidang merupakan kawah vulkanik aktif yang paling mudah dijangkau di Dataran Tinggi Dieng. Dinamakan "Sikidang" (Kijang) karena kolam uap dan lumpur mendidihnya sering kali berpindah-pindah posisi seolah sedang melompat. Saat ini, pengelola telah membangun jembatan kayu yang sangat panjang (Boardwalk) yang mengelilingi area kawah, memungkinkan wisatawan untuk mengeksplorasi medan belerang dengan aman tanpa harus menginjak tanah yang panas. Bau belerang yang menyengat adalah ciri khas tempat ini, sehingga penggunaan masker sangat disarankan.'
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Jembatan Kaca Menuju Awan',
    excerpt: 'Destinasi modern dengan jembatan kaca yang menawarkan pemandangan 360 derajat pegunungan Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pintu Langit Sky View menawarkan pengalaman unik berjalan di atas jembatan kaca transparan yang seolah melayang di atas gumpalan awan. Berlokasi di jalur utama menuju Dieng, tempat ini menjadi titik favorit untuk menikmati pemandangan lembah dan gunung-gunung di sekitarnya. Saat pagi hari ketika kabut masih menyelimuti wilayah tersebut, sensasi berada di atas awan sangat terasa nyata. Fasilitas yang tersedia cukup lengkap, mulai dari area kafe yang nyaman hingga spot foto yang dirancang khusus untuk media sosial.'
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Puncak dengan Bukit Teletubbies',
    excerpt: 'Pendakian ramah pemula yang menawarkan pemandangan deretan gunung api Jawa Tengah yang spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunung Prau adalah salah satu gunung favorit di Indonesia. Dengan ketinggian 2.565 mdpl, gunung ini menawarkan pemandangan "Bukit Teletubbies" dan hamparan bunga daisy di puncaknya. Dari atas sini, Anda bisa melihat Sindoro, Sumbing, Merapi, dan Merbabu sekaligus.'
  },
  {
    slug: 'batu-ratapan-angin-dieng',
    title: 'Batu Ratapan Angin: Memandang Telaga dari Ketinggian',
    excerpt: 'Spot pandang terbaik untuk melihat Telaga Warna dan Telaga Pengilon secara berdampingan.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Terletak di dekat Dieng Plateau Theater, Batu Ratapan Angin adalah formasi batuan andesit di puncak bukit. Dinamakan demikian karena suara angin yang menderu melewati celah batu terdengar seperti ratapan. Dari sini, gradasi warna Telaga Warna terlihat sangat jelas.'
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Keindahan Tersembunyi di Lereng Bukit',
    excerpt: 'Air terjun tinggi yang membelah tebing hijau subur, sering dijuluki Swiss-nya Wonosobo.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Curug Sikarim adalah salah satu air terjun paling dramatis di Wonosobo. Terletak di Desa Mlandi, air terjun ini jatuh dari tebing tinggi di antara hutan yang rimbun. Perjalanan menuju lokasi menawarkan pemandangan lembah yang sangat indah, mirip dengan lanskap di pegunungan Alpen.'
  },
  {
    slug: 'kebun-teh-panama-wonosobo',
    title: 'Kebun Teh Panama: Hamparan Hijau yang Menenangkan',
    excerpt: 'Menikmati kesegaran udara di tengah perkebunan teh yang tertata rapi dengan latar belakang gunung.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kebun Teh Panama menawarkan suasana yang tenang dan udara yang sangat bersih. Terletak di jalur menuju Dieng via Telaga Menjer, tempat ini menjadi favorit wisatawan untuk jalan-jalan santai di atas jembatan kayu yang membelah rimbunnya tanaman teh.'
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
    content: 'Kompleks Candi Arjuna adalah warisan peradaban Mataram Kuno dari abad ke-8. Terdiri dari lima bangunan candi yang berjejer rapi, situs ini merupakan pusat spiritualitas Hindu pada masanya.'
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Menyimpan Rahasia Dieng',
    excerpt: 'Pusat informasi arkeologi dan kebudayaan yang menyimpan berbagai artefak penting dari masa lalu Dieng.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Museum Kaliasa menyimpan berbagai arca kuno, prasasti, serta penjelasan detail mengenai flora, fauna, dan geologi Dieng. Museum ini menyajikan narasi tentang bagaimana Dieng terbentuk secara geologis jutaan tahun lalu.'
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Arsitektur Unik dengan Pengaruh India',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap yang unik, menyerupai gaya arsitektur India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Candi Bima memiliki bentuk yang berbeda dari candi-candi lain di kompleks Dieng. Arsitekturnya menunjukkan pengaruh kuat dari gaya Shikara (India Utara), menjadikannya objek studi arkeologi yang sangat menarik.'
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
    content: 'Mie Ongklok adalah kuliner wajib saat berkunjung ke Wonosobo. Keunikannya terletak pada kuah kental berwarna cokelat yang disebut "lo".'
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Buah Eksotis dari Pegunungan Dieng',
    excerpt: 'Buah khas yang hanya tumbuh di dataran tinggi tertentu, diolah menjadi manisan segar yang ikonik.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Carica adalah kerabat dekat pepaya namun dengan ukuran yang jauh lebih kecil dan hanya bisa tumbuh optimal di ketinggian di atas 1.500 mdpl.'
  },
  {
    slug: 'tempe-kemul-panas',
    title: 'Tempe Kemul: Camilan Renyah Pendamping Udara Dingin',
    excerpt: 'Tempe goreng tepung lebar dengan kunyit dan daun kucai yang melimpah, disajikan panas.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tempe Kemul adalah camilan ikonik Wonosobo. "Kemul" berarti selimut, merujuk pada lapisan tepung tebal yang membungkus tempe. Rasanya gurih dengan aroma kucai yang khas.'
  },
  {
    slug: 'purwaceng-dieng-herbal',
    title: 'Purwaceng: Ginseng Alami dari Dataran Tinggi',
    excerpt: 'Minuman herbal legendaris yang hanya tumbuh di Dieng, dikenal berkhasiat untuk stamina.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Purwaceng adalah tanaman herbal endemik Dieng. Akarnya diolah menjadi bubuk minuman yang biasanya diseduh dengan susu atau kopi. Sangat cocok dinikmati untuk menghangatkan tubuh di tengah dinginnya Dieng.'
  },

  // --- STORIES: TIPS & PANDUAN (15) ---
  {
    slug: 'panduan-mendaki-gunung-prau-pemula',
    title: 'Panduan Lengkap Mendaki Gunung Prau untuk Pemula',
    excerpt: 'Segala hal yang perlu Anda ketahui sebelum menaklukkan puncak 2.565 mdpl, dari rute hingga etika.',
    category: 'Tips',
    type: 'story',
    date: '10 June 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunung Prau adalah salah satu gunung favorit di Indonesia. Persiapan fisik adalah kunci. Lakukan latihan kardio ringan minimal dua minggu sebelum mendaki. Pilih rute sesuai kemampuan, seperti Patak Banteng yang cepat atau Dieng yang landai...'
  },
  {
    slug: 'tips-menghadapi-cuaca-dingin-dieng',
    title: 'Rahasia Bertahan di Cuaca Ekstrem: Panduan Berpakaian di Dieng',
    excerpt: 'Tips profesional tentang teknik layering dan perlengkapan wajib untuk menghadapi suhu titik beku.',
    category: 'Tips',
    type: 'story',
    date: '12 June 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Menghadapi suhu ekstrem di Dieng membutuhkan strategi layering. Layer 1: Base Layer penyerap keringat. Layer 2: Insulating Layer penahan panas tubuh. Layer 3: Outer Layer pelindung angin dan air...'
  },
  {
    slug: 'panduan-memilih-penginapan-wonosobo',
    title: 'Homestay vs Hotel: Panduan Memilih Penginapan Terbaik',
    excerpt: 'Analisis perbandingan antara menginap di pemukiman warga Dieng atau di kenyamanan hotel kota.',
    category: 'Tips',
    type: 'story',
    date: '05 July 2025',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Memilih tempat menginap adalah keputusan krusial. Homestay memberikan pengalaman budaya yang kaya, sementara hotel menawarkan fasilitas modern dan stabil...'
  },
  {
    slug: 'manajemen-kesehatan-di-ketinggian',
    title: 'Manajemen Kesehatan: Mencegah Altitude Sickness di Dieng',
    excerpt: 'Panduan medis praktis untuk beradaptasi dengan kadar oksigen rendah di dataran tinggi.',
    category: 'Tips',
    type: 'story',
    date: '15 July 2025',
    image: 'https://images.unsplash.com/photo-1491553141410-0925e011406e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Altitude Sickness sering menyerang wisatawan. Aklimatisasi bertahap, hidrasi yang cukup, dan konsumsi karbohidrat adalah langkah pencegahan utama...'
  },
  {
    slug: 'videografi-travel-dieng-kreator',
    title: 'Teknik Videografi Travel: Menangkap Magis Dieng',
    excerpt: 'Panduan teknis bagi konten kreator untuk menghasilkan video sinematik di medan berkabut.',
    category: 'Tips',
    type: 'story',
    date: '20 July 2025',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Golden Hour di Dieng sangat singkat. Gunakan filter ND, manfaatkan kabut untuk kedalaman frame, dan simpan baterai di tempat hangat agar tidak cepat habis...'
  },
  {
    slug: 'panduan-dieng-culture-festival',
    title: 'Panduan Strategis Menghadiri Dieng Culture Festival',
    excerpt: 'Semua rahasia untuk menikmati festival budaya terbesar tanpa terjebak kerumunan yang melelahkan.',
    category: 'Tips',
    type: 'story',
    date: '25 July 2025',
    image: 'https://images.unsplash.com/photo-1514525253361-b83a85f0d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pesan tiket jauh hari, bawa jaket ekstra untuk Jazz Atas Awan, dan gunakan ojek lokal untuk menembus kemacetan selama festival berlangsung...'
  },
  {
    slug: 'wisata-berkelanjutan-eco-tourism-dieng',
    title: 'Prinsip Wisata Berkelanjutan di Negeri di Atas Awan',
    excerpt: 'Bagaimana menjadi wisatawan yang bertanggung jawab dan menjaga kelestarian ekosistem Dieng.',
    category: 'Tips',
    type: 'story',
    date: '30 July 2025',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kurangi plastik sekali pakai, tetaplah di jalur trekking resmi, dan dukung ekonomi lokal dengan membeli produk langsung dari pengrajin...'
  },
  {
    slug: 'itinerary-3-hari-2-malam-wonosobo',
    title: 'Itinerary Sempurna 3 Hari 2 Malam di Wonosobo & Dieng',
    excerpt: 'Rencana perjalanan yang seimbang antara petualangan alam dan eksplorasi budaya tanpa terburu-buru.',
    category: 'Tips',
    type: 'story',
    date: '05 Aug 2025',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Hari 1: Wonosobo City Tour. Hari 2: Sikunir Sunrise & Dieng Plateau. Hari 3: Kebun Teh & Oleh-oleh. Rencana ini memastikan Anda tidak terlalu lelah...'
  },
  {
    slug: 'tips-solo-traveler-wanita-di-wonosobo',
    title: 'Aman & Nyaman: Tips Solo Traveling Wanita ke Dieng',
    excerpt: 'Panduan khusus bagi wanita yang ingin menjelajahi Wonosobo secara mandiri dengan aman.',
    category: 'Tips',
    type: 'story',
    date: '10 Aug 2025',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Wonosobo sangat aman bagi wanita. Beritahu pihak homestay jam kedatangan Anda, berpakaian sopan di situs budaya, dan simpan kontak darurat lokal...'
  },
  {
    slug: 'fotografi-ponsel-landscape-dieng',
    title: 'Karya Pro dengan Ponsel: Tips Fotografi Lanskap Dieng',
    excerpt: 'Memaksimalkan kamera smartphone Anda untuk memotret keindahan alam pegunungan.',
    category: 'Tips',
    type: 'story',
    date: '15 Aug 2025',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunakan mode HDR untuk kontras tinggi, aktifkan grid lines untuk komposisi seimbang, dan edit dengan aplikasi profesional untuk hasil sinematik...'
  },
  {
    slug: 'tips-wisata-keluarga-anak-dieng',
    title: 'Wisata Keluarga: Tips Membawa Anak Kecil ke Dieng',
    excerpt: 'Menjaga kenyamanan dan keceriaan buah hati di tengah udara dingin dan perjalanan jauh.',
    category: 'Tips',
    type: 'story',
    date: '20 Aug 2025',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea244b05fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pastikan anak-anak memakai pakaian hangat berlapis, bawa camilan hangat, dan pilih destinasi yang aman dengan area jalan yang luas seperti Candi Arjuna...'
  },
  {
    slug: 'manajemen-anggaran-wisata-murah-dieng',
    title: 'Wisata Hemat: Manajemen Anggaran ke Wonosobo untuk Mahasiswa',
    excerpt: 'Cara pintar menjelajahi keindahan Dieng dengan budget minimalis namun tetap berkesan.',
    category: 'Tips',
    type: 'story',
    date: '25 Aug 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c89eec283b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunakan bus mikro umum, carilah warung makan pinggir jalan yang menyajikan nasi megono, dan gunakan tiket terpadu untuk masuk ke objek wisata...'
  },
  {
    slug: 'etika-terbang-drone-di-area-wisata',
    title: 'Etika Terbangkan Drone di Area Wisata Dieng',
    excerpt: 'Panduan bagi pilot drone untuk terbang aman dan menghormati privasi serta situs budaya.',
    category: 'Tips',
    type: 'story',
    date: '30 Aug 2025',
    image: 'https://images.unsplash.com/photo-1473960103865-8673b5359300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Jangan terbang terlalu rendah di area candi karena nilai sakralnya, waspadai angin pegunungan yang berubah, dan hargai privasi pemukiman warga...'
  },
  {
    slug: 'persiapan-kendaraan-jalur-ekstrem-dieng',
    title: 'Persiapan Kendaraan: Menghadapi Jalur Ekstrem Dieng',
    excerpt: 'Checklist teknis bagi Anda yang membawa kendaraan pribadi ke medan menanjak dan berkabut.',
    category: 'Tips',
    type: 'story',
    date: '05 Sep 2025',
    image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pastikan kampas rem tebal untuk menghadapi turunan panjang, cek sistem pendingin mesin, dan pastikan lampu kabut berfungsi maksimal...'
  },
  {
    slug: 'tips-belanja-oleh-oleh-wonosobo',
    title: 'Tips Cerdas Belanja Oleh-Oleh Khas Wonosobo',
    excerpt: 'Cara memilih produk berkualitas, mulai dari Carica hingga Keripik Jamur, dengan harga terbaik.',
    category: 'Tips',
    type: 'story',
    date: '10 Sep 2025',
    image: 'https://images.unsplash.com/photo-1534452285072-c51ef115a1b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Belilah langsung dari produsen di daerah Dieng untuk harga lebih murah, cek tanggal kadaluarsa manisan, dan coba variasi seperti Kopi Arabika Dieng...'
  },

  // --- STORIES: SEJARAH (10) ---
  {
    slug: 'gedung-papak-landmark-sejarah',
    title: 'Gedung Papak: Saksi Bisu Arsitektur Kolonial Wonosobo',
    excerpt: 'Menelusuri sejarah gedung ikonik beratap datar yang menjadi pusat pemerintahan sejak era Belanda.',
    category: 'Sejarah',
    type: 'story',
    date: '01 Mar 2025',
    image: 'https://images.unsplash.com/photo-1577493321623-e180026e6802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gedung Papak berdiri megah di jantung kota Wonosobo. Dibangun pada masa kolonial Belanda sebagai kediaman resmi pejabat tinggi, arsitekturnya yang bergaya Indische Empire menunjukkan perpaduan Eropa dan adaptasi iklim lokal...'
  },
  {
    slug: 'jejak-kereta-api-wonosobo-hilang',
    title: 'Misteri Jalur Kereta Api Wonosobo yang Hilang',
    excerpt: 'Menelusuri sejarah jalur rel yang pernah menghubungkan Wonosobo dengan dunia luar.',
    category: 'Sejarah',
    type: 'story',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dahulu Wonosobo memiliki akses kereta api yang menghubungkannya dengan Purwokerto. Jalur ini dibangun untuk mengangkut hasil perkebunan, namun dinonaktifkan pada tahun 1970-an...'
  },
  {
    slug: 'asal-usul-nama-wonosobo',
    title: 'Etimologi dan Legenda: Dari Mana Nama Wonosobo Berasal?',
    excerpt: 'Membedah arti kata Wono dan Sobo melalui catatan sejarah dan cerita rakyat lokal.',
    category: 'Sejarah',
    type: 'story',
    date: '15 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Wana berarti hutan dan Saba berarti berkumpul. Wonosobo secara harfiah adalah hutan tempat berkumpul. Legenda menyebutkan tiga tokoh suci yang mendirikan kota ini...'
  },
  {
    slug: 'peran-wonosobo-perang-diponegoro',
    title: 'Peran Wonosobo dalam Perang Diponegoro (1825-1830)',
    excerpt: 'Bagaimana wilayah pegunungan ini menjadi basis pertahanan dan logistik pasukan Pangeran Diponegoro.',
    category: 'Sejarah',
    type: 'story',
    date: '20 Mar 2025',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Wilayah pegunungan Wonosobo menjadi basis pertahanan gerilya yang ideal bagi pasukan Diponegoro. Tokoh lokal Kiai Muhammad Ngandiman memimpin perlawanan di wilayah ini...'
  },
  {
    slug: 'evolusi-pertanian-tembakau-wonosobo',
    title: 'Emas Hijau: Evolusi Pertanian Tembakau Sejak Era Kolonial',
    excerpt: 'Sejarah panjang tanaman tembakau yang menjadi tulang punggung ekonomi rakyat selama berabad-abad.',
    category: 'Sejarah',
    type: 'story',
    date: '25 Mar 2025',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tanah vulkanik Sindoro-Sumbing menghasilkan tembakau berkualitas tinggi yang dicari pasar internasional. Tradisi menjemur tembakau tetap eksis hingga sekarang...'
  },
  {
    slug: 'bangunan-heritage-pecinan-wonosobo',
    title: 'Harmoni di Pecinan: Sejarah Kawasan Perdagangan Wonosobo',
    excerpt: 'Menjelajahi arsitektur dan sejarah sosial kawasan Pecinan yang dinamis.',
    category: 'Sejarah',
    type: 'story',
    date: '30 Mar 2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kawasan Pecinan mencerminkan asimilasi budaya yang damai. Ruko gaya peranakan dan kelenteng tua menjadi simbol kerukunan antar etnis selama berabad-abad...'
  },
  {
    slug: 'sejarah-perkembangan-pariwisata-dieng',
    title: 'Dari Tempat Suci ke Destinasi Global: Sejarah Wisata Dieng',
    excerpt: 'Bagaimana Dataran Tinggi Dieng bertransformasi dari pusat ritual menjadi ikon wisata.',
    category: 'Sejarah',
    type: 'story',
    date: '05 Apr 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dahulu pusat ritual Mataram Kuno, Dieng ditemukan kembali oleh tentara Inggris di bawah Raffles. Pembangunan jalan tahun 1970-an membuka pintu bagi turisme massal...'
  },
  {
    slug: 'jejak-pemerintahan-belanda-di-garung',
    title: 'Garung: Pusat Logistik dan Transportasi Masa Lalu',
    excerpt: 'Sejarah kecamatan Garung sebagai titik transit krusial menuju Dataran Tinggi Dieng.',
    category: 'Sejarah',
    type: 'story',
    date: '10 Apr 2025',
    image: 'https://images.unsplash.com/photo-1577493321623-e180026e6802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Garung adalah pos pergantian kuda bagi kereta yang hendak naik ke Dieng di masa kolonial. Beberapa sisa bangunan bergaya Eropa masih bisa ditemui di kecamatan ini...'
  },
  {
    slug: 'biografi-singkat-tokoh-pendiri-wonosobo',
    title: 'Tokoh di Balik Kota: Biografi Pendiri Wonosobo',
    excerpt: 'Mengenal sosok Kiai Kolodete, Kiai Walik, dan Kiai Karim yang meletakkan pondasi kota.',
    category: 'Sejarah',
    type: 'story',
    date: '15 Apr 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kiai Walik meletakkan dasar kemasyarakatan di pusat kota, sementara Kiai Kolodete membawa nilai spiritualitas di Dieng. Ketiganya adalah pilar identitas Wonosobo...'
  },
  {
    slug: 'peristiwa-penyerangan-pos-belanda-wonosobo',
    title: 'Malam Berdarah: Peristiwa Penyerangan Pos Belanda di Wonosobo',
    excerpt: 'Kisah heroik para pejuang lokal dalam upaya merebut kemerdekaan penuh di tingkat daerah.',
    category: 'Sejarah',
    type: 'story',
    date: '20 Apr 2025',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pejuang lokal melancarkan serangan nekat terhadap markas Belanda. Meskipun kalah secara militer, semangat ini memaksa Belanda untuk tetap waspada di Wonosobo...'
  },

  // --- STORIES: SOSIAL (10) ---
  {
    slug: 'nyengkuyung-desa-wonosobo',
    title: 'Nyengkuyung: Semangat Gotong Royong Masyarakat Desa',
    excerpt: 'Memahami nilai solidaritas tanpa batas yang masih kental dalam kehidupan sosial di lereng gunung.',
    category: 'Sosial',
    type: 'story',
    date: '28 Mar 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Nyengkuyung berarti memberikan dukungan penuh secara fisik dan mental kepada sesama. Ini terlihat jelas dalam adat membangun rumah atau hajatan warga...'
  },
  {
    slug: 'kehidupan-petani-sayur-dieng-seharian',
    title: 'Sehari Bersama Petani Sayur Dieng: Kerja Keras di Balik Kesegaran',
    excerpt: 'Melihat lebih dekat rutinitas harian para pahlawan pangan di atas ketinggian 2000 meter.',
    category: 'Sosial',
    type: 'story',
    date: '05 Apr 2025',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Petani Dieng berangkat ke ladang sebelum matahari terbit di tengah kabut beku. Keuletan mereka menghadapi embun upas adalah bukti ketabahan masyarakat lokal...'
  },
  {
    slug: 'tradisi-anak-rambut-gimbal-dieng',
    title: 'Anak Rambut Gimbal: Antara Mitos dan Realitas Sosial',
    excerpt: 'Membedah fenomena unik anak-anak berambut gimbal dan bagaimana masyarakat memperlakukannya secara sakral.',
    category: 'Sosial',
    type: 'story',
    date: '10 Apr 2025',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Anak berambut gimbal diyakini sebagai titipan gaib. Permintaan mereka harus dituruti sebelum upacara ruwatan pemotongan rambut yang sakral dan meriah...'
  },
  {
    slug: 'harmoni-beragama-di-lereng-sumbing',
    title: 'Toleransi dari Kaki Gunung: Harmoni Beragama di Lereng Sumbing',
    excerpt: 'Potret damai kehidupan masyarakat yang berbeda keyakinan namun bersatu dalam adat.',
    category: 'Sosial',
    type: 'story',
    date: '15 Apr 2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Masjid dan Gereja berdiri berdampingan di lereng Sumbing. Warga bersatu dalam adat bersih desa tanpa memandang perbedaan keyakinan formal mereka...'
  },
  {
    slug: 'ekonomi-kreatif-kerajinan-batik-wonosobo',
    title: 'Batik Wonosobo: Geliat Ekonomi Kreatif yang Mengakar',
    excerpt: 'Bagaimana motif batik khas Wonosobo menjadi simbol identitas dan sumber pendapatan warga.',
    category: 'Sosial',
    type: 'story',
    date: '20 Apr 2025',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Motif batik Wonosobo terinspirasi dari Carica dan Candi. Pemberdayaan perempuan melalui batik meningkatkan kemandirian ekonomi keluarga di pedesaan...'
  },
  {
    slug: 'peran-pasar-tradisional-pusat-sosial',
    title: 'Pasar Tradisional: Jantung Interaksi Sosial Masyarakat',
    excerpt: 'Pasar bukan sekadar tempat jual beli, melainkan panggung pertukaran informasi dan ikatan emosional.',
    category: 'Sosial',
    type: 'story',
    date: '25 Apr 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pasar Induk adalah tempat bertemunya warga dari seluruh pelosok. Di sini transaksi ekonomi berpadu dengan tegur sapa hangat dan pertukaran berita harian...'
  },
  {
    slug: 'dinamika-pemuda-desa-wisata',
    title: 'Pemuda Desa: Motor Penggerak Wisata dan Pelestari Alam',
    excerpt: 'Transformasi peran pemuda dari mencari kerja di kota menjadi inovator di desa sendiri.',
    category: 'Sosial',
    type: 'story',
    date: '30 Apr 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Banyak pemuda kini memilih membangun desa daripada merantau. Mereka menjadi pengelola desa wisata, pemandu profesional, dan aktif menjaga kelestarian hutan...'
  },
  {
    slug: 'budaya-warung-kopi-wonosobo',
    title: 'Ngopi: Budaya Diskusi dan Relaksasi di Warung Pinggir Jalan',
    excerpt: 'Menelisik bagaimana warung kopi sederhana menjadi tempat lahirnya gagasan dan persaudaraan.',
    category: 'Sosial',
    type: 'story',
    date: '05 May 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Ngopi di warung bambu adalah momen diskursus publik. Pejabat dan petani bisa duduk satu meja membahas harga pupuk hingga isu politik nasional secara cair...'
  },
  {
    slug: 'pendidikan-alternatif-pesantren-kalibeber',
    title: 'Kalibeber: Sejarah Desa Pendidikan dan Pusat Intelektual Islam',
    excerpt: 'Menilik dampak sosial kehadiran institusi pendidikan terhadap perkembangan karakter warga.',
    category: 'Sosial',
    type: 'story',
    date: '10 May 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pondok pesantren besar di Kalibeber telah mengubah struktur sosial wilayah ini menjadi lebih religius, intelektual, dan terbuka bagi pendatang dari luar daerah...'
  },
  {
    slug: 'perayaan-hari-jadi-wonosobo-pesta-rakyat',
    title: 'Pesta Rakyat: Kemeriahan dan Makna Perayaan Hari Jadi Kota',
    excerpt: 'Bagaimana ritual tahunan ini memperkuat rasa memiliki dan kebanggaan warga terhadap daerahnya.',
    category: 'Sosial',
    type: 'story',
    date: '24 July 2025',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kirab budaya dan pengambilan air suci adalah bagian dari pesta rakyat tahunan yang mempererat ikatan antar warga dan merayakan identitas kolektif Wonosobo...'
  },

  // --- STORIES: GEOGRAFIS (10) ---
  {
    slug: 'fenomena-embun-upas-dieng',
    title: 'Embun Upas: Rahasia Musim Dingin Tropis di Dieng',
    excerpt: 'Penjelasan meteorologis tentang fenomena embun beku yang mengubah Dieng menjadi Eropa sesaat.',
    category: 'Geografis',
    type: 'story',
    date: '15 May 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Antara Juli-Agustus, Dieng mengalami embun beku akibat radiasi panas bumi yang terlepas cepat di malam hari. Ini mengubah lanskap menjadi padang es putih...'
  },
  {
    slug: 'geologi-gunung-api-dieng',
    title: 'Dapur Magma: Mengenal Kompleks Geologi Gunung Api Dieng',
    excerpt: 'Menelusuri sejarah letusan purba yang membentuk lanskap Dieng saat ini.',
    category: 'Geografis',
    type: 'story',
    date: '20 May 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dieng adalah kaldera raksasa dari gunung purba yang runtuh. Aktivitas vulkanik masih dinamis di kawah-kawah aktif, menciptakan kesuburan tanah luar biasa...'
  },
  {
    slug: 'bentang-alam-lembah-serayu',
    title: 'Lembah Serayu: Nafas Hidup dari Dataran Tinggi',
    excerpt: 'Peran strategis Sungai Serayu dalam membentuk geomorfologi dan kehidupan di Wonosobo.',
    category: 'Geografis',
    type: 'story',
    date: '25 May 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Sungai Serayu berhulu di Dieng dan mengairi lembah subur di Wonosobo. Lembah ini menjadi urat nadi pertanian dan sejarah migrasi manusia sejak zaman kuno...'
  },
  {
    slug: 'dua-raksasa-sindoro-sumbing',
    title: 'Sindoro & Sumbing: Duo Raksasa yang Menjaga Wonosobo',
    excerpt: 'Profil geografis dua gunung kembar yang mendominasi cakrawala kota.',
    category: 'Geografis',
    type: 'story',
    date: '30 May 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dua gunung kembar aktif ini mendominasi lanskap Wonosobo. Keduanya menciptakan iklim mikro yang sejuk dan menyuburkan lahan dengan abu vulkanik produktif...'
  },
  {
    slug: 'misteri-telaga-menjer-danau-bendungan-alami',
    title: 'Telaga Menjer: Danau di Kaki Gunung yang Menenangkan',
    excerpt: 'Asal usul terbentuknya telaga terluas di kaki pegunungan Dieng.',
    category: 'Geografis',
    type: 'story',
    date: '05 June 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Terbentuk akibat letusan Gunung Pakuwaja, Telaga Menjer kini berfungsi sebagai penampung air alami sekaligus sumber energi bagi PLTA Garung...'
  },
  {
    slug: 'keajaiban-geografis-batu-ratapan-angin',
    title: 'Batu Ratapan Angin: Membaca Lanskap dari Ketinggian',
    excerpt: 'Titik pandang terbaik untuk memahami formasi telaga kembar Dieng.',
    category: 'Geografis',
    type: 'story',
    date: '10 June 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dari formasi batu andesit ini, gradasi warna Telaga Warna terlihat jelas berbanding dengan Telaga Pengilon yang jernih akibat sekat geologis alami...'
  },
  {
    slug: 'hutan-lindung-dan-keanekaragaman-hayati',
    title: 'Paru-paru Jawa: Hutan Lindung Wonosobo yang Terancam',
    excerpt: 'Pentingnya menjaga tutupan hutan di lereng gunung untuk mencegah bencana ekologis.',
    category: 'Geografis',
    type: 'story',
    date: '15 June 2025',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Hutan lereng Prau adalah habitat Elang Jawa. Fungsinya sebagai penyerap air hujan krusial untuk mencegah banjir bandang di wilayah hilir Jawa Tengah...'
  },
  {
    slug: 'formasi-awan-dan-mikroklimat-wonosobo',
    title: 'Negeri di Atas Awan: Dinamika Awan dan Kabut Wonosobo',
    excerpt: 'Mengapa kabut dan awan menjadi elemen permanen dalam lanskap harian Wonosobo.',
    category: 'Geografis',
    type: 'story',
    date: '20 June 2025',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kabut orografis adalah elemen permanen di Wonosobo karena letak geografisnya di cekungan tinggi, mempengaruhi gaya hidup dan jenis pertanian lokal...'
  },
  {
    slug: 'kekayaan-mineral-dan-potensi-geotermal',
    title: 'Energi dari Dalam: Potensi Panas Bumi (Geotermal) Dieng',
    excerpt: 'Bagaimana panas bumi Dieng dikelola sebagai sumber energi terbarukan masa depan.',
    category: 'Geografis',
    type: 'story',
    date: '25 June 2025',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dieng menyimpan cadangan panas bumi masif. Pengelolaan PLTP di sini menunjukkan potensi energi terbarukan yang besar dari bawah tanah pegunungan...'
  },
  {
    slug: 'perubahan-lanskap-akibat-antropogenik',
    title: 'Wajah Wonosobo yang Berubah: Dampak Aktivitas Manusia terhadap Lanskap',
    excerpt: 'Menganalisis bagaimana pembangunan dan pertanian mengubah topografi daerah selama 50 tahun terakhir.',
    category: 'Geografis',
    type: 'story',
    date: '30 June 2025',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Ekspansi pertanian kentang mengubah lereng hutan menjadi terasering vertikal, meningkatkan risiko erosi dan mengubah profil hidrologis daerah...'
  }
];
