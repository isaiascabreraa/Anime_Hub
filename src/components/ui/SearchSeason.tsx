
'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {

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
            <label htmlFor="search" className="sr-only text-white"> Search </label>
            
            <select 
            onChange={(event) => handleSeason(event.target.value)}
            className="p-2 w-full rounded-md border text-black bg-white"
            defaultValue={searchParams.get('season')?.toString() || ''}>
                <option value="" disabled hidden> Select a season </option>
                <option value="WINTER"> Winter </option>
                <option value="SPRING"> Spring </option>
                <option value="SUMMER"> Summer </option>
                <option value="FALL"> Fall </option>
            </select>
        </div>
    );
}