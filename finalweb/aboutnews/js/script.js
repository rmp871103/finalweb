$(window).on('load', function(){
    console.log(screen.width);
    $('#loading').hide(1000);
    var $win = $(window),
        $ad = $('#abgne_float_ad').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
        _width = $ad.width(),
        _height = $ad.height(),
       _diffY = screen.height *0.4, _diffX =-1* screen.width*0.8,// 距離右及下方邊距
       //_diffY = 20, _diffX =20, 
       _moveSpeed = 800;	// 移動的速度
    
// 先把 #abgne_float_ad 移動到定點
    $ad.css({
        top: $(document).height(),
        left: $win.width() - _width - _diffX,
        opacity: 1

    });


    console.log(screen.width)
    if (screen.width >=1024){
// 幫網頁加上 scroll 及 resize 事件
	$win.bind('scroll resize', function(){
        var $this = $(this);
		// 控制 #abgne_float_ad 的移動
        $('#abgne_float_ad').css("position", "absolute");
       
       console.log($this.scrollTop())
        $('#abgne_float_ad').css( {top: $this.scrollTop() + $this.height() - _height - _diffY,
        left: $this.scrollLeft() + $this.width() - _width - _diffX}, );
       
        }).scroll();	// 觸發一次 scroll()
    }
    if (screen.width <=1024){
        $('#abgne_float_ad').hide();
    }
   /* $win.bind('scroll resize', function(){
        var $this = $(this);
		// 控制 #abgne_float_ad 的移動
       
        console.log($this.scrollTop())
        $('#abgne_float_ad').css( {top: $this.scrollTop() + $this.height() - _height - _diffY,
        left: $this.scrollLeft() + $this.width() - _width - _diffX}, );
       
    }).scroll();	// 觸發一次 scroll()*/
});
