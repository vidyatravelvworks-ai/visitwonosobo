'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 * Dioptimalkan untuk mencapai skor SEO 100% secara otomatis sesuai checklist editor.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
  focusKeyword: z.string().optional().describe('Kata kunci utama yang ingin ditargetkan untuk SEO'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama (minimal 1200 kata) dalam format Markdown'),
  metaTitle: z.string().describe('Judul untuk SEO (Meta Title) antara 50-60 karakter'),
  metaDescription: z.string().describe('Deskripsi singkat untuk SEO (Meta Description) antara 145-155 karakter'),
  focusKeywordSuggested: z.string().describe('Kata kunci fokus yang digunakan'),
  suggestedImageId: z.string().describe('ID gambar dari daftar yang disediakan yang paling relevan'),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

/**
 * Wrapper function for the AI flow.
 * Menggunakan pola result object agar tidak memicu global error overlay di NextJS saat kuota habis.
 */
export async function generateArticle(input: GenerateArticleInput): Promise<{ data?: GenerateArticleOutput; error?: string }> {
  try {
    const output = await generateArticleFlow(input);
    return { data: output };
  } catch (error: any) {
    if (error.message?.includes('429') || error.message?.includes('quota')) {
      return { error: 'QUOTA_EXCEEDED' };
    }
    return { error: error.message || 'FAILED_TO_GENERATE' };
  }
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: { schema: GenerateArticleInputSchema },
  output: { schema: GenerateArticleOutputSchema },
  prompt: `Bertindaklah sebagai Senior Content Strategist dan Pakar SEO Internasional.
Tugas Anda adalah menulis artikel otoritas tinggi yang dirancang untuk menduduki peringkat #1 Google untuk topik: "{{title}}".

ANDA WAJIB MEMENUHI SEMUA KRITERIA SEO BERIKUT (SANGAT KETAT):
1. PANJANG KONTEN: Minimal 1200 kata. Berikan detail mendalam, panduan langkah demi langkah, dan wawasan lokal yang unik tentang Wonosobo. Jangan memberikan konten pendek.
2. OPTIMASI KATA KUNCI (Focus Keyword: {{focusKeyword}}):
   - WAJIB masukkan "{{focusKeyword}}" di KALIMAT PERTAMA pada paragraf pertama.
   - Gunakan "{{focusKeyword}}" setidaknya 6-10 kali di seluruh isi artikel secara natural (Keyword Density).
   - Masukkan "{{focusKeyword}}" di setidaknya satu Sub-judul (H2 atau H3).
3. METADATA PRESISI:
   - metaTitle: Buat judul SEO yang menarik, panjangnya HARUS antara 50-60 karakter, dan WAJIB mengandung "{{focusKeyword}}".
   - metaDescription: Buat deskripsi yang mendorong klik (CTR), panjangnya HARUS antara 145-155 karakter, dan WAJIB mengandung "{{focusKeyword}}".
4. STRUKTUR & LINKING:
   - Gunakan struktur Markdown lengkap: H1 (Judul Utama), beberapa H2, dan beberapa H3.
   - Gunakan bullet points atau daftar untuk memecah teks.
   - WAJIB masukkan setidaknya 2 link markdown yang relevan (misal: [Eksplorasi Dieng](https://visitwonosobo.tours/destinasi) atau [Paket Wisata Wonosobo](https://visitwonosobo.tours/paket)).
5. GAMBAR: Pilih satu ID gambar paling relevan dari daftar: hero-sikunir, candi-arjuna, mie-ongklok, telaga-warna, kawah-sikidang, kebun-teh, waterfall, carica, coffee, cave, mountain-prau.

Tulis dalam Bahasa Indonesia yang profesional, persuasif, dan sangat informatif.`,
});

const generateArticleFlow = ai.defineFlow(
  {
    name: 'generateArticleFlow',
    inputSchema: GenerateArticleInputSchema,
    outputSchema: GenerateArticleOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('Gagal menghasilkan konten artikel.');
    return output;
  }
);
