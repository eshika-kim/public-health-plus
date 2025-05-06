import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';
import { HttpService } from '@nestjs/axios';

import { FunctionalIngredientEntity } from './entities/functional-ingredients.entity.ts';
import { AxiosError } from 'axios';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(FunctionalIngredientEntity)
    private functionalIngredientRepository: Repository<FunctionalIngredientEntity>,
    @Inject('PUBLIC_API_CONFIG')
    private readonly foodSafetyApiConfig: {
      foodSafetyApiKey: string;
      foodSafetyOpenApiUrl: string;
    },
    private readonly httpService: HttpService,
  ) {}

  @Transactional()
  async createProgram() {
    try {
      // 건강기능식품 제품 정보
      const functionalFoodProductInfoUrl = `${this.foodSafetyApiConfig.foodSafetyOpenApiUrl}${this.foodSafetyApiConfig.foodSafetyApiKey}`;

      const response = await this.httpService.axiosRef.get(
        functionalFoodProductInfoUrl,
      );

      const result = await this.functionalIngredientRepository.save({
        name: 'example',
      });

      return result;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response);
        throw new HttpException(
          error.response?.data?.message || 'API 요청 중 에러 발생',
          error.response?.status || HttpStatus.BAD_GATEWAY,
        );
      }
      if (error instanceof Error) {
        console.log(error?.message);
        throw new InternalServerErrorException(error.message);
      }
      throw new Error();
    }
  }
}
