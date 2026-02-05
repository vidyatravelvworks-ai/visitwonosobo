'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel instan berbasis AI lengkap dengan Meta Tags SEO.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel utama dalam format Markdown'),
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
  prompt: `Anda adalah seorang ahli SEO dan penulis konten profesional. 
Tugas Anda adalah menulis artikel mendalam tentang: "{{title}}".

Persyaratan Konten:
1. Gunakan format Markdown murni untuk konten. Gunakan **teks** untuk tebal, *teks* untuk miring, dan struktur heading (#, ##, ###) yang benar. Jangan gunakan tag HTML.
2. Panjang artikel utama sekitar 1000 kata.
3. Gaya penulisan formal namun menarik, edukatif, dan informatif.
4. Sertakan "Sumber Referensi" ilmiah di akhir artikel.

Persyaratan SEO & Meta Tags:
1. metaTitle: Buat judul yang sangat menarik klik (click-worthy) namun tetap akurat, maksimal 60 karakter.
2. metaDescription: Buat ringkasan artikel yang persuasif untuk meta deskripsi, maksimal 155 karakter. Jangan gunakan tag HTML di sini.

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
