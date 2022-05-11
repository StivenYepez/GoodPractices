

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getAllActorsDataByMovieId( movieId: string ) {
        console.log({movieId});
    }

    function getBioActorById( actorId: string ) {
        console.log({actorId });
    }
    interface MovieData{
        cast:        string[],
        description: string, 
        rating:      number,
        title:       string,
    }
    function createMovie({title, description, rating, cast} : MovieData) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

