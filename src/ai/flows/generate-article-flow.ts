'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 * Dioptimalkan untuk mencapai skor SEO 100% secara otomatis sesuai checklist editor.
 * Menambahkan instruksi untuk menyertakan sumber ilmiah dan daftar pustaka.
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

ANDA WAJIB MEMENUHI SEMUA KRITERIA BERIKUT:
1. PANJANG KONTEN: Minimal 1200 kata. Berikan detail mendalam dan wawasan lokal yang unik tentang Wonosobo.
2. OPTIMASI KATA KUNCI (Focus Keyword: {{focusKeyword}}):
   - WAJIB masukkan "{{focusKeyword}}" di KALIMAT PERTAMA.
   - Gunakan "{{focusKeyword}}" setidaknya 6-10 kali secara natural.
   - Masukkan "{{focusKeyword}}" di setidaknya satu Sub-judul (H2 atau H3).
3. SUMBER ILMIAH & REFERENSI: WAJIB sertakan sumber ilmiah, data statistik, atau referensi otoritas yang relevan di dalam artikel untuk meningkatkan kredibilitas.
4. DAFTAR PUSTAKA: Di akhir artikel, buatlah bagian "Daftar Pustaka" dengan penulisan standar (format APA atau sejenisnya) yang mencantumkan sumber-sumber yang digunakan.
5. METADATA: metaTitle (50-60 karakter) dan metaDescription (145-155 karakter) WAJIB mengandung "{{focusKeyword}}".
6. GAMBAR: Pilih satu ID gambar paling relevan dari daftar: hero-sikunir, candi-arjuna, mie-ongklok, telaga-warna, kawah-sikidang, kebun-teh, waterfall, carica, coffee, cave, mountain-prau.

Tulis dalam Bahasa Indonesia yang profesional, akademis namun tetap populer, persuasif, dan sangat informatif.`,
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
