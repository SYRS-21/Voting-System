export interface Poll extends PollForm {
  id: number; // 4
  results: number[]; // [0,0,0,4,5,6,3]
  voted: boolean;
}

export interface PollForm {
  question: string; // which days do you like in a week
  options: string[]; // [monday,tuesday,wednesday ....]
  thumbnail: string; // https://image.png
}

export interface PollVote {
  id : number;
  vote : number;
}

export interface voter {
  id: string; //0xhfhrufhbjbvdfh
  voted: number[]; //[7]
}
