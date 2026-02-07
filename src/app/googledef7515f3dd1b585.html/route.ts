
/**
 * @fileOverview Route untuk verifikasi file HTML Google Search Console.
 * File ini merespon permintaan ke /googledef7515f3dd1b585.html
 */
export async function GET() {
  return new Response('google-site-verification: googledef7515f3dd1b585.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
