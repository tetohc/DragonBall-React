
export const CharacterDetail = ({
    character,
    onNavigateBack,
    textButton
}) => {
    return (
        <div className="flex flex-col sm:flex-row mt-5 gap-8 px-8">
            <div className="w-full sm:w-1/3 flex justify-center">
                <img
                    src={character?.image}
                    alt={character.name}
                    className="mx-auto transition-transform duration-500 hover:scale-125 hover:filter hover:drop-shadow-[4px_5px_0px_currentColor] p-6"
                    loading="lazy"
                />
            </div>

            <div className="w-full sm:w-2/3 px-4">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{character.name}</h3>
                <ul className="list-none p-0 mb-3">
                    <li className="p-2 border-b border-secondary"><b className="text-secondary">Ki:</b> {character?.ki}</li>
                    <li className="p-2 border-b border-secondary"><b className="text-secondary">Max Ki:</b> {character?.maxKi}</li>
                    <li className="p-2 border-b border-secondary"><b className="text-secondary">Raza:</b> {character?.race}</li>
                    <li className="p-2 border-b border-secondary"><b className="text-secondary">Género:</b> {character?.gender}</li>
                    <li className="p-2 border-b border-secondary text-justify"><b className="text-secondary">Descripción:</b> {character?.description}</li>
                </ul>
                <button className='btn btn-outline btn-primary' onClick={onNavigateBack}>{textButton}</button>
            </div>
        </div>
    )
}
