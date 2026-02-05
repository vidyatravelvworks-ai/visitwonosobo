'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 * Ditambahkan kemampuan untuk menyarankan kata kunci fokus dan memilih gambar relevan.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
  focusKeyword: z.string().optional().describe('Kata kunci utama yang ingin ditargetkan untuk SEO'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama (1100-1200 kata) dalam format Markdown'),
  metaTitle: z.string().describe('Judul untuk SEO (Meta Title) max 60 karakter'),
  metaDescription: z.string().describe('Deskripsi singkat untuk SEO (Meta Description) max 155 karakter'),
  focusKeywordSuggested: z.string().describe('Kata kunci fokus yang digunakan (atau disarankan jika input kosong)'),
  internalLinks: z.string().describe('Rekomendasi internal link untuk artikel terkait'),
  suggestedImageId: z.string().describe('ID gambar dari daftar yang disediakan yang paling relevan dengan isi artikel'),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<GenerateArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: { schema: GenerateArticleInputSchema },
  output: { schema: GenerateArticleOutputSchema },
  prompt: `Bertindaklah sebagai Senior Content Strategist dan Pakar SEO yang berpengalaman menulis artikel ilmiah populer. 
Tugas Anda adalah menulis artikel mendalam tentang: "{{title}}".

{{#if focusKeyword}}
Optimalkan SEO secara ketat pada kata kunci utama ini: "{{focusKeyword}}".
{{else}}
Karena kata kunci fokus tidak disediakan, silakan riset dan tentukan satu kata kunci fokus paling kompetitif untuk judul ini, lalu cantumkan di field focusKeywordSuggested.
{{/if}}

KRITERIA WAJIB UNTUK SKOR SEO SEMPURNA:
1. PANJANG & FORMAT:
   - Panjang artikel: Minimal 1100 kata (Sangat penting untuk SEO pilar).
   - Format: Markdown murni.

2. STRUKTUR SEO & DENSITAS KATA KUNCI:
   - Gunakan H1 untuk judul.
   - Gunakan H2 dan H3 secara hierarkis.
   - Masukkan kata kunci fokus (focusKeyword) di paragraf pertama, beberapa sub-judul (H2/H3), dan secara natural (1-2% density).
   - Buat paragraf yang singkat dan poin-poin list (bullet points) jika relevan.

3. KUALITAS & SUMBER:
   - Gunakan gaya bahasa formal-populer.
   - Sertakan minimal 5 referensi nyata/simulasi berkualitas di akhir artikel (Gaya APA).

4. OUTPUT SEO METRICS:
   - metaTitle: Harus di bawah 60 karakter dan mengandung kata kunci fokus.
   - metaDescription: Antara 140-155 karakter, harus persuasif dan mengandung kata kunci fokus.
   - focusKeywordSuggested: Jika user memberikan input, kembalikan input tersebut. Jika kosong, berikan saran terbaik Anda.

5. PEMILIHAN GAMBAR (suggestedImageId):
   Pilih satu ID gambar yang PALING RELEVAN dengan topik artikel dari daftar berikut:
   - hero-sikunir: Sunrise, Alam, Bukit
   - candi-arjuna: Sejarah, Budaya, Candi, Hindu
   - mie-ongklok: Kuliner, Makanan, Mie, Khas
   - telaga-warna: Danau, Alam, Wisata Air
   - kawah-sikidang: Kawah, Vulkanik, Belerang
   - kebun-teh: Perkebunan, Teh, Pemandangan Hijau
   - waterfall: Air Terjun, Alam, Sikarim
   - carica: Buah, Oleh-oleh, Kuliner Khas
   - coffee: Kopi, Minuman, Kafe
   - cave: Gua, Mistik, Petualangan
   - mountain-prau: Gunung, Hiking, Camping
   - ritual: Budaya, Upacara, Anak Rambut Gimbal
   - street-food: Jajanan, Kuliner Malam, Pasar
   - lake-morning: Danau, Kabut, Pagi Hari
   - batik-craft: Kerajinan, Batik, Budaya
   - traditional-dance-lengger: Tari, Budaya, Kesenian

Tuliskan artikel secara lengkap dan profesional agar langsung siap terbit dengan performa SEO maksimal.`,
});

const generateArticleFlow = ai.defineFlow(
  {
    name: 'generateArticleFlow',
    inputSchema: GenerateArticleInputSchema,
    outputSchema: GenerateArticleOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Gagal menghasilkan konten artikel.');
    }
    return output;
  }
);
