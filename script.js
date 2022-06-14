$(document).ready(function(){
    $(".form").submit(function(){  
        let name = $("#name1").val();
        let action = $("#action").val();
        let adjective = $("#adjective").val();
        let item = $("#item").val();
        let res = `The ${name} commited a crime because he did ${action} and he was placed into the prison. After that, he used his ${adjective} to escape from the prison with ${item}. ${name} promised that he won't make any crime in the future`;
        
        $(this).parent().find(".container").find(".text").css({"color": "black"});
        $(this).parent().find(".container").find(".text").html(res);  
    });
    $(".form2").submit(function(){
        let width = parseInt($("#imagewidth").val());
        let height = parseInt($("#imageheight").val());
        let ncolor = parseInt($("#numberofcolors").val());
        let l = parseInt(0);
        while(parseInt(ncolor) > 0){
            ncolor /= 2;
            l++;
        }
        l--;
        let res = (parseInt(width) * parseInt(height) * l) / 8 / 1000;
        if(res > 300){
            $(this).parent().find(".container").find(".text").html(`File is ${res}KB which is BAD`); 
            $(this).parent().find(".container").find(".text").css({"color": "red"});
        }
        else{
            $(this).parent().find(".container").find(".text").html(`File is ${res}KB which is OK`);
            $(this).parent().find(".container").find(".text").css({"color": "green"})     
        }
    });
    $("#tom").on('click', function(){
        $(this).parent().parent().find(".form").css({"display" : "none"});

        $(this).parent().find(".container").find(".text").html(' '); 
        $(this).parent().parent().find(".form2").css({"display" : "block"});
        
    });
    $("#mad").on('click', function(){
        $(this).parent().find(".container").find(".text").html(' '); 
        $(this).parent().parent().find(".form").css({"display" : "block"});
        $(this).parent().parent().find(".form2").css({"display" : "none"});
    });
  });