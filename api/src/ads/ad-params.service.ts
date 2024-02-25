import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdParam } from './entities/ad-parameter.entity';
import { AdParamModel } from './interfaces/ad-params.model';

@Injectable()
export class AdParamsService {
  constructor(
    @InjectRepository(AdParam)
    private adParamsRepository: Repository<AdParam>,
  ) {}

  async createParam(paramData: Partial<AdParamModel>) {
    const param = new AdParam();
    param.name = paramData.name;

    const saved = await this.adParamsRepository.save(param);
    return saved.id;
  }

  async getAllParams() {
    return this.adParamsRepository.find();
  }

  async deleteParam(paramId: number) {
    try {
      await this.adParamsRepository.delete({
        id: paramId,
      });

      return true;
    } catch (e) {
      return false;
    }
  }

  // async assignParameterToAd(adId: string, paramId: string, value: string) {
  /*
        id SERIAL PRIMARY KEY,
    ad_id INTEGER REFERENCES ad_items(id),
    param_id INTEGER REFERENCES ad_params(id),
    option_id INTEGER REFERENCES ad_params_options(id),
    value VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    */
  // }

  async deleteAttribute() {}
}
