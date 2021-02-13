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

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all Items.';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item Id: ${id}`;
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
