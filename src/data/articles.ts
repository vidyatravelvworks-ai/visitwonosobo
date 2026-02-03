
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
    content: `Bukit Sikunir, yang terletak di Desa Sembungan, Kecamatan Kejajar, Kabupaten Wonosobo, merupakan destinasi impian bagi setiap pemburu fajar. Dikenal secara luas sebagai tempat terbaik untuk menyaksikan fenomena "Golden Sunrise" di Asia Tenggara, bukit ini menawarkan panorama yang tak tertandingi di ketinggian sekitar 2.300 meter di atas permukaan laut. Nama "Sikunir" sendiri diambil dari kata "Kunir" (kunyit) dalam bahasa Jawa, karena warna cahaya matahari terbit yang terpancar di sini menyerupai warna jingga kekuningan kunyit yang sangat pekat dan indah.

Perjalanan menuju puncak Sikunir dimulai dari Desa Sembungan, yang juga dinobatkan sebagai desa tertinggi di Pulau Jawa. Untuk mencapai lokasi ini dari pusat kota Wonosobo, pengunjung memerlukan waktu sekitar satu jam berkendara menyusuri jalanan berkelok dengan pemandangan perkebunan sayur yang hijau. Pendakian atau trekking dari area parkir menuju puncak relatif ringan dan telah tertata dengan baik, memakan waktu sekitar 15 hingga 30 menit tergantung pada kondisi fisik masing-masing pendaki. Jalur trekking berupa tangga batu yang memudahkan pengunjung, namun tetap memerlukan kehati-hatian karena udara dingin yang bisa mencapai 5-10 derajat celcius dapat menguras tenaga lebih cepat.

Waktu terbaik untuk memulai pendakian adalah pukul 04.30 pagi. Saat mencapai puncak, rasa lelah akan terbayar seketika dengan munculnya semburat jingga di ufuk timur. Jika beruntung dan cuaca cerah, Anda tidak hanya akan melihat matahari terbit, tetapi juga siluet megah delapan gunung sekaligus: Gunung Sindoro, Gunung Sumbing, Gunung Prau, Gunung Merapi, Gunung Merbabu, Gunung Ungaran, Gunung Telomoyo, hingga Gunung Muria yang tampak samar di kejauhan. Keajaiban ini sering kali diiringi dengan hamparan awan putih yang menutupi lembah di bawahnya, menciptakan sensasi seolah-olah Anda sedang berdiri di atas negeri di atas awan.

Selain matahari terbit, di area Bukit Sikunir ini juga terdapat Telaga Cebong yang terletak tepat di kaki bukit. Telaga ini merupakan sumber air penting bagi pertanian penduduk desa setempat dan memberikan pantulan cahaya matahari yang indah di pagi hari. Pengunjung disarankan untuk mengenakan pakaian tebal berlapis, sarung tangan, dan penutup telinga. Jangan lupa membawa senter karena jalur pendakian sangat gelap sebelum fajar. Keindahan Sikunir bukan sekadar tentang pemandangan, tapi tentang kedamaian saat alam memulai harinya. Fenomena alam ini telah menarik ribuan wisatawan mancanegara setiap tahunnya, menjadikan Wonosobo sebagai pusat pariwisata petualangan yang tidak boleh dilewatkan dalam rencana perjalanan Anda di Indonesia.`
  },
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kemegahan Kompleks Candi Arjuna',
    excerpt: 'Menelusuri jejak peradaban Hindu tertua di Jawa yang berada di ketinggian 2000 mdpl.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    content: `Kompleks Candi Arjuna merupakan permata sejarah yang terletak di jantung Dataran Tinggi Dieng. Sebagai salah satu peninggalan budaya tertua di Pulau Jawa, candi ini diyakini dibangun pada masa pemerintahan Dinasti Sanjaya sekitar abad ke-8 atau awal abad ke-9 Masehi. Lokasinya yang berada di ketinggian lebih dari 2.000 meter di atas permukaan laut memberikan nuansa mistis dan spiritual yang sangat kuat, dikelilingi oleh pegunungan vulkanik dan kabut tipis yang seringkali menyelimuti area situs sejarah ini.

Arsitektur Candi Arjuna mencerminkan pengaruh seni India utara yang disesuaikan dengan kearifan lokal Jawa Kuno. Kompleks ini terdiri dari lima bangunan utama yang berjejer dari utara ke selatan, yaitu Candi Arjuna, Candi Srikandi, Candi Puntadewa, Candi Sembadra, dan satu candi perwara yang dinamakan Candi Semar yang berdiri tepat di depan Candi Arjuna. Setiap bangunan memiliki karakteristik unik; misalnya, Candi Arjuna yang merupakan bangunan utama memiliki denah dasar persegi dengan atap bertingkat yang dihiasi dengan ukiran kala dan makara yang sangat detail. Dinding-dindingnya yang polos namun kokoh mencerminkan filosofi kesederhanaan dan ketenangan jiwa yang dianut oleh masyarakat saat itu.

Fungsi utama dari pembangunan candi-candi di Dieng pada masa lampau adalah sebagai tempat pemujaan Dewa Siwa. Dataran Tinggi Dieng sendiri diambil dari kata "Di" yang berarti tempat atau gunung, dan "Hyang" yang berarti dewa atau leluhur, sehingga secara harfiah berarti "Tempat Para Dewa". Selain sebagai tempat ibadah, area ini juga menjadi pusat studi agama dan filsafat pada zamannya. Menjelajahi kompleks ini, pengunjung dapat melihat sisa-sisa sistem drainase kuno yang disebut "Darmasala", yang membuktikan betapa majunya pengetahuan teknik sipil nenek moyang kita dalam mengelola aliran air di tanah pegunungan yang rawan banjir.

Setiap tahun, kompleks ini juga menjadi pusat penyelenggaraan Dieng Culture Festival, sebuah acara budaya besar yang menampilkan ritual pemotongan rambut gimbal anak-anak Dieng. Ritual ini dipercaya sebagai cara untuk membebaskan anak-anak dari nasib buruk atau gangguan roh jahat. Pemandangan candi yang dibalut kain kain tradisional dan dikelilingi ribuan lampion saat festival berlangsung menciptakan harmoni antara sejarah masa lalu dan kehidupan modern. Bagi pengunjung yang datang di hari biasa, berjalan di antara rerumputan hijau dan batu-batu candi yang dingin di pagi hari memberikan kesempatan untuk refleksi diri dan menghargai ketahanan sejarah yang mampu melampaui waktu selama lebih dari seribu tahun. Kompleks Candi Arjuna bukan sekadar tumpukan batu, melainkan saksi bisu kejayaan peradaban Jawa yang tetap abadi di puncak gunung.`
  },
  {
    slug: 'kuliner-mie-ongklok',
    title: 'Kelezatan Otentik Mie Ongklok',
    excerpt: 'Mie Ongklok bukan sekadar mie rebus biasa. Pelajari sejarah dan resep rahasia di balik hidangan legendaris ini.',
    category: 'Kuliner',
    type: 'destination',
    date: '15 Mei 2024',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    content: `Jika Anda berkunjung ke Wonosobo, ada satu hidangan yang wajib masuk dalam daftar kuliner Anda: Mie Ongklok. Hidangan ini bukan sekadar mie rebus biasa, melainkan sebuah simfoni rasa yang tercipta dari perpaduan bahan lokal yang unik dan teknik memasak tradisional yang telah diwariskan turun-temurun. Keunikan Mie Ongklok terletak pada tekstur kuahnya yang kental dan gurih, serta cara penyajiannya yang khas menggunakan alat bambu bernama "Ongklok".

Nama "Ongklok" sendiri merujuk pada alat masak tradisional berbentuk keranjang kecil dari bambu yang digunakan untuk mencelupkan mie dan sayuran ke dalam air mendidih. Teknik "mengongklok" ini memastikan mie matang sempurna tanpa merusak teksturnya. Satu porsi Mie Ongklok biasanya terdiri dari mie kuning, irisan kol segar, dan daun kucai yang melimpah. Kucai sendiri merupakan sayuran khas Wonosobo yang memberikan aroma segar dan rasa sedikit pedas yang unik, sangat kontras dengan kuahnya yang manis dan gurih.

Kuah Mie Ongklok yang kental, atau sering disebut "Loh", terbuat dari campuran pati singkong (kanji), gula jawa, ebi (udang kering), dan bumbu rempah lainnya. Kekentalan kuah ini berfungsi untuk menjaga suhu mie agar tetap hangat lebih lama, sebuah adaptasi cerdas terhadap cuaca Wonosobo yang cenderung dingin. Rasanya yang manis-gurih sangat memanjakan lidah, terutama saat dinikmati dalam keadaan panas mengepul. Namun, pengalaman makan Mie Ongklok belum lengkap tanpa kehadiran "Tempe Kemul" dan "Sate Sapi".

Tempe Kemul adalah tempe goreng tepung yang diberi banyak kunyit sehingga berwarna kuning cerah, dengan taburan kucai yang renyah. "Kemul" dalam bahasa Jawa berarti selimut, menggambarkan tempe yang "diselimuti" tepung tebal yang renyah. Sementara itu, Sate Sapi bumbu kacang memberikan tambahan protein yang kaya rasa. Cara makan yang benar adalah dengan mencelupkan Tempe Kemul ke dalam kuah kental mie, menciptakan perpaduan tekstur renyah dan lembut yang luar biasa. Kuliner ini telah ada sejak zaman kolonial dan tetap menjadi favorit hingga kini karena kesederhanaannya yang sarat akan makna budaya masyarakat pegunungan. Setiap suapan Mie Ongklok bercerita tentang kehangatan masyarakat Wonosobo yang selalu menyambut tamu dengan tangan terbuka dan hidangan yang menenangkan jiwa.`
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
    content: `Sejarah Wonosobo adalah narasi tentang transformasi sebuah lembah terpencil menjadi pusat pemerintahan dan kebudayaan yang dinamis di jantung Jawa Tengah. Nama "Wonosobo" berasal dari gabungan dua kata dalam bahasa Sansekerta: "Wana" yang berarti hutan, dan "Saba" yang berarti tempat berkumpul atau tempat pertemuan. Secara filosofis, Wonosobo berarti sebuah hutan yang digunakan sebagai tempat berkumpulnya masyarakat atau tempat untuk bermusyawarah. Penamaan ini mencerminkan kondisi geografis masa lampau di mana wilayah ini merupakan hamparan hutan lebat yang kemudian dibuka oleh para pionir.

Berdirinya Wonosobo sebagai unit administratif tidak lepas dari peran tiga tokoh sentral yang dikenal sebagai "Tiga Serangkai": Kyai Kolodete, Kyai Walik, dan Kyai Karim. Kyai Kolodete membuka wilayah Dataran Tinggi Dieng, Kyai Walik mendiami wilayah yang sekarang menjadi pusat kota Wonosobo, dan Kyai Karim bermukim di daerah Kalibeber. Ketiga tokoh spiritual ini meletakkan fondasi sosial dan keagamaan yang sangat kuat bagi masyarakat Wonosobo. Hari jadi Wonosobo diperingati setiap tanggal 24 Juli, merujuk pada momen penting di tahun 1825 saat Wonosobo secara resmi diangkat menjadi Kadipaten di bawah kepemimpinan Tumenggung Setjonegoro.

Selama masa Perang Diponegoro (1825-1830), Wonosobo memegang peranan strategis sebagai basis pertahanan pasukan Pangeran Diponegoro. Letaknya yang berada di pegunungan memberikan keuntungan taktis dalam perang gerilya melawan pasukan kolonial Belanda. Setelah perang berakhir, pemerintah kolonial mulai mengembangkan Wonosobo sebagai daerah perkebunan karena tanahnya yang sangat subur dan iklimnya yang sejuk, sangat cocok untuk tanaman ekspor seperti teh, tembakau, dan kina. Jejak kolonial ini masih bisa kita temukan pada arsitektur beberapa gedung tua di pusat kota dan hamparan perkebunan teh Tambi yang luas.

Memasuki era kemerdekaan, Wonosobo terus berkembang tanpa meninggalkan identitas agrarisnya. Kota ini dikenal sebagai "Kota Bunga" dan "Kota Sejuk" karena kebersihan dan keteraturannya. Transformasi Wonosobo dari sekadar tempat pertemuan di tengah hutan menjadi sebuah kabupaten yang modern namun tetap memegang teguh adat istiadat adalah bukti ketangguhan masyarakatnya. Nilai-nilai gotong royong dan spiritualitas yang ditanamkan oleh para leluhur tetap menjadi kompas dalam pembangunan daerah. Menelusuri sejarah Wonosobo berarti menghargai proses panjang bagaimana alam dan manusia bekerja sama menciptakan sebuah rumah yang hangat di tengah ketinggian pegunungan Jawa.`
  },
  {
    slug: 'keajaiban-geografis-dieng',
    title: 'Geografis: Di Atas Awan Jawa',
    excerpt: 'Mengapa Wonosobo memiliki karakteristik geografis yang sangat unik dibandingkan daerah lain?',
    category: 'Geografis',
    type: 'story',
    date: '08 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'dieng-fog')?.imageUrl || '',
    content: `Wonosobo bukan sekadar sebuah kabupaten; secara geografis, ia adalah sebuah keajaiban alam yang terletak di "pundak" Pulau Jawa. Terletak di antara dua gunung api raksasa yang masih aktif, Gunung Sindoro dan Gunung Sumbing, wilayah ini memiliki bentang alam yang didominasi oleh perbukitan terjal dan dataran tinggi vulkanik. Kondisi geografis ini menjadikannya salah satu daerah dengan suhu terdingin di Pulau Jawa, di mana rata-rata suhu harian berkisar antara 15 hingga 20 derajat Celcius, dan bahkan bisa turun di bawah nol derajat di wilayah Dieng.

Dataran Tinggi Dieng, yang sebagian besar masuk dalam wilayah administrasi Wonosobo, adalah sebuah kaldera raksasa yang terbentuk dari letusan gunung berapi purba jutaan tahun yang lalu. Aktivitas vulkanik ini masih berlangsung hingga hari ini, ditandai dengan adanya kawah-kawah aktif seperti Kawah Sikidang yang terus mengeluarkan uap belerang. Keajaiban geografis lainnya adalah Telaga Warna, sebuah danau yang airnya dapat berubah warna dari hijau, biru, hingga kuning karena kandungan sulfur yang sangat tinggi di dasar danau. Fenomena ini jarang ditemukan di belahan dunia lain dan menjadi objek studi ilmiah yang penting.

Selain fenomena vulkanik, topografi Wonosobo yang bergelombang menciptakan tanah yang luar biasa subur. Hal ini disebabkan oleh endapan abu vulkanik selama ribuan tahun yang kaya akan nutrisi tanah. Inilah alasan mengapa Wonosobo menjadi salah satu lumbung sayur terbesar di Indonesia. Tanaman seperti kentang, kubis, wortel, dan buah khas seperti Carica (pepaya gunung) tumbuh subur di sini. Namun, tantangan geografis seperti risiko tanah longsor dan aktivitas kawah juga menjadi bagian dari kehidupan sehari-hari masyarakat. Mereka telah belajar untuk beradaptasi dan menghormati kekuatan alam yang memberi mereka kehidupan.

Fenomena yang paling menarik perhatian dunia adalah "Bun Upas" atau embun es. Pada musim kemarau (Juli-Agustus), suhu di Dieng dapat mencapai titik beku, menyebabkan embun yang menempel di tanaman membeku menjadi kristal es putih. Pemandangan ini membuat Dieng tampak seperti daratan Eropa di tengah khatulistiwa. Secara geografis, Wonosobo adalah laboratorium alam yang sempurna untuk mempelajari vulkanologi, botani, dan klimatologi. Berada di sini memberikan perspektif baru tentang betapa dinamisnya bumi yang kita tinggali. Keindahan visual yang kita nikmati saat ini adalah hasil dari gejolak vulkanik masa lalu yang kini telah berubah menjadi surga bagi siapa saja yang mengunjunginya.`
  },
  {
    slug: 'sosial-masyarakat-pegunungan',
    title: 'Sosial: Kehangatan di Tengah Dingin',
    excerpt: 'Melihat lebih dekat kehidupan sosial masyarakat Wonosobo yang ramah dan menjunjung gotong royong.',
    category: 'Sosial',
    type: 'story',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZW9wbGUlMjBzbWlsaW5nfGVufDB8fHx8MTc3NDE1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Ada sebuah paradoks menarik di Wonosobo: semakin dingin suhunya, semakin hangat sambutan masyarakatnya. Kehidupan sosial di Wonosobo sangat dipengaruhi oleh lingkungan pegunungan yang menantang namun subur. Kondisi alam ini membentuk karakter masyarakat yang tangguh, sabar, namun sangat rendah hati. Nilai gotong royong bukan sekadar semboyan, melainkan urat nadi kehidupan sehari-hari. Mulai dari membangun rumah, mengolah lahan pertanian, hingga menyelenggarakan upacara adat, semuanya dilakukan dengan semangat kebersamaan yang tulus.

Salah satu tradisi sosial yang paling kental adalah budaya "Nyangkruk" atau berkumpul secara informal. Di desa-desa, Anda akan sering melihat warga berkumpul di pos ronda atau di teras rumah di malam hari, berselimut sarung tebal sambil menikmati kopi panas dan Tempe Kemul. Dalam pertemuan sederhana inilah, informasi dibagikan, masalah diselesaikan, dan ikatan persaudaraan diperkuat. Bahasa yang digunakan adalah bahasa Jawa dengan dialek khas Wonosobo yang terdengar mantap dan jujur. Kejujuran adalah mata uang yang paling berharga dalam interaksi sosial mereka; mereka akan mengatakan apa adanya dengan cara yang tetap santun.

Agama dan spiritualitas juga memegang peranan krusial dalam membentuk perilaku sosial. Mayoritas masyarakat Wonosobo adalah Muslim yang taat namun sangat toleran. Mereka hidup berdampingan dengan damai, menghargai perbedaan, dan tetap melestarikan tradisi-tradisi leluhur yang tidak bertentangan dengan nilai agama. Upacara seperti "Merti Desa" (bersih desa) merupakan perpaduan antara rasa syukur kepada Sang Pencipta dan penghormatan kepada alam yang telah memberi mereka rezeki. Dalam acara ini, masyarakat akan membuat gunungan hasil bumi yang kemudian dibagikan secara bersama-sama, melambangkan pemerataan kesejahteraan.

Terhadap wisatawan, masyarakat Wonosobo memiliki sikap yang sangat terbuka dan membantu. Jangan heran jika Anda disapa dengan ramah oleh petani kentang saat Anda sedang trekking, atau ditawari mampir untuk sekadar minum teh hangat di rumah penduduk saat Anda kehujanan. Mereka tidak melihat wisatawan sebagai objek ekonomi semata, melainkan sebagai tamu yang harus dimuliakan sesuai dengan ajaran leluhur. Keramahan yang otentik ini seringkali menjadi alasan mengapa banyak wisatawan memutuskan untuk kembali lagi ke Wonosobo. Kehangatan manusia di tengah dinginnya udara gunung adalah kekayaan non-materi yang paling berharga dari kabupaten ini.`
  },
  {
    slug: 'tips-cuaca-dieng',
    title: 'Tips: Menghadapi Cuaca Ekstrem',
    excerpt: 'Dari fenomena bun upas (embun es) hingga persiapan pakaian. Pastikan liburan Anda tetap nyaman.',
    category: 'Tips',
    type: 'story',
    date: '10 Juli 2024',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmb2dneSUyMG1vdW50YWlufGVufDB8fHx8MTc3MDExNTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Mengunjungi Wonosobo, khususnya wilayah Dieng, memerlukan persiapan yang berbeda dibandingkan destinasi wisata lain di Indonesia. Karena letak geografisnya yang tinggi, perubahan cuaca bisa terjadi sangat cepat dan suhunya bisa sangat ekstrem bagi orang yang terbiasa hidup di dataran rendah. Kunci utama untuk menikmati perjalanan Anda di sini adalah persiapan yang matang dan pemahaman tentang siklus alam setempat. Berikut adalah panduan lengkap untuk menghadapi cuaca di Wonosobo agar liburan Anda tetap nyaman dan berkesan.

Pakaian berlapis (layering) adalah strategi paling efektif. Suhu bisa terasa hangat di siang hari saat matahari terik, namun bisa turun drastis begitu matahari terbenam. Mulailah dengan lapisan dasar yang menyerap keringat, diikuti dengan jaket fleece atau sweter, dan tutup dengan jaket waterproof atau windbreaker sebagai lapisan luar. Jangan lupa membawa syal, sarung tangan, dan penutup telinga, terutama jika Anda berencana melihat matahari terbit di Bukit Sikunir. Suhu pagi hari bisa mencapai 5 derajat Celcius, dan angin kencang di puncak bukit akan membuat suhu terasa jauh lebih dingin dari aslinya.

Waktu kunjungan sangat menentukan fenomena alam apa yang akan Anda temui. Jika Anda ingin melihat fenomena "Bun Upas" atau embun es yang legendaris, datanglah pada bulan Juli hingga Agustus. Ini adalah puncak musim kemarau di mana langit sangat cerah namun suhu di malam hari bisa mencapai minus derajat Celcius. Pastikan Anda memesan penginapan yang memiliki pemanas ruangan atau setidaknya menyediakan selimut tebal. Sebaliknya, jika Anda datang di musim hujan (Desember-Februari), pastikan selalu membawa jas hujan atau payung karena kabut tebal bisa turun sewaktu-waktu dan membatasi jarak pandang saat berkendara.

Kesehatan fisik adalah faktor penting lainnya. Udara tipis di ketinggian berarti kandungan oksigen lebih rendah. Jika Anda merasa pusing atau sesak napas, segera beristirahat dan jangan memaksakan diri melakukan aktivitas berat. Minumlah banyak air putih untuk menjaga hidrasi tubuh karena udara dingin seringkali membuat kita lupa merasa haus, padahal tubuh tetap kehilangan cairan. Gunakan juga pelembab kulit atau lip balm karena udara kering di ketinggian bisa membuat kulit dan bibir pecah-pecah. Terakhir, selalu perhatikan peringatan dari petugas keamanan di area kawah vulkanik; uap belerang bisa menjadi beracun jika terhirup dalam konsentrasi tinggi saat cuaca tertentu. Dengan persiapan yang tepat, cuaca dingin Wonosobo justru akan menjadi bumbu yang menambah keunikan petualangan Anda di negeri di atas awan.`
  }
];
