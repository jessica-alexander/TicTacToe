$(function(){

var x = 0;

$('td').on('click', function() {
  if (x % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O')
  }
x++;

winner();
})

function winner(){
  if ($('.1').text()==='O' && $('.2').text()==='O'&& $('.3').text()==='O'||
    ($('.1').text()==='X' && $('.2').text()==='X'&& $('.3').text()==='X' ||
    ($('.1').text()==='O' && $('.4').text()==='O'&& $('.7').text()==='O' ||
    ($('.1').text()==='X' && $('.4').text()==='X'&& $('.7').text()==='X' ||
    ($('.1').text()==='O' && $('.5').text()==='O'&& $('.9').text()==='O' ||
    ($('.1').text()==='X' && $('.5').text()==='X'&& $('.9').text()==='X' ||
    ($('.7').text()==='O' && $('.8').text()==='O'&& $('.9').text()==='O' ||
    ($('.7').text()==='X' && $('.8').text()==='X'&& $('.9').text()==='X' ||
    ($('.3').text()==='O' && $('.6').text()==='O'&& $('.9').text()==='O' ||
    ($('.3').text()==='X' && $('.6').text()==='X'&& $('.9').text()==='X'))))))))))
    {
      if (x % 2 === 0) {
      alert('Game Over \nX is the winner');
      } else {
      alert('Game Over \nX is the winner');
      }
     
    }
  }








});
