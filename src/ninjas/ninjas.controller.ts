import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { Ninja } from './type';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'club'): object {
    return this.ninjasService.getNinja(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string): object {
    try {
      return this.ninjasService.getOneNinja(id);
    } catch (error) {
      throw new NotFoundException(`${error}`);
    }
  }

  @Post()
  createNinja(@Body() newNinja: Ninja): object | string {
    return this.ninjasService.createNinja(newNinja);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinja: Ninja) {
    try {
      return this.ninjasService.updateNinja(id, updateNinja);
    } catch (error) {
      throw new NotFoundException(`${error}`);
    }
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.deleteNinja(id);
    } catch (error) {
      throw new NotFoundException(`${error}`);
    }
  }
}
