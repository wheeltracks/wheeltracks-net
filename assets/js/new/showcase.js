  $('#filter_content').isotope({ 
      filter: '*',
     }); 

    // cache filter_content
    var $filter_content = $('#filter_content');
    // initialize isotope
    $filter_content.isotope({
        animationOptions: {
          duration: 750,
          easing: 'ease-in',
          queue: true
        }
    });

    // filter items when filter link is clicked
    $('#filters a').click(function(){
      var selector = $(this).attr('data-filter');
      $filter_content.isotope({ filter: selector });
      return true;
    });