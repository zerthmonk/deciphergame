type FieldSizePermitted = 12 | 16;
type VocabularyLang = 'eng' | 'latin' | 'ru_lat';
type VocabularyWordLen = 6 | 8 | 10 | 12;
type WordQuantity = 12 | 16;
type DifficultyType = 0 | 1 | 2 | 3 ;

type ConfigParams = {
  language: VocabularyLang;
  difficulty: DifficultyType;
  tries: number;
  timeout: number;
}

type CheatParams = {
  lowDifficultyCount: number[];
  highDifficultyCount: number[];
  cheatRestore: number[];
  cheatRemove: number[];
}

type RunningConfig = {
  words: string[];
  password: string;
  initialTries: number;
  difficulty: DifficultyType;
  cheatParams: CheatParams;
  wordCount: number;
  wordLength: number;
  timeLimited?: number;
}

type WordGenOptions = {
  language: VocabularyLang;
  wordQuantity?: WordQuantity;
  wordLength?: VocabularyWordLen;
}

type WordGenResult = {
  words: string[];
  password: string;
  wordLength: VocabularyWordLen;
}

type TextGenResult = {
  words: Record<string, number[]>;
  cheats: number[][];
  field: string[];
}

type CheatsPlaceResult = {
  textfield: string[];
  cheatsPos: number[][];
}

type WordsPlaceResult = {
  textfield: string[];
  wordsPos: Record<string, number[]>;
}

type GetVocabParams = Omit<Required<WordGenOptions>, 'wordQuantity'>;

export type {
  CheatParams,
  VocabularyWordLen,
  WordGenOptions,
  WordGenResult,
  TextGenResult,
  WordsPlaceResult,
  CheatsPlaceResult,
  FieldSizePermitted,
  DifficultyType,
  VocabularyLang,
  GetVocabParams,
  ConfigParams,
  RunningConfig
};
