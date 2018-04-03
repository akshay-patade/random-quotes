$(document).ready(function() {
	var author;
	var quote;
	var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
				'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
				'silver', 'teal', 'white', 'yellow'];
	
	function getQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp:'jsonp',
			dataType:'jsonp',
			data:
			{
				method: 'getQuote',
				lang: 'en',
				format:'jsonp'
			},

			success: function(response)
			{
				quote=response.quoteText;
				author=response.quoteAuthor;
				$('#quote').text(quote);
				if(author)
				{
					$('#author').text('-----' + author);
				}
				else
				{
					$('author').text('-----' + 'unknown');
				}

			}

		});

	}
	$('.btn-success').on('click', function()
	{
		getQuote();
	});

		$('.btn-primary').on('click', function()
	{
		window.open('https://twitter.com/intent/tweet?text=' + quote);
	});



});