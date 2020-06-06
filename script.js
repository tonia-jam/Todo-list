let todo = ""

$('button').on('click', () => {
    if ($('.input').val() !== "") {
        todo = $('.input').val();
    };
    $("ul").append(`<li>${todo}</li>`);
});


