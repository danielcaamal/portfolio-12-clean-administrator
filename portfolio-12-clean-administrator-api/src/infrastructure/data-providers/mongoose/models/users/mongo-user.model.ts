// Framework
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// External
import { Document } from 'mongoose';

// Domain
import { USER_STATUS_ENUM, User } from 'src/domain';

@Schema({ timestamps: true })
export class MongoUser extends Document implements User {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true, type: Number })
  employeeNumber: number;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  position: string;
  @Prop({ required: false })
  token?: string;
  @Prop({ required: false, default: Date.now })
  lastConnection: Date;
  @Prop({
    required: false,
    enum: USER_STATUS_ENUM,
    default: USER_STATUS_ENUM.ACTIVE,
  })
  status: USER_STATUS_ENUM;
  @Prop()
  loginCodeVerification: string;
  @Prop()
  loginCodeExpiration?: Date;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const MongoUserSchema = SchemaFactory.createForClass(MongoUser);
