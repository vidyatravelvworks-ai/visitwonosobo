'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 * Dioptimalkan untuk mencapai skor SEO 100% secara otomatis.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
  focusKeyword: z.string().optional().describe('Kata kunci utama yang ingin ditargetkan untuk SEO'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama (minimal 1150 kata) dalam format Markdown'),
  metaTitle: z.string().describe('Judul untuk SEO (Meta Title) antara 50-60 karakter'),
  metaDescription: z.string().describe('Deskripsi singkat untuk SEO (Meta Description) antara 145-155 karakter'),
  focusKeywordSuggested: z.string().describe('Kata kunci fokus yang digunakan'),
  suggestedImageId: z.string().describe('ID gambar dari daftar yang disediakan yang paling relevan'),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<GenerateArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: { schema: GenerateArticleInputSchema },
  output: { schema: GenerateArticleOutputSchema },
  prompt: `Bertindaklah sebagai Senior Content Strategist dan Pakar SEO. 
Tugas Anda adalah menulis artikel mendalam tentang: "{{title}}".

KRITERIA WAJIB UNTUK SKOR SEO 100%:
1. PANJANG KONTEN: Minimal 1150 kata. Berikan informasi unik, mendalam, dan bermanfaat.
2. PENEMPATAN KEYWORD: 
   - Masukkan kata kunci fokus ({{focusKeyword}}) secara eksplisit di KALIMAT PERTAMA pada paragraf pertama.
   - Gunakan kata kunci secara natural di beberapa sub-judul (H2/H3).
3. METADATA:
   - metaTitle: Buat 50-60 karakter, harus mengandung kata kunci.
   - metaDescription: Buat 145-155 karakter, persuasif, mengandung kata kunci.
4. STRUKTUR: Gunakan format Markdown lengkap (H1, H2, H3, bullet points, dan daftar referensi di akhir).

Pilih satu ID gambar paling relevan dari daftar: hero-sikunir, candi-arjuna, mie-ongklok, telaga-warna, kawah-sikidang, kebun-teh, waterfall, carica, coffee, cave, mountain-prau.

Tulis dalam Bahasa Indonesia yang profesional dan mengalir.`,
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
