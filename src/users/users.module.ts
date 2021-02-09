import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.model';
import { UsersService } from './users.service';

@Module({
  imports : [MongooseModule.forFeature([{name: 'User', schema : UserSchema}])],
  exports : [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
