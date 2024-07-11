export interface navbarLinks {
    name : string;
    url : string;
    key: number;
    prefetch?:boolean
}

export interface Project {
    id:number,
        title :string,
        description :string,
        message : string,
        link : string,
        github:string
}

export interface ProjectGroup {
    id:number,
    groupTitle :string,
    data : Array<Project>
}

export interface shortSkills {
    id:number,
    name:string
}

export interface SkillData  {
    id:number,
    name:string,
    prog: string,
    progress : number
}

export interface AllSkills {
    id:number,
    groupTitle : string,
    data :Array<SkillData>
}



