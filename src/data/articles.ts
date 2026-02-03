
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
  // ZONA 1 DESTINATIONS (NATURE)
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Jembatan Kaca Menuju Awan',
    excerpt: 'Destinasi modern dengan jembatan kaca yang menawarkan pemandangan 360 derajat pegunungan Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Pintu Langit Sky View telah menjadi fenomena baru dalam dunia pariwisata Wonosobo dan Dieng. Terletak di jalur utama menuju kawasan Dieng, tempat ini menawarkan sensasi berdiri di ketinggian dengan latar belakang megah Gunung Sindoro dan Gunung Sumbing. Daya tarik utamanya adalah jembatan kaca yang menjorok ke lembah, memberikan pengalaman adrenalin yang unik bagi siapa saja yang berani melangkah di atasnya. Saat kabut tipis mulai turun, Anda benar-benar akan merasa seolah sedang berjalan di atas awan, sebuah momen yang sempurna untuk diabadikan dalam foto.

Filosofi di balik nama "Pintu Langit" mencerminkan letaknya yang berada di gerbang masuk dataran tinggi. Pengelola telah menata kawasan ini dengan konsep modern namun tetap menghargai panorama alam. Selain jembatan kaca, terdapat berbagai dek pengamatan yang memungkinkan pengunjung melihat lekukan jalanan Wonosobo-Dieng yang berkelok dari ketinggian. Di pagi hari, tempat ini menjadi lokasi favorit untuk melihat "negeri di atas awan" tanpa harus melakukan pendakian berat. Fasilitas kafe di area ini juga memungkinkan Anda menikmati kopi panas Wonosobo sambil memandang lembah yang hijau.

Kunjungan ke Pintu Langit paling disarankan saat cuaca cerah, terutama pada pagi hari atau menjelang matahari terbenam. Cahaya keemasan matahari yang menyinari permukaan kaca menciptakan pantulan yang dramatis. Meskipun ini adalah destinasi buatan, integrasinya dengan lanskap pegunungan sekitarnya sangat harmonis. Bagi wisatawan yang membawa keluarga, tempat ini relatif aman dan mudah dijangkau. Pintu Langit bukan hanya tentang foto, tetapi tentang perspektif baru melihat keindahan Wonosobo dari titik yang sebelumnya sulit dijangkau oleh mata manusia biasa.`
  },
  {
    slug: 'bukit-sikunir-sunrise',
    title: 'Golden Sunrise Bukit Sikunir',
    excerpt: 'Menikmati fenomena matahari terbit terbaik se-Asia Tenggara dari puncak Sikunir.',
    category: 'Alam',
    type: 'destination',
    date: '12 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'hero-sikunir')?.imageUrl || '',
    content: `Bukit Sikunir merupakan destinasi impian bagi setiap pemburu fajar. Dikenal secara luas sebagai tempat terbaik untuk menyaksikan fenomena "Golden Sunrise" di Asia Tenggara, bukit ini menawarkan panorama yang tak tertandingi di ketinggian sekitar 2.300 meter di atas permukaan laut. Nama "Sikunir" diambil dari kata "Kunir" (kunyit) karena warna cahaya matahari terbit yang terpancar di sini menyerupai warna jingga kekuningan kunyit yang sangat pekat.

Perjalanan dimulai dari Desa Sembungan, desa tertinggi di Pulau Jawa. Pendakian relatif ringan, memakan waktu sekitar 15 hingga 30 menit. Saat mencapai puncak, rasa lelah akan terbayar dengan munculnya semburat jingga di ufuk timur. Jika beruntung, Anda bisa melihat siluet delapan gunung sekaligus: Sindoro, Sumbing, Prau, Merapi, Merbabu, Ungaran, Telomoyo, hingga Muria. Keajaiban ini sering kali diiringi dengan hamparan awan putih yang menutupi lembah, menciptakan sensasi seolah berdiri di atas negeri di atas awan.

Selain matahari terbit, di area Bukit Sikunir terdapat Telaga Cebong yang memberikan pantulan cahaya indah di pagi hari. Pengunjung disarankan mengenakan pakaian tebal berlapis karena suhu bisa mencapai 5 derajat celcius. Keindahan Sikunir bukan sekadar tentang pemandangan, tapi tentang kedamaian saat alam memulai harinya. Fenomena alam ini menarik ribuan wisatawan mancanegara setiap tahun, menjadikan Wonosobo pusat pariwisata petualangan yang tak terlupakan.`
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Eksotisme Perut Bumi',
    excerpt: 'Melihat aktivitas vulkanik Dieng dari dekat di kawah yang unik karena sering berpindah tempat.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'kawah-sikidang')?.imageUrl || '',
    content: `Kawah Sikidang adalah kawah vulkanik aktif terbesar di dataran tinggi Dieng yang paling mudah diakses oleh wisatawan. Nama "Sikidang" diambil dari karakter hewan Kidang (rusa) dalam bahasa Jawa, karena kolam lumpur panas di kawah ini seringkali melompat-lompat atau berpindah tempat dari satu titik ke titik lain dalam area yang luas. Berbeda dengan kawah pada umumnya yang berada di puncak gunung, Kawah Sikidang berada di dataran rendah yang relatif rata, memungkinkan pengunjung berjalan sangat dekat dengan aktivitas vulkanik tersebut.

Fenomena kepulan uap belerang yang putih dan tebal menjadi ciri khas utama tempat ini. Pengunjung akan disambut dengan aroma belerang yang menyengat namun memberikan sensasi petualangan yang nyata. Pemerintah telah membangun jembatan kayu (boardwalk) sepanjang ratusan meter yang mengelilingi area kawah, sehingga pengunjung dapat berjalan dengan aman tanpa harus menginjak tanah yang panas atau berlumpur. Pemandangan tanah berwarna keputihan akibat reaksi kimia vulkanik menciptakan lanskap yang mirip dengan permukaan planet lain.

Di Kawah Sikidang, Anda juga bisa mencoba pengalaman unik merebus telur dalam air kawah yang panas. Masyarakat setempat menyediakan telur mentah yang diikat dengan jaring kecil untuk direbus selama beberapa menit hingga matang sempurna. Kawah ini bukan hanya objek wisata, tapi juga laboratorium alam untuk mempelajari energi geotermal. Dengan latar belakang bukit-bukit hijau yang kontras dengan asap putih, Kawah Sikidang menawarkan keindahan estetika sekaligus kekuatan alam yang luar biasa.`
  },

  // HERITAGE & CULTURE
  {
    slug: 'kompleks-candi-arjuna',
    title: 'Kemegahan Kompleks Candi Arjuna',
    excerpt: 'Menelusuri jejak peradaban Hindu tertua di Jawa yang berada di ketinggian 2000 mdpl.',
    category: 'Budaya',
    type: 'destination',
    date: '15 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'candi-arjuna')?.imageUrl || '',
    content: `Kompleks Candi Arjuna merupakan permata sejarah yang terletak di jantung Dataran Tinggi Dieng. Sebagai salah satu peninggalan budaya tertua di Pulau Jawa, candi ini diyakini dibangun pada masa pemerintahan Dinasti Sanjaya sekitar abad ke-8 Masehi. Lokasinya yang berada di ketinggian lebih dari 2.000 meter memberikan nuansa mistis dan spiritual yang sangat kuat, dikelilingi oleh pegunungan vulkanik dan kabut tipis.

Arsitektur Candi Arjuna mencerminkan pengaruh seni India utara yang disesuaikan dengan kearifan lokal Jawa Kuno. Kompleks ini terdiri dari lima bangunan utama: Candi Arjuna, Srikandi, Puntadewa, Sembadra, dan Candi Semar. Setiap bangunan memiliki karakteristik unik, mencerminkan filosofi kesederhanaan dan ketenangan jiwa. Fungsi utamanya adalah sebagai tempat pemujaan Dewa Siwa, yang membuat Dieng dikenal sebagai "Tempat Para Dewa".

Setiap tahun, kompleks ini menjadi pusat Dieng Culture Festival, menampilkan ritual pemotongan rambut gimbal anak-anak Dieng. Pemandangan candi yang dibalut kain tradisional menciptakan harmoni antara sejarah masa lalu dan kehidupan modern. Berjalan di antara batu-batu candi yang dingin di pagi hari memberikan kesempatan untuk refleksi diri dan menghargai ketahanan sejarah yang mampu melampaui waktu selama lebih dari seribu tahun. Struktur bangunan yang kokoh meskipun telah berusia ribuan tahun menjadi bukti kecanggihan teknologi sipil leluhur Nusantara.`
  },
  {
    slug: 'candi-bima-arsitektur-unik',
    title: 'Candi Bima: Keunikan Arsitektur India di Tanah Jawa',
    excerpt: 'Candi dengan gaya arsitektur yang sangat berbeda dari candi lainnya di Dieng, menyerupai kuil di India.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'temple-detail')?.imageUrl || '',
    content: `Candi Bima menempati posisi istimewa dalam sejarah arsitektur Nusantara. Terletak menyendiri di jalur masuk kawasan Dieng dari arah selatan, candi ini memiliki gaya bangunan yang sangat kontras jika dibandingkan dengan kelompok Candi Arjuna. Arsitekturnya mengadopsi gaya Shikhara dari India Utara dan gaya Kudu dari India Selatan, menjadikannya satu-satunya contoh bangunan suci di Indonesia dengan karakteristik visual sedemikian rupa.

Daya tarik utama Candi Bima terletak pada bagian atapnya yang berbentuk limas dengan hiasan relung-relung berisi relief wajah manusia yang dikenal sebagai "Kudu". Relief ini menggambarkan Dewa atau figur suci dalam posisi seolah-olah sedang mengintip dari jendela langit. Teknik pemahatan batu andesit yang begitu detail menunjukkan betapa tingginya apresiasi seni para pembangunnya di masa silam. Bangunannya yang menjulang memberikan kesan megah sekaligus misterius di tengah lanskap pegunungan yang sering tertutup kabut.

Menelusuri Candi Bima adalah tentang memahami akulturasi budaya yang terjadi ribuan tahun lalu. Keberadaan candi ini membuktikan bahwa Dieng pada masa lampau merupakan pusat pertemuan intelektual dan spiritual berskala internasional. Pengunjung yang datang ke sini akan merasakan kesunyian yang khusyuk, berbeda dengan keramaian di kompleks utama. Candi Bima adalah monumen bisu tentang kejayaan peradaban Jawa Kuno yang selalu mampu menyerap inspirasi luar dan mengolahnya menjadi mahakarya lokal yang unik.`
  },
  {
    slug: 'museum-kaliasa-sejarah-dieng',
    title: 'Museum Kaliasa: Jendela Masa Lalu Dieng',
    excerpt: 'Pusat informasi terlengkap mengenai sejarah, geologi, dan kebudayaan masyarakat Dataran Tinggi Dieng.',
    category: 'Budaya',
    type: 'destination',
    date: '20 Jan 2025',
    image: 'https://images.unsplash.com/photo-1590059392683-9b8893ccf971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtdXNldW0lMjBhbnRpcXVpdHxlbn8wfHx8fDE3NzQxNTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Museum Kaliasa bukan sekadar gedung penyimpan benda kuno, melainkan gerbang pengetahuan utama bagi siapa pun yang ingin memahami jati diri Dieng. Nama "Kaliasa" diambil dari nama gunung tempat bersemayamnya Dewa Siwa, selaras dengan status Dieng sebagai tempat suci. Museum ini terbagi menjadi beberapa paviliun yang masing-masing mengisahkan sisi berbeda dari dataran tinggi ini, mulai dari proses terbentuknya secara geologis jutaan tahun lalu hingga kehidupan masyarakat modern saat ini.

Di dalam museum, pengunjung dapat melihat berbagai koleksi artefak asli yang ditemukan di sekitar kawasan candi, seperti arca-arca indah, peralatan rumah tangga kuno, dan prasasti penting. Salah satu bagian yang paling menarik adalah dokumentasi mengenai flora dan fauna endemik Dieng, serta penjelasan mendalam tentang fenomena alam seperti kawah beracun dan embun es. Melalui layar audiovisual, pengunjung juga dapat menyaksikan rekaman ritual budaya yang langka, seperti upacara pemotongan rambut gimbal yang legendaris.

Mengunjungi Museum Kaliasa sangat disarankan sebelum Anda memulai penjelajahan di situs-situs alam atau budaya. Informasi yang didapat di sini akan memberikan konteks yang jauh lebih dalam saat Anda berdiri di depan candi atau di tepi kawah. Museum ini adalah bentuk penghormatan terhadap leluhur dan sekaligus sarana edukasi untuk generasi mendatang agar tetap mencintai warisan bumi Dieng. Lokasinya yang berada di atas bukit memberikan bonus pemandangan seluruh kawasan Dieng yang sangat memukau.`
  },
  {
    slug: 'gua-semar-mistisisme-dieng',
    title: 'Gua Semar: Pusat Energi Mistis Dieng',
    excerpt: 'Tempat perenungan spiritual yang diyakini sebagai tempat meditasi para penguasa masa lalu.',
    category: 'Budaya',
    type: 'destination',
    date: '25 Jan 2025',
    image: PlaceHolderImages.find(img => img.id === 'cave')?.imageUrl || '',
    content: `Gua Semar memegang peranan penting dalam kosmologi spiritual masyarakat Jawa. Terletak di kawasan Bukit Semar, tak jauh dari Telaga Warna, gua alam ini telah lama dikenal sebagai tempat "laku prihatin" atau meditasi bagi mereka yang mencari kejernihan batin. Nama "Semar" merujuk pada tokoh utama dalam pewayangan Jawa yang dianggap sebagai pamong atau guru kebijaksanaan. Gua ini sering dikaitkan dengan kedatangan tokoh-tokoh besar bangsa Indonesia yang konon melakukan meditasi di sini untuk mendapatkan petunjuk atau kekuatan spiritual.

Suasana di sekitar Gua Semar sangat hening, hanya terdengar suara kicauan burung gunung dan desiran angin di antara pepohonan rimbun. Pintu masuk gua yang sempit memberikan kesan misterius, mengisyaratkan bahwa untuk mencapai kedalaman batin, seseorang harus melepaskan atribut duniawi. Di dalam gua, udaranya sangat lembap dan dingin, namun bagi para pencari spiritual, tempat ini memancarkan energi ketenangan yang luar biasa. Tidak jauh dari Gua Semar, terdapat pula Gua Sumur yang memiliki sumber mata air suci yang dipercaya memiliki khasiat penyembuhan.

Gua Semar bukan hanya tentang mistisisme, tetapi tentang hubungan harmonis antara manusia dan alam. Masyarakat setempat sangat menjaga kesucian tempat ini dengan berbagai aturan adat. Bagi wisatawan, berkunjung ke Gua Semar adalah kesempatan untuk merasakan sisi lain dari Dieng yang lebih tenang dan introspektif. Ini adalah tempat di mana sejarah, legenda, dan spiritualitas menyatu dalam kesunyian yang abadi, mengingatkan kita akan kecilnya manusia di hadapan kekuatan alam semesta.`
  },

  // FOOD & DINING
  {
    slug: 'kuliner-mie-ongklok',
    title: 'Kelezatan Otentik Mie Ongklok',
    excerpt: 'Mie Ongklok bukan sekadar mie rebus biasa. Pelajari sejarah dan resep rahasia di balik hidangan legendaris ini.',
    category: 'Kuliner',
    type: 'destination',
    date: '15 Mei 2024',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    content: `Mie Ongklok adalah mahakarya kuliner dari Wonosobo yang telah melintasi zaman. Hidangan ini lahir dari kreativitas masyarakat lokal dalam memanfaatkan bahan-bahan yang melimpah di pegunungan, seperti singkong untuk kuah kentalnya dan kucai sebagai penyedap alaminya. Keunikan Mie Ongklok terletak pada "Loh" atau kuah cokelat kentalnya yang gurih-manis, yang terbuat dari campuran pati singkong (tapioka), gula jawa, ebi (udang kering), dan bumbu rempah rahasia. Kekentalan kuah ini bukan tanpa alasan; di daerah berudara dingin seperti Wonosobo, kuah kental mampu menyimpan panas lebih lama sehingga mie tetap nikmat disantap hingga suapan terakhir.

Proses pembuatannya sangat khas menggunakan alat bambu bernama "Ongklok". Mie kuning dan sayuran kol serta kucai dimasukkan ke dalam keranjang bambu tersebut, lalu dicelup-celupkan ke dalam air mendidih berkali-kali hingga matang. Teknik ini memastikan mie memiliki tekstur yang kenyal namun lembut. Kucai yang melimpah memberikan aroma segar yang menyeimbangkan rasa kuah yang pekat. Penyajian Mie Ongklok dianggap belum sempurna tanpa kehadiran Sate Sapi bumbu kacang yang empuk dan Tempe Kemul yang renyah.

Menikmati Mie Ongklok adalah sebuah pengalaman budaya. Di setiap sudut kota Wonosobo, Anda akan menemukan warung-warung Mie Ongklok mulai dari yang legendaris hingga kaki lima. Setiap suapannya menceritakan tentang kehangatan masyarakat pegunungan yang sederhana namun penuh cita rasa. Hidangan ini telah menjadi identitas yang tak terpisahkan dari Wonosobo, sebuah simfoni rasa yang tercipta dari kearifan lokal yang terus dijaga kelestariannya.`
  },
  {
    slug: 'manisan-carica-para-dewa',
    title: 'Carica: Buah Emas dari Negeri Di Atas Awan',
    excerpt: 'Mengenal buah carica yang hanya tumbuh subur di dataran tinggi Dieng dan kisah di balik pengolahannya.',
    category: 'Kuliner',
    type: 'destination',
    date: '01 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'carica')?.imageUrl || '',
    content: `Carica (Vasconcellea pubescens) adalah ikon kuliner paling eksklusif dari dataran tinggi Dieng. Buah yang sering disebut sebagai "Pepaya Gunung" ini memiliki keunikan karena hanya dapat tumbuh subur pada ketinggian di atas 1.500 meter dengan suhu yang dingin. Meskipun aslinya berasal dari pegunungan Andes di Amerika Selatan, Carica telah menjadi bagian integral dari identitas Wonosobo selama puluhan tahun. Buahnya yang berwarna kuning cerah saat matang memiliki aroma yang sangat harum dan rasa yang khas—perpaduan antara mangga, pepaya, dan nanas.

Pengolahan Carica menjadi manisan memerlukan ketelitian tingkat tinggi. Bagian yang paling lezat justru terletak pada lendir yang membungkus bijinya, yang kemudian diperas untuk diambil sarinya sebagai sirup alami. Daging buahnya yang kenyal dipotong-potong dan direbus dalam sirup tersebut, menghasilkan manisan yang segar dan tahan lama tanpa bahan pengawet berlebih. Selain rasanya yang nikmat, Carica kaya akan vitamin A, C, dan enzim papain yang sangat baik untuk pencernaan. Oleh karena itu, masyarakat setempat sering menyebutnya sebagai buah kesehatan.

Saat ini, Carica telah menjadi industri kreatif yang menggerakkan ekonomi ribuan warga Wonosobo. Produk olahannya mulai dari manisan dalam botol, sirup, hingga keripik telah menjangkau pasar nasional. Mengunjungi pusat pengolahan Carica memberikan kesempatan bagi wisatawan untuk melihat langsung proses produksinya yang masih banyak menggunakan tenaga manusia (handmade). Membawa pulang sekotak manisan Carica bukan hanya membawa buah tangan, tetapi membawa sepotong keajaiban alam Dieng yang manis dan menyegarkan ke rumah Anda.`
  },
  {
    slug: 'tempe-kemul-khas-wonosobo',
    title: 'Tempe Kemul: Selimut Hangat di Tengah Kedinginan',
    excerpt: 'Gorengan khas Wonosobo dengan balutan tepung kuning yang renyah dan aroma kucai yang menggoda.',
    category: 'Kuliner',
    type: 'destination',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1626700051175-6518a4993f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHtmcmllZCUyMGZvb2R8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Tempe Kemul adalah camilan paling merakyat dan paling dicintai di Wonosobo. Nama "Kemul" dalam bahasa Jawa berarti selimut, yang menggambarkan bagaimana irisan tempe tipis "diselimuti" dengan adonan tepung yang tebal namun renyah. Berbeda dengan tempe mendoan yang cenderung lembek, Tempe Kemul digoreng hingga garing (crispy) di bagian pinggirannya, memberikan sensasi gigitan yang sangat memuaskan. Warna kuningnya yang khas berasal dari penggunaan kunyit alami, sementara aroma segarnya didapat dari irisan daun kucai yang melimpah dalam adonannya.

Kunci kelezatan Tempe Kemul terletak pada kesegaran bahannya. Tempe yang digunakan biasanya adalah tempe buatan pengrajin lokal yang dibungkus daun pisang, memberikan aroma yang lebih wangi. Adonan tepungnya merupakan campuran tepung beras dan tepung tapioka yang dibumbui dengan ketumbar, bawang putih, dan garam. Digoreng dalam minyak panas yang banyak, Tempe Kemul akan mengembang dan menciptakan pinggiran yang lebar dan renyah. Camilan ini paling nikmat disantap saat masih panas, ditemani dengan cabe rawit hijau yang pedas.

Bagi masyarakat Wonosobo, Tempe Kemul adalah teman setia dalam setiap kesempatan, mulai dari sarapan, teman minum teh di sore hari, hingga pendamping wajib Mie Ongklok. Hampir di setiap sudut jalan dan pasar tradisional, Anda akan menemukan penjual Tempe Kemul dengan wajannya yang besar. Tempe Kemul bukan sekadar gorengan biasa; ia adalah simbol kehangatan dan kebersamaan masyarakat pegunungan yang selalu siap berbagi kesederhanaan yang nikmat di tengah dinginnya udara Wonosobo.`
  },
  {
    slug: 'kopi-bowongso-aroma-gunung',
    title: 'Kopi Bowongso: Cita Rasa dari Lereng Sumbing',
    excerpt: 'Menikmati kopi arabika berkualitas tinggi yang ditanam di ketinggian ekstrem lereng Gunung Sumbing.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'coffee')?.imageUrl || '',
    content: `Wonosobo kini mulai diperhitungkan dalam peta kopi spesialti Indonesia, dan Kopi Bowongso adalah salah satu ujung tombaknya. Ditanam di Desa Bowongso yang terletak di lereng Gunung Sumbing pada ketinggian sekitar 1.500 hingga 1.800 meter, kopi arabika ini memiliki karakteristik rasa yang sangat unik. Tanah vulkanik yang kaya mineral dan iklim pegunungan yang stabil memberikan profil rasa yang kompleks, seringkali muncul aroma tembakau, rempah-rempah, dan tingkat keasaman (acidity) yang bersih dan menyegarkan.

Proses pengolahan kopi di Bowongso dilakukan dengan standar ketat oleh kelompok tani setempat. Mulai dari pemetikan buah merah (red cherry), proses pencucian, hingga penyangraian (roasting) dilakukan dengan hati-hati untuk menjaga kualitas aromanya. Para petani di Bowongso menerapkan sistem tumpang sari, di mana pohon kopi tumbuh di antara tanaman tembakau dan sayuran, yang secara tidak langsung memberikan pengaruh pada "body" dan aroma hasil akhirnya. Kopi ini tidak hanya tentang rasa, tetapi juga tentang perjuangan petani lokal dalam melestarikan ekosistem hutan melalui pertanian kopi yang ramah lingkungan.

Menikmati secangkir Kopi Bowongso di tengah kabut pegunungan adalah pengalaman yang tak terlupakan bagi para pencinta kopi. Kedai-kedai kopi di Wonosobo kini banyak menyajikan kopi ini dengan berbagai teknik seduh manual untuk menonjolkan karakter aslinya. Dengan meminum Kopi Bowongso, Anda tidak hanya menikmati minuman berkualitas, tetapi juga mendukung keberlanjutan ekonomi petani lereng gunung. Aroma harum yang keluar dari cangkir kopi ini seolah membawa kita pada ketenangan dan kemegahan puncak Gunung Sumbing yang abadi.`
  },

  // ALAM (NATURE) - ZONA 1 & 2
  {
    slug: 'batu-ratapan-angin',
    title: 'Batu Ratapan Angin: Memandang Telaga dari Ketinggian',
    excerpt: 'Dua batu karang raksasa yang menjadi balkon alam terbaik untuk melihat panorama Telaga Warna.',
    category: 'Alam',
    type: 'destination',
    date: '25 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2V8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Batu Ratapan Angin, yang juga dikenal sebagai Batu Pandang Dieng, adalah dua buah batu cadas raksasa yang bertumpuk di atas bukit. Lokasi ini merupakan "balkon alam" terbaik untuk menikmati keindahan Telaga Warna dan Telaga Pengilon dari ketinggian. Nama "Ratapan Angin" berasal dari suara desiran angin kencang yang berhembus melewati celah-celah batu dan pepohonan, menciptakan suara yang terdengar seperti rintihan atau tangisan bagi yang mendengarnya dengan saksama.

Untuk mencapai titik ini, pengunjung perlu melakukan trekking singkat menyusuri jalan setapak menanjak. Sesampainya di atas batu, mata akan dimanjakan dengan gradasi warna air telaga yang berubah-ubah karena kandungan belerang. Kontras antara Telaga Warna yang hijau kebiruan dan Telaga Pengilon yang jernih tampak sangat jelas dari sini. Latar belakang Gunung Prau dan pemukiman warga Dieng yang tertata rapi menambah estetika pemandangan yang tersaji.

Tempat ini sangat populer bagi fotografer karena sudut pandangnya yang sangat luas. Berdiri di atas batu ini memerlukan kehati-hatian karena posisinya yang berada tepat di pinggir tebing curam. Namun, bagi para pecinta alam, berada di sini memberikan perasaan bebas dan kekaguman mendalam pada lanskap Dieng yang purba. Batu Ratapan Angin adalah tempat di mana angin bercerita tentang keindahan Dieng yang tidak pernah pudar ditelan zaman.`
  },
  {
    slug: 'bukit-scooter-panorama',
    title: 'Bukit Scooter: Menatap Wajah Desa Dieng',
    excerpt: 'Bukit landai yang menawarkan pemandangan pemukiman Dieng dari ketinggian dengan akses yang mudah.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsYW5kc2NhcGV8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Bukit Scooter merupakan destinasi yang relatif baru namun cepat menjadi favorit karena kemudahan akses dan pemandangannya yang memukau. Berbeda dengan bukit-bukit lain di Dieng yang memerlukan trekking fisik yang cukup berat, Bukit Scooter dapat dicapai dengan berjalan kaki santai atau menggunakan sepeda motor dalam waktu singkat dari pusat Desa Dieng Kulon. Dari puncak bukit yang landai ini, pengunjung dapat melihat seluruh tata letak desa Dieng yang dikelilingi oleh barisan pegunungan.

Daya tarik utama Bukit Scooter adalah pemandangan saat malam hari dan pagi hari. Di malam hari, lampu-lampu rumah penduduk desa tampak seperti taburan bintang di lembah, menciptakan suasana yang romantis dan tenang. Sementara di pagi hari, matahari terbit akan menyinari kabut yang biasanya menyelimuti atap-atap rumah warga, memberikan kesan seolah desa tersebut benar-benar berada di negeri di atas awan. Pengelola juga telah menambahkan berbagai spot foto kreatif dan gazebo untuk bersantai.

Tempat ini sering menjadi pilihan bagi wisatawan yang ingin menikmati ketenangan tanpa harus bersusah payah mendaki tinggi. Bukit Scooter mengajarkan kita bahwa keindahan tidak selalu harus dicapai dengan perjuangan berat; terkadang ia hanya berjarak beberapa langkah dari tempat kita menginap. Bagi pecinta kopi, menikmati secangkir kopi hangat sambil memandang matahari perlahan naik di balik bukit adalah pengalaman yang sangat menenangkan jiwa di Bukit Scooter.`
  },
  {
    slug: 'telaga-warna-pengilon',
    title: 'Keajaiban Telaga Warna dan Telaga Pengilon',
    excerpt: 'Dua telaga berdampingan dengan karakteristik air yang berbeda secara dramatis karena reaksi belerang.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: PlaceHolderImages.find(img => img.id === 'telaga-warna')?.imageUrl || '',
    content: `Telaga Warna adalah ikon pariwisata Dieng yang paling misterius dan indah. Danau ini memiliki fenomena unik di mana warna airnya sering berubah-ubah, mulai dari hijau, biru, hingga kuning pekat. Hal ini disebabkan oleh tingginya kandungan sulfur di dasar danau yang bereaksi dengan sinar matahari. Di sebelahnya, hanya dipisahkan oleh daratan tipis, terdapat Telaga Pengilon. Yang luar biasa adalah air Telaga Pengilon tetap jernih seperti cermin (pengilon dalam bahasa Jawa berarti cermin), tidak terpengaruh oleh kandungan sulfur telaga di sebelahnya.

Kawasan ini dikelilingi oleh hutan yang masih asri dan beberapa gua alam yang memiliki nilai spiritual tinggi bagi masyarakat setempat, seperti Gua Semar dan Gua Sumur. Berjalan mengitari telaga melalui jalan setapak memberikan pengalaman eksplorasi yang tenang. Suasana mistis seringkali terasa saat kabut menyentuh permukaan air yang tenang, menciptakan harmoni alam yang sulit ditemukan di tempat lain.

Telaga Warna juga menjadi habitat bagi berbagai jenis burung gunung dan flora endemik. Keberadaan dua telaga dengan sifat air yang berbeda secara berdampingan merupakan keajaiban geologi yang menarik minat banyak peneliti. Bagi wisatawan, Telaga Warna adalah tempat di mana warna-warna alam bertemu dalam sebuah kolam vulkanik purba, memberikan ketenangan visual dan kedamaian batin bagi siapa saja yang mengunjunginya.`
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Keindahan di Jalur Ekstrem',
    excerpt: 'Air terjun megah yang membelah tebing hijau di jalur paling dramatis menuju Dieng.',
    category: 'Alam',
    type: 'destination',
    date: '05 Mar 2025',
    image: PlaceHolderImages.find(img => img.id === 'waterfall')?.imageUrl || '',
    content: `Air Terjun Sikarim terletak di Desa Mlandi, Kecamatan Garung, Kabupaten Wonosobo. Air terjun ini berada di tengah-tengah jalur alternatif dari Wonosobo menuju Dieng yang dikenal dengan pemandangan yang sangat ekstrem namun menakjubkan. Air yang jatuh dari tebing tinggi di antara hutan lindung yang lebat menciptakan pemandangan yang sangat dramatis, terutama saat musim hujan di mana volume air mencapai puncaknya dan kabut seringkali menyelimuti area sekitarnya.

Akses menuju Sikarim memerlukan kendaraan yang sehat dan pengemudi yang berpengalaman karena tanjakan dan turunan yang sangat curam. Namun, perjalanan tersebut akan terbayar lunas saat Anda melihat air yang seolah-olah turun dari langit di sela-sela bukit hijau. Suara gemuruh air dan udara yang sangat dingin memberikan kesegaran yang instan. Di sekitar air terjun, Anda dapat melihat hamparan kebun sayur penduduk yang menempel di lereng-lereng bukit dengan kemiringan hampir 45 derajat.

Sikarim bukan sekadar objek wisata, melainkan bagian dari ekosistem hutan Dieng yang menjaga ketersediaan air bagi lembah di bawahnya. Pengunjung disarankan untuk berhati-hati saat musim hujan karena kondisi jalan yang bisa menjadi licin. Air Terjun Sikarim adalah simbol kekuatan alam yang murni, tersembunyi di balik perbukitan Wonosobo yang menantang.`
  },
  {
    slug: 'swiss-van-java-sikarim',
    title: 'Swiss Van Java: Pesona Pegunungan Alpen di Wonosobo',
    excerpt: 'Menelusuri jalur Mlandi-Dieng yang menawarkan pemandangan lembah mirip pegunungan di Eropa.',
    category: 'Alam',
    type: 'destination',
    date: '07 Mar 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Sebutan "Swiss Van Java" disematkan pada jalur pendakian antara Desa Mlandi menuju dataran tinggi Dieng. Nama ini tidaklah berlebihan; saat Anda berada di titik-titik tertentu di jalur ini, Anda akan disuguhi pemandangan lembah yang sangat dalam, lereng-lereng bukit yang ditanami sayuran dengan rapi, and awan-awan yang menggantung rendah di puncak-puncak bukit. Atmosfer dan lanskapnya secara visual sangat mirip dengan kawasan pegunungan Alpen di Swiss.

Keunikan jalur ini adalah kombinasi antara keindahan alam yang liar dengan aktivitas pertanian masyarakat lokal. Di pagi hari, Anda bisa melihat para petani yang bekerja di ladang-ladang curam yang tertutup kabut tipis. Sinar matahari yang menembus celah-celah bukit memberikan efek cahaya yang magis bagi para fotografer. Jalur ini menjadi favorit bagi para pengendara motor dan pesepeda yang mencari tantangan fisik sekaligus kepuasan visual.

Menikmati "Swiss Van Java" paling baik dilakukan dengan perlahan. Berhenti di pinggir jalan untuk menghirup udara yang sangat bersih dan merasakan dinginnya angin gunung adalah bagian dari pengalaman. Tempat ini membuktikan bahwa Indonesia memiliki kemegahan lanskap yang tidak kalah dengan luar negeri. Wonosobo melalui jalur ini menawarkan sepotong surga bagi mereka yang merindukan pemandangan pegunungan yang luas dan menenangkan.`
  },
  {
    slug: 'telaga-menjer-wisata',
    title: 'Telaga Menjer: Danau Vulkanik di Kaki Gunung Sumbing',
    excerpt: 'Danau luas dengan air yang tenang, cocok untuk dinikmati dengan perahu kayu tradisional.',
    category: 'Alam',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsYWtlJTIwbW91bnRhaW58ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Telaga Menjer merupakan danau vulkanik terluas di Kabupaten Wonosobo yang terletak di kaki Gunung Sumbing. Danau ini terbentuk akibat letusan Gunung Pakuwaja pada masa lampau yang menciptakan cekungan raksasa yang kemudian terisi air. Dengan latar belakang perbukitan hijau dan Gunung Sumbing yang menjulang tinggi, Telaga Menjer menawarkan suasana yang sangat damai dan sejuk, jauh dari keramaian kota.

Aktivitas paling populer di sini adalah menyewa perahu kayu milik warga setempat untuk berkeliling danau. Dengan biaya yang terjangkau, Anda akan dibawa ke tengah danau di mana airnya sangat tenang dan jernih. Dari tengah danau, pemandangan bukit-bukit yang mengelilingi air tampak sangat megah. Telaga ini juga berfungsi sebagai pembangkit listrik tenaga air (PLTA), menunjukkan betapa pentingnya peran danau ini bagi kehidupan masyarakat sekitar.

Bagi mereka yang hobi memancing, Telaga Menjer adalah surga. Ikan-ikan segar dari danau ini seringkali menjadi menu utama di warung-warung makan di sekitarnya. Menikmati sore hari di tepi Telaga Menjer sambil melihat perahu-perahu kecil melintas di atas air yang berkilau adalah cara terbaik untuk menutup hari. Ketulusan alam Menjer memberikan energi positif bagi siapa saja yang datang berkunjung.`
  },
  {
    slug: 'kahyangan-skyline-view',
    title: 'Kahyangan Skyline: Sensasi Berdiri di Langit',
    excerpt: 'Destinasi wisata di atas Telaga Menjer dengan jembatan kaca dan spot paragliding.',
    category: 'Alam',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Kahyangan Skyline adalah destinasi modern yang terletak di perbukitan tepat di atas Telaga Menjer. Tempat ini menawarkan sudut pandang yang unik untuk melihat Telaga Menjer dari ketinggian yang ekstrem. Dilengkapi dengan jembatan kaca yang aman dan dek pengamatan kayu, Kahyangan Skyline memberikan sensasi seolah-olah Anda sedang berdiri di langit (Kahyangan) sambil memandang hamparan air biru di bawahnya.

Tempat ini juga menjadi lokasi bagi para pecinta olahraga ekstrem seperti paragliding. Saat cuaca mendukung, Anda bisa melihat para penerjun yang melayang-layang di udara dengan latar belakang telaga dan gunung. Bagi wisatawan biasa, spot-spot foto yang didesain secara estetis menjadi daya tarik utama. Ada juga area jaring-jaring di atas tebing yang memungkinkan Anda berbaring sambil melihat pemandangan di bawah kaki Anda.

Kahyangan Skyline berhasil menggabungkan keindahan alam alami Wonosobo dengan tren wisata modern yang interaktif. Di sini, adrenalin dan ketenangan visual bertemu dalam satu lokasi. Menikmati matahari terbenam dari titik ini adalah pengalaman yang sangat indah, di mana langit berubah warna dan lampu-lampu di sekitar Telaga Menjer mulai menyala satu per satu, memberikan suasana yang magis.`
  },
  {
    slug: 'kebun-teh-panama',
    title: 'Kebun Teh Panama: Labirin Hijau Wonosobo',
    excerpt: 'Kebun teh yang asri dengan jembatan kayu yang membentang di atas hamparan tanaman teh.',
    category: 'Alam',
    type: 'destination',
    date: '15 Mar 2025',
    image: PlaceHolderImages.find(img => img.id === 'kebun-teh')?.imageUrl || '',
    content: `Kebun Teh Panama merupakan bagian dari perkebunan teh Tambi yang dikelola dengan konsep wisata yang menarik. Terletak tidak jauh dari Telaga Menjer, kebun teh ini menawarkan hamparan hijau yang sangat menyegarkan mata. Pengelola telah membangun jembatan kayu panjang yang berkelok-kelok di atas tanaman teh, memungkinkan pengunjung untuk berjalan-jalan di tengah kebun tanpa merusak tanaman tersebut.

Udara di sini sangat bersih dan segar dengan aroma khas daun teh yang tertiup angin. Berjalan di atas jembatan kayu sambil melihat para pemetik teh bekerja di pagi hari memberikan gambaran tentang kehidupan agraris Wonosobo yang produktif. Kebun Teh Panama sangat populer sebagai lokasi foto pre-wedding atau sekadar bersantai bersama keluarga karena jalurnya yang ramah untuk semua usia.

Di area ini juga terdapat fasilitas untuk menikmati teh hangat hasil perkebunan setempat. Menyesap teh original di tengah kebun teh yang berkabut adalah kemewahan sederhana yang bisa Anda dapatkan di Wonosobo. Kebun Teh Panama mengajarkan kita untuk kembali menghargai alam dan ritme kehidupan yang tenang. Hijau tanaman teh yang membentang sejauh mata memandang adalah obat terbaik untuk melepaskan penat dari kesibukan perkotaan.`
  },

  // STORIES
  {
    slug: 'asal-usul-wonosobo',
    title: 'Sejarah: Dari Lembah Menjadi Kota',
    excerpt: 'Menelusuri sejarah terbentuknya Wonosobo dari masa kolonial hingga sekarang.',
    category: 'Sejarah',
    type: 'story',
    date: '05 Feb 2025',
    image: 'https://images.unsplash.com/photo-1590059392683-9b8893ccf971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZ Heritage|ZW58MHx8fHwxNzc0MTU2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Sejarah Wonosobo adalah narasi tentang transformasi lembah terpencil menjadi pusat kebudayaan dinamis. Nama "Wonosobo" berasal dari bahasa Sansekerta: "Wana" (hutan) dan "Saba" (tempat berkumpul). Berdirinya Wonosobo tak lepas dari peran "Tiga Serangkai": Kyai Kolodete, Kyai Walik, dan Kyai Karim. Kyai Kolodete membuka Dieng, Kyai Walik di pusat kota, dan Kyai Karim di Kalibeber.

Hari jadi Wonosobo diperingati setiap 24 Juli, merujuk pada tahun 1825 saat Wonosobo resmi menjadi Kadipaten di bawah pimpinan Tumenggung Setjonegoro. Selama Perang Diponegoro, Wonosobo menjadi basis pertahanan strategis karena topografinya yang menguntungkan perang gerilya. Setelah perang, Belanda mengembangkan perkebunan teh, tembakau, dan kina karena tanahnya yang subur.

Memasuki era kemerdekaan, Wonosobo terus berkembang tanpa meninggalkan identitas agrarisnya. Dikenal sebagai "Kota Bunga" dan "Kota Sejuk", transformasi dari tempat pertemuan di tengah hutan menjadi kabupaten modern adalah bukti ketangguhan masyarakatnya. Nilai gotong royong dan spiritualitas leluhur tetap menjadi kompas pembangunan, menjadikan Wonosobo rumah yang hangat di tengah ketinggian pegunungan Jawa.`
  },
  {
    slug: 'keajaiban-geografis-dieng',
    title: 'Geografis: Di Atas Awan Jawa',
    excerpt: 'Mengapa Wonosobo memiliki karakteristik geografis yang sangat unik dibandingkan daerah lain?',
    category: 'Geografis',
    type: 'story',
    date: '08 Feb 2025',
    image: PlaceHolderImages.find(img => img.id === 'dieng-fog')?.imageUrl || '',
    content: `Secara geografis, Wonosobo adalah keajaiban alam yang terletak di "pundak" Pulau Jawa. Terletak di antara dua gunung api raksasa, Sindoro dan Sumbing, wilayah ini didominasi perbukitan terjal dan dataran tinggi vulkanik. Suhu harian berkisar 15-20 derajat Celcius, dan bisa turun di bawah nol derajat di wilayah Dieng.

Dataran Tinggi Dieng adalah kaldera raksasa bentukan letusan gunung purba jutaan tahun lalu. Aktivitas vulkanik masih berlangsung, terlihat dari kawah aktif seperti Kawah Sikidang dan Telaga Warna yang berubah warna karena sulfur. Topografi bergelombang menciptakan tanah luar biasa subur akibat endapan abu vulkanik kaya nutrisi, menjadikan Wonosobo lumbung sayur terbesar di Indonesia.

Fenomena paling menarik adalah "Bun Upas" atau embun es pada musim kemarau (Juli-Agustus), di mana suhu mencapai titik beku dan embun membeku menjadi kristal es. Secara geografis, Wonosobo adalah laboratorium alam sempurna untuk vulkanologi dan botani. Keindahan visual saat ini adalah hasil gejolak vulkanik masa lalu yang kini menjadi surga bagi siapa saja yang mengunjunginya.`
  },
  {
    slug: 'sosial-masyarakat-pegunungan',
    title: 'Sosial: Kehangatan di Tengah Dingin',
    excerpt: 'Melihat lebih dekat kehidupan sosial masyarakat Wonosobo yang ramah dan menjunjung gotong royong.',
    category: 'Sosial',
    type: 'story',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZW9wbGUlMjBzbWlsaW5nfGVufDB8fHx8MTc3NDE1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Semakin dingin suhunya, semakin hangat sambutan masyarakat Wonosobo. Kondisi alam pegunungan membentuk karakter masyarakat yang tangguh, sabar, dan rendah hati. Nilai gotong royong adalah urat nadi kehidupan, mulai dari membangun rumah hingga upacara adat dilakukan dengan semangat kebersamaan.

Tradisi "Nyangkruk" atau berkumpul informal dengan selimut sarung dan kopi panas adalah budaya kental di desa-desa. Kejujuran adalah mata uang berharga dalam interaksi mereka. Mayoritas masyarakat adalah Muslim yang taat namun sangat toleran, hidup berdampingan dengan damai dan melestarikan tradisi leluhur seperti "Merti Desa" (bersih desa).

Wisatawan disambut dengan tangan terbuka; tak jarang petani menyapa ramah atau warga menawarkan teh hangat saat hujan. Mereka memuliakan tamu sesuai ajaran leluhur, menjadikan keramahan otentik ini alasan wisatawan selalu ingin kembali. Kehangatan manusia di tengah dinginnya udara gunung adalah kekayaan non-materi yang paling berharga dari kabupaten ini.`
  },
  {
    slug: 'tips-cuaca-dieng',
    title: 'Tips: Menghadapi Cuaca Ekstrem',
    excerpt: 'Dari fenomena bun upas (embun es) hingga persiapan pakaian. Pastikan liburan Anda tetap nyaman.',
    category: 'Tips',
    type: 'story',
    date: '10 Juli 2024',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmb2dneSUyMG1vdW50YWlufGVufDB8fHx8MTc3MDExNTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `Mengunjungi Dieng memerlukan persiapan berbeda karena suhu ekstrem. Pakaian berlapis (layering) adalah kunci: mulai dari lapisan dasar penyerap keringat, sweter/fleece, hingga jaket windproof. Jangan lupa syal, sarung tangan, dan penutup telinga jika ingin ke Bukit Sikunir pagi hari.

Bulan Juli-Agustus adalah puncak musim kemarau untuk melihat "Bun Upas" (embun es), namun suhu bisa mencapai minus derajat Celcius. Di musim hujan (Desember-Februari), sedia payung/jas hujan karena kabut tebal bisa turun sewaktu-waktu. Kesehatan fisik juga krusial; udara tipis di ketinggian berarti oksigen lebih rendah, jadi jangan paksakan diri jika pusing.

Minum banyak air untuk mencegah dehidrasi meski tidak merasa haus, dan gunakan pelembab kulit karena udara kering. Perhatikan peringatan di area kawah karena uap belerang beracun dalam konsentrasi tinggi. Dengan persiapan tepat, cuaca dingin Wonosobo justru akan menjadi bumbu unik dalam petualangan Anda di negeri di atas awan.`
  }
];
