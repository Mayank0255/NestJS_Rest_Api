import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item One',
      qty: 100,
      description: 'This is item one.',
    },
    {
      id: '2',
      name: 'Item Two',
      qty: 500,
      description: 'This is item two.',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id): Item {
    return this.items.find((item) => item.id === id);
  }
}
