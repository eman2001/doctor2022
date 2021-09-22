$(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top >= 400) {
        $('.back-top').fadeIn();
    } else {
        $('.back-top').fadeOut();
    }
});

$('.back-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});
//  end back-top





// stsrt FAQ
$(document).ready(function() {
    $(".set > p").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > p i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > p i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > p").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  });
// end FAQ


// start Patient data 
  $('#Patient_form').submit(function (e) {
    e.preventDefault();
    var name = $('#Patient_name').val();
    var condition = $('#Patient_condition').val();
    var Bill = $('#Patient_Bill').val();

    var row = "<tr><td><span>" + name + "</span><input type='hidden' value='" + name + "'></td><td><span>" + condition + "</span><input type='hidden' value='" + condition + "'></td><td><span>" + Bill + "</span><input type='hidden' value='" + Bill + "'></td><td><div><button class='btn btn-info edit'>Edit</button><button class='btn mx-2 btn-danger delete'>Delete</button></div></td></tr>";
    $('table tbody').prepend(row); // اضافة في اول الجدول
    // $('table tbody').append(row);// اضافة في اخر الجدول

    $('#Patient_name').val('');
    $('#Patient_condition').val('');
    $('#Patient_Bills').val('');
})


$('table').on('click', '.delete', function () {
    if (confirm('Are you sure?')) {
        $(this).parent().parent().parent().remove();
    }
})


$('table').on('click', '.edit', function () {
    $(this).text('Save');
    $(this).addClass('save');
    $(this).parent().parent().parent().find('span').hide();
    $(this).parent().parent().parent().find('input').attr('type', 'text');

});

$('table').on('click', '.save', function () {
    $(this).text('Edit');
    $(this).removeClass('save');
    $(this).parent().parent().parent().find('span').show();
    $(this).parent().parent().parent().find('input').attr('type', 'hidden');

});

$('table').on('keyup', 'input', function () {
    $(this).parent().find('span').text($(this).val())
})

// end Patient data 

