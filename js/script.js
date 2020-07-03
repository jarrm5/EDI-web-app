var transactions = ["204","210","214","309","350","353","358","404","410","824","864","990","997"];

$(document).ready(function(){
    
    $('#main nav').append(function(){
        var html = "<ul>";
        transactions.forEach(function(item){
            html += ("<li class='index-nav-li'><a href='" + item + ".html'>" + item + "</a></li>")
        });
        return html += "</ul>";
    });

    $('#footer').text(function(){
        return $(this).text() + new Date().getFullYear();
    });
});

$('nav ul li').click(function(){
    console.log(this.val());
});