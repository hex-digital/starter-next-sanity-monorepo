import styles from './CharacterCount.module.css';

function getMinMax(schemaType) {
  let min = null;
  let max = null;

  schemaType.validation.forEach((rule) => {
    // _rules is deprecated and now private, but not sure how else to do this directly from validation
    const minRule = rule._rules.filter((ruling) => Number.isInteger(ruling.constraint) && ruling.flag === 'min');
    if (minRule[0]) { min = minRule[0].constraint }

    const maxRule = rule._rules.filter((ruling) => Number.isInteger(ruling.constraint) && ruling.flag === 'max');
    if (maxRule[0]) { max = maxRule[0].constraint }
  });

  return {
    min,
    max,
  };
}

export default function CharacterCount(props) {
  const { value = '', schemaType } = props;
  const {min, max} = getMinMax(schemaType);

  let characters;
  let classes = [styles.textInput];

  if (min || max) {
    characters = `${value.length} / ${max}`;
  }
  if (value.length < min || value.length > max) {
    classes.push(styles.textInputWarning);
  }

  return (
    <span className={classes.join(' ')}>{characters}</span>
  );
}
