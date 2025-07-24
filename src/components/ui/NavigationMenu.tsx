
export default function NavigationMenu() {

    return(

        <div className="p-5 grid grid-cols-6 grid-rows-2 gap-x-5 content-center text-center bg-slate-800">

            <label>Search:</label>
            <label>Genres:</label>
            <label>Season:</label>
            <label>Year:</label>
            <label>Media:</label>
            <label>Airing Status:</label>

            {/* Search */}
            <input type='text' className="p-2 w-full rounded-md border text-black bg-slate-500" />
            

            {/* Genres */}
            <select className="text-center rounded-md text-black bg-slate-500">
                <option value="" disabled hidden> Select a genre </option>
                <option value="Action"> Action </option>
                <option value="Adventure"> Adventure </option>
                <option value="Comedy"> Comedy </option>
                <option value="Drama"> Drama </option>
                <option value="Ecchi"> Ecchi </option>
                <option value="Fantasy"> Fantasy </option>
                <option value="Horror"> Horror </option>
                <option value="Mahou Shojo"> Mahou Shojo </option>
                <option value="Mecha"> Mecha </option>
                <option value="Music"> Music </option>
                <option value="Mystery"> Mystery </option>
                <option value="Psychological"> Psychological </option>
                <option value="Romance"> Romance </option>
                <option value="Sci-Fi "> Sci-Fi </option>
                <option value="Slice of Life"> Slice of Life </option>
                <option value="Sports"> Sports </option>
                <option value="Supernatural"> Supernatural </option>
                <option value="Thriller"> Thriller </option>
            </select>

            {/* Season */}
            <select className="text-center w-full rounded-md border text-black bg-slate-500">
                <option value="" disabled hidden> Select a season </option>
                <option value="WINTER"> Winter </option>
                <option value="SPRING"> Spring </option>
                <option value="SUMMER"> Summer </option>
                <option value="FALL"> Fall </option>
            </select>
     
            {/* Year */}
            <input type='text' className="p-3 w-full rounded-md border text-black bg-slate-500" />

            {/* Media */}
            <select className="text-center rounded-md text-black bg-slate-500">
                <option value="" disabled hidden> Select a media </option>
                <option value="TV Show"> TV Show </option>
                <option value="Movie"> Movie </option>
                <option value="TV Short"> TV Short </option>
                <option value="Special"> Special </option>
                <option value="OVA"> OVA </option>
                <option value="ONA"> ONA </option>
                <option value="Music"> Music </option>
            </select>
            
            {/* Status */}
            <select className="text-center rounded-md text-black bg-slate-500">
                <option value="" disabled hidden> Select a status </option>
                <option value="Airing"> Airing </option>
                <option value="Finished"> Finished </option>
                <option value="Not Yet Aired"> Not Yet Aired </option>
                <option value="Cancelled"> Cancelled </option>
            </select>
        </div>
        
    );

}