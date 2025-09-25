export interface TaskResponse{
    id:number,
    title:string,
    description:string
    status:"TODO"|"INPROGRESS"|"DONE"
    createdAt:string
}