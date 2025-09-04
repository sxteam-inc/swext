Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'swext',
      lang: 'ru',
      dir: 'babele/ru'
    });
  }
});