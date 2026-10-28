module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          // zustand gibi paketlerin "import.meta" kullanan sürümlerini Hermes'in anlayacağı
          // hâle getirir. Bu olmadan telefonda uygulama açılmaz (siyah/kırmızı ekran).
          unstable_transformImportMeta: true,
        },
      ],
    ],
  };
};
