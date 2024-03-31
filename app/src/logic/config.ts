import generateWords from './wordgen';

import { getRange } from './helpers';

import type {
  CheatParams,
  ConfigParams,
  RunningConfig,
  WordGenOptions,
} from './types'

type genParams = Omit<Required<WordGenOptions>, 'language'>;

// balancing cheats
const cheatParams: CheatParams = {
  lowDifficultyCount: getRange(4, 7),
  highDifficultyCount: getRange(6, 8),
  cheatRestore: [100, 80, 60, 50], // difficulty from 0 to 3
  cheatRemove: [75, 66, 50, 33], // difficulty from 0 to 3
}

const wordGenParams: genParams[] = [
  {
    wordQuantity: 16,
    wordLength: 6,
  },
  {
    wordQuantity: 16,
    wordLength: 8,
  },
  {
    wordQuantity: 12,
    wordLength: 10,
  },
  {
    wordQuantity: 12,
    wordLength: 12,
  },
]

async function generateConfig ({
  language,
  difficulty,
  tries,
  timeout,
}: ConfigParams): Promise<RunningConfig> {
  if (difficulty > wordGenParams.length - 1) {
    throw new Error(`difficulty should be in range 0 - ${wordGenParams.length - 1}`)
  }
  const params: genParams = wordGenParams[difficulty];

  const { words, password, wordLength } = await generateWords({
    language,
    ...params,
  })

  return {
    words,
    password,
    difficulty,
    cheatParams,
    wordLength,
    timeLimited: timeout > 0 ? timeout : undefined,
    initialTries: tries || 4,
    wordCount: params.wordQuantity,
  }
};

export { generateConfig };