'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('season', term)
        } else {
            params.delete('season')
        }
        replace(`${pathName}?${params.toString()}`)
    }

    return(
        <div className="relative flex flex-1 flex-shrink-0 bg-blue-200">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input 
            onChange={(event) => handleSearch(event.target.value)}
            className="peer block w-full rounded-md border 
            border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            defaultValue={searchParams.get('season')?.toString()}>
            </input>
        </div>
    );
}