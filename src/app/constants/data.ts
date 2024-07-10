export interface navbarLinks {
    name : string;
    url : string;
    key: number;
    prefetch?:boolean
}

export const navLinks :Array<navbarLinks> =[
    {
        name: "Home",
        url:"/",
        key:1
    },{
        name: "Services",
        url:"/services",
        key:2
    },{
        name: "Projects",
        url:"/projects",
        key:3
    },{
        name: "About",
        url:"/about",
        key:4
    }
]