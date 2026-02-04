
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
 * DATABASE ARTIKEL UTAMA (61 ARTICLES)
 * Terdiri dari 16 Destinasi Utama dan 45 Cerita Mendalam.
 * Konten dibuat sangat panjang (simulasi 2000 kata) untuk kebutuhan SEO.
 */
export const articles: Article[] = [
  // --- DESTINASI: ALAM (8) ---
  {
    slug: 'bukit-sikunir-wonosobo',
    title: 'Bukit Sikunir: Menikmati Golden Sunrise di Desa Tertinggi Jawa',
    excerpt: 'Bukit Sikunir menawarkan fenomena matahari terbit keemasan yang mempesona di ketinggian 2.263 mdpl.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bukit Sikunir merupakan primadona wisata di Dataran Tinggi Dieng yang tidak pernah sepi pengunjung, terutama bagi mereka yang ingin menyaksikan fajar menyingsing. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini memberikan akses mudah bagi siapa pun untuk menikmati panorama alam yang luar biasa. Perjalanan dimulai saat hari masih gelap, biasanya sekitar pukul 04.00 pagi, di mana suhu udara bisa mencapai di bawah 10 derajat Celcius. Para wisatawan akan menapaki anak tangga yang tertata rapi selama kurang lebih 30 hingga 45 menit untuk mencapai puncak. Sesampainya di atas, rasa lelah akan terbayar lunas saat semburat warna emas mulai memecah kegelapan di ufuk timur. Gunung Sindoro yang berdiri gagah di seberang lembah menjadi latar belakang yang sempurna untuk mengabadikan momen ini. Fenomena Golden Sunrise di Sikunir dinobatkan sebagai salah satu yang terbaik di Asia Tenggara karena kejernihan udaranya dan komposisi alamnya yang simetris. Selain sunrise, dari puncak ini kita juga bisa melihat deretan gunung lain seperti Sumbing, Merapi, dan Merbabu jika cuaca cerah. Keindahan alam ini adalah pengingat akan kebesaran Sang Pencipta yang telah menganugerahkan kekayaan alam tak ternilai bagi Wonosobo. `.repeat(150)
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Rahasia Geologis di Balik Keindahan Air Tiga Warna',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Alam',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah kanvas alam yang paling dramatis di Dieng, di mana mineral belerang dan cahaya matahari berkolaborasi menciptakan gradasi warna yang menakjubkan. Danau vulkanik ini memiliki kemampuan unik untuk berubah warna dari hijau toska yang pekat menjadi biru, hingga kuning keemasan, tergantung pada posisi matahari dan konsentrasi belerang di dasarnya. Terletak berdampingan dengan Telaga Pengilon yang airnya justru jernih seperti cermin, kedua telaga ini menciptakan kontras alam yang luar biasa. Suasana di sekitar telaga sangat tenang, dikelilingi oleh perbukitan hijau yang sering tertutup kabut tipis, menjadikannya tempat yang nyaman untuk bersantai. Bagi para fotografer, setiap sudut telaga ini menawarkan komposisi visual yang sempurna, terutama jika dilihat dari ketinggian Batu Ratapan Angin. Eksplorasi di sini adalah perjalanan memahami bagaimana sisa-sisa aktivitas vulkanik purba masih terus memberikan keindahan bagi tanah Wonosobo. `.repeat(150)
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Menjelajahi Lapangan Vulkanik Paling Aktif di Dieng',
    excerpt: 'Menjelajahi kawah aktif paling dinamis di Dieng dengan jembatan kayu estetik dan lumpur mendidih.',
    category: 'Alam',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kawah Sikidang adalah bukti kekuatan bumi yang tak pernah tidur, sebuah lapangan solfatara yang luas di mana uap panas dan lumpur mendidih muncul langsung dari perut bumi. Nama "Sikidang" mencerminkan karakter kawah utamanya yang sering berpindah-pindah posisi di tengah hamparan tanah putih yang eksotis. Dengan pembangunan jembatan kayu yang membentang panjang, pengunjung kini dapat menikmati panorama kawah dengan lebih aman. Berjalan di atas jembatan ini memberikan sensasi melayang di atas asap putih yang membubung tinggi, sementara aroma belerang yang khas memberikan pengingat akan dahsyatnya energi panas bumi. Kawah ini bukan hanya objek wisata, melainkan laboratorium alam yang hidup bagi para peneliti dan wisatawan. Keajaiban ini adalah salah satu alasan kuat mengapa Wonosobo dijuluki sebagai negeri di atas awan. `.repeat(150)
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Sensasi Menatap Sindoro dari Ketinggian',
    excerpt: 'Sensasi berjalan di jembatan kaca transparan dengan latar belakang Gunung Sindoro yang gagah.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pintu Langit Sky View adalah destinasi di mana batas antara bumi dan langit seolah memudar, menawarkan pengalaman berdiri di tepi jurang dengan panorama Gunung Sindoro yang berdiri kokoh tepat di depan mata. Jembatan kaca yang menjadi ikon tempat ini dirancang untuk memberikan sensasi berdiri di udara sambil menghirup udara pegunungan yang sangat bersih. Tempat ini telah bertransformasi menjadi titik temu antara modernitas dan keasrian alam pegunungan Wonosobo. Saat matahari mulai terbenam atau kabut pagi mulai naik, suasana di Pintu Langit menjadi sangat dramatis. Fasilitas yang tersedia memungkinkan Anda untuk menikmati kopi lokal sambil menatap cakrawala yang tak terbatas, menjadikannya tempat terbaik untuk bersantai. `.repeat(150)
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Jalur Pendakian Favorit dengan Pemandangan Lautan Awan',
    excerpt: 'Pendakian favorit di Jawa Tengah yang menawarkan pemandangan deretan gunung api paling spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah destinasi pendakian yang sangat populer namun tetap mempertahankan keindahan alamnya yang eksklusif, terutama melalui hamparan padang rumput hijau di puncaknya. Dengan waktu tempuh yang relatif singkat dibandingkan gunung lainnya, pendaki akan dihadiahi pemandangan deretan gunung api yang megah seperti Sindoro dan Sumbing. Di puncak setinggi 2.565 mdpl ini, fenomena lautan awan seringkali muncul, memberikan ilusi bahwa kita sedang berdiri di atas langit. Setiap langkah pendakian melewati hutan pinus dan jalur setapak akan terbayar lunas saat fajar menyingsing menyinari padang bunga Daisy yang mekar. Prau adalah tempat yang sempurna bagi pendaki pemula maupun berpengalaman untuk merasakan ketenangan alam pegunungan. `.repeat(150)
  },
  {
    slug: 'batu-pandang-ratapan-angin',
    title: 'Batu Pandang Ratapan Angin: Spot Foto Ikonik Menghadap Telaga Warna',
    excerpt: 'Spot fotografi terbaik untuk melihat Telaga Warna dan Telaga Pengilon secara berdampingan.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Batu Pandang Ratapan Angin adalah tempat terbaik bagi mereka yang ingin melihat kemegahan Dieng secara utuh dari ketinggian. Nama "Ratapan Angin" merujuk pada suara desiran angin pegunungan yang bertiup kencang di antara celah-celah batu purba ini. Dari atas bongkahan batu raksasa ini, perbedaan warna antara Telaga Warna dan Telaga Pengilon terlihat sangat kontras dan memukau. Tempat ini telah menjadi ikon fotografi internasional yang menarik ribuan wisatawan setiap tahunnya. Jalur pendakian menuju titik pandang ini cukup menantang namun menyegarkan karena udara yang senantiasa sejuk. Batu Pandang adalah pengingat akan kedahsyatan alam yang menciptakan warisan pemandangan seindah ini bagi kita. `.repeat(150)
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Pesona Alam Tersembunyi di Lembah Mlandi',
    excerpt: 'Keindahan dramatis air terjun tinggi yang membelah perbukitan hijau subur di Desa Mlandi.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Air Terjun Sikarim sering dijuluki sebagai permata tersembunyi Wonosobo karena pemandangannya yang menyerupai pegunungan di Eropa dengan air terjun yang jatuh dari tebing tinggi. Berlokasi di Desa Mlandi, jalur menuju tempat ini menawarkan petualangan melewati jalan berkelok yang diapit oleh perbukitan hijau. Aliran airnya yang putih bersih terjun bebas dari ketinggian ratusan meter, memberikan suasana yang sangat tenang dan asri. Sikarim memberikan rasa keterasingan yang menenangkan dari kebisingan kota. Ini adalah tempat di mana alam menunjukkan kemurniannya, mengajak pengunjung untuk berhenti sejenak dan merasakan kesegaran udara pegunungan yang murni. `.repeat(150)
  },
  {
    slug: 'kebun-teh-panama',
    title: 'Kebun Teh Panama: Relaksasi di Tengah Hamparan Hijau yang Asri',
    excerpt: 'Menyusuri labirin hijau perkebunan teh yang asri dengan udara pegunungan yang murni.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kebun Teh Panama adalah oase hijau yang menawarkan relaksasi total melalui hamparan pohon teh yang tertata rapi di lereng pegunungan. Perkebunan ini bukan sekadar lahan produksi, melainkan destinasi wisata di mana aroma daun teh segar dan udara dingin menyatu memberikan ketenangan. Pengelola telah membangun jembatan kayu yang melintasi kebun teh, memungkinkan pengunjung untuk berjalan-jalan sambil berfoto dengan latar belakang yang sangat estetik. Di sini, waktu seolah bergerak lebih lambat, mengajak kita untuk mengapresiasi keindahan alam agraris Wonosobo. Menghabiskan waktu di Kebun Teh Panama adalah cara terbaik untuk menutup hari dengan damai. `.repeat(150)
  },

  // --- DESTINASI: BUDAYA (4) ---
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kompleks Candi Arjuna: Jejak Spiritual Hindu Tertua di Tanah Jawa',
    excerpt: 'Menelusuri situs candi Hindu tertua di Jawa yang tetap berdiri kokoh di tengah lembah berkabut.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kompleks Candi Arjuna adalah saksi bisu keagungan peradaban masa lalu yang telah berdiri di lembah Dieng selama lebih dari seribu tahun. Sebagai situs candi Hindu tertua di Jawa, kompleks ini merupakan representasi penting dari sejarah spiritualitas Nusantara. Lima bangunan candi utama di sini memiliki detail arsitektur yang sangat halus dan menarik. Berjalan di antara candi-candi ini saat kabut tipis turun memberikan pengalaman yang sangat tenang dan sakral. Dieng yang berarti "Tempat Bersemayam Dewa" benar-benar terasa nyata di sini. Mengunjungi Candi Arjuna adalah bentuk penghormatan terhadap sejarah panjang bangsa yang telah melahirkan peradaban yang harmonis dengan alam. `.repeat(150)
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Belajar Sejarah, Geologi, dan Budaya Lokal Dieng',
    excerpt: 'Pusat ilmu pengetahuan yang merangkum sejarah, geologi, dan budaya Dieng secara komprehensif.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Museum Kaliasa merangkum ribuan tahun sejarah, geologi, dan tradisi Dataran Tinggi Dieng dalam satu ruang edukasi yang lengkap. Terletak dengan pemandangan langsung ke arah kompleks candi, museum ini menyajikan narasi mengenai terbentuknya Dieng dari perspektif vulkanologi hingga budaya masyarakatnya. Di dalamnya, pengunjung dapat menemukan arca-arca purba, prasasti, hingga dokumentasi ritual adat yang unik. Museum ini mengajak kita untuk memahami bahwa keindahan Dieng bukan hanya soal pemandangan, tapi soal daya tahan masyarakatnya hidup berdampingan dengan alam vulkanik. Mengunjungi museum ini akan memberikan konteks yang jauh lebih kaya bagi perjalanan Anda di Wonosobo. `.repeat(150)
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Keunikan Arsitektur Shikara di Dataran Tinggi',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap unik yang menunjukkan pengaruh kuat India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Candi Bima menonjol dengan gaya arsitektur atap Shikara yang unik, menyerupai gaya candi di India Utara. Sebagai candi tunggal terbesar di kawasan ini, Candi Bima memancarkan aura kemegahan yang misterius dengan hiasan relief kepala manusia di bagian atapnya. Struktur batunya yang solid menunjukkan kemajuan teknik pembangunan pada masa itu. Meski telah berusia berabad-abad, kemegahannya tetap tak tergoyahkan, berdiri sebagai bukti fisik keterbukaan leluhur terhadap pengaruh budaya luar. Mengunjungi Candi Bima memberikan kesempatan untuk merenungkan bagaimana seni dan spiritualitas bisa melampaui batas geografis. `.repeat(150)
  },
  {
    slug: 'tuk-bimo-lukat',
    title: 'Tuk Bimo Lukat: Sejarah Mata Air Suci dan Ritual Penyucian Diri',
    excerpt: 'Situs mata air purba yang dipercaya sebagai tempat penyucian diri bagi para ksatria.',
    category: 'Budaya',
    type: 'destination',
    date: '08 Mar 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tuk Bimo Lukat adalah situs mata air suci yang menandai hulu dari Sungai Serayu, tempat di mana sejarah dan mitologi menyatu. Menurut legenda, ksatria Bima menggunakan mata air ini untuk menyucikan diri, sehingga airnya dipercaya memiliki kekuatan spiritual untuk membersihkan batin. Mata air ini mengalir tanpa henti dari perut bumi melewati pancuran batu kuno, memberikan kesegaran alami yang luar biasa. Situs ini menjadi simbol penting pelestarian alam bagi masyarakat Wonosobo karena perannya sebagai sumber kehidupan utama. Merasakan dinginnya air di Tuk Bimo Lukat adalah cara terbaik untuk menghubungkan diri dengan elemen alam yang paling dasar. `.repeat(150)
  },

  // --- DESTINASI: KULINER (4) ---
  {
    slug: 'mie-ongklok-legenda',
    title: 'Mie Ongklok: Mengenal Kuliner Paling Legendaris di Wonosobo',
    excerpt: 'Menikmati sajian mie legendaris dengan kuah kental gurih yang menghangatkan tubuh.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Mie Ongklok adalah identitas kuliner yang telah menghangatkan masyarakat Wonosobo selama puluhan tahun. Keunikan utamanya terletak pada penggunaan keranjang bambu atau "ongklok" untuk merebus mie, serta kuah kental berbumbu rempah yang sangat kaya rasa. Penyajiannya yang ditemani oleh sate sapi dan tempe kemul menciptakan harmoni rasa yang sangat memuaskan. Setiap suapan Mie Ongklok membawa narasi tentang sejarah kuliner lokal yang diwariskan dengan dedikasi. Bagi wisatawan, mencicipi Mie Ongklok adalah ritual wajib yang memberikan pemahaman tentang cara masyarakat lokal beradaptasi dengan lingkungan dingin mereka melalui kreativitas dapur. `.repeat(150)
  },
  {
    slug: 'carica-dieng',
    title: 'Carica: Buah Endemik Dieng yang Menjadi Ikon Oleh-oleh Lokal',
    excerpt: 'Mengenal buah endemik yang hanya tumbuh subur di ketinggian Dieng dan sekitarnya.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Carica sering disebut sebagai pepaya gunung, sebuah buah endemik yang hanya mampu tumbuh subur di ketinggian di atas 1.500 mdpl. Buah ini memiliki aroma harum yang kuat dan daging buah yang padat, menjadikannya bahan utama manisan yang sangat populer. Inovasi masyarakat lokal dalam mengolah buah ini telah menjadikannya ikon oleh-oleh paling dicari dari Wonosobo. Selain rasanya yang menyegarkan, Carica juga kaya akan vitamin yang baik bagi kesehatan. Proses pengolahannya yang dilakukan oleh industri rumah tangga lokal menunjukkan kemandirian ekonomi masyarakat Dieng. Carica adalah anugerah alam yang diubah menjadi produk unggulan yang membanggakan nama daerah. `.repeat(150)
  },
  {
    slug: 'tempe-kemul-gurih',
    title: 'Tempe Kemul: Rahasia Gurihnya Gorengan Khas Wonosobo',
    excerpt: 'Camilan gorengan khas dengan bumbu kunyit dan kucai yang melimpah, teman setia kopi Dieng.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tempe Kemul adalah camilan favorit di setiap sudut Wonosobo, sebuah gorengan yang menyimpan kelezatan dalam kesederhanaannya. Kata "Kemul" yang berarti selimut merujuk pada lapisan adonan tepung yang tebal menyelimuti tempe, lengkap dengan bumbu kunyit dan taburan daun kucai. Rahasia kelezatannya terletak pada tekstur luarnya yang sangat renyah namun tetap lembut di dalam. Tempe Kemul paling nikmat disantap saat masih panas, ditemani oleh kopi atau teh hangat di sore hari yang dingin. Lebih dari sekadar gorengan, ini adalah simbol kehangatan masyarakat Wonosobo yang ramah dan mencintai kearifan lokal. `.repeat(150)
  },
  {
    slug: 'purwaceng-herbal',
    title: 'Purwaceng: Mengenal Tanaman Herbal Stamina dari Lereng Gunung',
    excerpt: 'Minuman herbal berkhasiat tinggi yang berasal dari tanaman endemik langka.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Purwaceng adalah tanaman legendaris yang hanya ditemukan di tanah vulkanik Dieng, dikenal sebagai herbal berkhasiat tinggi bagi stamina. Dijuluki sebagai ginsengnya Jawa, tanaman ini telah lama digunakan sebagai rahasia vitalitas alami. Saat ini, Purwaceng diolah menjadi berbagai bentuk praktis seperti kopi atau serbuk instan yang memberikan rasa hangat bagi tubuh. Khasiatnya yang mampu melancarkan peredaran darah menjadikannya produk kesehatan yang sangat diminati wisatawan. Kelestarian tanaman ini dijaga ketat melalui budidaya lokal karena sifatnya yang sensitif terhadap lingkungan. Menikmati Purwaceng adalah bentuk apresiasi terhadap kekayaan herbal Nusantara. `.repeat(150)
  },

  // --- STORIES: SEJARAH (12) ---
  ...Array.from({ length: 12 }).map((_, i) => ({
    slug: `sejarah-wonosobo-part-${i + 1}`,
    title: `Mengenal Sejarah Wonosobo: Dari Asal-usul Hingga Masa Kini (Bagian ${i + 1})`,
    excerpt: `Eksplorasi narasi sejarah mengenai pembentukan wilayah dan perkembangan kota Wonosobo.`,
    category: 'Sejarah',
    type: 'story',
    date: '2025-03-01',
    image: `https://picsum.photos/seed/hist-${i}/1080/720`,
    content: `Sejarah Wonosobo adalah jalinan peristiwa panjang yang membentang dari era spiritual kuno hingga dinamika masa kolonial. Nama Wonosobo sendiri berasal dari bahasa Sanskerta yang berarti hutan tempat berkumpul yang tenang. Dalam babak sejarah ini, kita mendalami bagaimana wilayah pegunungan ini bertransformasi menjadi pusat peradaban yang penting di Jawa Tengah. Jejak-jejak masa lalu masih bisa kita saksikan melalui berbagai peninggalan arsitektur dan situs budaya yang tersebar di pelosok daerah. Dinamika sosial yang terjadi selama transisi kekuasaan menunjukkan ketangguhan masyarakat lokal dalam menjaga identitas mereka. Memahami sejarah Wonosobo bukan sekadar soal angka tahun, tapi soal menghargai semangat juang para leluhur yang telah mewariskan keindahan ini. Setiap sudut kota menyimpan cerita yang menarik untuk digali lebih dalam oleh generasi sekarang. `.repeat(150)
  })),

  // --- STORIES: SOSIAL (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `sosial-budaya-wonosobo-part-${i + 1}`,
    title: `Kehidupan Sosial: Memahami Tradisi dan Keramahan Lokal (Seri ${i + 1})`,
    excerpt: `Memahami kearifan lokal, etika, dan kehidupan sehari-hari masyarakat pegunungan Wonosobo.`,
    category: 'Sosial',
    type: 'story',
    date: '2025-03-02',
    image: `https://picsum.photos/seed/soc-${i}/1080/720`,
    content: `Kehidupan sosial masyarakat Wonosobo adalah cerminan dari harmoni antara tradisi dan keramahan yang tulus. Karakter masyarakat yang hangat sangat terasa di setiap interaksi, meski mereka tinggal di lingkungan udara yang dingin. Gotong-royong masih menjadi praktik harian yang kuat dalam kehidupan berdesa, dari urusan pertanian hingga upacara adat. Salah satu fenomena sosial yang paling menarik adalah tradisi potong rambut gimbal yang tetap dijaga kelestariannya. Kesenian lokal seperti tari Lengger juga terus diajarkan kepada generasi muda agar identitas budaya tidak hilang. Dalam eksplorasi sosial ini, kita melihat bagaimana nilai-nilai kejujuran dan kesederhanaan menjadi pondasi kedamaian di kota ini. Memasuki ruang sosial Wonosobo adalah belajar tentang bagaimana menghargai sesama dengan penuh ketulusan. `.repeat(150)
  })),

  // --- STORIES: GEOGRAFIS (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `geografis-wonosobo-part-${i + 1}`,
    title: `Fenomena Alam: Memahami Keunikan Geografis Negeri di Atas Awan (Vol ${i + 1})`,
    excerpt: `Analisis mendalam mengenai pembentukan vulkanik dan kekayaan geologi Wonosobo.`,
    category: 'Geografis',
    type: 'story',
    date: '2025-03-03',
    image: `https://picsum.photos/seed/geo-${i}/1080/720`,
    content: `Wonosobo adalah wilayah yang dibentuk oleh aktivitas vulkanik yang luar biasa, menciptakan lanskap pegunungan yang dramatis dan subur. Berada di antara dua gunung api besar, Sindoro dan Sumbing, dataran tinggi ini memiliki kekayaan mineral tanah yang tinggi. Kaldera Dieng yang luas merupakan bukti sejarah letusan gunung api purba yang kini menjadi tempat tinggal ribuan jiwa. Fenomena unik seperti embun es di musim kemarau menunjukkan betapa ekstrem dan menariknya kondisi iklim di sini. Kekayaan hidrologi daerah ini juga sangat penting bagi pasokan air dan listrik di wilayah sekitarnya. Mempelajari geografi Wonosobo adalah bentuk rasa syukur atas keindahan alam yang tercipta melalui proses geologis yang panjang. Setiap lembah dan puncak gunung menyimpan rahasia pembentukan bumi yang sangat menarik untuk dipelajari. `.repeat(150)
  })),

  // --- STORIES: TIPS (11) ---
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `tips-wisata-wonosobo-part-${i + 1}`,
    title: `Panduan Perjalanan: Tips Cerdas Menjelajahi Wonosobo (Bagian ${i + 1})`,
    excerpt: `Segala hal yang perlu diketahui untuk perjalanan yang aman dan nyaman di Wonosobo.`,
    category: 'Tips',
    type: 'story',
    date: '2025-03-04',
    image: `https://picsum.photos/seed/tips-${i}/1080/720`,
    content: `Menjelajahi Wonosobo membutuhkan persiapan yang matang karena kondisi medan pegunungan dan cuaca yang bisa berubah dengan cepat. Tips pertama yang krusial adalah memastikan kondisi kendaraan prima sebelum menanjak ke arah Dieng. Manajemen pakaian juga sangat penting, pastikan membawa jaket yang cukup tebal untuk menghadapi suhu dingin di malam hari. Dari sisi anggaran, mencoba kuliner di warung lokal akan memberikan pengalaman rasa yang autentik sekaligus hemat biaya. Kami juga menyarankan untuk membawa uang tunai secukupnya karena akses ke mesin ATM mungkin terbatas di area tertentu. Memahami etika dan adat istiadat lokal juga sangat dihargai oleh masyarakat setempat. Dengan mengikuti panduan ini, perjalanan Anda akan menjadi lebih aman, nyaman, dan berkesan tanpa harus menghadapi hambatan yang tidak perlu. Nikmatilah setiap momen petualangan Anda di negeri di atas awan dengan penuh kesiapan. `.repeat(150)
  }))
] as Article[];
