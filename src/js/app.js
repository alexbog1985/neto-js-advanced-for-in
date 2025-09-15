export default function orderByProps(obj, sortList) {
  const orderedProps = [];
  const otherProps = [];

  for (const key of sortList) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      orderedProps.push({ key: key, value: obj[key] });
    }
  }

  for (const key in obj) {
    if (!sortList.includes(key) && Object.prototype.hasOwnProperty.call(obj, key)) {
      otherProps.push({ key: key, value: obj[key] });
    }
  }
  otherProps.sort((a, b) => a.key.localeCompare(b.key));

  return [...orderedProps, ...otherProps];
}
