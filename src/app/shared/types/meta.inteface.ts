export interface IItem {
    i: string
    lbl: string
    tag: string
    typ: string
    vis: string
    req: string
    ro: string
    par: string
    evt: string
    prop: string
    list?: string[]
}

export interface IGroup {
    i: string
    lbl: string
    col: string
    flex: string
    typ: string
    ci: string
    ro: string
    items: IItem[]
}

export interface IRow {
    i: string
    vis: string
    fold: string
    lbl: string
    modal: string
    gs: IGroup[]
}

export interface IAction {
    evt: string
    dis: string
    vis: string
    lbl: string
    alt: string
    icon: string
    id: string
}

export interface IMeta {
    i: string
    lbl: string
    modal: string
    rows: IRow[]
    actions: IAction[]
}