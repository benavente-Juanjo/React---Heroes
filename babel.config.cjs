module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],],
    // transformIgnorePatterns: [
    //     'node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)',],
    
};