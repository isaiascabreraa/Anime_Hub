'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSeason = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('season', term)
        } else {
            params.delete('season')
        }
        replace(`${pathName}?${params.toString()}`)
    }

    return(
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <select
            value={placeholder}
            onChange={(event) => handleSeason(event.target.value)}
            className="p-2 w-full rounded-md border border-black text-black"
            defaultValue={searchParams.get('season')?.toString()}>
                <option value="winter"> Winter </option>
                <option value="spring"> Spring </option>
                <option value="summer"> Summer </option>
                <option value="autumn"> Autumn </option>
            </select>
        </div>
    );
}