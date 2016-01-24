(function () {

  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Loc8r'
    };
    vm.main = {
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget massa nulla. Proin accumsan magna vitae porta blandit. Donec ut tempor sapien. Donec pellentesque lorem quis nisl pulvinar volutpat. Quisque pharetra eros at rutrum aliquet. Nam eget metus id tortor rhoncus tristique. Donec porttitor felis feugiat vehicula elementum.\n\nPraesent felis nibh, pretium id purus id, tristique gravida sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dignissim laoreet felis, sed fringilla tellus sodales a. Donec dapibus eu elit eu suscipit. Etiam sit amet dolor enim. Maecenas mollis cursus vestibulum. Fusce dictum imperdiet nisl a volutpat. Sed et luctus nulla. Nulla eu rhoncus metus. Donec non elementum odio. Proin in vulputate elit. Mauris congue, orci sit amet euismod porta, odio diam ultrices velit, sit amet tincidunt elit dui nec lacus. Mauris ultrices ex interdum enim tincidunt, dignissim ullamcorper sapien ultrices. Aenean tristique magna eleifend enim dignissim maximus. Vivamus tincidunt consectetur lacus ut tempus.'
    };
  }

}) ();