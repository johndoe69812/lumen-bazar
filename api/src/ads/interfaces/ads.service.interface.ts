import { AdItemModel } from './ad-item.model';

export interface IAdsService {
  createAdvertisement(adItem: Partial<AdItemModel>): Promise<number>;

  archiveAdvertisement();

  updateAdvertisement();

  getAdvertisements();

  getFullAdvertisement();

  getAdvertisementDetails();
}
