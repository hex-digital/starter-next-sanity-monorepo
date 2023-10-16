import { singletonSchemaTypes } from './singletons';
import { documentSchemaTypes } from './documents';
import { objectSchemaTypes } from './objects';
export * from './schemasConfig';

export const schemaTypes = [
  ...singletonSchemaTypes,
  ...documentSchemaTypes,
  ...objectSchemaTypes,
];

export { singletonSchemaTypes, documentSchemaTypes, objectSchemaTypes }
