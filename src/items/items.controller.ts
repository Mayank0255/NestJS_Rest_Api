import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interface/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}
            Description: ${createItemDto.description}
            Quantity: ${createItemDto.qty}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return `Update Item ${id} - \n
            Name: ${updateItemDto.name}\\n
            Description: ${updateItemDto.description}\\n
            Quantity: ${updateItemDto.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }
}
