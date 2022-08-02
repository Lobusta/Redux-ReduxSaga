

//action data-type



// ****CONVERTING THIS ACTION TYPE TO ANYACTION FIXED THE ERROR WITH TYPE NEVER
//**ASK THE TEAM LEAD WHY IS IT SO. */
//IT WLL HELP IN THE FUTURE ALOT! 

// export type OrderAction = {
//     type: string
//     payload: {
//         count:number,
//         ordername:string[]
//     }
// }



//action type
export const ActionTypes = {
    ADDORDER: 'ADDORDER'
}

//action creator
export const addOrder = (num:number,oName:string) =>{
    console.log(oName)
    return{
        type:ActionTypes.ADDORDER,
        payload:{
            count:num,
            ordername:oName

        }
    }
}