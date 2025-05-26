import { Link } from "react-router-dom"

export const CharacterCard = ({
    id,
    name,
    ki,
    maxKi,
    image,
    race,
    affiliation
}) => {
    return (
        <div className="rounded-lg border p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border-primary hover:border-secondary">
            <figure>
                <img className="w-38 h-64 mx-auto transition-transform duration-500 hover:rotate-3 hover:scale-165 hover:filter hover:drop-shadow-[4px_5px_0px_currentColor] p-6"
                    loading="lazy"
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <div className="mt-2 space-y-1">
                    <p className="text-base">
                        <span className="text-secondary font-semibold">🔥Ki:</span> {ki}
                    </p>

                    <p className="text-base">
                        <span className="text-secondary">💥 Max Ki:</span> {maxKi}
                    </p>

                    <p className="text-base">
                        <span className="text-secondary">🩸Raza:</span> {race}
                    </p>

                    <p className="text-base">
                        <span className="text-secondary">🌑 Afiliación:</span> {affiliation}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <div className="">
                        <Link className="badge badge-primary cursor-pointer hover:badge-secondary font-semibold" to={`/detail/${id}`}>Más ...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
