'use strict';
function handleSubmit(){
  // Lấy giá trị của input email và chuyển sang chữ in thường
  const emailValue=document.getElementById('email').value.toLocaleLowerCase();

  // Lấy element của thẻ p hiển thị lỗi 
  const errorEmail=document.getElementById('error-email');

  // Điều kiện để là một email
  const checkEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Dùng match để kiểm tra với email vừa nhập
  const check=emailValue.match(checkEmail);
  // Lấy phần chứa thông tin user
const sectionContent= document.querySelector('#personal-info .section-content');
console.log('check section', sectionContent);

// Lấy element để kiểm soát submit
const submitControl=document.querySelector('.submit-email');

  if(check){
sectionContent.style.display='block';
submitControl.style.display='none';
errorEmail.innerHTML=''
  }else{
    errorEmail.innerHTML='Vui lòng nhập đúng định dạng email'
    errorEmail.style.color='red'
  }
}

const sectionConten=document.querySelectorAll('.section-conten');
console.log(sectionConten);
const viewMore=document.querySelectorAll('.view-more');

// Di chuyển chuột vào để ẩn hiện nút View more
function handleOnMoseOver(element){
  const viewMore=element.querySelector('.view-more')
  viewMore.style.display='block';
}
function handleOnMoseOut(element){
  const viewMore=element.querySelector('.view-more')
  viewMore.style.display='none';

}
function myFunction(event){
  const viewMore=element.querySelector('.view-more')
  viewMore.style.display='block';
}
// Ẩn hiện thông tin khi thực hiện click button
for (let i=0;i<viewMore.length; i++){
  viewMore[i].addEventListener('click', function(){
    if(viewMore[i].innerText == 'View more'){
      sectionConten[i].classList.remove('hidden');
      viewMore[i].innerText ='Less more'
    } else {
      sectionConten[i].classList.add('hidden');
      viewMore[i].innerText ='View more'
    }
  })
}











