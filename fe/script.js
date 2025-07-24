const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length
console.log(count) 

next.addEventListener('click', function(event) {
    event.preventDefault()
    if(count==1)
    {
        // XEM HẾT BÌNH LUẬN
        return false
    }
    translateY += -400
comment.style.tranform = 'tranlateY(${translateY}px)'
    count--
})

prev.addEventListener('click',function (event)

{
    event.preventDefault()
    if(count ==3){
        //xem hết bl
        return false
    }
    translateY += 400
comment.style.tranform = 'tranlateY(${translateY}px)'
    count++
})