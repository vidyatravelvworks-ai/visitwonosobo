'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah populer dengan standar SEO Senior.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
  focusKeyword: z.string().optional().describe('Kata kunci utama yang ingin ditargetkan untuk SEO'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama (1000-1100 kata) dalam format Markdown'),
  metaTitle: z.string().describe('Judul untuk SEO (Meta Title)'),
  metaDescription: z.string().describe('Deskripsi singkat untuk SEO (Meta Description) max 150 karakter'),
  internalLinks: z.string().describe('Rekomendasi internal link untuk artikel terkait'),
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
{{#if focusKeyword}}Fokuskan optimasi SEO pada kata kunci utama ini: "{{focusKeyword}}".{{/if}}

KRITERIA WAJIB:
1. PANJANG & FORMAT:
   - Panjang artikel: 1000-1100 kata.
   - Format: Markdown murni.

2. STRUKTUR SEO:
   - Gunakan H1 untuk judul di dalam konten.
   - Gunakan H2 dan H3 secara hierarkis untuk sub-bab.
   - Masukkan kata kunci utama dan LSI (kata kunci terkait) secara natural.
   - Buat paragraf yang singkat (maksimal 4 kalimat per paragraf) agar mudah dibaca (readability).
   - Sertakan kesimpulan yang kuat di akhir artikel.

3. KUALITAS ILMIAH & VALIDITAS:
   - Gunakan gaya bahasa formal namun tetap enak dibaca.
   - Sertakan fakta-fakta terbaru atau argumen yang logis.

4. SUMBER REFERENSI:
   - Di bagian paling bawah konten, buat daftar pustaka dengan "Gaya Standar (APA/Harvard)".
   - Cantumkan minimal 5 referensi (jurnal, buku, atau situs berita kredibel).

5. ASPEK TAMBAHAN (Output dalam field terpisah):
   - Buatkan metaTitle yang menarik (max 60 karakter).
   - Buatkan metaDescription (maksimal 150 karakter).
   - Berikan rekomendasi "Internal Link" (saran artikel lain yang relevan untuk ditautkan).

Tuliskan artikel secara lengkap, utuh, dan profesional.`,
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
