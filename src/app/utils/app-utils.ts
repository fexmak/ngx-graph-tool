/* public util fset of functions for pubic use*/
/**
 * @author fexmak
 */
export class AppUtils{

    public static makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log('id made: ', result);
        return result;
     }
}