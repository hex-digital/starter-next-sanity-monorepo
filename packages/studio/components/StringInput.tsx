import { useCallback } from 'react';
import { Stack, Text, TextInput } from '@sanity/ui';
import { set, unset } from 'sanity';
import CharacterCount from './CharacterCount';

export const StringInput = (props) => {
  const { elementProps, onChange, value = '', schemaType } = props;

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value;
    onChange(nextValue ? set(nextValue) : unset())
  }, [onChange]);

  return (
    <Stack space={2}>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      <Text style={{marginLeft: 'auto'}}><CharacterCount {...props} /></Text>
    </Stack>
  );
}
