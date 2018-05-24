//== Class definition

var DatatableHtmlTableDemo = function() {
  //== Private functions

  // demo initializer
  var demo = function() {

    // var datatable = $('.m-datatable').mDatatable({
    //   // data: {
    //   //   saveState: {cookie: false},
    //   // },
    //   search: {
    //     input: $('#generalSearch'),
    //   },
    //   // columns: [
    //   //   {
    //   //     field: 'Deposit Paid',
    //   //     type: 'number',
    //   //   },
    //   //   {
    //   //     field: 'Order Date',
    //   //     type: 'date',
    //   //     format: 'YYYY-MM-DD',
    //   //   },
    //   // ],
    // });


    $('#html_table').mDatatable({
      search: {
            input: $('#generalSearch'),
          },
    });
  };

  return {
    //== Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  DatatableHtmlTableDemo.init();
});