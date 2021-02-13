import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all Items.';
  }

  @Post()
  create(@Body() { name, description, qty }: CreateItemDto): string {
    return `Name: ${name}\nDescription: ${description}\nQuantity: ${qty}`;
  }

  @Put()
  update(): string {
    return 'Update Item';
  }

  @Delete()
  delete(): string {
    return 'Delete Item';
  }
}
