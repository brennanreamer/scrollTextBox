/*getValue('text',(text) => { //use d3 transition.duration.style()
        d3.select("#test")
        .transition()
        .duration(500)
        .style('down','-10%')
        .on("end",function(){update(text)});
})
function update(text){
    d3.select("#test")
    .style('down','2000%')
    .text(text)
    .transition()
    .duration(500)
    .style('down','20%')
}*/
getValue('height', (h) => {
    let value = 'height:' + h + 'px';
    document.getElementById('container').setAttribute('style', value); 
})
getValue('text',(text) => {
    d3.select('#text').text(text)
})

var $el = $(".container");
function anim() {
  var st = $el.scrollTop();
  var sb = $el.prop("scrollHeight")-$el.outerHeight();
  $el.animate({scrollTop: st<sb/2 ? sb : 0}, 17000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);
