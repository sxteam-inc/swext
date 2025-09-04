Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'sx-swext',
      lang: 'ru',
      dir: 'babele/ru'
    });
  }
});