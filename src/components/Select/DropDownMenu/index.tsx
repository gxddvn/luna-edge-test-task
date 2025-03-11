import React, { useEffect, useRef, useCallback} from "react";
import { DropDownMenuPropsInterface } from "../../../types/types";
import DropDownMenuItem from "./DropDownMenuItem";

const DropDownMenu = React.memo(({ pokemons, choosePokemon, setDebounceValue, setCountOffset, offset }: DropDownMenuPropsInterface) => {
    const observerRef = useRef<HTMLDivElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    
    const handleIntersect = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                setCountOffset((prevOffset) => prevOffset + 20);
            }
        },
        [setCountOffset]
    );

    useEffect(() => {
        if (!observerRef.current) return;

        observer.current = new IntersectionObserver(handleIntersect, { threshold: 1.0 });
        observer.current.observe(observerRef.current);

        return () => observer.current?.disconnect();
    }, [handleIntersect]);

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
                <div ref={observerRef} className="h-5" />
            </ul>
        </div>
    );
});

export default DropDownMenu;
