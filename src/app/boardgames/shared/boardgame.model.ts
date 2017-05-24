/**
 * Created by JoLe on 18/05/2017.
 */
class GameTypes {
  boardgamecategory?: string[];
  boardgamesubdomain?: string[];
  boardgamemechanic?: string[];
  boardgamefamily?: string[];
}

export class Boardgame {

  bggId?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  image?: string;
  yearPublished?: string;
  minplayers?: number;
  maxplayers?: number;
  gameTypes?: GameTypes;
}
