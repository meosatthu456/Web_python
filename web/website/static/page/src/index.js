
//function addcart(id){
////    $.get('/home/',function(data){
////        console.log(data)
////        alert("success!!")
////    })
//    $.post('/home/addcart',{'id':id,'csrfmiddlewaretoken':'{{csrf_token}}'},function(data)
//        {
//    });
//}
//'csrfmiddlewaretoken':'{{csrf_token}}'
function addcart(id_){$.post('/home/addcart',{'id':id_},function(data){})}