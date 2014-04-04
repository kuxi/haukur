/*
 * GET is used to get data from server
 * POST is used to create a new resource on a server
 * PUT is used to modify an existing resource on a server
 *
 * GET /api/v1/teacher
 * GET /api/v1/teacher/<id>
 * POST /api/v1/teacher
 *   {"name": <name>,
 *   "salary": <some number>,
 *   "subject": <some string>,
 *   "school_id": <id of existing school>}
 * PUT /api/v1/teacher/<id>
 *
 * GET /api/v1/school
 * GET /api/v1/school/<id>
 * POST /api/v1/school
 *   {"name": <name>}
 * PUT /api/v1/school/<id>
 *
 *  */
jQuery(function() {
    var container = $("#42");
    console.log("hi");
    $.get("http://haukur.once.is/api/v1/school", function(data){
        for(var i =0; i<data.length;i++){
            var name = data[i].name;
            var geymsla = container.html();
            var listi = geymsla + name + "<br>";
            container.html(listi);
            if(name == "Seljaskoli") {
                break;
            }
        }
        console.log("yeah buddy!");
        console.log(data);
    });
    /*
    $.post("http://haukur.once.is/api/v1/school", {"name": "Seljaskoli"}, function(data){
        console.log(data);
    });
    */
});
