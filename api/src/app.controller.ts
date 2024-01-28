import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('categories')
  getCategories(): string[] {
    console.log('getCategories');
    return ['first one'];
  }

  @Get('locations')
  getLocations(): string[] {
    return ['first one'];
  }
}
