import { z } from 'zod';

export const InsecureHttpUrl = z.custom<`http://${string}`>(
  (u) => typeof u === 'string' && u.startsWith('http://')
);

export const HttpsUrl = z.custom<`https://${string}`>(
  (u) => typeof u === 'string' && u.startsWith('https://')
);

/**
 * `http` OR `https` url.
 * @see {InsecureHttpUrl}
 * @see {HttpsUrl}
 */
export const HttpUrl = z.union([InsecureHttpUrl, HttpsUrl]);
export type HttpUrl = z.infer<typeof HttpUrl>;

export const CagematchUrl = z
  .custom<`https://www.cagematch.net/?id=${number}&nr=${number}`>(
    (u) =>
      typeof u === 'string' &&
      (u.startsWith('https://www.cagematch.net/') || u.startsWith('?'))
  )
  .transform((s) => (s.startsWith('?') ? `https://www.cagematch.net/${s}` : s))
  .transform((s) => {
    const url = new URL(s);
    const id = url.searchParams.get('id');
    const nr = url.searchParams.get('nr');
    return `https://www.cagematch.net/?id=${id}&nr=${nr}` as `https://www.cagematch.net/?id=${number}&nr=${number}`;
  });

export type CagematchUrl = z.infer<typeof CagematchUrl>;
