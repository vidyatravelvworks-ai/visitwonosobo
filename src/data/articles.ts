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
 * DATABASE ARTIKEL UTAMA
 */
export const articles: Article[] = [
  {
    slug: 'bukit-sikunir-wonosobo',
    title: 'Bukit Sikunir: Menikmati Golden Sunrise di Desa Tertinggi Jawa',
    excerpt: 'Bukit Sikunir menawarkan fenomena matahari terbit keemasan yang mempesona di ketinggian 2.263 mdpl.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '12 Feb 2025',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1595495745827-85bcc5c9a028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Bukit Sikunir merupakan primadona wisata di Dataran Tinggi Dieng yang tidak pernah sepi pengunjung, terutama bagi mereka yang ingin menyaksikan fajar menyingsing. Terletak di Desa Sembungan, yang diklaim sebagai desa tertinggi di Pulau Jawa, bukit ini memberikan akses mudah bagi siapa pun untuk menikmati panorama alam yang luar biasa. 

Perjalanan dimulai saat hari masih gelap, biasanya sekitar pukul 04.00 pagi, di mana suhu udara bisa mencapai di bawah 10 derajat Celcius. Para wisatawan akan menapaki anak tangga yang tertata rapi selama kurang lebih 30 hingga 45 menit untuk mencapai puncak. Sesampainya di atas, rasa lelah akan terbayar lunas saat semburat warna emas mulai memecah kegelapan di ufuk timur.`
  },
  {
    slug: 'telaga-warna-dieng',
    title: 'Telaga Warna: Rahasia Geologis di Balik Keindahan Air Tiga Warna',
    excerpt: 'Keajaiban geologis di mana air danau berubah warna karena interaksi kimiawi belerang purba.',
    category: 'Nature & Adventure',
    type: 'destination',
    date: '15 Feb 2025',
    author: 'Admin Lokal',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Telaga Warna adalah kanvas alam yang paling dramatis di Dieng, di mana mineral belerang dan cahaya matahari berkolaborasi menciptakan gradasi warna yang menakjubkan. Danau vulkanik ini memiliki kemampuan unik untuk berubah warna dari hijau toska yang pekat menjadi biru, hingga kuning keemasan, tergantung pada posisi matahari dan konsentrasi belerang di dasarnya.`
  },
  {
    slug: 'sejarah-candi-arjuna',
    title: 'Misteri Candi Arjuna: Warisan Mataram Kuno di Tanah Dieng',
    excerpt: 'Menelusuri jejak peradaban Hindu tertua di Jawa yang berdiri kokoh di tengah kepulan asap vulkanik.',
    category: 'History & Heritage',
    type: 'story',
    date: '18 Feb 2025',
    author: 'Sejarawan Lokal',
    image: 'https://images.unsplash.com/photo-1650432602350-d1d86aafd55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Kompleks Candi Arjuna adalah saksi bisu kejayaan Kerajaan Mataram Kuno pada abad ke-8. Terletak di dataran tinggi yang sering diselimuti kabut, candi ini bukan sekadar bangunan batu, melainkan representasi kosmos dalam kepercayaan Hindu. Setiap relief dan arsitekturnya menyimpan pesan tentang hubungan manusia dengan Tuhan dan alam semesta.`
  },
  {
    slug: 'legenda-rambut-gimbal',
    title: 'Legenda Rambut Gimbal: Anak-Anak Titipan Kyai Kolodete',
    excerpt: 'Kisah mistis di balik fenomena unik anak berambut gimbal yang hanya ada di Dataran Tinggi Dieng.',
    category: 'People & Culture',
    type: 'story',
    date: '20 Feb 2025',
    author: 'Budayawan Wonosobo',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: `Fenomena rambut gimbal pada anak-anak di Dieng dipercaya bukan sekadar masalah medis, melainkan berkah atau titipan dari Kyai Kolodete, leluhur masyarakat Dieng. Rambut ini tidak boleh dipotong sembarangan; harus melalui ritual pemotongan rambut gimbal yang sakral di mana permintaan sang anak wajib dikabulkan agar rambutnya tidak tumbuh kembali.`
  }
];
