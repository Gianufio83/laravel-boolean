require('./bootstrap');

const $ = require('jquery');

$(document).ready(funtion(){
  $('#filter').change(funtion(){
    $ajax({
    'url': window.location.protocol + '//' + window.location.host + 'api/students/genders',

    'data': {
      'gender': $(this).val()
    },
    'success': function(data) {
      console.log(data.response);
      if (data.response.lenght > 0) {
        console.log(data.response);
        }
        else {
          console.log('no students');
          
        }
      
    },
    'error' : function(){
      console.log('error');
      
    }

  });
 
  
});