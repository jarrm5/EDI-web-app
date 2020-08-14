var transactions = ["204","210","214","404"];

$(document).ready(function(){
    
    $('#header nav').append(function(){
        console.log("Hi");
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
