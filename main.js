// individuiamo l'elemento da cliccare per visualizzare il dropdown
// $('#padre-dropdown>i').click(function(){
//     var dropdown_content = &('.dropdown-content')
//     // individuiamo il tag con classe dropdown-content
//     // var dropdown_content = $ (this).next('.dropdown-content');
//     // se il tag su cui ho cliccato ha già il dropdown aperto
//     if (dropdown_content.is(':visible')) {
//         // se è già aperto => lo chiudo
//         dropdown_content.hide();
//     } else {
//         // se non è già aperto => lo apro
//         dropdown_content.show();
//     }
//     // $('.dropdown-content').show();
// })

// $('#padre-dropdown>i').click(function(){
//     $('.dropdown-content').slideDown();
// });

// individuiamo l'elemento da cliccare per nascondere il dropdown
$('#padre-dropdown>i').click(function(){
    $('.dropdown-content').toggle();
});

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// $('#padre-dropdown>i').click(function(){
//     var dropdown_content = &('.dropdown-content')
// if (dropdown_content.is(':visible')) {
// dropdown_content.hide();
//     } else {
// dropdown_content.show();
//     }
// })
