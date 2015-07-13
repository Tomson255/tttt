function(ext) {
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	ext.isFullscreen = function() {
		return $('body').hasClass('editor') && !Scratch.FlashApp.ASobj.ASisEditMode();
	}
	ext.isEditMode = function() {
		return Scratch.FlashApp.ASobj.ASisEditMode();
	}
	ext.scratchVersion = function() {
		return Scratch.FlashApp.ASobj.ASversion();
	}
	var descriptor = {
		blocks: [
			['b', 'fullscreen mode?', 'isFullscreen'],
			['b', 'edit mode?', 'isEditMode'],
			['-'],
			['r', 'Scratch version', 'scratchVersion']
		]
	};
	ScratchExtensions.register('Interface Detection', descriptor, ext);
})({});
