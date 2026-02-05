
export interface TripPackage {
  id: string;
  title: string;
  time: string;
  price: string;
  description: string;
  spots: string[];
  includes: string[];
  excludes: string[];
  color: string;
  borderColor: string;
}

export const staticPackages: TripPackage[] = [
  {
    id: 'paket-zona-1',
    title: "Paket Keliling Zona 1 (Sunrise)",
    time: "05:00 - 15:00 (Opsional)",
    price: "Rp 650.000",
    description: "Mobil, BBM, Driver as Guide",
    spots: ["Pintu Langit", "Candi Arjuna", "Kawah Sikidang", "Batu Ratapan", "Bukit Scooter", "Telaga Warna"],
    includes: ["Mobil Private", "BBM & Driver as Guide", "Parkir Semua Destinasi", "Antar Jemput Hotel"],
    excludes: ["Tiket Masuk Wisata", "Makan & Pengeluaran Pribadi", "Dokumentasi"],
    color: "bg-primary/5",
    borderColor: "border-primary/20"
  },
  {
    id: 'paket-zona-2',
    title: "Paket Keliling Zona 2",
    time: "07:00 - 16:00 (Opsional)",
    price: "Rp 650.000",
    description: "Mobil, BBM, Driver as Guide",
    spots: ["Bukit Sikunir", "Air Terjun Sikarim", "Swiss Van Java", "Telaga Menjer", "Kahyangan Skyline", "Kebun Teh Panama"],
    includes: ["Mobil Private", "BBM & Driver as Guide", "Parkir Semua Destinasi", "Antar Jemput Hotel"],
    excludes: ["Tiket Masuk Wisata", "Makan & Pengeluaran Pribadi", "Dokumentasi"],
    color: "bg-secondary/50",
    borderColor: "border-border"
  },
  {
    id: 'rental-mobil-guide',
    title: "Rental Mobil + Guide",
    time: "Waktu Fleksibel",
    price: "Mulai Rp 500rb",
    description: "Avanza, Innova, Hiace. Driver = Guide Lokal.",
    spots: ["BBM Termasuk", "Driver Berpengalaman", "Waktu Fleksibel", "Antar Jemput Hotel"],
    includes: ["Mobil Private", "BBM (Opsional)", "Driver Berpengalaman", "Antar Jemput Area Kota"],
    excludes: ["Biaya Parkir", "Makan Driver", "Tiket Wisata"],
    color: "bg-white",
    borderColor: "border-border"
  }
];
