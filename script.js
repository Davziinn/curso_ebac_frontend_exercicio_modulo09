$(document).ready(function(){
    $('#form-tarefa').submit(function(e){
        e.preventDefault();

        let tarefa = $('#input-tarefa').val().trim();

        if(tarefa){
            $('#lista-tarefa').append(`<li>${tarefa}</li>`);
            $('#input-tarefa').val('');
        }
    });

    $('#lista-tarefa').on('click', 'li', function(){
        $(this).toggleClass('traco-completo');
    });
});


