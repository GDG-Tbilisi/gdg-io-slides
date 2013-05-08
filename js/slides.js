LazyLoad.js(['slide_config.js', 'js/jquery-1.9.1.min.js', 'js/modernizr.custom.45394.js',
'js/prettify/prettify.js', 'js/hammer.js', 'js/slide-controller.js', 'js/slide-deck.js', 'js/Chart.min.js'], function() {
    $('[data-chart]').each(function(i, el){
    	var ctx = el.getContext('2d')

    	if(!ctx) return;

    	var chart_type = $(el).data('chart')
    	var data_url = $(el).data('data')

    	var chart = new Chart(ctx)

    	LazyLoad.js([data_url], function() {
    		chart.Line(chartData)
    	})
    }) 
});
