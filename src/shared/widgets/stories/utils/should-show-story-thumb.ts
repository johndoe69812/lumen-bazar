export const shouldShowStoryThumb = (
  firstThumbIndex: number,
  currentThumbIndex: number,
  itemsPerView: number,
  total: number
) => {
  const allFits = total <= itemsPerView;
  const isBackArrow = !allFits && firstThumbIndex > 0;
  const isForwardArrow = !allFits && firstThumbIndex + itemsPerView < total;
  const lastVisibleIndex =
    firstThumbIndex + itemsPerView - Number(isForwardArrow);
  const firstVisibleIndex = firstThumbIndex + Number(isBackArrow);

  if (allFits) {
    return true;
  }

  if (
    currentThumbIndex >= firstVisibleIndex &&
    currentThumbIndex < lastVisibleIndex
  ) {
    return true;
  }

  return false;
};
