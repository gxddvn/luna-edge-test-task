import React, { useEffect, useRef, useCallback} from "react";
import { DropDownMenuPropsInterface } from "../../../types/types";
import DropDownMenuItem from "./DropDownMenuItem";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../../../api";

const DropDownMenu = React.memo(({ pokemons, choosePokemon, setDebounceValue, setCountOffset, offset }: DropDownMenuPropsInterface) => {
    // const observerRef = useRef<HTMLDivElement | null>(null);
    // const observer = useRef<IntersectionObserver | null>(null);

    const { ref, inView, entry } = useInView();

    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: () => fetchPokemons({ offset }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPageParam + 20
        },
        enabled: !!offset
    })

    useEffect(() => {
        console.log("gg")
        if (entry && inView) {
            fetchNextPage()
        }
    }, [entry])
    
    // const handleIntersect = useCallback(
    //     (entries: IntersectionObserverEntry[]) => {
    //         if (entries[0].isIntersecting) {
    //             setCountOffset((prevOffset) => prevOffset + 20);
    //         }
    //     },
    //     [setCountOffset]
    // );

    // useEffect(() => {
    //     if (!observerRef.current) return;

    //     observer.current = new IntersectionObserver(handleIntersect, { threshold: 1.0 });
    //     observer.current.observe(observerRef.current);

    //     return () => observer.current?.disconnect();
    // }, [handleIntersect]);
    console.log(data)
    return (
        <div className="absolute w-auto max-w-max bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
            <input
                type="text"
                placeholder="Поиск..."
                onChange={(event) => setDebounceValue(event.target.value)}
                className="w-full px-4 py-2 border-b border-gray-200 outline-none"
            />
            <ul className="bg-slate-50 p-2 max-h-48 overflow-y-auto">
                {data?.pages?.flatMap(page => page).map((item) => (
                    <DropDownMenuItem key={item?.name} name={item?.name} choosePokemon={choosePokemon} />
                ))}
                <div ref={ref} className="h-5" />
            </ul>
        </div>
    );
});

export default DropDownMenu;
