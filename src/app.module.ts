import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: './dist/db.sqlite',
            autoLoadModels: true,
            models: [Order]
        }),
        OrdersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
