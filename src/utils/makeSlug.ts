// utils/slugify.ts
import slugify from "slugify";

export function makeSlug(name: string) {
  return slugify(name, { lower: true, strict: true });
}
