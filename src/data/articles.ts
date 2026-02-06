export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  type: 'destination' | 'story';
  author?: string;
  id?: string;
  focusKeyword?: string;
  metaTitle?: string;
}

/**
 * DATABASE ARTIKEL UTAMA - 35 Judul Baru
 */
export const articles: Article[] = [
  // NATURE & ADVENTURE (5)
  {
    slug: 'puncak-prau-awan-jateng',
    title: 'Puncak Prau: Menjelajahi Lautan Awan Terindah di Jawa Tengah',
    excerpt: 'Nikmati sensasi berdiri di atas awan dengan pemandangan Gunung Sindoro-Sumbing yang ikonik dari puncak Gunung Prau.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunung Prau adalah destinasi favorit bagi pendaki pemula maupun profesional karena jalur trekkingnya yang relatif ramah namun menawarkan pemandangan "Golden Sunrise" dan "Milky Way" yang luar biasa. Di puncaknya yang luas, Anda bisa melihat jajaran gunung besar di Jawa Tengah yang berbaris rapi di atas hamparan awan putih.'
  },
  {
    slug: 'trekking-lembah-sikarim',
    title: 'Trekking Lembah Sikarim: Menemukan "Swiss Van Java" yang Tersembunyi',
    excerpt: 'Jalur eksotis dengan air terjun yang jatuh langsung dari tebing tinggi di tengah kabut pegunungan yang mistis.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Lembah Sikarim menawarkan panorama yang sering disebut mirip dengan pedesaan di Swiss. Dengan jalanan berkelok tajam dan air terjun Sikarim yang menjulang tinggi, tempat ini adalah surga bagi para pecinta petualangan motor maupun pejalan kaki yang ingin menghirup udara pegunungan yang murni.'
  },
  {
    slug: 'telaga-menjer-ketenangan-gunung',
    title: 'Telaga Menjer: Ketenangan Hakiki di Bawah Kaki Gunung Sumbing',
    excerpt: 'Danau vulkanik luas yang dikelilingi perbukitan hijau, tempat terbaik untuk melarikan diri dari hiruk pikuk kota.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Terletak di ketinggian 1.300 mdpl, Telaga Menjer adalah danau terluas di lereng Gunung Dieng. Di sini, pengunjung bisa menyewa perahu kayu tradisional untuk berkeliling danau sambil menikmati pantulan langit dan gunung di permukaan air yang tenang.'
  },
  {
    slug: 'kawah-sikidang-perut-bumi',
    title: 'Kawah Sikidang: Menjelajahi Geotermal Aktif di Perut Bumi Dieng',
    excerpt: 'Saksikan kekuatan alam dari dekat dengan kawah belerang yang berpindah-pindah layaknya seekor Kidang (Kijang).',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kawah Sikidang adalah kawah vulkanik terbesar di Dataran Tinggi Dieng. Uniknya, kawah utamanya selalu berpindah-pindah setiap beberapa tahun. Di sini, Anda bisa melihat uap panas yang keluar langsung dari tanah dan belajar tentang energi terbarukan geotermal yang melimpah.'
  },
  {
    slug: 'savana-pangonan-padang-rumput',
    title: 'Savana Pangonan: Padang Rumput Rahasia di Atas Awan Dieng',
    excerpt: 'Sebuah kawah mati yang berubah menjadi padang rumput luas yang berubah warna sesuai musim.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Bukit Pangonan menawarkan pemandangan savana yang jarang diketahui turis umum. Saat musim hujan, rumputnya menghijau segar, sementara di musim kemarau, savana ini berubah menjadi cokelat keemasan yang memberikan atmosfer mirip padang rumput di Afrika.'
  },

  // HERITAGE & CULTURE (5)
  {
    slug: 'candi-arjuna-mahakarya-mataram',
    title: 'Candi Arjuna: Menelusuri Jejak Mahakarya Mataram Kuno di Tanah Jawa',
    excerpt: 'Kompleks percandian Hindu tertua di Jawa yang tetap kokoh berdiri di tengah cuaca ekstrem dataran tinggi.',
    category: 'Heritage & Culture',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Candi Arjuna bukan hanya tumpukan batu kuno, melainkan simbol kejayaan spiritual masa lampau. Terletak di pusat Dieng, candi ini menjadi saksi bisu ritual-ritual keagamaan yang telah berlangsung selama lebih dari seribu tahun.'
  },
  {
    slug: 'ritual-ruwat-rambut-gimbal',
    title: 'Ritual Ruwat Rambut Gimbal: Tradisi Mistis Titipan Kyai Kolodete',
    excerpt: 'Upacara sakral pemotongan rambut gimbal anak-anak pilihan yang dipercayai membawa berkah bagi desa.',
    category: 'Heritage & Culture',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Budayawan Lokal',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Fenomena rambut gimbal di Dieng adalah misteri yang belum terpecahkan secara medis. Ritual pemotongannya sangat unik karena permintaan sang anak wajib dikabulkan, mulai dari seekor kambing hingga permen karet, sebagai syarat agar rambutnya tidak tumbuh gimbal lagi.'
  },
  {
    slug: 'pesona-tari-lengger-wonosobo',
    title: 'Pesona Tari Lengger: Jiwa Seni Rakyat Wonosobo yang Magis',
    excerpt: 'Tarian rakyat yang memadukan unsur keindahan gerak dengan nuansa spiritual yang mendalam.',
    category: 'Heritage & Culture',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tari Lengger adalah identitas budaya Wonosobo. Dimainkan oleh penari pria yang berdandan wanita (atau sebaliknya), tarian ini sering dipentaskan dalam acara syukuran desa sebagai bentuk penghormatan kepada alam dan leluhur.'
  },
  {
    slug: 'klenteng-hok-hoo-bio',
    title: 'Klenteng Hok Hoo Bio: Saksi Akulturasi Budaya di Jantung Kota',
    excerpt: 'Menelusuri jejak keberagaman Wonosobo melalui arsitektur klenteng yang bersejarah.',
    category: 'Heritage & Culture',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1577493321623-e180026e6802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Wonosobo dikenal dengan toleransinya yang tinggi. Klenteng Hok Hoo Bio berdiri sebagai simbol keharmonisan antara masyarakat Tionghoa dan lokal yang telah terjalin sejak masa kolonial Belanda.'
  },
  {
    slug: 'makam-kyai-kolodete-pendiri',
    title: 'Makam Kyai Kolodete: Menelusuri Jejak Spiritual Sang Pendiri Wonosobo',
    excerpt: 'Ziarah sejarah ke makam tokoh legendaris yang membabat alas Wonosobo dan Dieng.',
    category: 'Heritage & Culture',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kyai Kolodete adalah figur sentral dalam sejarah Wonosobo. Makamnya yang terletak di Dieng menjadi pusat perhatian para peziarah dan peneliti budaya yang ingin memahami akar spiritual masyarakat pegunungan ini.'
  },

  // FOOD & DRINK (5)
  {
    slug: 'mie-ongklok-legendaris',
    title: 'Mie Ongklok: Kelezatan Mie Kuah Kental yang Tak Tergantikan',
    excerpt: 'Mie rebus khas Wonosobo dengan racikan bumbu ebi dan kuah kental saripati singkong yang gurih.',
    category: 'Food & Drink',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Pencinta Kuliner',
    image: 'https://images.unsplash.com/photo-1611834094235-f5478935310b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Tidak lengkap ke Wonosobo tanpa mencoba Mie Ongklok. Nama "Ongklok" berasal dari alat bambu yang digunakan untuk mengocok mie di dalam air panas. Disajikan dengan sate sapi dan tempe kemul, hidangan ini adalah penghangat terbaik di cuaca dingin.'
  },
  {
    slug: 'carica-manisan-khas-dieng',
    title: 'Carica: Mengapa Buah ini Hanya Bisa Tumbuh di Dataran Tinggi Dieng?',
    excerpt: 'Fakta unik di balik buah "Pepaya Gunung" yang menjadi oleh-oleh wajib dari Wonosobo.',
    category: 'Food & Drink',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Carica (Vasconcellea pubescens) hanya bisa berbuah di ketinggian di atas 1.500 mdpl. Buahnya yang memiliki aroma wangi yang khas ini diolah menjadi manisan segar yang kaya akan vitamin A dan C.'
  },
  {
    slug: 'sate-sapi-wonosobo-empuk',
    title: 'Rahasia Sate Sapi Wonosobo: Tekstur Empuk yang Menggugah Selera',
    excerpt: 'Pendamping wajib Mie Ongklok yang memiliki bumbu kacang kental dan daging pilihan.',
    category: 'Food & Drink',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Berbeda dengan sate pada umumnya, sate sapi Wonosobo memiliki tekstur yang sangat lembut karena teknik perendaman bumbu yang lama. Saus kacangnya pun dicampur dengan kuah Mie Ongklok untuk menciptakan harmoni rasa yang unik.'
  },
  {
    slug: 'kopi-arabika-dieng-hangat',
    title: 'Kopi Arabika Dieng: Menikmati Cita Rasa Gunung dalam Secangkir Kehangatan',
    excerpt: 'Kopi organik dengan notes rasa berry dan body yang ringan, tumbuh subur di lereng gunung api.',
    category: 'Food & Drink',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Barista Lokal',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kopi Dieng mulai naik daun di kalangan pecinta kopi spesialti. Karena ditanam di tanah vulkanik yang kaya mineral, kopi ini memiliki karakter rasa asam buah yang segar dan aroma yang sangat kuat.'
  },
  {
    slug: 'tempe-kemul-camilan-wajib',
    title: 'Tempe Kemul: Camilan "Berselimut" yang Wajib Ada Saat Menjelajah',
    excerpt: 'Gorengan tempe lebar dengan balutan tepung kuning kunyit dan kucai yang renyah.',
    category: 'Food & Drink',
    type: 'destination',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dalam bahasa Jawa, "Kemul" berarti selimut. Tempe kemul adalah tempe yang digoreng dengan balutan tepung tebal yang garing. Menikmati tempe kemul selagi panas di tengah kabut Dieng adalah pengalaman yang tak terlupakan.'
  },

  // HISTORY & HERITAGE (5)
  {
    slug: 'jalur-kereta-api-tua',
    title: 'Jalur Kereta Api Tua: Menelusuri Jejak Logistik Kolonial Belanda',
    excerpt: 'Mengingat kembali masa kejayaan transportasi uap yang dulu mengangkut hasil bumi Wonosobo.',
    category: 'History & Heritage',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Sejarawan Lokal',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Dahulu Wonosobo memiliki stasiun kereta api yang sibuk. Jalur ini digunakan untuk mengangkut teh, tembakau, dan kopi menuju pelabuhan di Semarang. Kini, sisa-sisa rel dan bangunan stasiun menjadi pengingat sejarah ekonomi masa lalu.'
  },
  {
    slug: 'gedung-papak-arsitektur-eropa',
    title: 'Gedung Papak: Arsitektur Klasik Eropa di Tengah Kota Dingin',
    excerpt: 'Bangunan peninggalan Belanda yang kini menjadi kantor pemerintahan dengan atap datarnya yang ikonik.',
    category: 'History & Heritage',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gedung Papak adalah salah satu bangunan tertua di pusat kota Wonosobo. Dibangun dengan gaya kolonial, gedung ini memiliki dinding yang sangat tebal dan jendela besar, dirancang untuk mengimbangi suhu Wonosobo yang sejuk.'
  },
  {
    slug: 'sejarah-nama-wonosobo',
    title: 'Dari "Alas" ke Kota: Membedah Asal-usul Nama Wonosobo',
    excerpt: 'Perpaduan kata Sansekerta "Wana" dan "Saba" yang mencerminkan tempat berkumpul di dalam hutan.',
    category: 'History & Heritage',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Penulis Sejarah',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Secara etimologi, Wonosobo berasal dari Wanasaba. Wana berarti hutan, dan Saba berarti tempat berkunjung atau berkumpul. Hal ini sesuai dengan kondisi alam Wonosobo masa lalu yang merupakan hutan pegunungan yang sangat asri.'
  },
  {
    slug: 'peninggalan-belanda-tambi',
    title: 'Tambi: Perkebunan Teh Warisan Belanda yang Mendunia',
    excerpt: 'Kisah dibalik PT Tambi, perusahaan teh yang telah berdiri sejak tahun 1865.',
    category: 'History & Heritage',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Perkebunan Teh Tambi awalnya dimiliki oleh perusahaan Belanda bernama Bagelen Thee & Kina Maatschappij. Hingga kini, kualitas teh dari Tambi tetap diakui di pasar internasional, terutama di Eropa.'
  },
  {
    slug: 'benteng-benteng-tua-sumbing',
    title: 'Benteng Tua Sumbing: Strategi Pertahanan di Lereng Gunung',
    excerpt: 'Menemukan reruntuhan pertahanan militer dari masa perjuangan kemerdekaan.',
    category: 'History & Heritage',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Sejarawan Lokal',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Karena posisinya yang strategis di jalur pegunungan tengah Jawa, Wonosobo pernah menjadi basis gerilya yang kuat. Sisa-sisa pos pengamatan dan benteng kecil masih bisa ditemukan di beberapa lereng gunung Sumbing.'
  },

  // PEOPLE & CULTURE (5)
  {
    slug: 'petani-kentang-pejuang-ekonomi',
    title: 'Petani Kentang: Menelusuri Napas Pejuang Ekonomi di Atas Awan',
    excerpt: 'Kisah kerja keras para petani yang menjadikan Wonosobo sebagai pemasok kentang terbesar di Indonesia.',
    category: 'People & Culture',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Kehidupan di Dieng dan Wonosobo tidak lepas dari pertanian kentang. Meski medannya miring dan suhunya dingin, para petani tetap gigih mengolah tanah vulkanik yang subur demi kesejahteraan keluarga mereka.'
  },
  {
    slug: 'tradisi-nyadran-sembungan',
    title: 'Tradisi Nyadran: Kearifan Lokal Menjelang Ramadhan di Desa Tertinggi',
    excerpt: 'Momen gotong royong dan doa bersama masyarakat Desa Sembungan di pemakaman desa.',
    category: 'People & Culture',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Budayawan Lokal',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Nyadran adalah tradisi turun temurun yang sangat dihormati. Warga akan berkumpul membawa tenongan (wadah makanan) untuk dimakan bersama setelah membersihkan makam leluhur, sebuah simbol syukur dan kebersamaan.'
  },
  {
    slug: 'gotong-royong-napas-desa',
    title: 'Gotong Royong: Menemukan Inti Napas Kehidupan Warga Pegunungan',
    excerpt: 'Mengapa solidaritas sosial di Wonosobo tetap kuat di tengah arus modernisasi?',
    category: 'People & Culture',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Sosiolog Lokal',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Di daerah pegunungan yang menantang, gotong royong bukan sekadar semboyan, melainkan strategi bertahan hidup. Mulai dari membangun rumah hingga memanen hasil bumi, warga Wonosobo selalu melakukannya bersama-sama.'
  },
  {
    slug: 'anak-anak-dieng-kabut',
    title: 'Anak-Anak Dieng: Tumbuh Bersama Kabut, Legenda, dan Mimpi',
    excerpt: 'Potret keseharian anak-anak sekolah di desa-desa berkabut yang memiliki daya tahan tubuh luar biasa.',
    category: 'People & Culture',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Melihat anak-anak Dieng bermain di luar rumah saat suhu mencapai 10 derajat Celcius hanya dengan kaus tipis adalah pemandangan biasa. Mereka adalah generasi tangguh yang terbiasa dengan alam pegunungan yang keras.'
  },
  {
    slug: 'pasar-tradisional-interaksi',
    title: 'Pasar Tradisional: Jantung Interaksi Sosial yang Hangat di Wonosobo',
    excerpt: 'Lebih dari sekadar jual beli, pasar adalah tempat bertukar kabar dan menjaga silaturahmi.',
    category: 'People & Culture',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Pasar Induk Wonosobo adalah mikrokosmos dari keberagaman daerah ini. Di sini, Anda bisa menemukan sayuran segar dari pegunungan hingga kerajinan tangan lokal, sambil mendengarkan logat khas Wonosobo yang kental.'
  },

  // GEOGRAPHY & LANDSCAPE (5)
  {
    slug: 'fenomena-embun-upas-musim-dingin',
    title: 'Fenomena Embun Upas: Merasakan "Musim Dingin" di Tengah Tropis',
    excerpt: 'Saat suhu Dieng mencapai -5 derajat Celcius dan merubah padang rumput menjadi hamparan salju putih.',
    category: 'Geography & Landscape',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Antara Juli hingga September, Dieng mengalami fenomena frost atau embun upas. Embun pagi yang membeku ini menarik ribuan turis yang ingin merasakan suasana musim dingin tanpa perlu ke luar negeri.'
  },
  {
    slug: 'topografi-ekstrem-wonosobo',
    title: 'Topografi Ekstrem: Rahasia di Balik Kesuburan Tanah Wonosobo',
    excerpt: 'Bagaimana kemiringan lereng yang curam justru menjadi berkah bagi pertanian hortikultura?',
    category: 'Geography & Landscape',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Geolog Lokal',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Wonosobo didominasi oleh perbukitan dan pegunungan. Struktur tanahnya yang gembur dan kaya akan abu vulkanik purba menjadikannya salah satu daerah paling subur di Pulau Jawa.'
  },
  {
    slug: 'formasi-geologi-dieng-dahsyat',
    title: 'Formasi Geologi Dieng: Sisa Letusan Dahsyat Ratusan Ribu Tahun Lalu',
    excerpt: 'Menjelajahi kaldera raksasa yang kini menjadi rumah bagi ribuan penduduk Wonosobo.',
    category: 'Geography & Landscape',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Seluruh Dataran Tinggi Dieng sebenarnya adalah kaldera dari gunung api raksasa masa lalu. Aktivitas vulkanik ini masih bisa dilihat melalui kawah-kawah aktif dan sumber mata air panas yang tersebar di wilayah ini.'
  },
  {
    slug: 'aliran-sungai-serayu-nadi',
    title: 'Sungai Serayu: Nadi Kehidupan yang Mengalir dari Hulu Dieng',
    excerpt: 'Mata air "Tuk Bimo Lukat" sebagai awal perjalanan sungai legendaris di Jawa Tengah.',
    category: 'Geography & Landscape',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Pemerhati Lingkungan',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Sungai Serayu yang besar berawal dari mata air kecil di Dieng. Sungai ini menjadi sumber air utama bagi ribuan hektar sawah dan pembangkit listrik di beberapa kabupaten di bawah Wonosobo.'
  },
  {
    slug: 'gunung-sindoro-sumbing-pelindung',
    title: 'Sindoro & Sumbing: Dua Raksasa Kembar yang Menjadi Pelindung Wonosobo',
    excerpt: 'Mengenal karakteristik dua gunung api aktif yang membentuk landscape dramatis kota Wonosobo.',
    category: 'Geography & Landscape',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Berada di antara dua gunung besar memberikan Wonosobo iklim yang sejuk dan tanah yang subur. Sindoro dan Sumbing adalah ikon visual yang selalu tampak megah di setiap sudut kota.'
  },

  // TRAVEL TIPS (5)
  {
    slug: 'panduan-aklimatisasi-ketinggian',
    title: 'Panduan Aklimatisasi: Tips Agar Tidak Terkena Penyakit Ketinggian',
    excerpt: 'Cara aman beradaptasi dengan kadar oksigen tipis di Dataran Tinggi Dieng.',
    category: 'Travel Tips',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1491553141410-0925e011406e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Ketinggian Dieng yang mencapai 2.000 mdpl bisa memicu sakit kepala bagi pendatang baru. Tips utamanya adalah minum banyak air putih, kurangi aktivitas berat di jam pertama, dan istirahat yang cukup.'
  },
  {
    slug: 'packing-list-suhu-minus',
    title: 'Packing List: Perlengkapan Wajib untuk Menghadapi Suhu -5 Derajat',
    excerpt: 'Jangan salah kostum! Berikut daftar pakaian dan obat-obatan yang wajib Anda bawa.',
    category: 'Travel Tips',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Jaket windbreaker, kupluk, sarung tangan, dan pelembap bibir adalah barang wajib. Jangan lupa membawa balsam penghangat dan obat pribadi karena apotek di area pegunungan sangat terbatas.'
  },
  {
    slug: 'waktu-terbaik-berkunjung-dieng',
    title: 'Waktu Terbaik Berkunjung: Hindari Kerumunan dan Kabut Tebal',
    excerpt: 'Bulan-bulan terbaik untuk mendapatkan foto sunrise tanpa terganggu cuaca buruk.',
    category: 'Travel Tips',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Fotografer Lokal',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Musim kemarau (Mei - September) adalah waktu paling aman untuk mendapatkan langit cerah. Namun, jika Anda ingin suasana yang lebih tenang, cobalah berkunjung di hari kerja (weekdays) di luar musim libur sekolah.'
  },
  {
    slug: 'transportasi-rute-aman-tanjakan',
    title: 'Transportasi ke Dieng: Rute Aman Melewati Tanjakan Ekstrem',
    excerpt: 'Tips berkendara aman bagi Anda yang membawa kendaraan pribadi ke jalur pegunungan.',
    category: 'Travel Tips',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Driver Lokal',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunakan gigi rendah saat menanjak maupun menurun. Cek kondisi rem dan kopling sebelum berangkat. Jalur via Wonosobo kota adalah rute paling direkomendasikan karena jalannya lebih lebar dan aspalnya bagus.'
  },
  {
    slug: 'budget-traveling-wonosobo-murah',
    title: 'Budget Traveling: Keliling Wonosobo dengan Rp 500 Ribu, Bisa!',
    excerpt: 'Panduan hemat bagi backpacker yang ingin eksplorasi Wonosobo tanpa menguras kantong.',
    category: 'Travel Tips',
    type: 'story',
    date: '07 Feb 2026',
    author: 'Backpacker Lokal',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: 'Gunakan angkutan mikro lokal untuk transportasi murah. Untuk penginapan, carilah homestay di area perkampungan penduduk. Makan di warteg atau pedagang kaki lima di sekitar alun-alun bisa menghemat banyak pengeluaran Anda.'
  }
];
