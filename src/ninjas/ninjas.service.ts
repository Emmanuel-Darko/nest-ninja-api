import { Injectable } from '@nestjs/common';
import { Ninja } from './type';

@Injectable()
export class NinjasService {
  private ninjas: Ninja[] = [
    // { id: '0', name: 'Ninja1', weapon: 'stars' },
    // { id: '1', name: 'Ninja2', weapon: 'club' },
    // { id: '2', name: 'Ninja3', weapon: 'stars' },
  ];

  getNinja = (weapon?: 'stars' | 'club') => {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon == weapon);
    }
    return this.ninjas;
  };

  getOneNinja = (id: string): object => {
    const foundNinja = this.ninjas.find((ninja) => ninja.id == id);
    if (foundNinja) return foundNinja;
    else throw new Error(`No Ninja exists with id: ${id}`);
  };

  createNinja = (ninja: Ninja): object | string => {
    const id = Math.floor(Math.random() * 100).toString();
    const newNinja = { id, ...ninja };
    this.ninjas.push(newNinja);
    return this.getOneNinja(id);
  };

  updateNinja = (id: string, updateNinja: Ninja) => {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinja };
      }
      return ninja;
    });
    return this.getOneNinja(id);
  };

  deleteNinja = (id: string) => {
    const foundNinja = this.ninjas.find((ninja) => ninja.id == id);
    if (foundNinja) {
      this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
      return `Ninja of id:${id} removed!`;
    } else {
      throw new Error(`No Ninja exists with id: ${id}`);
    }
  };
}
