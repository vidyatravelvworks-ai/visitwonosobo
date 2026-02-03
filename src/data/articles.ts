
import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const articles: Article[] = [
  {
    slug: 'kuliner-mie-ongklok',
    title: 'Kuliner Mie Ongklok: Kelezatan Khas Wonosobo',
    excerpt: 'Mie Ongklok bukan sekadar mie rebus biasa. Pelajari sejarah dan resep rahasia di balik hidangan legendaris ini.',
    category: 'Kuliner',
    date: '15 Mei 2024',
    image: PlaceHolderImages.find(img => img.id === 'mie-ongklok')?.imageUrl || '',
    content: `
      Mie Ongklok adalah makanan khas Wonosobo yang paling dicari. Kata "Ongklok" berasal dari alat bantu untuk merebus mie yang terbuat dari anyaman bambu. 
      Mie ini disajikan dengan kuah kental berwarna cokelat yang terbuat dari pati (kanji), ebi, dan gula jawa.
      
      Biasanya, Mie Ongklok dinikmati dengan sate sapi dan tempe kemul yang masih hangat. Perpaduan rasa manis, gurih, dan tekstur kuah yang unik menjadikannya teman terbaik di udara dingin Wonosobo.
      
      Jika Anda berkunjung ke Wonosobo, pastikan mampir ke pusat kota untuk mencicipi hidangan otentik ini di kedai-kedai yang sudah berdiri puluhan tahun.
    `
  },
  {
    slug: 'ritual-rambut-gimbal',
    title: 'Mengenal Ritual Potong Rambut Gimbal Dieng',
    excerpt: 'Sebuah tradisi mistis dan budaya yang dilakukan setahun sekali di dataran tinggi Dieng. Fenomena unik anak-anak berambut gimbal.',
    category: 'Budaya',
    date: '20 Juni 2024',
    image: PlaceHolderImages.find(img => img.id === 'rambut-gimbal')?.imageUrl || '',
    content: `
      Anak-anak berambut gimbal di Dieng dipercaya sebagai titipan dari Kyai Kolodete. Rambut gimbal ini tidak boleh dipotong sembarangan, melainkan harus melalui upacara sakral yang disebut Ruwatan Rambut Gimbal.
      
      Keunikan dari ritual ini adalah permintaan anak tersebut harus dikabulkan sebelum rambutnya dipotong. Permintaannya bisa beragam, mulai dari hal sederhana seperti telur puyuh hingga yang unik seperti kambing putih.
      
      Acara ini biasanya menjadi puncak dari Dieng Culture Festival (DCF) yang menarik ribuan wisatawan setiap tahunnya.
    `
  },
  {
    slug: 'tips-cuaca-dieng',
    title: 'Tips Menghadapi Cuaca Ekstrem di Dieng',
    excerpt: 'Dari fenomena bun upas (embun es) hingga persiapan pakaian. Pastikan liburan Anda tetap nyaman meski suhu di bawah nol derajat.',
    category: 'Tips',
    date: '10 Juli 2024',
    image: PlaceHolderImages.find(img => img.id === 'dieng-fog')?.imageUrl || '',
    content: `
      Suhu di Dieng bisa mencapai minus derajat celsius saat musim kemarau, terutama antara bulan Juni hingga Agustus. Fenomena ini sering disebut "Bun Upas" oleh warga lokal, di mana embun membeku menjadi es.
      
      Persiapan yang matang sangat diperlukan:
      1. Gunakan pakaian berlapis (layering).
      2. Jangan lupakan jaket penahan angin (windbreaker).
      3. Gunakan kaos kaki dan sarung tangan.
      4. Siapkan pelembab kulit karena udara sangat kering.
      
      Waktu terbaik untuk melihat embun es adalah dini hari sekitar pukul 05.00 WIB sebelum matahari terbit sempurna.
    `
  }
];
