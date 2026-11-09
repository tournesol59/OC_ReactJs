class PostForm {

    constructor() {
		this.$wrapper = document.createElement('div')
		this.$modelWrapper = document.querySelector('.modal')
	}
	
	onSubmitForm() {
		this.$wrapper
			.querySelector('form')
			.addEventListener('submit', e => {
				e.preventDefault()
				
				const titleInputValue = this
					.$wrapper
					.querySelector('#title')
					.value
					
				const bodyInputValue = this
					.$wrapper
					.querySelector('#body')
					.value
				
				// here a Post object, gemini of the python post class, could be created
				// eg for saving in localStorage
				
				this.$modalWrapper.classList.remove('modal-on')
				this.$modalWrapper.innerHTML = ""
			})
	}
	
	shouldDisplayForm() {
		const user = new User()
		return !user.user
	}

	createForm() {
        const form = `
			<form action="#" method="POST">
			     <div class="form-group">
				      <label class="form-label" for="title">Title</label>
                      <input name="title" id="title" type="text">
                 </div>
				 <div class="form-group">
                      <label class="form-label" for="lastname">Body</label>
					  <input id=" name="body" id="body" type="text">
			     </div>
			<button class="submit-btn" type="submit">Save</button>
  </form>
        `
		this.$wrapper.innerHTML = form
		
		this.$modalWrapper.classList.add('modal-on')
		this.$modalWrapper.appendChild(this.$wrapper)
	}
	
	render() {
		if (this.shouldDisplayForm()) {
		    this.createForm()
            this.onSubmitForm()			
		}
	}
}