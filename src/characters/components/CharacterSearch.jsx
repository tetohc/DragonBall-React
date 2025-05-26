export const CharacterSearch = ({ onSearch, placeholder }) => {
    return (
        <>
            <div className="w-full relative">
                <input
                    type="search" onInput={onSearch} placeholder={placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mb-5 text-base focus:outline-none 
                        focus:ring-2 focus:ring-primary transition-all duration-300 hover:shadow-md"
                />
            </div>
        </>
    );
};
