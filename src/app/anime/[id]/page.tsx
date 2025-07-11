
export default async function AnimeItemPage({ params }: { params: { id: string}}){

    const { id } = await params
    console.log(`El ID es: ${id}`);

    return(
        <div>
            <p className="text-white"> Estas viendo el anime: {id}</p>
        </div>
    );
}