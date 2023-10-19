import { singletonSchemaTypes } from './singletons';
import { documentSchemaTypes } from './documents';
import { objectSchemaTypes } from './objects';

export const schemaTypes = [
  ...singletonSchemaTypes,
  ...documentSchemaTypes,
  ...objectSchemaTypes,
];
