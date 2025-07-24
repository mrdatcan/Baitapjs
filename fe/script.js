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
function openModal(title, imageSrc, description) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Optional: Bấm ngoài modal để đóng
window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target == modal) {
    closeModal();
  }
}
