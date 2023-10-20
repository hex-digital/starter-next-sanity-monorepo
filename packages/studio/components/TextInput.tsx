import { useCallback } from 'react';
import {Stack, Text, TextArea} from '@sanity/ui';
import { set, unset } from 'sanity';
import CharacterCount from './CharacterCount';

export const TextInput = (props) => {
  const { elementProps, onChange, value = '', schemaType } = props;

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value;
    onChange(nextValue ? set(nextValue) : unset())
  }, [onChange]);

  return (
    <Stack space={2}>
      <TextArea
        {...elementProps}
        onChange={handleChange}
        value={value}
        style={{ resize: 'vertical' }}
      />
      <Text style={{marginLeft: 'auto'}}><CharacterCount {...props} /></Text>
    </Stack>
  );
}
