module.exports = {
  description: '',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-image-cropper and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    var _this = this;
    return _this.addBowerPackageToProject('cropper');
  }
};
