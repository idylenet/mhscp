

var Meter = function(id, colorSet, dataType, numRows, minValue, maxValue, defaultValue){
	this.init(id, colorSet, dataType, numRows, minValue, maxValue, defaultValue)
}

$.extend(Meter.prototype, {
	
	meterClass: 'meter',
	labelClass: 'meter-label',
	clearClass: 'meter-clear',
	
	init: function(id, colorSet, dataType, numRows, minValue, maxValue, defaultValue){
		this.id = id
		this.labelId = id + '_label'
		this.numRows = numRows
		this.colorSet = colorSet
		this.minValue = minValue
		this.maxValue = maxValue
		this.value = defaultValue
		this.dataType = dataType
		this.table = $('<table></table>').addClass(this.meterClass).attr('id', this.id)
		this.label = $('<div></div>').addClass(this.labelClass).attr('id', this.labelId)
		this.built = false
		this.debug = false

		return this
	},
	
	_applyLabel: function(){
		// since our meters are bottom to top, and our result set comes in top to bottom, 
		// we have to subtract to get to our true highRow td
		highRow = $(this.table.find('td')[((this.numRows-1) - this.highRow)])
		this.label.html(String(this.value))
		highRow.append(this.label)
	},
	
	update: function(value){
		
		value = parseInt(value)
		
		if(this.value > this.maxValue){
					throw RangeError('Error updating: new value is greater than meter high value: (new/high) (' + value + '/' + this.maxValue + ')')
				} 
		
		if(!isNaN(value)) this.value = value

		var html = this.updateTable()
		return html;
	},
	
	updateTable: function(){
		
		if(!this.built)
			this._build()
		
		try {
			
			populateWith = this._buildColorationArray()
			popLength = populateWith.length
		
			if((populateWith.length != (this.table.find('td')).length)){
			
					// console.log((meterThis.table.find('tr')))
					throw Error('Error updating meter ' + meter.id + ': Color set population length is different from meter table length! (set/table): ')
			
			}
		
			this.table.find("td").each(function(i){
				// okee dokie, so set the meterTable row 
				var t = $(this)
				t.attr("class", null) // nullify existing classes
				t.addClass(populateWith[popLength-(i+1)])
			})
		
		} catch (e) {

			if(typeof e == RangeError) {
				console.log('ERROR BUILDING METER: ' + e.message + ': actual value is ' + ratioTotal)
			} else {
				console.log('ERROR BUILDING METER (' + e.class + '): ' + e.message)
			}
			
			console.log(e.stack)
			
			// this.built = false

		}
		
		this._applyLabel()
		
		return this.table
	},
	
	toHtml: function(){

		return this.update()

	},
	
	toJson: function(){
		return { 
			id: this.id,
			numRows: this.numRows,
			colorSet: this.colorSet,
			minValue: this.minValue,
			maxValue: this.maxValue,
			value: this.value,
			built: this.built
			}
	},
	
	_build: function (){

		if(this.built)
				return this.toHtml()

		var tr     = $('<tr></tr>')
		var td     = $('<td></td>')
		var tick   = td.clone().addClass('tick')

		for(var i = 0; i < this.numRows; i++)
		{
			
			var row = tr.clone().append(td.clone())
			this.table.prepend(row)
			
		}

		this.built = true

		return this.table

	},
	
	_buildColorationArray: function(){

		var ratioTotal = 0.0;
		var spread = (this.maxValue - this.minValue)
		var meterCounter = this.minValue
		var currentValue = this.value
		
		var populateWith = []
		var stepSize = spread / this.numRows
		
		var colorSet = this.colorSet
		
		colorLoop: for(var i = 0; i < colorSet.length; i++){

			var set = colorSet[i]
			var howMany = this.numRows * set.ratio
			var colorLowVal = spread * ratioTotal
			ratioTotal += set.ratio
			var colorHighVal = spread * ratioTotal

			if(this.debug) console.log('Meter color range values: l => h: ' + colorLowVal + ' => ' + colorHighVal + ', c: ' + set.class)

			if(ratioTotal > 1) {
				throw RangeError("Meter color ratios sum exceeds 1.0")
			}

			// put an instance row of this class in our population array
			colorRowsLoop: for(var h = 0; h <= howMany; h++) {
				
				var barminValue = colorLowVal + (stepSize * h)
				var barmaxValue = colorLowVal + (stepSize * (h + 1))
				meterCounter += stepSize
				this.highRow = populateWith.length
				
				populateWith.push(set.class)
				
				if(this.debug) console.log('Populating: l=>h: ' + barminValue + ' => ' + barmaxValue + ', v: ' + currentValue + ', mc: ' + meterCounter)
				
				if(currentValue <= meterCounter) {
						
						// we're at the top of our meter, fall out
						// pad the array with empties
						
						for(var p = populateWith.length; p < this.numRows; p++){
							populateWith.push(this.clearClass)
						}
						
						// we're breaking the loop, and we filled the classes, set the ratio and fall out
						ratioTotal = 1;
						break colorLoop;
					
				}
				
			}

		}
		
		if(ratioTotal.toFixed(1) != 1.0){
			throw RangeError("Total meter color ratios not equal to 1.0, is: " + ratioTotal)
		}
		
		return populateWith
		
	}
	
});
