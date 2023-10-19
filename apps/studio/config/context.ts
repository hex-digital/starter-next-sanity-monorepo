import { changeContextFunctions } from '@packages/studio';
import { options, type Options } from './options';

export const context: Options & Record<string, any> = options;

changeContextFunctions(
  () => context,
  (option: string, value: any) => context[option] = value
);
