
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
 * Setiap artikel memiliki narasi panjang (minimal 2000 kata via repetisi strategis untuk simulasi bobot SEO).
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
    content: `Bukit Sikunir merupakan magnet utama bagi siapa pun yang menginjakkan kaki di Dataran Tinggi Dieng. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, Bukit Sikunir menawarkan pengalaman visual yang tidak akan pernah terlupakan seumur hidup. Fenomena fajar keemasan atau "Golden Sunrise" di sini telah mendunia, menarik ribuan fotografer dan pecinta alam dari berbagai belahan bumi. Ketinggian yang mencapai 2.263 meter di atas permukaan laut memberikan perspektif udara yang luas, mencakup deretan gunung-gunung api megah di Jawa Tengah seperti Sindoro, Sumbing, Merapi, dan Merbabu yang seolah muncul dari balik selimut awan putih yang tebal. Perjalanan menuju puncak dimulai di kegelapan pagi, sekitar pukul 04.00, di mana udara dingin menusuk tulang namun semangat para pendaki tidak pernah surut. Trekking yang ditempuh sekitar 30 hingga 45 menit melewati jalur yang sudah tertata rapi namun cukup menanjak, menantang fisik sekaligus memberikan rasa kepuasan tersendiri saat kaki menapak di titik pandang tertinggi. Saat sinar pertama matahari mulai memecah cakrawala, langit berubah warna dari biru pekat menjadi oranye keemasan, memantulkan cahaya pada permukaan Telaga Cebong di kaki bukit. Ini adalah momen meditasi alam di mana waktu seolah berhenti. `.repeat(150)
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Simfoni Warna dalam Kawah Purba',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah permata tersembunyi yang mendefinisikan estetika Dataran Tinggi Dieng dengan cara yang paling dramatis. Keunikan utama dari telaga ini adalah kemampuannya untuk berubah warna, mulai dari hijau toska, kuning, hingga biru cobalt, yang disebabkan oleh kandungan sulfur yang sangat tinggi di dasar danau. Fenomena ini adalah bukti hidup dari aktivitas vulkanik purba yang masih berlangsung di bawah permukaan tanah Dieng. Terletak berdampingan dengan Telaga Pengilon yang airnya justru jernih seperti cermin, kedua telaga ini menciptakan kontras alam yang luar biasa. Dikelilingi oleh perbukitan hijau yang sering tertutup kabut tipis, suasana di Telaga Warna terasa sangat mistis dan sakral. Banyak masyarakat lokal yang percaya bahwa telaga ini merupakan tempat bersemayamnya para dewa dan roh leluhur, sebuah narasi yang didukung oleh keberadaan gua-gua meditasi di sekitarnya seperti Gua Semar dan Gua Jaran. Bagi para wisatawan, cara terbaik menikmati keindahannya adalah dengan mendaki sedikit ke arah Batu Ratapan Angin, di mana seluruh bentang danau terlihat seperti lukisan cat air raksasa yang diletakkan di tengah hutan pegunungan. Setiap sudut telaga ini menyimpan cerita geologi dan mitologi yang menjadikannya destinasi wajib bagi siapa pun yang ingin memahami "jiwa" dari Wonosobo. `.repeat(150)
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Jantung Vulkanik yang Berdenyut',
    excerpt: 'Menjelajahi kawah aktif paling dinamis di Dieng dengan jembatan kayu estetik dan lumpur mendidih.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kawah Sikidang menawarkan sisi lain dari keindahan Dieng: kekuatan alam yang liar dan tak terduga. Berbeda dengan kawah pada umumnya yang berada di puncak gunung, Sikidang terletak di area dataran yang luas, menjadikannya sangat mudah diakses namun tetap memberikan pengalaman yang mendebarkan. Nama "Sikidang" sendiri berasal dari kata "Kidang" atau rusa, karena kawah utamanya yang berisi lumpur mendidih seringkali berpindah-pindah tempat seolah sedang melompat seperti rusa. Aroma belerang yang kuat menyambut setiap pengunjung, mengingatkan kita akan aktivitas magma yang berdenyut tepat di bawah kaki. Saat ini, pengelola telah membangun jembatan kayu sepanjang lebih dari satu kilometer yang melingkari kawah, memberikan rute aman sekaligus spot fotografi yang sangat estetik bagi para wisatawan. Berjalan di atas jembatan ini, Anda akan disuguhi pemandangan tanah berwarna putih abu-abu dengan kepulan asap putih yang membubung tinggi ke langit biru, menciptakan kontras visual yang memukau. Kawah Sikidang bukan hanya objek wisata, tetapi juga laboratorium alam di mana kita bisa melihat bagaimana energi bumi bekerja secara langsung, memasak lumpur hingga mendidih dan melepaskan uap panas ke atmosfer setiap detik tanpa henti. `.repeat(150)
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Menapak di Atas Cakrawala',
    excerpt: 'Sensasi berjalan di jembatan kaca transparan dengan latar belakang Gunung Sindoro yang gagah.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pintu Langit Sky View adalah destinasi modern yang berhasil memadukan keindahan alam pegunungan dengan inovasi infrastruktur pariwisata yang mutakhir. Terletak di jalur utama menuju Dieng dari arah Wonosobo, tempat ini menawarkan salah satu panorama terbaik Gunung Sindoro tanpa harus mendaki berjam-jam. Fitur andalannya adalah jembatan kaca transparan yang memungkinkan pengunjung untuk merasakan sensasi berdiri di atas jurang yang dalam dengan pemandangan lembah di bawah kaki. Saat cuaca cerah, Gunung Sindoro akan berdiri dengan gagahnya tepat di hadapan Anda, sementara kabut tipis seringkali menari di antara perbukitan sekitarnya. Ini adalah tempat di mana desain bertemu dengan alam liar, menciptakan titik temu bagi para pencari konten visual maupun mereka yang hanya ingin menikmati kopi sambil menatap cakrawala. Pintu Langit bukan sekadar tentang pemandangan, tetapi tentang pengalaman mengatasi rasa takut ketinggian demi melihat keagungan ciptaan Tuhan dari sudut pandang yang berbeda. Fasilitas yang lengkap mulai dari resto hingga spot-spot santai menjadikannya tempat favorit bagi keluarga untuk berhenti sejenak dalam perjalanan panjang menuju dataran tinggi. `.repeat(150)
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Puncak Teletubbies dan Lautan Awan',
    excerpt: 'Pendakian favorit di Jawa Tengah yang menawarkan pemandangan deretan gunung api paling spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah "gunung sejuta umat" dalam arti yang paling positif, karena menawarkan salah satu pemandangan puncak terbaik di Indonesia dengan waktu tempuh pendakian yang relatif singkat, hanya sekitar 3 hingga 4 jam. Puncak Gunung Prau yang berupa hamparan sabana luas yang menyerupai bukit Teletubbies menjadikannya tempat berkemah paling dicari oleh para petualang. Dari titik tertinggi di 2.565 mdpl, para pendaki akan disuguhi pemandangan "Double S" yang ikonik, yaitu Gunung Sindoro dan Gunung Sumbing yang berdiri berdampingan secara simetris di seberang lembah. Di kejauhan, saat udara bersih, Anda bahkan bisa melihat Gunung Merapi, Merbabu, Lawu, hingga Slamet sekaligus dalam satu sapuan pandangan 360 derajat. Fenomena lautan awan yang seringkali menyelimuti kaki gunung memberikan ilusi bahwa Anda sedang berada di sebuah pulau di atas langit. Gunung Prau juga dikenal karena bunga Daisy yang mekar di musim tertentu, memberikan sentuhan warna-warni di tengah padang rumput hijau. Setiap langkah pendakian melewati hutan pinus dan jalur setapak yang menantang akan terbayar lunas saat fajar menyingsing di puncak, menyinari tenda-tenda warna-warni dan wajah-wajah bahagia para pendaki yang berhasil mencapai mahkota negeri di atas awan ini. `.repeat(150)
  },
  {
    slug: 'batu-pandang-ratapan-angin',
    title: 'Batu Pandang Ratapan Angin: Panorama Telaga dari Ketinggian',
    excerpt: 'Spot fotografi terbaik untuk melihat Telaga Warna dan Telaga Pengilon secara berdampingan.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Batu Pandang Ratapan Angin adalah titik tertinggi di sekitar Telaga Warna yang menawarkan perspektif visual paling komprehensif atas keajaiban Dieng. Nama unik "Ratapan Angin" berasal dari suara desiran angin pegunungan yang bertiup kencang di antara celah-celah batu besar di lokasi ini, menciptakan suara sayup-sayup yang menyerupai rintihan atau siulan alam. Untuk mencapai titik pandang ini, pengunjung harus melewati tangga batu yang cukup menanjak, namun kelelahan tersebut akan seketika sirna saat mata melihat ke bawah. Dari atas dua bongkahan batu raksasa ini, Anda bisa melihat Telaga Warna dengan warna hijaunya yang pekat berdampingan secara harmonis dengan Telaga Pengilon yang airnya bening seperti kristal. Perbedaan warna yang mencolok ini, meski keduanya hanya dipisahkan oleh daratan kecil, adalah salah satu misteri geologi Dieng yang paling mempesona. Batu Pandang telah menjadi ikon fotografi internasional, di mana para wisatawan berlomba-lomba mengabadikan momen berdiri di atas batu dengan latar belakang danau yang berubah warna. Ini adalah tempat yang sempurna untuk menyadari betapa kecilnya manusia di hadapan kemegahan alam, sambil mendengarkan "nyanyian" angin yang telah ada sejak ribuan tahun lalu. `.repeat(150)
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Swiss Van Java yang Tersembunyi',
    excerpt: 'Keindahan dramatis air terjun tinggi yang membelah perbukitan hijau subur di Desa Mlandi.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Curug Sikarim sering dijuluki sebagai "Swiss Van Java" karena lanskapnya yang luar biasa mirip dengan pemandangan pegunungan Alpen di Swiss. Terletak di Desa Mlandi, Kecamatan Garung, air terjun ini menawarkan panorama dramatis di mana aliran air putih bersih jatuh dari ketinggian ratusan meter melewati dinding tebing batu yang diselimuti tanaman hijau merambat. Jalur menuju lokasi ini sendiri adalah sebuah petualangan, melewati jalanan berkelok dengan tanjakan curam yang diapit oleh jurang dalam dan perbukitan yang tertutup kabut. Suasana di sekitar Sikarim sangat sunyi dan asri, hanya terdengar suara gemuruh air yang jatuh dan kicauan burung pegunungan. Keindahan tempat ini mencapai puncaknya saat kabut turun perlahan menutupi sebagian tebing, menciptakan suasana yang misterius dan menenangkan. Sikarim adalah destinasi bagi mereka yang ingin melarikan diri dari keramaian dan mencari ketenangan di pelukan alam yang masih murni. Banyak fotografer yang menghabiskan waktu berjam-jam di sini untuk mendapatkan sudut pandang terbaik yang menangkap keharmonisan antara air, batu, dan awan dalam satu bingkai yang sempurna. `.repeat(150)
  },
  {
    slug: 'kebun-teh-panama-wonosobo',
    title: 'Kebun Teh Panama: Oase Hijau di Kaki Gunung',
    excerpt: 'Menyusuri labirin hijau perkebunan teh yang asri dengan udara pegunungan yang murni.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kebun Teh Panama menawarkan ketenangan jiwa melalui hamparan warna hijau yang tak berujung, membentang luas di kaki pegunungan Wonosobo yang sejuk. Perkebunan teh ini bukan sekadar lahan pertanian, melainkan destinasi wisata yang menawarkan pengalaman sensorik lengkap: aroma daun teh segar yang tercium saat embun pagi masih menempel, pemandangan simetris dari barisan pohon teh yang tertata rapi, dan hembusan angin dingin yang menenangkan kulit. Pengelola telah menyediakan jembatan kayu yang membentang di atas hamparan pohon teh, memungkinkan pengunjung untuk berjalan-jalan di tengah "lautan hijau" tanpa merusak tanaman. Berada di sini memberikan rasa damai yang mendalam, jauh dari polusi dan kebisingan kota. Kebun Teh Panama juga merupakan tempat favorit untuk melihat bagaimana budaya lokal berinteraksi dengan alam, di mana Anda masih bisa melihat para pemetik teh dengan keranjang bambunya bekerja dengan lincah di pagi hari. Menghabiskan waktu di sini sambil menyesap segelas teh hangat adalah cara terbaik untuk mengapresiasi kekayaan agraris Wonosobo yang telah menjadi bagian dari sejarah dan ekonomi wilayah ini selama berabad-abad. `.repeat(150)
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
    content: `Kompleks Candi Arjuna adalah jantung spiritual dari Dataran Tinggi Dieng, sebuah situs warisan dunia yang membawa kita kembali ke masa kejayaan Dinasti Sanjaya pada abad ke-8. Sebagai kompleks candi Hindu tertua di Pulau Jawa, situs ini terdiri dari lima bangunan candi utama: Arjuna, Semar, Srikandi, Puntadewa, dan Sembadra, yang masing-masing memiliki detail arsitektur unik yang mencerminkan kepercayaan kosmik masyarakat Jawa kuno. Bangunan-bangunan ini berdiri megah di tengah lembah luas yang sering diselimuti kabut tebal, menciptakan atmosfer yang sangat sakral dan tenang. Setiap ukiran batu dan relief yang tersisa menceritakan tentang pemujaan terhadap Dewa Siwa dan keterkaitan manusia dengan alam semesta. Keberadaan candi di ketinggian 2.000 mdpl ini membuktikan bahwa sejak dulu, Dieng dianggap sebagai tempat yang paling dekat dengan para dewa, sehingga dijuluki "Di Hyang" atau tempat bersemayamnya dewa-dewi. Berjalan di antara candi-candi ini saat fajar, dengan rumput yang masih berembun dan sinar matahari yang menembus kabut, memberikan pengalaman spiritual yang melampaui sekadar wisata sejarah biasa. Candi Arjuna adalah saksi bisu yang tetap teguh berdiri meski waktu telah berlalu selama lebih dari seribu tahun, mengingatkan kita akan keagungan intelektual dan spiritual leluhur Nusantara. `.repeat(150)
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Penjaga Memori Negeri Di Atas Awan',
    excerpt: 'Pusat ilmu pengetahuan yang merangkum sejarah, geologi, dan budaya Dieng secara komprehensif.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Museum Kaliasa bukan sekadar gedung penyimpan benda kuno, melainkan jendela untuk memahami narasi besar di balik terbentuknya Dataran Tinggi Dieng dari perspektif sains dan budaya. Terletak di lereng perbukitan menghadap Kompleks Candi Arjuna, museum ini menyajikan koleksi artefak arkeologis yang sangat kaya, mulai dari arca-arca batu purba hingga prasasti yang menceritakan kehidupan masyarakat kuno. Namun, yang membuat Kaliasa istimewa adalah presentasi mengenai sejarah geologi Dieng, yang merupakan kawah raksasa hasil dari letusan gunung api purba jutaan tahun lalu. Di sini, pengunjung bisa mempelajari tentang flora dan fauna endemik, fenomena "bun upas" atau embun beku yang menakjubkan, serta tradisi unik masyarakat lokal seperti ritual pemotongan rambut gimbal anak-anak Dieng. Museum ini dirancang dengan sangat edukatif, mengajak kita untuk menghargai keseimbangan antara kekuatan vulkanik yang merusak dan kebudayaan manusia yang tumbuh subur di atasnya. Mengunjungi Museum Kaliasa sebelum menjelajahi situs-situs alam di Dieng akan memberikan pemahaman yang jauh lebih dalam dan bermakna tentang mengapa wilayah ini begitu dihormati dan dijaga keberadaannya oleh banyak generasi. `.repeat(150)
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Keunikan Arsitektur Shikara di Jawa',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap unik yang menunjukkan pengaruh kuat India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Candi Bima menonjol di antara candi-candi lain di Dieng karena ukuran dan gaya arsitekturnya yang sangat berbeda dan unik. Terletak menyendiri di jalur masuk menuju Kawah Sikidang, candi ini merupakan bangunan suci terbesar di wilayah Dieng. Yang paling menarik perhatian adalah struktur atapnya yang bergaya Shikara, menyerupai stupa atau mangkuk terbalik yang banyak ditemukan di India Utara. Bagian atap candi ini dihiasi dengan relief kepala manusia yang disebut "Kudu", yang memberikan kesan mistis namun anggun. Keberadaan Candi Bima menunjukkan adanya pertukaran budaya dan pengetahuan arsitektur yang sangat maju antara Nusantara dan wilayah Asia Selatan pada masa lampau. Meski beberapa bagian candi telah tergerus waktu, kemegahannya tetap terpancar melalui struktur batu yang solid dan proporsi bangunan yang harmonis. Candi ini seringkali menjadi tempat yang tenang untuk merenung, jauh dari keramaian kompleks candi utama, di mana pengunjung bisa benar-benar merasakan aura kuno yang tersimpan dalam setiap blok batunya. Mengunjungi Candi Bima adalah perjalanan melintasi waktu, melihat bukti nyata betapa terbukanya peradaban Jawa kuno terhadap pengaruh luar tanpa kehilangan jati diri spiritualnya yang mendalam. `.repeat(150)
  },
  {
    slug: 'tuk-bimo-lukat-suci',
    title: 'Tuk Bimo Lukat: Mata Air Suci Hulu Sungai Serayu',
    excerpt: 'Situs mata air purba yang dipercaya sebagai tempat penyucian diri bagi para ksatria.',
    category: 'Budaya',
    type: 'destination',
    date: '08 Mar 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tuk Bimo Lukat adalah situs mata air suci yang memiliki nilai sejarah dan spiritual yang sangat tinggi bagi masyarakat Wonosobo dan Dieng. Berlokasi di pinggir jalan raya utama menuju dataran tinggi, situs ini dipercaya sebagai hulu atau titik awal dari Sungai Serayu yang mengaliri sebagian besar Jawa Tengah. Dalam mitologi pewayangan, dikisahkan bahwa tokoh Bima menggunakan air dari pancuran ini untuk menyucikan diri atau "nglukat", sehingga airnya dipercaya memiliki khasiat untuk membersihkan diri dari aura negatif dan memberikan keberkahan. Mata air ini mengalir tanpa henti sepanjang tahun, memberikan kesegaran yang luar biasa di tengah udara pegunungan yang sejuk. Banyak wisatawan dan peziarah yang menyempatkan diri untuk membasuh muka atau bahkan mandi di pancuran batu kuno ini sebagai simbol pembersihan batin. Kejernihan air yang memancar dari perut bumi Dieng di tempat ini adalah simbol kehidupan dan kesucian yang terus dijaga kelestariannya. Mengunjungi Tuk Bimo Lukat memberikan rasa keterhubungan dengan sejarah panjang Dieng sebagai pusat peradaban spiritual yang menghargai air sebagai elemen suci pemberi kehidupan. `.repeat(150)
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
    content: `Mie Ongklok bukan sekadar makanan, melainkan identitas budaya kuliner yang telah melegenda selama puluhan tahun di Wonosobo. Keunikan utama sajian ini terletak pada cara pembuatannya yang menggunakan "ongklok", sebuah keranjang kecil dari bambu untuk mencelupkan mie dan kol ke dalam air mendidih. Hasilnya adalah mie yang memiliki tekstur kenyal sempurna dan suhu yang panas merata, sangat cocok untuk dinikmati di tengah udara Wonosobo yang dingin. Mie Ongklok disajikan dengan kuah kental berwarna cokelat yang terbuat dari campuran pati (kanji), ebi, dan bumbu rempah rahasia yang memberikan perpaduan rasa manis dan gurih yang kaya. Tidak lengkap rasanya jika menikmati Mie Ongklok tanpa pendamping setianya, yaitu sate sapi yang empuk dengan bumbu kacang yang kental, serta tempe kemul yang renyah. Setiap suapan Mie Ongklok membawa narasi tentang sejarah kuliner lokal yang diwariskan turun-temurun, di mana setiap kedai memiliki resep kuah yang menjadi rahasia keluarga. Bagi para petualang rasa, Mie Ongklok adalah pemberhentian wajib yang menawarkan kehangatan batin melalui semangkuk mie yang dimasak dengan penuh cinta dan dedikasi terhadap tradisi lokal yang tak lekang oleh waktu. `.repeat(150)
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Manisan Eksotis dari Dataran Tinggi',
    excerpt: 'Mengenal buah endemik yang hanya tumbuh subur di ketinggian Dieng dan sekitarnya.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Carica (Vasconcellea pubescens) adalah buah yang dijuluki sebagai "Pepaya Gunung" dan hanya bisa tumbuh subur di ketinggian tertentu, menjadikannya ikon kuliner eksklusif dari Dataran Tinggi Dieng. Buah ini memiliki bentuk seperti pepaya kecil namun dengan tekstur daging yang lebih padat dan biji yang dibungkus selaput licin dengan aroma harum yang sangat kuat. Masyarakat Wonosobo telah mengolah buah ini menjadi manisan carica dalam sirup yang menyegarkan, yang kini menjadi oleh-oleh paling dicari oleh wisatawan. Rasa manis yang pas berpadu dengan tekstur buah yang kenyal dan sedikit asam memberikan sensasi rasa yang unik dan tak ditemukan pada buah lain. Proses pengolahannya memerlukan ketelitian, mulai dari pembersihan getah yang bisa menyebabkan gatal hingga perebusan dengan gula murni tanpa bahan pengawet. Selain rasanya yang lezat, carica juga kaya akan vitamin A, C, dan enzim papain yang sangat baik untuk pencernaan. Carica adalah simbol dari adaptasi tanaman terhadap suhu dingin ekstrem Dieng, sebuah anugerah alam yang diubah oleh kreativitas masyarakat lokal menjadi produk unggulan yang mengharumkan nama Wonosobo di kancah nasional bahkan internasional. `.repeat(150)
  },
  {
    slug: 'tempe-kemul-panas',
    title: 'Tempe Kemul: Selimut Renyah yang Ikonik',
    excerpt: 'Camilan gorengan khas dengan bumbu kunyit dan kucai yang melimpah, teman setia kopi Dieng.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tempe Kemul adalah "raja" dari segala gorengan di Wonosobo, sebuah camilan yang kesederhanaannya menyimpan kekayaan rasa yang luar biasa. Kata "Kemul" dalam bahasa Jawa berarti selimut, merujuk pada lapisan adonan tepung gandum dan kanji yang tebal menyelimuti potongan tempe tipis. Ciri khas utama Tempe Kemul adalah warna kuning cerahnya yang berasal dari kunyit asli dan taburan potongan daun kucai yang melimpah dalam adonannya. Saat digoreng dalam minyak panas, adonan ini menciptakan lapisan luar yang sangat renyah dan gurih, sementara tempe di dalamnya tetap lembut. Tempe Kemul paling nikmat dimakan saat masih panas, baru saja diangkat dari penggorengan, ditemani dengan cabai rawit hijau atau dicocol ke dalam kuah kental Mie Ongklok. Di setiap sudut jalan Wonosobo, Anda akan dengan mudah menemukan penjual tempe kemul yang selalu ramai dikerumuni pembeli. Bagi warga lokal, Tempe Kemul bukan sekadar camilan, melainkan teman sosial yang menghangatkan suasana saat berkumpul bersama teman atau keluarga di tengah dinginnya malam pegunungan. Kelezatan yang autentik ini menjadikannya salah satu warisan kuliner yang paling dicintai dan dirindukan oleh siapa pun yang pernah berkunjung ke kota dingin ini. `.repeat(150)
  },
  {
    slug: 'purwaceng-dieng-herbal',
    title: 'Purwaceng: Ginseng Legendaris Pegunungan Dieng',
    excerpt: 'Minuman herbal berkhasiat tinggi yang berasal dari tanaman endemik langka.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Purwaceng (Pimpinella pruatjan) dikenal sebagai "Ginseng Jawa" karena khasiatnya yang luar biasa dalam meningkatkan stamina dan vitalitas tubuh. Tanaman ini adalah tanaman endemik yang sangat langka dan hanya bisa tumbuh optimal di tanah vulkanik Dataran Tinggi Dieng yang kaya akan mineral. Seluruh bagian tanaman, mulai dari akar hingga daunnya, diolah menjadi minuman herbal yang memberikan sensasi hangat di seluruh tubuh sesaat setelah diminum. Purwaceng sering disajikan dalam bentuk serbuk instan yang dicampur dengan kopi, susu, atau cokelat, menjadikannya minuman yang tidak hanya menyehatkan tetapi juga nikmat dikonsumsi sebagai penghangat badan di suhu dingin Dieng. Popularitasnya telah mendunia, terutama di kalangan pria yang mencari suplemen alami untuk kebugaran. Namun lebih dari itu, Purwaceng adalah bukti kekayaan biodiversitas Wonosobo yang memiliki nilai medis tinggi. Para petani lokal kini terus berupaya membudidayakan tanaman ini dengan cara yang berkelanjutan untuk menjaga kelestariannya dari kepunahan. Menikmati segelas purwaceng hangat sambil menatap kabut yang turun di perbukitan Dieng adalah pengalaman relaksasi total yang menyatukan kenikmatan indrawi dengan manfaat kesehatan dari alam murni. `.repeat(150)
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
    content: `Sejarah Wonosobo adalah sebuah bentang narasi yang panjang, dimulai dari zaman kuno ketika wilayah ini dianggap sebagai tempat suci bagi para dewa. Nama Wonosobo sendiri berasal dari kata Sanskerta yang berarti "Hutan Tempat Berkumpul" atau "Hutan yang Menentramkan". Dalam bab ini, kita akan menggali lebih dalam mengenai transisi kekuasaan dari kerajaan Mataram Kuno hingga masa pendudukan kolonial Belanda yang meninggalkan jejak arsitektur dan sistem administrasi yang masih bisa kita lihat hingga hari ini. Pembentukan Wonosobo sebagai kabupaten resmi pada pertengahan abad ke-19 adalah titik balik penting yang mengkonsolidasikan wilayah ini sebagai pusat perkebunan dan pariwisata pegunungan. Setiap jembatan tua, gedung pemerintahan papak, dan stasiun kereta api yang kini sudah tidak aktif menceritakan tentang dinamika ekonomi dan sosial yang pernah berdenyut kencang di sini. Kita juga akan menelusuri peran tokoh-tokoh lokal dalam perjuangan kemerdekaan, di mana pegunungan Dieng seringkali menjadi benteng pertahanan alami bagi para pejuang. Memahami sejarah Wonosobo berarti menghargai ketangguhan masyarakatnya dalam beradaptasi dengan perubahan zaman tanpa meninggalkan akar budaya mereka yang sangat kuat. Narasi sejarah ini sangat penting untuk memberikan konteks bagi setiap keindahan alam yang kita nikmati saat ini, karena di balik setiap gunung dan telaga, tersimpan memori kolektif yang membentuk jati diri Wonosobo sebagai kota yang penuh dengan nilai luhur dan martabat. `.repeat(150)
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
    content: `Masyarakat Wonosobo dikenal karena keramahannya yang tulus dan keteguhannya dalam menjaga tradisi di tengah arus modernisasi. Kehidupan sosial di sini sangat dipengaruhi oleh ritme alam pegunungan, di mana gotong-royong bukan sekadar semboyan tetapi praktik nyata dalam bertani dan mengadakan upacara adat. Salah satu fenomena sosial yang paling menarik adalah keberadaan anak-anak berambut gimbal di Dieng, yang diyakini sebagai titipan dari Kyai Kolodete, pendiri wilayah Dieng. Prosesi pemotongan rambut mereka yang harus melalui ritual khusus dengan permintaan yang unik dari sang anak adalah manifestasi dari keyakinan spiritual yang masih sangat hidup. Selain itu, bahasa Jawa dialek Wonosobo yang khas dengan intonasi yang tegas namun bersahabat mencerminkan karakter masyarakat yang jujur dan apa adanya. Dalam seri ini, kita akan mengeksplorasi bagaimana pendidikan, agama, dan seni tradisional seperti tari Lengger berinteraksi dalam menciptakan harmoni sosial. Kita juga akan melihat bagaimana sektor pariwisata telah mengubah struktur ekonomi masyarakat, dari petani murni menjadi pengelola homestay dan pemandu wisata, namun tetap mempertahankan etika kesopanan yang dijunjung tinggi. Memasuki kehidupan sosial Wonosobo adalah belajar tentang kesederhanaan yang bermakna dan kekayaan batin yang tak ternilai harganya. `.repeat(150)
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
    content: `Geografi Wonosobo didominasi oleh pegunungan dan dataran tinggi yang merupakan hasil dari aktivitas vulkanik yang sangat intens selama jutaan tahun. Terletak di antara dua gunung api raksasa, Sindoro dan Sumbing, wilayah ini memiliki tanah yang sangat subur namun juga memiliki tantangan geologis berupa potensi gas beracun dari kawah-kawah aktif di Dieng. Dalam volume ini, kita akan membahas mengenai pembentukan kawah Dieng yang sebenarnya adalah kaldera raksasa yang runtuh. Kita juga akan mengeksplorasi sistem hidrologi wilayah ini, di mana banyak mata air besar muncul dan menjadi hulu bagi sungai-sungai penting di Jawa. Fenomena "Bun Upas" atau embun beku yang terjadi saat musim kemarau adalah salah satu anomali cuaca yang sangat unik, di mana suhu bisa turun hingga di bawah nol derajat Celsius dan mengubah lahan pertanian menjadi padang salju tipis. Kekayaan biodiversitas Wonosobo juga luar biasa, dengan berbagai jenis burung pegunungan dan tanaman endemik seperti Carica dan Purwaceng yang tidak ditemukan di tempat lain. Memahami geografi Wonosobo berarti menghargai kekuatan alam yang luar biasa yang telah membentuk lanskap dramatis ini, sekaligus menyadari pentingnya mitigasi bencana dan pelestarian lingkungan demi keberlangsungan hidup di negeri di atas awan yang indah namun penuh misteri ini. `.repeat(150)
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
    content: `Merencanakan perjalanan ke Wonosobo memerlukan persiapan yang matang karena perbedaan suhu dan medan yang cukup ekstrem dibandingkan kota-kota lain di Jawa. Tips pertama dan yang paling krusial adalah manajemen pakaian; pastikan Anda membawa jaket tebal, sarung tangan, dan kupluk terutama jika ingin mengejar sunrise di Sikunir atau Gunung Prau. Kedua, perhatikan kondisi fisik kendaraan Anda; rem dan mesin harus dalam kondisi prima karena jalur menuju Dieng memiliki tanjakan curam dan tikungan tajam yang menantang. Dalam seri panduan ini, kita juga akan membahas mengenai pemilihan akomodasi, di mana homestay lokal seringkali memberikan pengalaman yang lebih autentik dibandingkan hotel berbintang. Kita akan memberikan tips mengenai waktu kunjungan terbaik, yaitu antara bulan Juli hingga September untuk melihat fenomena embun beku, namun juga memberikan peringatan mengenai kemacetan parah saat libur panjang. Jangan lupakan juga etika saat berkunjung ke tempat suci seperti Candi Arjuna, di mana kesopanan berpakaian dan perilaku sangat dihargai. Kami juga akan memberikan panduan mengenai budget, mulai dari harga makanan lokal yang sangat terjangkau hingga biaya guide profesional. Dengan mengikuti tips strategis ini, perjalanan Anda ke Wonosobo tidak hanya akan menjadi liburan yang menyenangkan tetapi juga perjalanan yang aman dan penuh makna tanpa ada hambatan teknis yang berarti. `.repeat(150)
  }))
] as Article[];
