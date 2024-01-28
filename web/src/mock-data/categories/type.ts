export type Category = {
  id: string;
  title: string;
  link: string;
  image?: string;
  subCategories?: Category[];
};

export type RootCategory = Category;
