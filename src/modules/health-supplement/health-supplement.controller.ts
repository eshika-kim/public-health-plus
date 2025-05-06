import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
// import { ApiCreatedResponse } from '@nestjs/swagger';

import { ProgramService } from './health-supplement.service.ts';

@Controller('program')
export class ProgramController {
  constructor(private programService: ProgramService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  //   @ApiCreatedResponse({ type: ProgramDto })
  async createProgram() {
    await this.programService.createProgram();
  }
}
