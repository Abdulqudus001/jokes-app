export default {
  allCategories(state) {
    const allCategories = [];
    const colors = [
      '#ff5b5b',
      '#ff915b',
      '#ffbe5b',
      '#ffdf5b',
      '#8fe360',
      '#57e690',
      '#57dbe6',
      '#8319a4',
      '#5f39da',
      '#39da79',
      '#dacf39',
    ];
    state.jokes.result.forEach((el) => allCategories.push(...el.categories));
    const uniqCategories = [...new Set(allCategories)];
    return uniqCategories.map((cat, index) => ({
      title: cat,
      color: colors[index] || colors[index % (colors.length - 1)],
    }));
  },
};
