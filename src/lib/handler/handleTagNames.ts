export const handleTagNamesChange = (tagNames: string) => {
  const tagNamesArray = tagNames.split('#').map((tagName) => {
    const tagNameTrim = tagName.trim();
    if (tagNameTrim.length > 20) {
      throw Error('20자 이하로 입력해주세요.');
    }

    return tagNameTrim;
  });
  if (tagNamesArray[0].length < 1) {
    tagNamesArray.shift();
  }
  return tagNamesArray;
};
