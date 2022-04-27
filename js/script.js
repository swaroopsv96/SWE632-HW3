function costFunc(){
    event.preventDefault();

    var start = new Date().toISOString().slice(0, 10)
    var end= document.getElementById("date").value;
    var diffInMs   = new Date(end) - new Date(start)
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    var from = document.getElementById("from_loc").value;
    var to = document.getElementById("to_loc").value;
    var from = document.getElementById("date").value;
    var excost = document.getElementById('length').value * document.getElementById('width').value * document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(from != "" && to != "" & date != "") {
        document.getElementById('note').innerHTML = "Click on column header to sort the columns.";
        if (diffInDays < 7){
            if (weight < 10){
                var cost1 = excost + weight * 1.5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 1.5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 1.5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
//                 document.getElementById("sort").classList.remove('hide');
            }
            else if (weight >= 10 & weight < 25){
                var cost1 = excost + weight * 2.5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 2.5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 2.5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
//                 document.getElementById("sort").classList.remove('hide');
            }
            else {
                var cost1 = excost + weight * 5;
                var ncost1 = cost1 + 8.95;
                var pcost1 = cost1 + 10.95;
                var cost2 = excost + weight * 5;
                var ncost2 = cost2 + 6.75;
                var pcost2 = cost2 + 9.25;
                var cost3 = excost + weight * 5;
                var ncost3 = cost3 + 7.25;
                var pcost3 = cost3 + 11.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
//                 document.getElementById("sort").classList.remove('hide');
             
            }
        }
        else {
            if (weight < 10){
                var cost1 = excost + weight * 1;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 1;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 1;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');               
                document.getElementById("email_form").style.display = "block";
//                 document.getElementById("sort").classList.remove('hide');
            }
            else if (weight >= 10 & weight < 25){
                var cost1 = excost + weight * 2;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 2;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 2;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');                 
                document.getElementById("email_form").style.display = "block";

//                 document.getElementById("sort").classList.remove('hide');
                
            }
            else {
                var cost1 = excost + weight * 3;
                var ncost1 = cost1 + 6.95;
                var pcost1 = cost1 + 8.95;
                var cost2 = excost + weight * 3;
                var ncost2 = cost2 + 4.75;
                var pcost2 = cost2 + 6.25;
                var cost3 = excost + weight * 3;
                var ncost3 = cost3 + 5.25;
                var pcost3 = cost3 + 8.75;
                document.getElementById('uspsprioritycost').innerHTML = "<b>"+"$" + ncost1 + "</b>" ;
                document.getElementById('uspspriorityexpresscost').innerHTML ="<b>" + "$" + pcost1 + "</b>";
                document.getElementById('fedxprioritycost').innerHTML = "<b>"+ "$" + ncost2+ "</b>";
                document.getElementById('fedxpriorityexpresscost').innerHTML = "<b>"+"$" + pcost2 + "</b>";
                document.getElementById('upsprioritycost').innerHTML ="<b>" +"$" + ncost3 + "</b>";
                document.getElementById('upspriorityexpresscost').innerHTML ="<b>" +"$" + pcost3+ "</b>";
                var estimated = new Date(end).getTime() + (2 * 24 * 60 * 60 * 1000);
                var estimatedexpress = new Date(end).getTime() + (1 * 24 * 60 * 60 * 1000);
                document.getElementById('uspspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('uspspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('fedxpriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('fedxpriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById('upspriorityeta').innerHTML = new Date(estimated).toJSON().slice(0,10);
                document.getElementById('upspriorityexpresseta').innerHTML = new Date(estimatedexpress).toJSON().slice(0,10);
                document.getElementById("cost-tables").classList.remove('hide');
                document.getElementById("email_form").style.display = "block";
//                 document.getElementById("sort").classList.remove('hide');
            }

        }
    }
}  
