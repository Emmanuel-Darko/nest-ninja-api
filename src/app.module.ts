import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaModule } from './ninjas/ninjas.module';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';

@Module({
  imports: [NinjaModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
