var LoadError = Error("Failed to load device data")

var Device = function(id, dbId){
	this.init(id, dbId)
}

$.extend(Device.prototype, {
	
	init: function(id, dbId){
		this.id = id
		this.dbId = dbId
		this.data = null

		return this
	},
	
	load: function(callback){
		
		var device = this
		$.ajax({
			url: this.url('json'), 
			success: function(data){ device.data = Utils.parseJson(data); if((typeof callback) == 'function') {callback(device);} }
		})
		
		return this.data
		
	},
	
	render: function(){

		if(this.data == null){
			this.load(this._populate)
		} else {
			this._populate(this)
		}
		
	},
	
	_populate: function(theDevice){
		
		devEl = $('#' + theDevice.id)
		
		data = theDevice.data
		device = data.device
		
		registers = data.data_registers

		if(devEl.length == 0){
			// we need to build the element
		} else {
			// populate within the devEl
			devEl.find('.name').html(device.name)
			devEl.find('.desc').html(device.desc)
			data_regs_el = devEl.find('.data_registers')
			
			for(register in registers){
				regEl = $('<div class="data_register"></div>')
				// SHOULD I CREATE A DataRegister js class? 
				// TODO: CLEANUP THIS WHOLE _populate function using a device reference...ugly
				// regEl.html(register)
			}
			
		}
		
	},
	
	url: function(format){
		var url = '/devices/' + this.dbId
		if(format != null) url += '.' + format
		return url
	}
	
});