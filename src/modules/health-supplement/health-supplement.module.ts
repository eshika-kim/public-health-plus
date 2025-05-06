import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProgramController } from './health-supplement.controller.ts';
import { ProgramService } from './health-supplement.service.ts';
import { FunctionalIngredientEntity } from './entities/functional-ingredients.entity.ts';

@Module({
  imports: [
    TypeOrmModule.forFeature([FunctionalIngredientEntity]),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [ProgramController],
  providers: [
    ProgramService,
    {
      provide: 'TMDB_CONFIG',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const foodSafetyApiKey: string | undefined = configService.get<string>(
          'FOOD_SAFETY_API_KEY',
        );

        const foodSafetyOpenApiUrl: string | undefined =
          configService.get<string>('FOOD_SAFETY_API_URL');

        if (!foodSafetyOpenApiUrl || !foodSafetyApiKey) {
          throw new Error(
            '환경 변수 입력이 되지 않았습니다. : FOOD_SAFETY_API_URL or FOOD_SAFETY_API_KEY',
          );
        }

        return {
          foodSafetyApiKey,
          foodSafetyOpenApiUrl,
        };
      },
    },
  ],
  exports: [HttpModule],
})
export class ProgramModule {}
