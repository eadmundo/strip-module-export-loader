module.exports = function(source) {
  this.cacheable && this.cacheable();
  return source.replace(/^ ?module.exports ?= ?/i, '');
};