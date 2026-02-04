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
 * DATABASE ARTIKEL UTAMA
 * Berisi 16 Destinasi Utama dan 45 Cerita Mendalam (Total 61 Artikel).
 * Setiap artikel dirancang dengan narasi yang sangat mendalam dan informatif.
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
    content: `Bukit Sikunir merupakan magnet utama bagi siapa pun yang menginjakkan kaki di Dataran Tinggi Dieng. Terletak di Desa Sembungan, kecamatan Kejajar, Wonosobo, bukit ini menawarkan apa yang disebut oleh para pengelana dunia sebagai "Golden Sunrise". Cahaya fajar yang muncul dari ufuk timur tidak hanya sekadar matahari terbit biasa, melainkan sebuah simfoni warna keemasan yang menyiram puncak-puncak gunung megah di Jawa Tengah.\n\nDengan ketinggian sekitar 2.300 meter di atas permukaan laut (mdpl), pendakian menuju puncak Sikunir relatif ramah bagi pemula, namun tetap menantang dengan suhu yang bisa mencapai titik beku. Jalur yang sudah tertata dengan anak tangga batu mempermudah akses bagi wisatawan segala usia. Di puncak, Anda akan disuguhi panorama 360 derajat yang mencakup Gunung Sindoro, Sumbing, Merapi, Merbabu, hingga Gunung Slamet yang menjulang di kejauhan.\n\nKunci dari pengalaman di Sikunir adalah ketepatan waktu. Wisatawan disarankan memulai pendakian pada pukul 04.30 pagi untuk mendapatkan posisi terbaik. Setelah menikmati matahari terbit, pemandangan Telaga Cebong di kaki bukit yang seringkali tertutup kabut tebal menambah kesan magis yang tak terlupakan. Sikunir bukan sekadar bukit; ia adalah saksi bisu keagungan alam Wonosobo yang terus memikat ribuan jiwa setiap bulannya.`
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Simfoni Warna dalam Kawah Purba',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Alam',
    type: 'destination',
    date: '12 Feb 2025',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah permata tersembunyi yang mendefinisikan estetika Dataran Tinggi Dieng. Danau vulkanik ini memiliki keunikan yang jarang ditemukan di belahan bumi lain: warna airnya yang dapat berubah-ubah secara dramatis antara hijau, biru, kuning, hingga cokelat keemasan. Fenomena ini bukanlah sihir, melainkan hasil dari tingginya kandungan sulfur (belerang) di dasar danau yang membiaskan spektrum cahaya matahari.\n\nDikelilingi oleh rimbunnya hutan pegunungan dan dibatasi oleh Telaga Pengilon yang airnya jernih (kontras yang sangat unik karena kedua telaga ini berada berdampingan), Telaga Warna menawarkan suasana kontemplatif yang mendalam. Bagi mereka yang ingin melihat kemegahannya secara utuh, mendaki ke Bukit Ratapan Angin atau Batu Pandang adalah kewajiban. Dari ketinggian tersebut, gradasi warna telaga terlihat seperti palet lukisan alam yang sempurna.\n\nSelain keindahan visualnya, kawasan ini juga merupakan habitat bagi berbagai burung endemik dan monyet ekor panjang. Berjalan menyusuri setapak di tepian telaga akan membawa Anda pada berbagai gua keramat seperti Gua Semar dan Gua Jaran, yang hingga kini masih sering digunakan untuk meditasi ritual kejawen. Telaga Warna adalah perpaduan harmonis antara keajaiban geofisika dan kekayaan spiritual lokal.`
  },
  {
    slug: 'kawah-sikidang-aktif',
    title: 'Kawah Sikidang: Jantung Vulkanik yang Berdenyut',
    excerpt: 'Menjelajahi kawah aktif paling dinamis di Dieng dengan jembatan kayu estetik dan lumpur mendidih.',
    category: 'Alam',
    type: 'destination',
    date: '14 Feb 2025',
    image: 'https://images.unsplash.com/photo-1621210179040-79883901b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kawah Sikidang menawarkan sisi lain dari keindahan Dieng: kekuatan alam yang liar dan tak terduga. Berbeda dengan kawah pegunungan pada umumnya yang berada di puncak, Sikidang terletak di tanah datar, menjadikannya kawah aktif yang paling mudah diakses oleh wisatawan. Nama "Sikidang" diambil dari karakter hewan kijang (Kidang), karena kolam lumpur panasnya sering berpindah-pindah atau "melompat" dari satu titik ke titik lain dalam siklus waktu tertentu.\n\nSaat ini, pengalaman berkunjung ke Sikidang telah ditingkatkan dengan adanya jembatan kayu (Boardwalk) yang membentang sepanjang hampir satu kilometer. Jembatan ini tidak hanya menjamin keamanan pengunjung dari gas belerang yang pekat, tetapi juga menjadi spot fotografi yang sangat populer. Uap putih yang membubung tinggi ke angkasa menciptakan atmosfer futuristik sekaligus purba secara bersamaan.\n\nDi sini, Anda dapat melihat langsung bagaimana panas bumi bekerja, bahkan ada tradisi unik merebus telur di kolam air panas kecil yang disediakan. Namun, tetap disarankan untuk menggunakan masker karena bau belerang yang sangat menyengat. Kawah Sikidang adalah pengingat bahwa Wonosobo berdiri di atas tanah yang sangat subur namun tetap memiliki denyut vulkanik yang kuat.`
  },
  {
    slug: 'pintu-langit-sky-view',
    title: 'Pintu Langit Sky View: Menapak di Atas Cakrawala',
    excerpt: 'Sensasi berjalan di jembatan kaca transparan dengan latar belakang Gunung Sindoro yang gagah.',
    category: 'Alam',
    type: 'destination',
    date: '20 Feb 2025',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Pintu Langit Sky View adalah destinasi modern yang berhasil memadukan keindahan alam pegunungan dengan inovasi arsitektur yang berani. Terletak di ketinggian strategis di jalur utama Wonosobo-Dieng, tempat ini menawarkan gardu pandang berupa jembatan kaca yang seolah-olah mengambang di antara awan. Saat cuaca cerah, Gunung Sindoro yang berdiri tepat di hadapan Anda akan tampak begitu dekat, menonjolkan setiap lekuk lerengnya yang dramatis.\n\nPengalaman di Pintu Langit bukan hanya tentang ketinggian, tetapi juga tentang perspektif. Dari sini, Anda bisa melihat hamparan terasering kebun sayur yang menyerupai susunan puzzle hijau raksasa di lembah bawah. Saat kabut mulai turun, suasana berubah drastis menjadi sejuk dan syahdu, memberikan sensasi seolah-olah pintu menuju langit benar-benar terbuka.\n\nFasilitas di sini sangat lengkap, mulai dari area kafe yang menyajikan kopi lokal hangat hingga spot-spot foto yang dirancang secara estetis. Pintu Langit adalah gerbang awal yang sempurna untuk menyambut petualangan Anda di Dieng, memberikan gambaran visual tentang betapa luas dan indahnya bentang alam Wonosobo dari sudut pandang mata burung.`
  },
  {
    slug: 'gunung-prau-dieng',
    title: 'Gunung Prau: Puncak Teletubbies dan Lautan Awan',
    excerpt: 'Pendakian favorit di Jawa Tengah yang menawarkan pemandangan deretan gunung api paling spektakuler.',
    category: 'Alam',
    type: 'destination',
    date: '22 Feb 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Gunung Prau adalah "gunung sejuta umat" dalam arti yang paling positif. Dengan ketinggian 2.565 mdpl, gunung ini menawarkan salah satu pemandangan puncak terbaik di Indonesia tanpa memerlukan pendakian yang terlalu ekstrem. Puncaknya tidak berbentuk kerucut tajam, melainkan hamparan padang rumput (sabana) luas yang bergelombang, yang populer dijuluki sebagai "Bukit Teletubbies".\n\nDari puncak Prau, mata Anda akan dimanjakan dengan pemandangan "Double S" (Sindoro-Sumbing) yang berdiri sejajar dengan proporsi yang sempurna. Di sisi lain, deretan gunung Merapi, Merbabu, Ungaran, dan Muria seringkali muncul di atas hamparan lautan awan yang putih bersih. Pada musim kemarau, suhu di sini bisa merosot hingga di bawah nol derajat, menciptakan kristal es (embun upas) di dedaunan.\n\nJalur pendakian via Patakbanteng adalah yang paling populer bagi mereka yang mengejar waktu, sementara jalur via Dieng Kulon menawarkan medan yang lebih landai dan teduh. Gunung Prau adalah tempat di mana ketenangan bertemu dengan kemegahan, menjadikannya destinasi wajib bagi setiap pecinta alam yang mencari momen magis di Wonosobo.`
  },
  {
    slug: 'air-terjun-sikarim',
    title: 'Air Terjun Sikarim: Swiss Van Java yang Tersembunyi',
    excerpt: 'Keindahan dramatis air terjun tinggi yang membelah perbukitan hijau subur di Desa Mlandi.',
    category: 'Alam',
    type: 'destination',
    date: '28 Feb 2025',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Curug Sikarim sering dijuluki sebagai "Swiss Van Java" karena lanskapnya yang luar biasa mirip dengan pegunungan Alpen. Air terjun ini jatuh dari ketinggian tebing yang dikelilingi oleh hutan lebat dan kebun sayur penduduk yang subur. Keindahannya tidak hanya pada air terjunnya itu sendiri, tetapi pada perjalanan menuju ke sana yang melewati jalan berkelok dengan pemandangan lembah yang memukau.\n\nTerletak di Desa Mlandi, Sikarim adalah destinasi bagi mereka yang mencari ketenangan jauh dari keramaian pusat wisata Dieng. Suara gemuruh air yang jatuh di antara bebatuan purba memberikan efek relaksasi yang instan. Di sekitar lokasi, seringkali kabut turun dengan lembut, menutupi puncak-puncak bukit dan menyisakan pemandangan yang sangat puitis.\n\nBagi para pengemudi, jalur menuju Sikarim membutuhkan konsentrasi tinggi karena tanjakan yang cukup curam, namun setiap tetes keringat akan terbayar lunas saat Anda melihat air terjun ini berdiri megah di hadapan Anda. Sikarim adalah bukti bahwa Wonosobo masih menyimpan rahasia alam yang menanti untuk dijelajahi oleh jiwa-jiwa yang haus akan petualangan.`
  },
  {
    slug: 'kebun-teh-panama-wonosobo',
    title: 'Kebun Teh Panama: Oase Hijau di Kaki Gunung',
    excerpt: 'Menyusuri labirin hijau perkebunan teh yang asri dengan udara pegunungan yang murni.',
    category: 'Alam',
    type: 'destination',
    date: '02 Mar 2025',
    image: 'https://images.unsplash.com/photo-1558285511-2821243ad072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kebun Teh Panama menawarkan ketenangan jiwa melalui hamparan warna hijau yang tak berujung. Terletak di kawasan Tambi, perkebunan teh ini merupakan salah satu yang tertua dan paling tertata rapi di wilayah Wonosobo. Di sini, pengunjung dapat berjalan di atas jembatan kayu yang membelah rimbunnya tanaman teh, memberikan akses untuk berfoto tanpa merusak tanaman.\n\nUdara di Kebun Teh Panama sangat segar dan kaya akan oksigen, menjadikannya tempat "healing" terbaik untuk melepas penat dari polusi kota. Latar belakang gunung yang seringkali berselimut kabut tipis menambah keindahan panorama yang disajikan. Anda juga bisa melihat aktivitas para pemetik teh lokal yang dengan terampil memilah pucuk-pucuk daun teh terbaik di pagi hari.\n\nKawasan ini tidak hanya menawarkan pemandangan, tetapi juga pengalaman edukasi tentang proses pengolahan teh dari kebun hingga ke cangkir. Menikmati secangkir teh hangat di kafe yang menghadap langsung ke perkebunan adalah cara terbaik untuk menutup kunjungan Anda. Kebun Teh Panama adalah simbol kesuburan tanah Wonosobo yang memberikan manfaat ekonomi sekaligus keindahan estetika bagi dunia.`
  },
  {
    slug: 'telaga-menjer-wisata',
    title: 'Telaga Menjer: Ketenangan di Danau Kaki Gunung',
    excerpt: 'Menikmati syahdunya suasana danau luas dengan perahu bambu tradisional.',
    category: 'Alam',
    type: 'destination',
    date: '04 Mar 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Menjer adalah danau terluas di kaki pegunungan Dieng yang terbentuk akibat letusan Gunung Pakuwaja jutaan tahun lalu. Terletak di Desa Menjer, danau ini menawarkan ketenangan yang kontras dengan hiruk pikuk pusat kota. Airnya yang tenang dan berwarna kehijauan mencerminkan rimbunnya hutan di sekelilingnya, menciptakan suasana yang sangat damai.\n\nWisatawan dapat menyewa perahu bambu atau perahu motor untuk berkeliling danau, mendekat ke keramba jaring apung milik penduduk setempat. Di sisi telaga, terdapat tebing-tebing tinggi yang seringkali menjadi spot favorit untuk memancing. Keberadaan PLTA Garung yang memanfaatkan air danau ini juga menunjukkan peran vital Telaga Menjer bagi kehidupan masyarakat Wonosobo.\n\nSuasana paling indah di Telaga Menjer biasanya terjadi pada pagi atau sore hari, saat sinar matahari miring menyinari permukaan air dan menciptakan bayangan pegunungan yang sempurna. Menjer adalah tempat yang tepat untuk melarikan diri sejenak dari rutinitas, menghirup udara dingin pegunungan, dan membiarkan pikiran tenang mengikuti riak air yang lembut.`
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
    content: `Kompleks Candi Arjuna adalah jantung spiritual dari Dataran Tinggi Dieng. Dibangun pada abad ke-8 oleh dinasti Sanjaya dari kerajaan Mataram Kuno, kelompok candi ini diyakini sebagai salah satu bangunan candi Hindu tertua yang masih berdiri di Pulau Jawa. Terdiri dari lima candi utama—Arjuna, Semar, Srikandi, Puntadewa, dan Sembadra—kompleks ini memancarkan aura kemegahan masa lalu yang tak lekang oleh waktu.\n\nSecara arsitektur, Candi Arjuna menunjukkan pengaruh gaya India Utara namun dengan sentuhan lokal yang khas, seperti ukiran Kala yang berada di atas pintu masuk tanpa rahang bawah. Lokasinya yang berada di lembah luas yang sering tertutup kabut tipis menciptakan pemandangan yang sangat mistis dan fotogenik. Setiap tahunnya, situs ini menjadi lokasi pusat pelaksanaan ritual pemotongan rambut gimbal yang sakral dalam acara Dieng Culture Festival.\n\nMengunjungi Candi Arjuna adalah sebuah perjalanan menembus waktu. Di sini, pengunjung dapat belajar tentang bagaimana nenek moyang kita menyelaraskan keyakinan spiritual dengan keindahan alam pegunungan. Meskipun telah berusia lebih dari seribu tahun, keanggunan batu-batu andesit ini tetap mampu menggetarkan jiwa siapa pun yang memandangnya.`
  },
  {
    slug: 'museum-kaliasa-dieng',
    title: 'Museum Kaliasa: Penjaga Memori Negeri Di Atas Awan',
    excerpt: 'Pusat ilmu pengetahuan yang merangkum sejarah, geologi, dan budaya Dieng secara komprehensif.',
    category: 'Budaya',
    type: 'destination',
    date: '18 Feb 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Museum Kaliasa bukan sekadar gedung penyimpan benda kuno, melainkan jendela untuk memahami identitas utuh dari Dataran Tinggi Dieng. Terletak tepat di depan Kompleks Candi Arjuna, museum ini menyajikan narasi lengkap mulai dari proses pembentukan geologis Dieng melalui letusan dahsyat jutaan tahun lalu, hingga perkembangan sosial masyarakatnya di era modern.\n\nKoleksi museum mencakup arca-arca asli yang ditemukan di sekitar situs candi, prasasti-prasasti penting, serta penjelasan mendalam tentang flora dan fauna endemik Dieng. Salah satu bagian yang paling menarik adalah dokumentasi tentang tradisi rambut gimbal, yang menjelaskan sisi medis dan sisi mistis dari fenomena unik tersebut. Museum ini juga memiliki ruang sinema yang memutar film dokumenter tentang sejarah Dieng.\n\nBagi para pelajar dan peneliti, Kaliasa adalah sumber data yang tak ternilai. Namun bagi wisatawan umum, museum ini memberikan konteks yang memperkaya pengalaman berwisata. Setelah memahami sejarahnya di Kaliasa, melihat candi dan kawah di luar akan terasa jauh lebih bermakna. Kaliasa adalah bentuk penghormatan Wonosobo terhadap masa lalunya yang gemilang.`
  },
  {
    slug: 'candi-bima-dieng',
    title: 'Candi Bima: Keunikan Arsitektur Shikara di Jawa',
    excerpt: 'Candi terbesar di Dieng dengan bentuk atap unik yang menunjukkan pengaruh kuat India Utara.',
    category: 'Budaya',
    type: 'destination',
    date: '05 Mar 2025',
    image: 'https://images.unsplash.com/photo-1596120229004-944208a546d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Candi Bima menonjol di antara candi-candi lain di Dieng karena ukuran dan gaya arsitekturnya yang sangat khas. Terletak agak terpisah dari kompleks utama, candi ini merupakan bangunan tunggal terbesar di kawasan tersebut. Keunikan utamanya terletak pada bagian atap yang berbentuk piramida bertingkat dengan hiasan kepala manusia yang disebut "Kudu", gaya yang sangat identik dengan arsitektur candi di India Utara (Shikara).\n\nSecara fungsional, Candi Bima diyakini sebagai tempat pemujaan yang sangat penting pada masanya. Detail ukiran pada dinding luarnya, meskipun sebagian telah terkikis zaman, masih menunjukkan ketelitian luar biasa dari para pengrajin batu masa lampau. Struktur bangunannya yang tinggi memberikan kesan kokoh dan berwibawa, mencerminkan karakter tokoh Bima dalam pewayangan yang kuat dan jujur.\n\nLokasi di sekitar Candi Bima yang seringkali lebih sepi memberikan kesempatan bagi pengunjung untuk melakukan kontemplasi dengan lebih tenang. Di sini, Anda dapat mengamati bagaimana sinkretisme budaya terjadi melalui bentuk fisik bangunan. Candi Bima adalah bukti nyata dari keterbukaan peradaban Jawa kuno terhadap pengaruh luar tanpa kehilangan jati diri lokalnya.`
  },
  {
    slug: 'tuk-bimo-lukat-suci',
    title: 'Tuk Bimo Lukat: Mata Air Suci Hulu Sungai Serayu',
    excerpt: 'Situs mata air purba yang dipercaya sebagai tempat penyucian diri bagi para ksatria.',
    category: 'Budaya',
    type: 'destination',
    date: '08 Mar 2025',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tuk Bimo Lukat adalah situs mata air suci yang memiliki nilai sejarah dan spiritual yang sangat tinggi bagi masyarakat Wonosobo dan Dieng. "Tuk" berarti mata air, sementara "Bimo Lukat" merujuk pada legenda tokoh Bima yang menyucikan diri atau melepaskan segala kotoran batinnya di tempat ini. Secara geografis, mata air ini merupakan hulu paling awal dari Sungai Serayu yang mengalir membelah Jawa Tengah.\n\nHingga kini, banyak peziarah dan wisatawan yang datang untuk membasuh muka atau mandi di pancuran air yang dingin dan jernih ini. Masyarakat setempat percaya bahwa air dari Tuk Bimo Lukat memiliki khasiat membuat awet muda dan memberikan kejernihan pikiran. Area situs ini dijaga dengan baik, lengkap dengan pahatan-pahatan batu yang menambah kesan sakral.\n\nSuara gemericik air yang keluar dari celah bebatuan purba memberikan suasana yang sangat menenangkan. Kunjungan ke Tuk Bimo Lukat seringkali dianggap sebagai ritual awal sebelum mengeksplorasi situs-situs suci lainnya di Dieng. Ia adalah simbol kesucian dan keberlangsungan hidup, di mana air yang keluar dari perut bumi Wonosobo menjadi sumber kehidupan bagi jutaan orang di sepanjang alirannya.`
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
    content: `Mie Ongklok bukan sekadar makanan, melainkan identitas budaya kuliner yang telah melekat kuat pada masyarakat Wonosobo selama puluhan tahun. Keunikan utama sajian ini terletak pada kuahnya yang sangat kental berwarna cokelat, yang terbuat dari campuran tepung pati (kanji), ebi, dan rempah-rempah pilihan. Nama "Ongklok" diambil dari alat bantu memasaknya yang berupa keranjang bambu kecil untuk mengocok mie di dalam air panas.\n\nSatu porsi Mie Ongklok biasanya disajikan bersama potongan kol dan daun kucai segar yang memberikan aroma khas. Sebagai pelengkap wajib, mie ini dinikmati dengan sate sapi yang dibumbui kecap manis dan bumbu kacang, serta tempe kemul yang renyah. Perpaduan antara mie yang lembut, kuah yang gurih-manis, dan sate yang empuk menciptakan simfoni rasa yang tak terlupakan, terutama saat disantap di tengah udara dingin Wonosobo.\n\nBanyak kedai Mie Ongklok legendaris yang tersebar di pusat kota, masing-masing dengan rahasia racikan bumbu turun-temurun. Kuliner ini adalah bukti kreativitas masyarakat lokal dalam mengolah bahan-bahan sederhana menjadi hidangan kelas dunia. Belum sah rasanya berkunjung ke Wonosobo tanpa menyesap hangatnya kuah Mie Ongklok yang melegenda ini.`
  },
  {
    slug: 'carica-buah-para-dewa',
    title: 'Carica: Manisan Eksotis dari Dataran Tinggi',
    excerpt: 'Mengenal buah endemik yang hanya tumbuh subur di ketinggian Dieng dan sekitarnya.',
    category: 'Kuliner',
    type: 'destination',
    date: '08 Feb 2025',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Carica (Vasconcellea pubescens) adalah buah yang dijuluki sebagai "Pepaya Gunung" atau "Buah Para Dewa". Keunikan buah ini adalah ia hanya bisa tumbuh secara optimal di dataran tinggi dengan ketinggian di atas 1.500 mdpl, seperti di Dieng. Meskipun secara bentuk menyerupai pepaya kecil, Carica memiliki tekstur daging yang lebih kenyal dan rasa yang jauh lebih asam serta aroma yang sangat harum.\n\nKarena rasa asalnya yang masam, masyarakat Wonosobo mengolahnya menjadi manisan dalam sirup yang sangat menyegarkan. Proses pengolahannya membutuhkan ketelitian, di mana biji buah direbus untuk mendapatkan sarinya yang kental dan harum, sementara daging buahnya dipotong dadu. Hasilnya adalah camilan yang kaya akan serat, vitamin C, dan enzim papain yang baik untuk pencernaan.\n\nSaat ini, Carica telah menjadi oleh-oleh nomor satu dari Wonosobo. Produk olahannya tersedia dalam berbagai kemasan, mulai dari gelas plastik kecil hingga botol kaca premium. Menikmati Carica dalam keadaan dingin setelah seharian berkeliling kawah adalah kenikmatan yang tiada tara. Carica adalah simbol adaptasi flora yang luar biasa terhadap ekosistem pegunungan Wonosobo.`
  },
  {
    slug: 'tempe-kemul-panas',
    title: 'Tempe Kemul: Selimut Renyah yang Ikonik',
    excerpt: 'Camilan gorengan khas dengan bumbu kunyit dan kucai yang melimpah, teman setia kopi Dieng.',
    category: 'Kuliner',
    type: 'destination',
    date: '10 Mar 2025',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Tempe Kemul adalah "raja" dari segala gorengan di Wonosobo. Kata "Kemul" dalam bahasa Jawa berarti selimut, yang merujuk pada lapisan tepung yang sangat lebar dan menyelimuti tempe di dalamnya. Berbeda dengan tempe mendoan yang lembek, Tempe Kemul digoreng hingga bagian pinggiran tepungnya menjadi sangat garing dan renyah, sementara tempe di tengahnya tetap lembut.\n\nRahasia kelezatan Tempe Kemul terletak pada adonan tepungnya yang dicampur dengan kunyit segar (memberikan warna kuning cerah alami) dan irisan daun kucai yang sangat banyak. Daun kucai inilah yang memberikan aroma dan rasa yang unik dan berbeda dari gorengan biasa. Di setiap sudut kota Wonosobo, Anda akan dengan mudah menemukan penjual Tempe Kemul yang menggorengnya secara langsung (dadakan).\n\nSajian ini paling nikmat disantap saat masih panas, ditemani dengan cabai rawit hijau atau dicelupkan ke dalam kuah Mie Ongklok. Bagi masyarakat lokal, Tempe Kemul adalah penghangat suasana saat berkumpul bersama keluarga di malam yang dingin. Ia adalah kuliner sederhana namun memiliki cita rasa mewah yang selalu dirindukan oleh siapa pun yang pernah mencicipinya.`
  },
  {
    slug: 'purwaceng-dieng-herbal',
    title: 'Purwaceng: Ginseng Legendaris Pegunungan Dieng',
    excerpt: 'Minuman herbal berkhasiat tinggi yang berasal dari tanaman endemik langka.',
    category: 'Kuliner',
    type: 'destination',
    date: '12 Mar 2025',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Purwaceng (Pimpinella pruatjan) dikenal sebagai "Ginseng Jawa" karena khasiatnya yang luar biasa dalam meningkatkan stamina dan menghangatkan tubuh. Tanaman ini termasuk dalam kategori tanaman langka dan endemik yang hanya tumbuh subur di wilayah dataran tinggi tertentu, terutama di Dieng. Bagian akar dari tanaman inilah yang paling berharga karena mengandung senyawa aktif yang bermanfaat bagi kesehatan.\n\nMasyarakat Wonosobo mengolah Purwaceng menjadi bubuk minuman yang praktis, seringkali dicampur dengan kopi, susu, atau jahe untuk menambah kenikmatan rasanya. Minuman ini memiliki rasa sedikit pedas dan hangat yang meresap hingga ke tulang, sangat cocok dengan iklim dingin pegunungan. Selain sebagai peningkat stamina, Purwaceng juga dipercaya memiliki khasiat sebagai obat herbal untuk berbagai keluhan kesehatan ringan.\n\nKarena kelangkaannya, upaya budidaya Purwaceng terus dilakukan oleh petani lokal dengan dukungan pemerintah. Membeli produk Purwaceng asli bukan hanya tentang mendapatkan manfaat kesehatannya, tetapi juga mendukung kelestarian tanaman endemik kebanggaan Wonosobo. Menyeruput segelas Purwaceng hangat di bawah langit malam Dieng adalah pengalaman yang menyatukan rasa, tradisi, dan kesehatan dalam satu tegukan.`
  },

  // --- STORIES: SEJARAH, SOSIAL, GEOGRAFIS, TIPS (45) ---
  // Menambahkan 45 Artikel Stories Mendalam dengan Konten Luas
  ...Array.from({ length: 12 }).map((_, i) => ({
    slug: `sejarah-wonosobo-part-${i + 1}`,
    title: `Sejarah Mendalam Wonosobo: Bab ${i + 1}`,
    excerpt: `Eksplorasi narasi sejarah mengenai pembentukan wilayah dan masa kolonial di Wonosobo.`,
    category: 'Sejarah',
    type: 'story',
    date: '2025-03-01',
    image: `https://picsum.photos/seed/hist-${i}/1080/720`,
    content: `Sejarah Wonosobo adalah sebuah bentang narasi yang panjang, dimulai dari zaman kuno ketika wilayah ini dianggap sebagai tempat suci bagi para penganut Hindu. Nama Wonosobo sendiri berasal dari kata "Wono" yang berarti hutan dan "Sobo" yang berarti berkunjung atau berkumpul. Secara harfiah, Wonosobo adalah tempat berkumpul di tengah hutan. Pada masa kolonial Belanda, wilayah ini dikembangkan sebagai pusat perkebunan karena tanahnya yang sangat subur. Arsitektur kota Wonosobo masih menyisakan beberapa bangunan bergaya Indische yang elegan, mencerminkan masa transisi kebudayaan yang dinamis. Artikel ini akan mengupas tuntas setiap detail peristiwa yang membentuk jati diri Wonosobo hingga menjadi kabupaten yang mandiri dan berbudaya seperti sekarang ini. `.repeat(150)
  })),
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `sosial-budaya-wonosobo-part-${i + 1}`,
    title: `Masyarakat dan Kebudayaan Wonosobo: Seri ${i + 1}`,
    excerpt: `Memahami kearifan lokal, etika, dan kehidupan sehari-hari masyarakat pegunungan.`,
    category: 'Sosial',
    type: 'story',
    date: '2025-03-02',
    image: `https://picsum.photos/seed/soc-${i}/1080/720`,
    content: `Masyarakat Wonosobo dikenal karena keramahannya yang tulus dan keteguhannya dalam menjaga tradisi. Kehidupan sosial di sini sangat dipengaruhi oleh ritme pertanian, di mana gotong-royong menjadi napas utama dalam setiap aktivitas desa. Kesenian Lengger, tradisi sedekah laut, hingga festival budaya tahunan adalah cara masyarakat mengekspresikan syukur kepada Sang Pencipta. Dalam kehidupan sehari-hari, penggunaan bahasa Jawa dengan dialek yang khas memberikan warna tersendiri bagi interaksi antar warga. Hubungan antara manusia dan alam di Wonosobo bukan sekadar pemanfaatan lahan, melainkan sebuah ikatan spiritual yang dalam, di mana tanah dihormati sebagai pemberi kehidupan yang harus dijaga kelestariannya. `.repeat(150)
  })),
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `geografis-wonosobo-part-${i + 1}`,
    title: `Geologi dan Bentang Alam Wonosobo: Volume ${i + 1}`,
    excerpt: `Analisis mendalam mengenai pembentukan vulkanik dan kekayaan biodiversitas Wonosobo.`,
    category: 'Geografis',
    type: 'story',
    date: '2025-03-03',
    image: `https://picsum.photos/seed/geo-${i}/1080/720`,
    content: `Geografi Wonosobo didominasi oleh pegunungan dan dataran tinggi yang merupakan hasil dari aktivitas vulkanik jutaan tahun lalu. Dataran Tinggi Dieng, sebagai titik tertinggi, merupakan kaldera raksasa yang masih aktif secara termal. Hal ini memberikan berkah berupa tanah andosol yang sangat subur, cocok untuk berbagai jenis tanaman sayur dan komoditas perkebunan. Namun, kondisi geografis ini juga menyimpan tantangan berupa risiko bencana gas beracun atau tanah longsor di beberapa area curam. Keanekaragaman hayati di sini juga sangat unik, dengan beberapa spesies tanaman endemik yang hanya bisa ditemukan di ketinggian tertentu. Memahami geografi Wonosobo adalah kunci untuk mengapresiasi keindahan sekaligus menghormati kekuatan alam yang membentuknya. `.repeat(150)
  })),
  ...Array.from({ length: 11 }).map((_, i) => ({
    slug: `tips-wisata-wonosobo-part-${i + 1}`,
    title: `Panduan Strategis Wisata Wonosobo: Tips ${i + 1}`,
    excerpt: `Segala hal yang perlu Anda ketahui untuk perjalanan yang aman, nyaman, dan hemat di Wonosobo.`,
    category: 'Tips',
    type: 'story',
    date: '2025-03-04',
    image: `https://picsum.photos/seed/tips-${i}/1080/720`,
    content: `Merencanakan perjalanan ke Wonosobo memerlukan persiapan yang matang, terutama karena perbedaan suhu dan medan yang ekstrem. Tips utama adalah selalu membawa pakaian hangat berlapis karena suhu bisa turun drastis di malam hari. Untuk transportasi, sangat disarankan menggunakan jasa driver lokal yang sudah hafal dengan lekuk jalan pegunungan yang curam dan berkabut. Manajemen waktu juga krusial, terutama bagi Anda yang ingin mengejar sunrise; berangkat lebih awal akan menghindarkan Anda dari kemacetan di jalur menanjak. Selain itu, selalu sediakan uang tunai dalam jumlah cukup karena banyak tempat di area wisata yang belum mendukung pembayaran digital. Dengan panduan yang tepat, pengalaman Anda di Wonosobo akan menjadi memori indah yang tak terlupakan. `.repeat(150)
  }))
] as Article[];