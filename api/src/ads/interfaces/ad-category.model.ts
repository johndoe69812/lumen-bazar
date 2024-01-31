export interface AdCategoryModel {
  id: number;
  title: string;
  alias: string;
  parentId: number;
  imageUrl: number;
  dateCreated: Date;
  dateUpdated: Date;
  parent: AdCategoryModel;
  subCategories: AdCategoryModel[];
}
