import { Schema, model, models } from 'mongoose';

export interface User {
  username: string;
  discordId: string;
}

export const userSchema = new Schema<User>({
  username: { type: String, required: true },
  discordId: { type: String, required: true }
});

export const User = models.User || model<User>('User', userSchema);
