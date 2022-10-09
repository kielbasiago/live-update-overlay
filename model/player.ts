import { Schema, model, models } from 'mongoose';

export interface IPlayer {
  id: string;
  username: string;
}

export const playerSchema = new Schema<IPlayer>({
  id: { type: String, required: true },
  username: { type: String, required: true }
});

export const Player = models.Player || model<IPlayer>('Player', playerSchema);
