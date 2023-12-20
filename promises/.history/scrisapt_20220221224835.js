// callback hell 
// when we chain lot of asynchronous request

// Request1 - > Request2 - > Request3 - > Request4

/*

$.ajax({
    success : function(){
        $.ajax({
            success : function(){
                $.ajax(){

                }
            }
        })
    }
})

*/