import { BookHeart, SquarePen, BookOpenText, LucideProps } from 'lucide-react'
import React, {ForwardRefExoticComponent, RefAttributes} from 'react'

type nav_btnT = {
    label : string,
    logo : ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    url : string
}

export const nav_btns : nav_btnT[] = [
    {
        label : 'You',
        logo : BookHeart,
        url : '#'
    },
    {
        label : 'Express',
        logo : SquarePen,
        url : '#'
    },
    {
        label : 'Discovery',
        logo : BookOpenText,
        url : '#'
    },
]