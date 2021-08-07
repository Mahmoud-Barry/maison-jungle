
function Recommandation(){
    const currentMonth = new Date().getMonth;
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    if(! isSpring){
        return( 
            <div>Ce n'est pas le moment de reporter</div>
        )
    }
    else{
        return (
            <div>C'est le printemps , reportez</div>
        )
    }

}
export default Recommandation;