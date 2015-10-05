


// eventually pull data from SEC's EDGAR 
// http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&State=ME
// should check CIK with Yahoo's stock ticker index if has done a 10-q or 10-k in the past 90ish days 
// more info http://www.cornerofberkshireandfairfax.ca/forum/general-discussion/sec-edgar-gurus-%28and-financial-programmers%29/
//anonymous FTP at ftp.sec.gov 
//how to: http://www.jot.fm/issues/issue_2008_09/column2/index.html



// list of publicly traded companies and their CIK code - http://www.sec.gov/edgar/NYU/cik.coleft.c

var maineCompanies = [ 
	{
	"Unum" : "UNM"
	},
	{
		"Cabella" : "CAB"
	}
	
];

// yahoo query url string daily info from jan 1 2010 to oct 4 2015
var stockQueryString = "http://finance.yahoo.com/q/hp?s=" + this.companyTicker + "&a=00&b=1&c=2010&d=09&e=4&f=2015&g=d";
