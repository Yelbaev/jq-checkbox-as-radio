(function($){
	$.fn.radio = function(){
		var s = this;
		for(var i =0; i < s.length; i++ ) {
			$(s[i]).on( 'change', function(){
				if( $( this ).prop( 'checked' ) ) {
					$( s ).not( this ).prop('checked', false).trigger('change');
					$( this ).prop( 'checked', 'checked' ).trigger('change');
				}
				else {
					$( this ).prop('checked', false).trigger('change');
				}
			});
		}
		return this;
	};
})(jQuery);
