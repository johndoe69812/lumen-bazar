import slugify from 'slugify';

export const generateAdSlug = (originalTitle: string, id: number) => {
  return `${slugify(originalTitle.toLowerCase())}__${id}`;
};
