var env = process.env.NODE_ENV || 'development';

var config = {
    cacheLayout: false,
    nothsApiUri: 'https://www.notonthehighstreet.com/api',
    assetUrl:   '//static-pages.notonthehighstreet.com',
    assetPath:   '/build',
    loggerMode:  '',
};

if (env === 'development') {
    config.cacheLayout = true;
    config.loggerMode = 'dev';
    config.assetUrl = '';
    config.assetPath = '';
}

if (process.env.CACHE_LAYOUT) {
    config.cacheLayout = (process.env.CACHE_LAYOUT === "true") ? true : false;
}

if (process.env.LAYOUT) {
    config.nothsLayoutUrl = process.env.LAYOUT;
}

if (process.env.ASSET_PATH) {
    config.assetPath = process.env.ASSET_PATH;
}

module.exports = config;
