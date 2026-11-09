//
class MoviePage {
    constructor(filtermovies) {
        this._movies = movies
		this._maxppage = 2
		this._nummax = ceil(length(this._movies)/this._maxppage)
		this._numpage = 0
		this._numpage_prec = 0
		this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }
	
	createMoviePage(number) {
		// TODO
		
		// direct create the new cards
		const offset = (this._numpage -1)*this._maxppage+1
        
		for (var i=offset; i < this._maxppage; i++) {
			// create as many MovieCards as maxpage and append it to movies-wrapper
		    const template = new MovieCard(Movies[i])
			// try a way to modify the id of the <div> for template
			this.$movieWrapper.appendChild(template)
		}
		this.$movieWrapper.
    }
	
	createButtonEvent() {
	    button_next.addEventListener( e => {
			if (this._numpage_prec < this._nummax) {
				this._numpage_prec = this._numpage
				this._numpage = this._numpage + 1
				this.createMoviePage(this._numpage)
			}
		})
	}
	
}