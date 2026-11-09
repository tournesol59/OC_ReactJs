class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')
        
      //  this.moviesApi = new MovieApi('/data/new-movie-data.json')
      //  this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

   // async main() {
		main() {
      //  const moviesData = await this.moviesApi.get()
	    const moviesData = {{'actor': 'Arnold', 'picture': 'assets/conan-le-barbare.jpg', 'duration': 180, 'releases_in': 1983, 'synopsis': 'guerrier', 'title': 'Conan'},
		  {'actor': 'Arnold', 'picture': 'assets/last-action-hero.jpg', 'duration': 180, 'releases_in': 1993, 'synopsis': 'science-fiction', 'title': 'Last Action Hero'}}
	  }
      //  const externalMoviesData = await this.externalMoviesApi.get()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'oldApi'))
      //  const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

	    const FullMovies = Movies;
        //const FullMovies = Movies.concat(ExternalMovies)

        const ModalForm = new Form()
        ModalForm.render()

        const Filter = new FilterForm(Movies)
        Filter.render()
/*
        FullMovies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
        })
*/
        moviePaginator = new MoviePage(FullMovies);
		moviePaginator.createMoviePage(1);
	}
}

const app = new App()
app.main()
