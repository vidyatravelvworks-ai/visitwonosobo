
'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 * Dioptimalkan untuk mencapai skor SEO 100% secara otomatis sesuai checklist editor.
 * Menambahkan instruksi ketat untuk keyword placement, internal/external links, dan bibliografi.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
  focusKeyword: z.string().optional().describe('Kata kunci utama yang ingin ditargetkan untuk SEO'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  titleSuggested: z.string().describe('Judul artikel yang dioptimalkan dengan focus keyword'),
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
  prompt: `Bertindaklah sebagai Senior SEO Content Specialist dan Ahli Geografi Wonosobo.
Tugas Anda adalah menulis artikel otoritas tinggi yang dirancang untuk mendapatkan skor SEO 100%.

TOPIK: "{{title}}"
KATA KUNCI FOKUS: "{{focusKeyword}}"

ANDA WAJIB MEMATUHI ATURAN KETAT BERIKUT UNTUK MENCAPAI SKOR 100%:
1. JUDUL (titleSuggested): Harus mengandung "{{focusKeyword}}" dan menarik perhatian.
2. PANJANG KONTEN: Wajib minimal 1200 kata. Berikan detail teknis, sejarah, dan panduan praktis yang mendalam.
3. PENEMPATAN KATA KUNCI:
   - Masukkan "{{focusKeyword}}" di KALIMAT PERTAMA pada paragraf pertama.
   - Gunakan "{{focusKeyword}}" sebanyak 8-12 kali di seluruh badan artikel (kepadatan optimal).
   - Masukkan "{{focusKeyword}}" di setidaknya satu Sub-judul H2 atau H3.
4. STRUKTUR MARKDOWN:
   - Gunakan H2 untuk poin utama dan H3 untuk sub-poin.
   - Gunakan bullet points atau penomoran untuk memudahkan pembaca.
5. INTERNAL LINKS: Masukkan setidaknya 2-3 link internal ke halaman berikut dalam format markdown: [Nama Halaman](/nama-halaman).
   Contoh: [Rencana Perjalanan](/plan-your-trip), [Lihat Destinasi](/see-and-do), atau [Jurnal Cerita](/stories).
6. EXTERNAL LINKS: Masukkan setidaknya 2 link eksternal ke situs otoritas (contoh: Wikipedia, situs resmi pariwisata Indonesia, atau jurnal geografi).
7. REFERENSI & DAFTAR PUSTAKA: Di akhir artikel, buat bagian "Daftar Pustaka" dengan format standar ilmiah (APA/MLA) yang mencantumkan sumber riset Anda.
8. METADATA: 
   - metaTitle: 50-60 karakter, Wajib ada "{{focusKeyword}}".
   - metaDescription: 145-155 karakter, Wajib ada "{{focusKeyword}}".
9. GAMBAR: Pilih satu ID gambar paling relevan: hero-sikunir, candi-arjuna, mie-ongklok, telaga-warna, kawah-sikidang, kebun-teh, waterfall, carica, coffee, cave, mountain-prau.

Tulis dalam Bahasa Indonesia yang berwibawa, informatif, dan menginspirasi pembaca untuk berkunjung ke Wonosobo.`,
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
