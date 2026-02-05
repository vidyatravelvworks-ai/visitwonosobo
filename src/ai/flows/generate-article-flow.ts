'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel ilmiah panjang dengan Meta Tags SEO.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama (~1000-1100 kata) dalam format Markdown'),
  metaTitle: z.string().describe('Judul untuk SEO (Meta Title)'),
  metaDescription: z.string().describe('Deskripsi singkat untuk SEO (Meta Description/Excerpt)'),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<GenerateArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: { schema: GenerateArticleInputSchema },
  output: { schema: GenerateArticleOutputSchema },
  prompt: `Anda adalah seorang ahli SEO dan penulis konten profesional dengan gaya penulisan ilmiah yang populer.
Tugas Anda adalah menulis artikel mendalam tentang: "{{title}}".

Persyaratan Konten:
1. Panjang artikel: 1000-1100 kata.
2. Format: Gunakan Markdown murni (## untuk Sub-judul, **teks** untuk tebal, *teks* untuk miring).
3. Struktur:
   - Pendahuluan yang memikat.
   - Pembahasan mendalam dibagi menjadi beberapa sub-bab (##).
   - Kesimpulan.
   - Bagian akhir: "### Referensi Ilmiah" yang mencantumkan sumber bacaan yang valid (minimal 3 sumber dengan gaya standar).
4. Gaya Bahasa: Informatif, edukatif, dan dapat dipercaya.

Persyaratan SEO:
1. metaTitle: Judul menarik klik, maksimal 60 karakter.
2. metaDescription: Ringkasan persuasif, maksimal 155 karakter.

Tuliskan artikel secara lengkap dan utuh.`,
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
