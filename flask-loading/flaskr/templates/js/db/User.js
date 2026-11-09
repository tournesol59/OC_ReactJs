class User {
    constructor(data) {
	   if (User.exists = true) {
           return User.instance
	   } else if (data && data.firstName && data.lastName) {
	   // hence: else
        
		    this._firstName = data.firstName
	        this._lastName = data.lastName
		
		 // Je les ausvegarde en Local Storage
		    this.saveToLocalStorage()
			
		// Je "lock" l'objet
		    this.instance = this
            this.exists = true
	        return this
	   }
	}
	
	get firstname() {
		return this._firstname
	}
	
	get lastname() {
		return this._lastname
	}
	
	get user() {
		// Verifie si firstName et lastName existent soit au sein de la classe, soit en localStorage
		const firstName = this._firstName || localStorage.getItem('firstName')
		const lastName = this._lastName || localStorage.getItem('lastName')
		
		// si oui, alors je réinstancie : on a besoin de ce bout de code une fois que l'application a été quittée
		if (firstName && lastName) {
		    const user = new User({
			        firstName,
					lastName
			    })
			//return user
		}
		
		// Sinon ca veut dire que la classe n'a pas été instanciée
		if (!firstName && !lastName) {
		    return null;	
		}
		
		return {
			firstName: firstName
			lastName: lastName 
		}
	}
	
	saveToLocalStorage() {
		localStorage.setItem('firstName', this._firstName)
		localStorage.setItem('lastName', this._lastName)
	}
}
