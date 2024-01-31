export type Category = {
  id: string;
  title: string;
  alias: string;
  imageUrl?: string;
  subCategories?: Category[];
};

export type RootCategory = Category;
