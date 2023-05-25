$(function(){
    $('.slides').slick({
        slidesToShow:4,
        dots:true,
        slidesToScroll:2,
        arrows:true,
        responsive:[
          {
            breakpoint:480,
            settings:{
              slidesToShow:1,
            }
          },
          {
            breakpoint:780,
            settings:{
              slidesToShow:2,
            }
          },
          {
            breakpoint:1100,
            settings:{
              slidesToShow:3,
            }
          }
        ]
  
  
      });
      $('.slides2').slick({
        slidesToShow:2,
        dots:true,
        slidesToScroll:2,
        arrows:true
  
  
      });
      $('#slides').click(function(){
        console.log('hello')
    l=document.getElementById("slides")
    ll=  window.getComputedStyle(l).getPropertyValue("width")
    console.log(ll)
    if(ll<490){
      l.classList.remove("slides")
      l.classList.add("slides2")
      console.log(l.classList)

    }
      })
    }
)