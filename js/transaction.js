var shipStatusrailHeader = ["Shipper","Pro Number","Load Number","Status","Date"];
var railHeaders = ["Rail Carrier","Trailer Number","Weight (Lbs)","Freight desc", "Date Billed"];

var shipStatusData = [
    {shipper:"The Container Store",proNumber:"927250012",loadNumber:"1008708",status:"D1",statusDate: new Date(2019,5,22,13,31,0,0) },
    {shipper:"Central Garden & Pet",proNumber:"92725837X",loadNumber:"62050",status:"X3",statusDate: new Date(2019,7,7,17,46,0,0) },
    {shipper:"KIK Products",proNumber:"927255192",loadNumber:"20191021-000001",status:"X1",statusDate: new Date(2019,2,16,2,59,0,0) },
    {shipper:"The Home Depot",proNumber:"927250073",loadNumber:"87284211",status:"AF",statusDate: new Date(2019,10,1,6,5,0,0) },
    {shipper:"Wal-mart",proNumber:"92725934X",loadNumber:"30239211",status:"",statusDate: new Date(2019,10,1,6,5,0,0) }
];

var railData = [
    {carrier:"BNSF",trailerNumber:"YRCU 450001",weight:2000,desc:"Empty for repositioning",dateBilled: new Date(2019,5,22,13,31,0,0) },
    {carrier:"FEC",trailerNumber:"RDWY 154009",weight:5000,desc:"Freight All Kinds",dateBilled: new Date(2019,7,7,17,46,0,0) },
    {carrier:"NS",trailerNumber:"RDWY 133090",weight:500,desc:"Acetone, Nitroglycerides",dateBilled: new Date(2019,2,16,2,59,0,0) },
    {carrier:"BNSF",trailerNumber:"YRCU 450978",weight:1000,desc:"Freight All Kinds",dateBilled: new Date(2019,10,1,6,5,0,0) }
];

$(document).ready(function(){
    $("#tbl-data-rail").html(display_header()).append(display_data(null));
});

$("#txt-search-rail").keyup(function(){
    $("#tbl-data-rail").html(display_header()).append(display_data($(this).val()));;
});

function display_header(){
    var html = "<tr>"  
    railHeaders.forEach(function(item){
        html += "<th>" + item + "</th>";
    });
    return html + "</tr>";
}

function display_data(searchStr){
    html = "";
    for(var i = 0;i < railData.length;i++){
        if((searchStr !== null && (railData[i].carrier.toUpperCase().search(searchStr.toUpperCase()) != -1 || railData[i].trailerNumber.toUpperCase().search(searchStr.toUpperCase()) != -1)) || searchStr === null){
            html += "<tr>" + ("<td>" + railData[i].carrier + "</td>") +
            ("<td>" + railData[i].trailerNumber + "</td>") +
            ("<td>" + railData[i].weight + "</td>") +
            ("<td>" + railData[i].desc + "</td>") + 
            ("<td>" + railData[i].dateBilled.getMonth() + "/" + railData[i].dateBilled.getDay() + "/" + railData[i].dateBilled.getFullYear() + " " + railData[i].dateBilled.getHours() + ":" + railData[i].dateBilled.getMinutes() + "</td>") + 
            "</tr>";
        }    
    }
    return html;
}