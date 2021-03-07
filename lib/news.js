// SORT NEWS BY PUBLISHED DATE FIELD
export function compareAndSortArticlesByDate(a, b) {
  const dateA = new Date(a.dateline);
  const dateB = new Date(b.dateline);

  let comparison = 0;
  if (dateA < dateB) {
    comparison = 1;
  } else if (dateA > dateB) {
    comparison = -1;
  }
  return comparison;
}
