
/**
 * @fileOverview Route untuk verifikasi file HTML Google Search Console.
 * File ini akan merespon permintaan ke /googledef7515f3dd1b585.html
 */
export async function GET() {
  return new Response('google-site-verification: googledef7515f3dd1b585', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
