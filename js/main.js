'use strict';

$(document).ready(function () {

    $("#itemToAdd").on('keyup', disableBtn);
    $("#addBtn").on('click', addElement);
    $("#shoppingList").on('click', 'li', removeElement);
    $("#removedList").on('click', 'li', restoreElement);

    var index = 0;

    function addElement(e) {

        //A veces el botón tarda en desactivarse y hay un pequeño intervalo desde que se borra el último
        //caracter hasta que se desactiva (unas cuantas décimas de segundo), así que esta condición impide
        //que en ese pequeño intervalo pueda apuntarse un elemento vacío
        let eleVal = $('#itemToAdd').val();
        
        if(eleVal.length>0) {
            var item = $('<li>', {
                'id': index++,
                'text': eleVal,
                'class': e.id == "#shoppingList" ?
                    'list-group-item list-group-item-danger':
                    'list-group-item list-group-item-secondary'
                    
            });
            $("#shoppingList").append(item);
        }
    }

    function removeElement(e) {
       
        let eId = $(this).attr('id');
        let eContent = $(this).text();
        let eClass = e.id == "#removedList" ?
            'list-group-item list-group-item-secondary':
            'list-group-item list-group-item-danger';
                    

        $('#'+eId).remove();

        var item = $('<li>', {
            'id': eId,
            'text': eContent,
            'class': eClass
        });

        $("#removedList").append(item);  
    }

    function restoreElement(e) {
       
        let eId = $(this).attr('id');
        let eContent = $(this).text();
        let eClass = e.id == "#shoppingList" ?
            'list-group-item list-group-item-danger':  
            'list-group-item list-group-item-secondary';
                    

        $('#'+eId).remove();

        var item = $('<li>', {
            'id': eId,
            'text': eContent,
            'class': eClass
        });

        $("#shoppingList").append(item);  
    }

    function disableBtn() {
        if($('#itemToAdd').val().length==0) { 
            $('#addBtn').attr('disabled', 'disabled');
        } else { 
            $('#addBtn').attr('disabled', false);
        }
    }
});