$(document).ready(function() {
    $('#todo-form').on('submit', function(event) {
        event.preventDefault();
        var taskText = $('#new-task').val();
        if (taskText) {
            var taskItem = $('<li></li>').text(taskText);
            $('#task-list').append(taskItem);
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
