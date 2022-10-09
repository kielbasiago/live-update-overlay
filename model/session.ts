import { ObjectId, Schema, Types, model, models } from 'mongoose';
import { IPlayer, Player } from './player';

export interface ISession {
  playerOneId: ObjectId | IPlayer;
  playerTwoId: ObjectId | IPlayer;
}
export type Racer = {
  name: string;
};

const sessionSchema = new Schema<ISession>({
  playerOneId: { type: Types.ObjectId, ref: Player.modelName, required: true },
  playerTwoId: { type: Types.ObjectId, ref: Player.modelName, required: true }
});

export const Session = models.Session || model<ISession>('Session', sessionSchema);
