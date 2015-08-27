// Cabella Data Variable - CABStockD3.js
var CAB;
d3.csv("data/cabelaHistoric.csv", function(error, data){
	// assigns Cabella's historical stock info to CAB variable
	CAB = data;
	if(error){
		console.log(error);
	}else{
		var cabStock = d3.select(".graphCAB").selectAll("div.stockPrice").data(CAB).enter().append("div").attr("class", "stockPrice");
		cabStock.style("height", function(d){
		/*  Trying to reverse order of array
			var t = d.reverse()["Close"];
			return  t +"px";
		*/
		return d["Close"] + "px";

		});
			console.log(CAB.length);
	}
});