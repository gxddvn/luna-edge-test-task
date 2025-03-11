import React, { useEffect } from "react";
import { DropDownMenuPropsInterface } from "../../../types/types";
import DropDownMenuItem from "./DropDownMenuItem";
import { useInView } from "react-intersection-observer";


const DropDownMenu = React.memo(({ pokemons, choosePokemon, setDebounceValue, fetchNextPage }: DropDownMenuPropsInterface) => {
    const { ref, inView, entry } = useInView();

    useEffect(() => {
        console.log("gg")
        if (entry && inView) {
            fetchNextPage()
        }
    }, [entry])
    
    console.log(pokemons)
    return (
        <div className="absolute w-auto max-w-max bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
            <input
                type="text"
                placeholder="Поиск..."
                onChange={(event) => setDebounceValue(event.target.value)}
                className="w-full px-4 py-2 border-b border-gray-200 outline-none"
            />
            <ul className="bg-slate-50 p-2 max-h-48 overflow-y-auto">
                {pokemons?.map((item) => (
                    <DropDownMenuItem key={item?.name} name={item?.name} choosePokemon={choosePokemon} />
                ))}
                <div ref={ref} className="h-5" />
            </ul>
        </div>
    );
});

export default DropDownMenu;
