// // Minimal client-side translator using MyMemory (no API key required).
// // Docs: https://api.mymemory.translated.net/
// // NOTE: Public, rate-limited, don't rely for heavy production usage.

// export type Translations = Record<string, string>;

// export async function translateClient(
//   text: string,
//   targets: string[],
//   source: string = "auto"
// ): Promise<Translations> {
//   if (!text?.trim() || !targets?.length) return {};

//   const src = source === "auto" ? "en" : source;

//   const results: Translations = {};
//   await Promise.all(
//     targets.map(async (tgt) => {
//       const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//         text
//       )}&langpair=${encodeURIComponent(src)}|${encodeURIComponent(tgt)}`;

//       const res = await fetch(url, { cache: "no-store" });
//       const data = await res.json();

//       const candidate =
//         data?.responseData?.translatedText ??
//         data?.matches?.[0]?.translation ??
//         "";

//       results[tgt] = candidate;
//     })
//   );

//   return results;
// }
