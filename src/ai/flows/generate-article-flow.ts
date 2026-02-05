'use server';
/**
 * @fileOverview Flow untuk menghasilkan artikel instan berbasis AI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateArticleInputSchema = z.object({
  title: z.string().describe('Judul artikel yang akan dibuat'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  content: z.string().describe('Konten artikel yang dihasilkan'),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<GenerateArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: { schema: GenerateArticleInputSchema },
  output: { schema: GenerateArticleOutputSchema },
  prompt: `Anda adalah seorang penulis artikel profesional dan peneliti ilmiah. 
Tugas Anda adalah menulis artikel mendalam tentang: "{{title}}".

Persyaratan Konten:
1. Panjang artikel harus antara 1000 hingga 1100 kata.
2. Gaya penulisan harus formal, edukatif, dan ilmiah namun tetap mudah dipahami.
3. Struktur artikel harus mencakup:
   - Pendahuluan yang menarik (hook).
   - Pembahasan mendalam yang dibagi menjadi beberapa sub-judul (Heading 2 atau Heading 3).
   - Analisis data atau fakta sejarah/geografis yang relevan.
   - Kesimpulan yang kuat.
4. Sertakan bagian "Sumber Referensi" di paling bawah artikel dengan format daftar pustaka standar yang valid dan dapat dipercaya (seperti jurnal, buku, atau portal berita resmi).
5. Optimasi SEO: Gunakan kata kunci yang relevan secara natural, buat narasi yang mengalir, dan berikan informasi yang memiliki nilai manfaat tinggi bagi pembaca.

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
