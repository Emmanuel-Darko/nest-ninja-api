import { Injectable } from '@nestjs/common';
import { Customer } from './customer.types';

@Injectable()
export class CustomersService {
  //Initial Customers Array
  private customers = [];

  //getCustomers class method with optional query parameter
  getCustomers = (name?: string): Customer[] => {
    if (name) {
      return this.customers.filter((customer) => customer.name === name);
    }
    return this.customers;
  };

  //getOneCustomer returns a single field in the customers database/array or throws an error when no entry exists.
  getOneCustomer = (id: number) => {
    const findCustomer = this.customers.find((customer) => customer.id === id);
    if (findCustomer) return findCustomer;
    else throw new Error(`Customer does not exist... Please register`);
  };

  //createCustomer creates a new entry of customer and returns the newly created customer
  createCustomer(customer: Customer) {
    const id = Math.floor(Math.random() * 10000000000000);
    const newCustomer = { id, ...customer };
    this.customers.push(newCustomer);
    return this.getOneCustomer(id);
  }

  updateCustomer(id: number, updateCustomer: Customer[]) {
    this.customers = this.customers.map((customer) => {
      if (customer.id === id) {
        return { ...customer, ...updateCustomer };
      }
      return customer;
    });
    return this.getOneCustomer(id);
  }
}
