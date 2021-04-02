$(() => {
  //window.alert('rectangle');
  // get dom elem
  let $width = $('#width'),

$height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  
  /* calc button click */
  $btnCal.click(() => {

    let w = Number($width.val());
    let h = Number($height.val());

    // get value
  
    //calc
    let p = (w+h)*2,
        a = w * h;
  
    //output
    $perimeter.val(p);
    $area.val(a);
  });  
});
